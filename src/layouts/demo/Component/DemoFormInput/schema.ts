import * as yup from "yup";
import { DEMO_FIELD_NAME } from "./fieldname";

const DFN = DEMO_FIELD_NAME

const PLEASE_INPUT_MESSAGE = "Vui lòng bổ sung thông tin";

export const demoSchema = yup.object({
    [DFN.INPUT_TEXT]: yup
      .string()
      .required(PLEASE_INPUT_MESSAGE)
      .typeError(PLEASE_INPUT_MESSAGE),
    [DFN.INPUT_TEXT_AREA]: yup
      .string()
      .required(PLEASE_INPUT_MESSAGE)
      .typeError(PLEASE_INPUT_MESSAGE),
    [DFN.INPUT_SELECT]: yup
      .string()
      .required(PLEASE_INPUT_MESSAGE)
      .typeError(PLEASE_INPUT_MESSAGE),
    [DFN.INPUT_CHECKBOX]: yup
      .boolean()
      .required(PLEASE_INPUT_MESSAGE)
      .typeError(PLEASE_INPUT_MESSAGE),
    [DFN.INPUT_RADIO]: yup
      .string()
      .required(PLEASE_INPUT_MESSAGE)
      .typeError(PLEASE_INPUT_MESSAGE),
    [DFN.INPUT_SWITCH]: yup
      .boolean()
      .required(PLEASE_INPUT_MESSAGE)
      .typeError(PLEASE_INPUT_MESSAGE),
  });