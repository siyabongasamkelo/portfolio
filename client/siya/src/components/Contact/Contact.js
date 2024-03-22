import {
  Envelope,
  Facebook,
  Github,
  Linkedin,
  Telephone,
  Twitter,
  Whatsapp,
} from "react-bootstrap-icons";
import { ParaCover } from "../home/AboutMe/AboutMe.styled";
import { H1, P } from "../home/Home.styled";
import {
  ContactCover,
  ContactDetails,
  ContactForm,
  ContactWrapper,
  ErrorLabel,
  Input,
  Label,
  SocialMediaIcons,
  Stack,
  SubmitButton,
  TextArea,
} from "./Contact.styled";
import axios from "axios";
import { useFormik } from "formik";
import { MessageSchema } from "../../validation/MessageValidation";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import Spinner from "react-bootstrap/Spinner";
import { Link } from "react-router-dom";

const showToastErrorMessage = (message) => {
  toast.error(message);
};

const successToastMessage = (message) => {
  toast.success(message);
};

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const baseUrl = "http://localhost:5000";

  const formik = useFormik({
    initialValues: {
      email: "",
      message: "",
    },
    validationSchema: MessageSchema,
    onSubmit: async () => {
      setLoading(true);
      try {
        const { email } = formik.values;
        const { message } = formik.values;

        const sendMessage = await axios.post(`${baseUrl}/send-message`, {
          email,
          message,
        });

        successToastMessage(sendMessage?.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
        showToastErrorMessage(err?.data);
        showToastErrorMessage("Something went wrong please try again later");
      }
    },
  });

  return (
    <ContactWrapper id="contacts">
      <ToastContainer />
      <H1>Contact Me</H1>
      <ParaCover>
        <P>These are some way that can be used to contact me</P>
      </ParaCover>
      <ContactCover>
        <ContactForm onSubmit={formik.handleSubmit}>
          <Label htmlFor="email">Email</Label>
          <Input
            placeholder="enter email...exampe@gmail.com"
            name="email"
            type="email"
            autoComplete="email"
            value={formik.values.email}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.email && formik.errors.email ? (
            <ErrorLabel>{formik.errors.email}</ErrorLabel>
          ) : (
            ""
          )}

          <Label htmlFor="message">Message</Label>
          <TextArea
            placeholder="type your message here"
            name="message"
            autoComplete="message"
            value={formik.values.message}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          ></TextArea>
          {formik.touched.message && formik.errors.message ? (
            <ErrorLabel>{formik.errors.message}</ErrorLabel>
          ) : (
            ""
          )}

          <SubmitButton type="submit" value="submit">
            {loading ? (
              <div className=" d-flex justify-content-center align-items-center">
                <Spinner animation="border" role="status" />
                <span style={{ marginLeft: "10px" }}>Sending message...</span>
              </div>
            ) : (
              "Send Message"
            )}
          </SubmitButton>
        </ContactForm>
        <SocialMediaIcons>
          <Whatsapp />
          <Link
            to={"https://web.facebook.com/siyabonga.samkelo.92/"}
            target={`_blank`}
          >
            <Facebook />
          </Link>
          <Link to={"https://github.com/siyabongasamkelo"} target={`_blank`}>
            <Github />
          </Link>
          <Twitter />
          <Link
            to={"https://www.linkedin.com/in/siyabonga-samkelo-458587275/"}
            target={`_blank`}
          >
            <Linkedin />
          </Link>
        </SocialMediaIcons>
        <ContactDetails>
          <Stack>
            <Envelope /> <Label>Siyabongasamkelociam@gmail.com</Label>
          </Stack>
          <Stack>
            <Telephone /> <Label>061 189 2331</Label>
          </Stack>
        </ContactDetails>
      </ContactCover>
    </ContactWrapper>
  );
};

export default Contact;
