import {
  Box,
  Button,
  chakra,
  Container,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={12}
      h={12}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
}

const text = "Hola! Te contacto desde tu pagina para una consulta. Mi nombre es "

export default function SmallCentered() {
  return (
    <Box
      bg={useColorModeValue("gray.100", "gray.900")}
      // color={useColorModeValue("gray.300", "gray.800")}
      pt={"25px"}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text>© 2023 s.a.l.dev</Text>
          <Stack direction={"row"} spacing={6} align={{ base: "center", md: "center" }}>
            {/* <SocialButton label={"Twitter"} href={"#"}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={"YouTube"} href={"#"}>
              <FaYoutube />
            </SocialButton> */}
            <Button
                  as={Link}
                  rightIcon={<Image alt='whatsapp' src={"https://icongr.am/fontawesome/whatsapp.svg?size=30&color=25d366" } />}
                  isExternal
                  href={`https://wa.me/5491121721711?text=${encodeURIComponent(text)}`}
                  bgColor={useColorModeValue("blackAlpha.200", "whiteAlpha.200")}
                  w={"fit-content"}
                  // minW={"220px"}
                  _hover={{ textDecoration: "None" }}
                >
                  Contactame por WhatsApp
                </Button>
                {/* <SocialButton label={"Whatsapp"} href={`https://wa.me/5491121721711?text=${encodeURIComponent(text)}`}>Contactame por Whatsapp<Image alt='whatsapp' color={"blackAlpha.300"} src={"https://icongr.am/fontawesome/whatsapp.svg?size=30&color=ffffff" } /></SocialButton> */}
            <SocialButton label={"Instagram"} href={"https://www.instagram.com/agustinapascali/"} target={"_blank"}>
              <FaInstagram />
            </SocialButton>
            <SocialButton label={"Linkedin"} href={"https://ar.linkedin.com/in/agustina-pascali-175b90a5"} target={"_blank"}>
              <FaLinkedin />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
