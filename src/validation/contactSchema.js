import * as Yup from 'yup';

const phoneRegExp = /^\+?[0-9]{7,15}$/;

export const contactValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .trim()
    .required("Enter name"),

  lastName: Yup.string()
    .trim()
    .required("Enter surname"),

  email: Yup.string()
    .trim()
    .email('incorrect format Email (example: user@gmail.com)')
    .required("Email is required"),

  phone: Yup.string()
    .trim()
    .matches(phoneRegExp, 'incorrect format phone (example: +380991234567)')
    .required("Phone is required"),
});