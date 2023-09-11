import {
  Box,
  FormLabel,
  HStack,
  Image,
  Stack,
  Text,
  useRadio,
  useRadioGroup,
  useToast,
} from "@chakra-ui/react";

const LogRadio = () => {
  function CustomRadio(props) {
    const { image, ...radioProps } = props;
    const {
      state,
      getInputProps,
      getRadioProps,
      htmlProps,
      getLabelProps,
      // isFocusable,
    } = useRadio(radioProps);

    return (
      <FormLabel {...htmlProps} cursor="pointer">
        <input {...getInputProps({})} hidden />
        <Box
          {...getRadioProps()}
          bg={state.isChecked ? "green.200" : "transparent"}
          w={12}
          p={1}
          rounded="full"
          // isFocusable={isFocusable}
        >
          <Image src={image} rounded="full" {...getLabelProps()} />
        </Box>
      </FormLabel>
    );
  }

  const toast = useToast();

  const avatars = [
    { name: "Kat", image: "https://randomuser.me/api/portraits/women/44.jpg" },
    { name: "Kevin", image: "https://randomuser.me/api/portraits/men/86.jpg" },
    { name: "Andy", image: "https://randomuser.me/api/portraits/men/29.jpg" },
    { name: "Jess", image: "https://randomuser.me/api/portraits/women/95.jpg" },
  ];

  const handleChange = (value) => {
    toast({
      title: `The value got changed to ${value}!`,
      status: "success",
      duration: 2000,
    });
  };
  const { value, getRadioProps, getRootProps, isFocusable } = useRadioGroup({
    defaultValue: "Kevin",
    onChange: handleChange,
    // isFocusable: isFocusable,
  });

  return (
    <Stack {...getRootProps()}>
      <Text>The selected radio is: {value}</Text>
      <HStack>
        {avatars.map((avatar) => {
          return (
            <CustomRadio
              key={avatar.name}
              image={avatar.image}
              {...getRadioProps({ value: avatar.name })}
            />
          );
        })}
      </HStack>
    </Stack>
  );
};

export default LogRadio;
