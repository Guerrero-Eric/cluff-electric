import React from "react";
import {
  Container,
  FormButton,
  FormContent,
  FormLabel,
  FormWrap,
  Icon,
  Form,
  FormH1,
  FormInput,
  Text
} from "./ContactElements";

const Contact = () => {
  return (
    <Container>
      <FormWrap>
        <Icon> Cluff</Icon>
        <FormContent>
          <Form>
            <FormH1> Enter contact info </FormH1>

            <FormLabel> Phone</FormLabel>
            <FormInput />

            <FormButton>Submit </FormButton>
            <Text>text </Text>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default Contact;
