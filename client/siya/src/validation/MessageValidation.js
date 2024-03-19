import * as yup from "yup";

export const MessageSchema = yup.object().shape({
  email: yup.string().email("email not valid").required(),
  message: yup.string().min(3).required(),
});
