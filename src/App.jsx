import "./App.css";
import Calendar from "./pages/calendar";
import { Routes, Route } from "react-router-dom";
import LogIn from "./pages/LogIn";
import Users from "./pages/Users";
import Layout from "./components/Layout/Layout";
import MockLog from "./pages/MockLog";
import Log from "./pages/Log";
import Home from "./pages/Home";
import Invite from "./pages/Invite";
import AdminRoute from "./components/AdminRoute";
import Profile from "./pages/Profile";
import LoggedInRoute from "./components/LoggedInRoute";
import Media from "./pages/media";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          {/*  public in routes */}
          <Route path="login" element={<LogIn />} />
          <Route path="/" element={<Home />} />
          {/*  logged in routes */}
          <Route element={<LoggedInRoute />}>
            <Route path="log" element={<Log />} />
            <Route path="profile" element={<Profile />} />
            <Route path="audio" element={<Media />} />
          </Route>

          {/*  admin in routes */}
          <Route element={<AdminRoute />}>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="admin" element={<Calendar />} />
            <Route path="users" element={<Users />} />
            <Route path="invite" element={<Invite />} />
            <Route path="mock" element={<MockLog />} />
          </Route>
        </Route>
      </Routes>
  );
}

export default App;
