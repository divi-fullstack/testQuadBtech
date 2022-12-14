import * as yup from "yup"

export const ticketFormValidation = yup.object({
  name: yup.string().required("Please provide your name"),
  contact: yup.number().required("Please provide contact no"),
})