import React from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";

import * as Yup from 'yup';
import withSingleSection from "./withSingleSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";

const ContactMeStack: React.FC = () => {

  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {firstName:'',email:'',type:'',comment:''},
    onSubmit: async (values) => {
      await submit('', values);
      if (response) {
        const { type = '', message = '' } = response;
        onOpen(type, message);
      }
    },
    validationSchema: Yup.object({}).shape({
      firstName: Yup.string().required("Your name is required"),
      comment: Yup.string().required("A message is required").min(30, "Must be at least 30 characters"),
      email: Yup.string().email().required("Email address is required"),
    }),
  });

  const commentText = formik.getFieldProps("comment").value;
  const isNameError = (!!formik.errors.firstName && formik.touched.firstName)
  const isEmailError = (!!formik.errors.email && formik.touched.email)
  const isMessageError = (!!formik.errors.comment && formik.touched.comment)
 
  return <VStack w="1024px" p={32} alignItems="flex-start">
  <Heading as="h1" id="contactme-section">
    Contact me
  </Heading>
  <Box p={6} rounded="md" w="100%">
    <form onSubmit={formik.handleSubmit}>
      <VStack spacing={4}>
        <FormControl isRequired isInvalid={isNameError}>
          <FormLabel htmlFor="firstName">Name</FormLabel>
          <Input
            id="firstName"
            {...formik.getFieldProps("firstName")}
          />
          <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
        </FormControl>
        <FormControl isRequired isInvalid={isEmailError}>
          <FormLabel htmlFor="email">Email Address</FormLabel>
          <Input
            id="email"
            //name="email"
            type="email"
            {...formik.getFieldProps("email")}                  
          />
          <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="type">Type of enquiry</FormLabel>
          <Select id="type" name="type" value={commentText} onChange={formik.handleChange}>
            <option value="hireMe">Freelance project proposal</option>
            <option value="openSource">Open source consultancy session</option>
            <option value="other">Other</option>
          </Select>
        </FormControl>
        <FormControl isRequired isInvalid={isMessageError}>
          <FormLabel htmlFor="comment">Your message</FormLabel>
          <Textarea
            id="comment"
            height={250}
            {...formik.getFieldProps("comment")}
          />
          <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
        </FormControl>
        <Button type="submit" colorScheme="purple" width="full" disabled={!formik.isValid || isLoading}>
          Submit
        </Button>
      </VStack>
    </form>
  </Box>
</VStack>
};

const ContactMeSection = withSingleSection(ContactMeStack);
  
export default ContactMeSection;


