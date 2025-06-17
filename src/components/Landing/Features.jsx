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
  IoSchoolSharp,
  IoTodaySharp,
  IoBodySharp,
} from "react-icons/io5";
import { ReactElement } from "react";

// interface FeatureProps {
//   text: string;
//   iconBg: string;
//   icon?: ReactElement;
// }

const featureImage = "https://waouznfjhihauptkfimb.supabase.co/storage/v1/object/sign/Images/IMG_6722.JPG?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iMDUwNzU1Mi1iNTNlLTQ1ZmItYmUzNi1mN2U0MDM4OWMyZWQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJJbWFnZXMvSU1HXzY3MjIuSlBHIiwiaWF0IjoxNzUwMjAwMjg4LCJleHAiOjE5MDc4ODAyODh9.2LsSVKNyswDP2JzAIuCpP-eRkRox3WoewTUnan1h5o0"

const text =
  "Soy Agustina Pascali, Licenciada en Psicología, especializada en Psicoterapias Contextuales (MN N° 68460). Me gradué en el año 2017, en la Universidad Favaloro, y luego continué mi formación en Fundación FORO donde me interioricé en la Terapia Dialéctico Comportamental (DBT), la Terapia de Aceptación y Compromiso (ACT) y Mindfulness en Psicoterapia. También he sido coordinadora de grupos de habilidades DBT. Y posteriormente, me he capacitado en la Terapia Integrativa de Parejas (IBCT) en el Centro Argentino de Terapias Contextuales. Todos estos modelos de Psicoterapia son emergentes de la Psicología Conductual Contextual y cuentan con soporte empírico.";

const text2 =
  "En el último tiempo también me he interesado en estudiar el uso de hongos psicodélicos y adaptógenos con fines terapéuticos, un tema que se encuentra a la vanguardia de la investigación actual. Buscando integrar saberes ancestrales a las prácticas más modernas, con el propósito de ampliar mi perspectiva hacia una visión holística del ser humano.";

const text3 =
  "Ofrezco mi servicio de psicoterapia de manera remota para todo el mundo.";

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
                    as={IoSchoolSharp}
                    color={"yellow.500"}
                    w={5}
                    h={5}
                  />
                }
                iconBg={useColorModeValue("yellow.100", "yellow.900")}
                text={"Psicóloga Contextual"}
              />
              <Feature
                icon={
                  <Icon as={IoTodaySharp} color={"green.500"} w={5} h={5} />
                }
                iconBg={useColorModeValue("green.100", "green.900")}
                text={"Terapia online para todo el mundo"}
              />
              {/* <Feature
                icon={
                  <Icon as={IoBodySharp} color={"purple.500"} w={5} h={5} />
                }
                iconBg={useColorModeValue("purple.100", "purple.900")}
                text={"Meditaciones online"}
              /> */}
            </Stack>
          </Stack>
          <Flex>
            <Image
              rounded={"md"}
              alt={"feature image"}
              src={
                featureImage
              }
              objectFit={"cover"}
            />
          </Flex>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
