import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
  HStack,
  Spacer,
} from "@chakra-ui/react";

const Testimonial = ({ children }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }) => {
  return (
    <Heading as={"h3"} fontSize={"xl"}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }) => {
  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize={"sm"}
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({ src, name, title }) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"}>
      <iframe src={src} title={name} />
      <Stack spacing={-1} align={"center"}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={"sm"} color={useColorModeValue("gray.600", "gray.400")}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

const Media = () => {
  const videos = [
    {'heading': 'Meditacion 1', 
    'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.', 
    'avatar': "https://www.youtube.com/embed/TNGGLjAVuiE", 
    'name': 'Titulo 1', 
    'title': 'texto 1'}, 
    {'heading': 'Meditacion 2', 
    'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.', 
    'avatar': "https://www.youtube.com/embed/TNGGLjAVuiE", 
    'name': 'Titulo2 ', 
    'title': 'texto 2'}, 
    {'heading': 'Meditacion 3', 
    'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.', 
    'avatar': "https://www.youtube.com/embed/TNGGLjAVuiE", 
    'name': 'Titulo 3', 
    'title': 'texto 3'}, 
  ]
  
  return (
    <Container maxW={{ base: null, lg: "6xl", xl: "8xl" }} py={12} h={"90vh"}>
      <Box bg={useColorModeValue("gray.100", "gray.700")} borderRadius={"5px"}>
        <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
          <HStack spacing={0} align={"center"}>
            
          </HStack>
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={{ base: 10, md: 4, lg: 10 }}
          >
            {videos.map((e)=>{
              return <Testimonial key={e.heading}>
                <TestimonialContent>
                  <TestimonialHeading>{e.heading}</TestimonialHeading>
                  <TestimonialText>
                    {e.text}
                  </TestimonialText>
                </TestimonialContent>
                <TestimonialAvatar
                  src={
                    e.avatar
                  }
                  name={e.name}
                  title={e.title}
                  />
              </Testimonial>
            })}
            
          </Stack>
        </Container>
      </Box>
    </Container>
  );
}

export default Media