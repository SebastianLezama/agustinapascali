import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
// import { getUserByEmail } from "../components/SupabaseClient";
import { getLocalStorage } from "./LogContext";
import { gapi } from "gapi-script";
// import { gapi } from "gapi-script";

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
  const YOUTUBE_ID = import.meta.env.VITE_YOUTUBE_ID_SAL;
  const API_KEY = import.meta.env.VITE_G_API_KEY_SAL;
  const YT_SECRET = import.meta.env.VITE_YOUTUBE_SECRET_SAL
  const CLIENT_ID = import.meta.env.VITE_CLIENT_ID_SAL

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

  // const getListFromYouTube = async (clientID, apiKey) => {
  //   async function initiate() {
  //     gapi.auth2.init({client_id: clientID,
  //       fetch_basic_profile: true,
  //       scope: 'profile'})
  //     // return await gapi.auth2.getAuthInstance()
  //     // .signIn({scope: "https://www.googleapis.com/auth/youtube.readonly"})
  //     // .then(function() { console.log("Sign-in successful"); },
  //           // function(err) { console.error("Error signing in", err); })
  //     .then(function() {gapi.client.setApiKey(apiKey);
  //       return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
  //       .then(function() { console.log("GAPI client loaded for API"); },
  //       function(err) { console.error("Error loading GAPI client for API", err); });}
  //       )
            
          // }

    // async function initiate() {
    //   // Initialize the YouTube API client with your API key
    //   await gapi.client.init({
    //     apiKey: apiKey, // Replace with your API key
    //     discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest'],
    //   }).then(() => {
    //     // Fetch the playlist items from your channel
    //     gapi.client.youtube.playlistItems.list({
    //       part: [
    //         "snippet,contentDetails"
    //       ],
    //       "channelId": "UCDOzscub1J9Raph0TOkuFAw",
    //       "maxResults": 25,
    //       "channelId": clientID,
    //       // playlistId: 'UCDOzscub1J9Raph0TOkuFAw', // Replace with your playlist ID
    //       // maxResults: 10, // Adjust the number of videos you want to fetch
    //     }).then(response => {
    //       console.log(response)
    //       const videos = response.result.items.map(item => ({
    //         title: item.snippet.title,
    //         videoId: item.snippet.resourceId.videoId,
    //       }));
    //       console.log(videos)
    //       // setVideos(videos);
    //     }).catch(error => {
    //       console.error('Error fetching playlist:', error);
    //     });})
    //   ;


    // async function execute() {
    //   return await gapi.client.youtube.playlists.list({
    //     "part": [
    //       "snippet,contentDetails"
    //     ],
    //     "channelId": "UCDOzscub1J9Raph0TOkuFAw",
    //     "maxResults": 25
    //   })
    //       .then(function(response) {
    //               // Handle the results here (response.result has the parsed body).
    //               console.log("Response", response);
    //             },
    //             function(err) { console.error("Execute error", err); });
    // }
    // gapi.load("client:auth2", initiate)
    // function() {
      // gapi.auth2.init({client_id: clientID});
    // });
    

    // gapi.load('client', initiate)
  // };

  useEffect(() => {
    if (calendarEvents[0] === undefined) {
      console.log("useEff if not calendarEvents");
      const events = getEventsFromCalendar(CALENDAR_ID, API_KEY);
      setCalendarEvents(events);
    }
    // localStorage.setItem("calendarEvents", JSON.stringify(events));

    // getListFromYouTube(CLIENT_ID, API_KEY)
  }, []);

  return { calendarEvents };
}

