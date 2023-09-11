import React, { useState } from "react";
import { supabase, getTableByEmail } from "../SupabaseClient";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  VStack,
  useToast,
} from "@chakra-ui/react";
import * as Yup from "yup";
import { Field, Formik } from "formik";
import { useAuth } from "../../Context/AuthContext";

const UserForm = () => {
  const toast = useToast();
  const auth = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dni: "",
    edad: "",
    habitos_aumentar_1: "",
    habitos_aumentar_2: "",
    habitos_aumentar_3: "",
    habitos_disminuir_1: "",
    habitos_disminuir_2: "",
    habitos_disminuir_3: "",
  });
  const formFields = [
    {
      name: "name",
      type: "text",
      placeholder: "Name",
      // value: formData.name,
      isRequired: "isRequired",
    },
    {
      name: "email",
      type: "email",
      placeholder: "E-mail",
      // value: formData.email,
      isRequired: "isRequired",
    },
    {
      name: "dni",
      type: "text",
      placeholder: "DNI (password)",
      // value: formData.email,
      isRequired: "isRequired",
    },
    {
      name: "edad",
      type: "text",
      placeholder: "Edad",
      // value: formData.edad,
      isRequired: "isRequired",
    },
    {
      name: "habitos_aumentar_1",
      type: "text",
      placeholder: "Habito a aumentar 1",
      // value: formData.habitos_aumentar_1,
      isRequired: false,
    },
    {
      name: "habitos_aumentar_2",
      type: "text",
      placeholder: "Habito a aumentar 2",
      // value: formData.habitos_aumentar_2,
      isRequired: false,
    },
    {
      name: "habitos_aumentar_3",
      type: "text",
      placeholder: "Habito a aumentar 3",
      // value: formData.habitos_aumentar_3,
      isRequired: false,
    },
    {
      name: "habitos_disminuir_1",
      type: "text",
      placeholder: "Habito a disminuir 1",
      // value: formData.habitos_disminuir_1,
      isRequired: false,
    },
    {
      name: "habitos_disminuir_2",
      type: "text",
      placeholder: "Habito a disminuir 2",
      // value: formData.habitos_disminuir_2,
      isRequired: false,
    },
    {
      name: "habitos_disminuir_3",
      type: "text",
      placeholder: "Habito a disminuir 3",
      // value: formData.habitos_disminuir_3,
      isRequired: false,
    },
  ];

  const insertNewUser = async ({
    name,
    email,
    edad,
    habitos_aumentar_1,
    habitos_aumentar_2,
    habitos_aumentar_3,
    habitos_disminuir_1,
    habitos_disminuir_2,
    habitos_disminuir_3,
  }) => {
    try {
      const { error } = await supabase.from("Users").insert({
        name: name,
        email: email,
        admin: false,
        edad: edad,
        habitos_aumentar_1: habitos_aumentar_1,
        habitos_aumentar_2: habitos_aumentar_2,
        habitos_aumentar_3: habitos_aumentar_3,
        habitos_disminuir_1: habitos_disminuir_1,
        habitos_disminuir_2: habitos_disminuir_2,
        habitos_disminuir_3: habitos_disminuir_3,
      });
      if (error) throw error;
    } catch (error) {
      alert(error.message);
    }
  };

  const showToast = (message, status, title) => {
    console.log("en el toast");
    toast({
      title: title,
      description: message,
      duration: 5600,
      isClosable: true,
      status: status,
    });
  };

  const handleSubmit = async (values, actions) => {
    console.log(values);
    setFormData(values);
    try {
      if (
        (values.name != undefined) &
        (values.email != undefined) &
        (values.name != "") &
        (values.email != "")
      ) {
        const user = await getTableByEmail("Users", values.email);
        console.log(user);
        if (user[0] === undefined) {
          console.log("inserting");
          // UNCOMMENT to send invite
          auth.signUp(values.email, values.dni);
          await insertNewUser(values);
          showToast("Consultante agregado!", "success", "Invitacion enviada");
          actions.resetForm();
        }
      }
    } catch (error) {
      showToast("Hubo un error", "error", error);
    }
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ ...formData }}
      validationSchema={Yup.object({
        name: Yup.string().required(
          "Por favor ingrese el nombre del consultante"
        ),
        email: Yup.string()
          .email()
          .required("Por favor ingrese un email"),
      })}
      onSubmit={handleSubmit}
    >
      {(formik) => (
        <VStack
          as="form"
          mx="auto"
          maxW="650px"
          minW="250px"
          onSubmit={formik.handleSubmit}
        >
          {formFields.map((input) => (
            <FormControl
              onChange={formik.handleChange}
              key={input.name}
              isInvalid={
                formik.errors[input.name] && formik.touched[input.name]
              }
            >
              <FormLabel>{input.placeholder}:</FormLabel>
              <Field
                as={Input}
                minw="350px"
                name={input.name}
                type={input.type}
              />
              <FormErrorMessage>{formik.errors[input.name]}</FormErrorMessage>
            </FormControl>
          ))}
          <FormControl>
            <Button
              mt={3}
              colorScheme="teal"
              type="submit"
              size="lg"
              key="button"
            >
              Agregar Consultante
            </Button>
          </FormControl>
        </VStack>
      )}
    </Formik>
  );
};

export default UserForm;
