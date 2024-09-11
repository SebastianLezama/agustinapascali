import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  Spacer,
} from "@chakra-ui/react";

const image1URL =
  "https://waouznfjhihauptkfimb.supabase.co/storage/v1/object/sign/Images/kanagawa_1080.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMva2FuYWdhd2FfMTA4MC5qcGciLCJpYXQiOjE2ODc3MjI2MTMsImV4cCI6MTcxOTI1ODYxM30.FwUUHqIlv3sNjBpWj-Z7v2a32xqCwAktAJTrrFjdUY8&t=2023-06-25T19%3A50%3A15.290Z";

const image2URL =
  "https://waouznfjhihauptkfimb.supabase.co/storage/v1/object/sign/Images/inume_pass.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvaW51bWVfcGFzcy5qcGciLCJpYXQiOjE2ODc1NzYyNTAsImV4cCI6MTcxOTExMjI1MH0.9cYBXh4oLGjuXfi_4_GTbmMnxMGmigr4BGbIzVleSwo&t=2023-06-24T03%3A10%3A51.682Z";
const image3URL =
  "https://waouznfjhihauptkfimb.supabase.co/storage/v1/object/sign/Images/Lotus-pink-on-sky_08cec0c7-79c4-4164-b8a0-c8bbfa9088c5_2000x.progressive.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvTG90dXMtcGluay1vbi1za3lfMDhjZWMwYzctNzljNC00MTY0LWI4YTAtYzhiYmZhOTA4OGM1XzIwMDB4LnByb2dyZXNzaXZlLndlYnAiLCJpYXQiOjE2ODc3MjY2ODUsImV4cCI6MTcxOTI2MjY4NX0.PPjVGteb6grt_mBLK7quQEs3YTDp9CQB1Psn9nRYWvU&t=2023-06-25T20%3A58%3A07.250Z";

const image4URL =
  "https://waouznfjhihauptkfimb.supabase.co/storage/v1/object/sign/Images/Imagen%20para%20landing%207.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvSW1hZ2VuIHBhcmEgbGFuZGluZyA3LndlYnAiLCJpYXQiOjE2ODg1OTMwNDMsImV4cCI6MTcyMDEyOTA0M30.KcCtzAPgs-QZ1mHEioiE1t3dSZyEkq2E2HX1f0qHcwc&t=2023-07-05T21%3A37%3A24.315Z";

const image5URL =
  "https://waouznfjhihauptkfimb.supabase.co/storage/v1/object/sign/Images/tulips-gdb0eec79e_1920.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvdHVsaXBzLWdkYjBlZWM3OWVfMTkyMC5qcGciLCJpYXQiOjE3MjYwNjI5NzUsImV4cCI6MTc1NzU5ODk3NX0.z42KIk8_q9OdjUuE1prTKyeX3Ch7tSWxR2hemUGvztw&t=2024-09-11T13%3A56%3A15.438Z";

export default function Hero() {
  return (
    <Flex
      w={"full"}
      h={"96vh"}
      // mt={"15vh"}
      // pb={"35px"}
      minH={"350px"}
      backgroundImage={image5URL}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.400, transparent)"}
      >
        <Stack maxW={"6xl"} align={"flex-start"} spacing={6}>
          <Text
            color={"white"}
            fontWeight={400}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
          >
            Te invito a crear un espacio de exploración y transformación personal.
          </Text>
          <Spacer></Spacer>
          <Text
            color={"white"}
            fontWeight={400}
            lineHeight={1.2}
            spacing={6}
            fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
          >
            Te ofrezco recursos para gestionar efectivamente tus emociones, mejorar la relación con tus pensamientos y afrontar asertivamente los acontecimientos de la vida.
          </Text>
          {/* <Stack direction={"row"}>
            <Button
              bg={"teal.500"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "teal.600" }}
            >
              Show me more
            </Button>
            <Button
              bg={"whiteAlpha.300"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "whiteAlpha.500" }}
            >
              Show me more
            </Button>
          </Stack> */}
        </Stack>
      </VStack>
    </Flex>
  );
}
