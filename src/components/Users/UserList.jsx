import { useEffect, useState } from "react";
import { supabase } from "../SupabaseClient";
import UserCard from "./UserCard";

const Users = () => {
  // TODO Store users in local storage
  // TODO Make form to init user Log, with email
  const [users, setUsers] = useState([]);

  async function getUsers() {
    try {
      const { data, error } = await supabase.from("Users").select("*");
      // console.log("Error: ", error);
      if (error) throw error;
      const sortedData = data.sort((a, b) => (a.name > b.name ? 1 : -1));
      if (data != null) setUsers(sortedData);
      // console.log(data);
    } catch (error) {
      alert(error.message);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return <UserCard users={users} />;
};

export default Users;
