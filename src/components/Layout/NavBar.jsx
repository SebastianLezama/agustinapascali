import React from "react";
import { supabase } from "../SupabaseClient";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
// import { Box, Button, Flex, HStack, Heading, Spacer } from "@chakra-ui/react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Heading,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

// const Links = ["HANASAKI 花咲", "Registro Diario", "Meditaciones", "Team"];
const Links = ["Meditaciones", "Ejercicios"];
const MenuLinks = ["Registro Diario", "Meditaciones", "Ejercicios"];

const hRefTernary = (key) => {
  if (key === "Registro Diario") {
    return "log";
  }
  if (key === "Meditaciones") {
    return "audio";
  }
  if (key === "Ejercicios") {
    return "exercise";
  }
  if (key === "Mi perfil") {
    return "profile";
  } else {
    return "/";
  }
};

const NavLinkss = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    width={"100%"}
    // textColor="white"
    _hover={{
      textDecoration: "none",
      textColor: "white",
      bg: useColorModeValue("teal.500", "gray.700"),
    }}
    href={hRefTernary(children)}
  >
    {children}
  </Link>
);

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const { admin, isLoggedIn, user } = useAuth();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.600")} px={4} >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <NavLinkss to={admin === false ? "/" : "/admin"}>
              Agustina Pascali
            </NavLinkss>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLinkss key={link}>{link}</NavLinkss>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                // rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                // minW={0}
                _hover={{
                  textDecoration: "none",
                  textColor: "white",
                  // bg: useColorModeValue("teal.500", "gray.700"),
                }}
              >
                {user && user[0]?.name}
                {/* <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                /> */}
              </MenuButton>
              <MenuList zIndex={"100"} textColor={"black"}>
                {MenuLinks.map((link) => (
                  <MenuItem key={link} padding={0}>
                    <Link
                      href={hRefTernary(link)}
                      width={"100%"}
                      py={"6px"}
                      px={"12px"}
                      _hover={{
                        textDecoration: "none",
                        // textColor: "white",
                        // bg: useColorModeValue("teal.500", "gray.700"),
                      }}
                    >
                      {link}
                    </Link>
                  </MenuItem>
                ))}
                <MenuDivider />
                <MenuItem padding={0}>
                <Link
                      href={"profile"}
                      width={"100%"}
                      py={"6px"}
                      px={"12px"}
                      _hover={{
                        textDecoration: "none",
                        // textColor: "white",
                        // bg: useColorModeValue("teal.500", "gray.700"),
                      }}
                      >
                        Mi perfil
                        </Link>
                </MenuItem>
              </MenuList>
              {isLoggedIn ? (
                <Button
                  colorScheme="blue"
                  onClick={() => {
                    supabase.auth.signOut();
                    localStorage.clear();
                  }}
                  ml={"20px"}
                >
                  Log Out
                </Button>
              ) : (
                <Button
                  colorScheme="blue"
                  onClick={() => navigate("/login")}
                  ml={"20px"}
                >
                  Sign In
                </Button>
              )}
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      {/* <Box p={4}>Main Content Here</Box> */}
    </>
    // <Flex as="nav" gap="10px" alignItems="center" mb="40px">
    //   <Spacer />
    //   <HStack spacing="40px">
    //     {/* {auth?.admin === null ? (
    //       <Box className="header" onClick={() => navigate("/log")}>
    //         LOG
    //       </Box>
    //     ) : (
    //       <Box className="header" onClick={() => navigate("/admin/users")}>
    //         USERS
    //       </Box>
    //     )} */}

    //   </HStack>
    // </Flex>
  );
};

export default NavBar;
