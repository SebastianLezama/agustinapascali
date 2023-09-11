import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
// import { getUserByEmail } from "../components/SupabaseClient";
import { getLocalStorage } from "./LogContext";

const adminContext = createContext();

export const AdminProvider = ({ children }) => {
  const admin = useProvideAdmin();
  return (
    <adminContext.Provider value={admin}>{children}</adminContext.Provider>
  );
};

export const useAdminData = () => {
  return useContext(adminContext);
};

function useProvideAdmin() {
  const [calendarEvents, setCalendarEvents] = useState(
    getLocalStorage("calendarEvents")
  );

  const auth = useAuth();

  const CALENDAR_ID = import.meta.env.VITE_CALENDAR_ID_SAL;
  const API_KEY = import.meta.env.VITE_G_API_KEY_SAL;

  const getEventsFromCalendar = async (calendarID, apiKey) => {
    async function initiate() {
      await gapi.client
        .init({
          apiKey: apiKey,
        })
        .then(async function() {
          return await gapi.client.request({
            path: `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events/`,
            params: {
              timeMin: new Date("03-01-2023").toISOString(),
              showDeleted: false,
              singleEvents: true,
              maxResults: 300,
              orderBy: "startTime",
            },
          });
        })
        .then(
          (response) => {
            const events = response.result.items.map((e) => ({
              email: e.attendees ? e.attendees[0].email : null,
              title: e.summary,
              id: e.id,
              start: e.start.dateTime || e.start.date,
              end: e.end.dateTime || e.end.date,
              allDay: e.start.dateTime ? false : true,
              recurringEventId: e.recurringEventId,
              color: e.colorId,
              rrule: e.recurrence ? e.recurrence[0] : null,
            }));
            setCalendarEvents(events);
            localStorage.setItem("calendarEvents", JSON.stringify(events));
            return events;
          },
          function(err) {
            return [false, err];
          }
        );
    }
    await gapi.load("client", initiate);
  };

  useEffect(() => {
    if (calendarEvents[0] === undefined) {
      console.log("useEff if not calendarEvents");
      const events = getEventsFromCalendar(CALENDAR_ID, API_KEY);
      setCalendarEvents(events);
    }
    // localStorage.setItem("calendarEvents", JSON.stringify(events));
  }, []);

  return { calendarEvents };
}
