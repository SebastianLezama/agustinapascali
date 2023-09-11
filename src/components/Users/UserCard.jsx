import React, { useRef, useState } from "react";
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  IconButton,
  List,
  ListItem,
  SimpleGrid,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { EditIcon, EmailIcon, ViewIcon } from "@chakra-ui/icons";
import Modal from "../Modal";

const UserCard = ({ users }) => {
  const modalRef = useRef();
  const [showModal, setShowModal] = useState(false);

  const onEditClick = () => {
    setShowModal(true);
  };

  const closeModal = (e) => {
    if (modalRef.current === e.target) setShowModal(false);
  };
  return (
    <>
      <Box m={"40px"}>
        <SimpleGrid spacing={8} minChildWidth="280px">
          {users &&
            users.map((e) => (
              <Card
                key={e.name}
                borderTop="8px"
                borderColor="teal.400"
                bg="gray.300"
              >
                <CardHeader>
                  <Flex alignItems={"center"}>
                    {/* <Box w="50px" h="50px">
                      AVtr
                    </Box> */}
                    <Box>
                      <Heading as="h3" size="md">
                        {e.name}
                      </Heading>
                    </Box>
                    <Spacer />
                    <Box>
                      <IconButton
                        variant={"outline"}
                        icon={<ViewIcon boxSize={6} />}
                        size={"sm"}
                        px="5px"
                        mx="10px"
                      />
                      <IconButton
                        aria-label="Edit"
                        variant={"outline"}
                        size={"sm"}
                        px="5px"
                        // boxSize={6}
                        // cursor={"pointer"}
                        // _hover={{ color: "blue.500" }}
                        onClick={onEditClick}
                        icon={<EditIcon boxSize={6} />}
                      />
                    </Box>
                  </Flex>
                </CardHeader>
                <CardBody>
                  <Flex>
                    <List>
                      <ListItem>Habitos a aumentar:</ListItem>
                      {e.habitos_aumentar_1 && (
                        <ListItem>1. {e.habitos_aumentar_1}</ListItem>
                      )}
                      {e.habitos_aumentar_2 && (
                        <ListItem>2. {e.habitos_aumentar_2}</ListItem>
                      )}
                      {e.habitos_aumentar_3 && (
                        <ListItem>3. {e.habitos_aumentar_3}</ListItem>
                      )}
                    </List>
                    <Spacer />
                    <List>
                      <ListItem>Habitos a disminuir:</ListItem>
                      {e.habitos_disminuir_1 && (
                        <ListItem>1. {e.habitos_disminuir_1}</ListItem>
                      )}
                      {e.habitos_disminuir_2 && (
                        <ListItem>2. {e.habitos_disminuir_2}</ListItem>
                      )}
                      {e.habitos_disminuir_3 && (
                        <ListItem>3. {e.habitos_disminuir_3}</ListItem>
                      )}
                    </List>
                  </Flex>
                </CardBody>
                <CardFooter
                  // justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <EmailIcon />
                  <Text pl="20px">{e.email}</Text>
                </CardFooter>
              </Card>
            ))}
        </SimpleGrid>
      </Box>
      <Modal
        showModal={showModal}
        modalRef={modalRef}
        closeModal={closeModal}
        users={users}
      />
    </>
  );
};

export default UserCard;
