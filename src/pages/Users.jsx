import { useEffect, useState } from "react";
import { supabase } from "../components/SupabaseClient";
import UserForm from "../components/Users/UserForm";
import UserList from "../components/Users/UserList";
import "../components/Users/Users.css";

// Show buttons for the users list and user form
const Users = () => {
  return <UserList />;
};

export default Users;
