import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import { Grid, GridItem, Heading } from "@chakra-ui/react";
import SideBar from "./SideBar";



const Layout = () => {
  return (
    // <Grid templateColumns="repeat(10, 1fr)">
    <>
      {/* <SideBar /> */}
      <GridItem
        as="main"
        colSpan={{ base: 10, md: 9, lg: 8, xl: 8 }}
        // pt="30px"
        // pl="30px"
        // pr="30px"
      >
        <NavBar />
        <GridItem
        // paddingBottom={{ base: "15px", md: "20px", lg: "10px" }}
        // paddingTop={{ base: "15px", md: "20px", lg: "20px" }}
        // paddingRight={{ base: "25px", md: "35px" }}
        // paddingLeft={{ base: "25px", md: "35px" }}
        >
          <Outlet />
        </GridItem>
      </GridItem>
      {/* </Grid> */}
    </>
  );
};

export default Layout;
