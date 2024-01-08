import Picker from "../Picker";
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Textarea,
  useColorModeValue,
} from "@chakra-ui/react";

const DailyLogForm = ({
  handleChange,
  handleDateChange,
  handleSubmit,
  handleRadio,
  isRadioSelected,
  isFormFilled,
  formData,
  setFormData,
  startDate,
  logData,
}) => {
  const emociones = [
    { name: "Alegria" },
    { name: "Enojo" },
    { name: "Tristeza" },
    { name: "Verguenza" },
    { name: "Culpa" },
    { name: "Frustracion" },
    { name: "Ansiedad" },
    { name: "Sorpresa" },
  ];

  // const { value, getRadioProps, getRootProps } = useRadioGroup({
  //   defaultValue: "0",
  //   onChange: handleChange,
  // });

  

  return (
    // <Box justify="center" pt={"20px"}>
    <Container maxW={{ base: null, lg: "5xl" }} py={12} h={"90vh"}>
      <form disabled="disabled">
        <Flex justifyContent={"center"} flexWrap={"wrap"}>
          {/* <Grid templateColumns="repeat(7, 1fr)">
            <Spacer />
            <GridItem
              colSpan={3}
              p="15px" maxWidth="300px"
            > */}
          {/* <Spacer></Spacer> */}
          {/* <HStack> */}
          <Box
            maxW={{ base: "550px" }}
            // w={{ base: "full", lg: "" }}
            bg={useColorModeValue("white", "gray.900")}
            boxShadow={"2xl"}
            rounded={"lg"}
            p={{ base: 2, lg: 14 }}
            mx={{ base: "0px", lg: "35px" }}
            textAlign={"center"}
          >
            <Picker
              formData={formData}
              startDate={startDate}
              handleDateChange={handleDateChange}
              logData={logData}
            />
            <Textarea
              placeholder="Comentarios del día"
              h="280px"
              mt="10px"
              name="comentarios"
              onChange={handleChange}
              value={formData.comentarios}
            />
          </Box>
          {/* </GridItem> */}
          {/* <Spacer />
          <Spacer /> */}
          {/* <GridItem colSpan={2} p="15px" maxWidth="320px"> */}
          <Box
            maxW={"550px"}
            // w={{ base: "full", lg: "" }}
            bg={useColorModeValue("white", "gray.900")}
            boxShadow={"2xl"}
            rounded={"lg"}
            p={{ base: 2, lg: 14 }}
            mx={{ base: "0px", lg: "35px" }}
            textAlign={"center"}
          >
            <FormControl onSubmit={handleSubmit} id="log-form">
              {emociones.map((e) => (
                <RadioGroup
                  key={e.name}
                  defaultValue={formData[e.name.toLowerCase()]}
                  name={e.name.toLowerCase()}
                  value={formData[e.name.toLowerCase()]}
                  colorScheme="blue"
                  _checked={isRadioSelected(formData.e)}
                >
                  <FormLabel m="0">{e.name}</FormLabel>
                  <HStack
                    justify="space-between"
                    paddingBottom="17px"
                    onChange={handleRadio}
                  >
                    <Radio value="0">0</Radio>
                    <Radio value="1">1</Radio>
                    <Radio value="2">2</Radio>
                    <Radio value="3">3</Radio>
                    <Radio value="4">4</Radio>
                    <Radio value="5">5</Radio>
                  </HStack>
                </RadioGroup>
              ))}
              <Input
                placeholder="Otra"
                name="otra"
                value={formData.otra}
                onChange={handleChange}
                marginBottom="4px"
              />
              <RadioGroup
                defaultValue={formData.valor}
                name="valor"
                value={formData.valor}
                colorScheme="blue"
                _checked={isRadioSelected(formData.valor)}
              >
                <HStack
                  justify="space-between"
                  paddingBottom="17px"
                  name="valor"
                  onChange={handleRadio}
                >
                  <Radio value="0">0</Radio>
                  <Radio value="1">1</Radio>
                  <Radio value="2">2</Radio>
                  <Radio value="3">3</Radio>
                  <Radio value="4">4</Radio>
                  <Radio value="5">5</Radio>
                </HStack>
              </RadioGroup>
            </FormControl>
          </Box>

          {/* <LogRadio formData={formData} /> */}
          {/* </GridItem> */}
          {/* <Spacer /> */}
          {/* </Grid> */}
          {/* </HStack> */}
        </Flex>
        <Button
          mt={3}
          colorScheme="teal"
          type="submit"
          size="lg"
          onClick={handleSubmit}
        >
          Registrar Emociones
        </Button>
      </form>
      {/* </Box>
       */}
    </Container>
  );
};

DailyLogForm.propTypes = {
    valor: PropTypes.any,
    handleChange: PropTypes.func.isRequired,
    handleDateChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleRadio: PropTypes.func.isRequired,
    isRadioSelected: PropTypes.bool,
    isFormFilled: PropTypes.bool,
    formData: PropTypes.object.isRequired,
    setFormData: PropTypes.func.isRequired,
    startDate: PropTypes.string.isRequired,
    logData: PropTypes.object.isRequired,
}

export default DailyLogForm;
