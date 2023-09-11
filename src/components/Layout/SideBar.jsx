import {
  Box,
  GridItem,
  Heading,
  List,
  ListIcon,
  ListItem,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../Context/AuthContext";
import { NavLink } from "react-router-dom";
import { CalendarIcon, EmailIcon, InfoIcon } from "@chakra-ui/icons";

const SideBar = () => {
  const { admin } = useAuth();
  const [loading, setLoading] = useState(true);

  const ifAdmin = () => {
    if (admin) {
      setLoading(false);
    }
  };

  useEffect(() => {
    ifAdmin();

    // return () => {
    //   second;
    // };
  }, [admin]);

  return (
    <GridItem
      as="aside"
      colSpan={{ base: 10, md: 1, lg: 2, xl: 2 }}
      bg="purple.300"
      minHeight="100vh"
      p={{ base: "0px", md: "20px", lg: "30px" }}
    >
      <VStack>
        <List spacing={5}>
          <ListItem>
            <Heading>
              <NavLink to={admin === false ? "/" : "/admin"}>
                HANASAKI 花咲
              </NavLink>
            </Heading>
          </ListItem>
        </List>
        <List spacing={5} fontSize="1.2em">
          <>
            {loading &&
              (admin === false ? (
                <ListItem>
                  <NavLink className="header" to={"/log"}>
                    <ListIcon as={CalendarIcon} />
                    Registro de Emociones
                  </NavLink>
                </ListItem>
              ) : (
                <>
                  <ListItem>
                    <NavLink to={"/admin/users"}>
                      <ListIcon as={InfoIcon} />
                      USERS
                    </NavLink>
                  </ListItem>
                  <ListItem>
                    <NavLink to={"/admin/calendar"}>
                      <ListIcon as={CalendarIcon} />
                      CALENDAR
                    </NavLink>
                  </ListItem>
                  <ListItem>
                    <NavLink to={"/admin/invite"}>
                      <ListIcon as={EmailIcon} />
                      INVITE
                    </NavLink>
                  </ListItem>
                </>
              ))}
          </>
        </List>
      </VStack>
    </GridItem>
  );
};

export default SideBar;
