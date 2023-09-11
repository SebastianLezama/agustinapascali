import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from "react-icons/io5";
import { ReactElement } from "react";

// interface FeatureProps {
//   text: string;
//   iconBg: string;
//   icon?: ReactElement;
// }

const text =
  "Soy Agustina, psicóloga clínica especializada en terapias de tercera generación (MN N° 68460).    Me gradué en la Universidad Favaloro, y luego continué mi formación académica en Fundación FORO, dónde me especialicé en los siguientes modelos psicoterapéuticos: DBT (Terapia Dialéctico Comportamental), ACT (Terapia de Aceptación y Compromiso) y Mindfulness. Éstos modelos son emergentes de la tradición conductual, y cuentan con soporte empírico.";

const text2 =
  "Creé éste espacio para ofrecer herramientas específicas, complementarias al trabajo en terapia: regístros, meditaciones, ejercicios y más.";

const text3 =
  "Actualmente brindo mi servicio de psicoterapia de manera remota para todo el mundo.";

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function Features() {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.600")} px={4} py={"55px"}>
      <Container maxW={"8xl"} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Text
              textTransform={"uppercase"}
              color={"blue.400"}
              fontWeight={600}
              fontSize={"sm"}
              bg={useColorModeValue("blue.50", "blue.900")}
              p={2}
              alignSelf={"flex-start"}
              rounded={"md"}
            >
              Mi Historia
            </Text>
            <Heading>Agustina Pascali</Heading>
            <Text color={"gray.800"} fontSize={"lg"}>
              {text}
            </Text>
            <Text color={"gray.800"} fontSize={"lg"}>
              {text2}
            </Text>
            <Text color={"gray.800"} fontSize={"lg"}>
              {text3}
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue("gray.100", "gray.700")}
                />
              }
            >
              <Feature
                icon={
                  <Icon
                    as={IoAnalyticsSharp}
                    color={"yellow.500"}
                    w={5}
                    h={5}
                  />
                }
                iconBg={useColorModeValue("yellow.100", "yellow.900")}
                text={"Psicóloga Conductual"}
              />
              <Feature
                icon={
                  <Icon as={IoLogoBitcoin} color={"green.500"} w={5} h={5} />
                }
                iconBg={useColorModeValue("green.100", "green.900")}
                text={"Terapia online para todo el mundo"}
              />
              <Feature
                icon={
                  <Icon as={IoSearchSharp} color={"purple.500"} w={5} h={5} />
                }
                iconBg={useColorModeValue("purple.100", "purple.900")}
                text={"Market Analysis"}
              />
            </Stack>
          </Stack>
          <Flex>
            <Image
              rounded={"md"}
              alt={"feature image"}
              src={
                "https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              }
              objectFit={"cover"}
            />
          </Flex>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
