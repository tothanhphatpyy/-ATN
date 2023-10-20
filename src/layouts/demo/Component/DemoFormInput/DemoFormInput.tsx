import React from "react";

import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row, Stack } from "react-bootstrap";
import {
  CustomToastType,
  showCustomToast,
} from "@shared/common/CustomToast";
import {
  InputCheckBox,
  InputText,
  InputDate,
  InputNumber,
  InputRadio,
  InputSelect,
  InputSwitch,
  InputTextArea,
  // InputTextEditor,
} from "@shared/common/FormInput";
import { DEMO_FIELD_NAME } from "./fieldname";
import { demoSchema } from "./schema";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const options = [
  {
    value: "1",
    label: "label 1",
    icon: 'house',
  },
  {
    value: "2",
    label: "label 2",
    icon: 'house',
  },
  {
    value: "3",
    label: "label 3",
    icon: 'house',
  },
];

const DFN = DEMO_FIELD_NAME

const DemoFormInput = () => {
  const methods = useForm({
    mode: "onSubmit",
    resolver: yupResolver(demoSchema),
  });

  const {
    control,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = methods;

  const onSubmit = () => {
    showCustomToast({
      type: CustomToastType.SUCCESS,
      message: "Valid",
    });
  };

  const onError = () => {
    console.log({ errors });
    showCustomToast({
      type: CustomToastType.ERROR,
      message: "Invalid",
    });
  };

  const handleSetValue = () => {
    setValue("inputText", "");
  };

  const handleGetValue = () => {
    console.log("get value", getValues());
  };

  const formatOptionLabel = ({ value, label, icon }) => (
      <div style={{ display: "flex", alignItems: 'center', gap: 10 }}>
        <FontAwesomeIcon icon={icon} />
        <div>{label}</div>
      </div>
  );

  return (
    <FormProvider {...methods}>
      <Stack gap={3}>
        <Row>
          <Col xs={12}>
            <InputText
              label={"Input Text"}
              name={DFN.INPUT_TEXT}
              control={control}
              placeholder="Nhập gì đó ..."
              errorMessage={errors[DFN.INPUT_TEXT]?.message || ""}
              required
              onBlurInput={(value: string) => {
                console.log({ value })
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <InputText
              label={"Input Text"}
              name="inputLeftText"
              control={control}
              placeholder="Nhập gì đó ..."
              required
              leftText="đ"
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <InputNumber
              label={"Input Number"}
              name={DFN.INPUT_NUMBER}
              control={control}
              placeholder="Nhập gì đó ..."
              required
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <InputDate
              label={"Input Date"}
              name={DFN.INPUT_DATE}
              control={control}
              placeholder="Chọn ngày"
              required
              onChangeValue={(value: any) => {
                console.log('date value', value)
              }}
              dateFormat="dd/MM/yyyy"
            />
          </Col>
        </Row> 
        <Row>
          <Col xs={12}>
            <InputTextArea
              label={"Input Text Area"}
              name={DFN.INPUT_TEXT_AREA}
              control={control}
              placeholder="Nhập gì đó ..."
              required
              errorMessage={errors[DFN.INPUT_TEXT_AREA]?.message || ""}
            />
          </Col>
        </Row>
        {/* <Row>
          <Col xs={12}>
            <InputTextEditor
              label={"Input Text Editor"}
              name="inputTextEditor"
              control={control}
              placeholder="Nhập gì đó ..."
              required
              errorMessage={errors["inputTextEditor"]?.message || ""}
            />
          </Col>
        </Row> */}
        <Row>
          <Col xs={12}>
            <InputSelect
              options={options}
              label={"Input Select"}
              name={DFN.INPUT_SELECT}
              control={control}
              errorMessage={errors[DFN.INPUT_SELECT]?.message || ""}
              placeholder="Nhập gì đó ..."
              customOption={formatOptionLabel}
              required
            />
          </Col>
        </Row>
        <div>
          <InputCheckBox
            control={control}
            name={DFN.INPUT_CHECKBOX}
            label="This is checkbox"
            required
            //errorMessage={errors[DFN.INPUT_CHECKBOX]?.message || ""}
            onChangeValue={(value: boolean) => {
              console.log("check box value", value);
            }}
          />
        </div>
        <div>
          <InputRadio
            inline
            control={control}
            name={DFN.INPUT_RADIO}
            options={[
              { label: "Có", value: "1" },
              { label: "Không", value: "2" },
            ]}
            errorMessage={errors[DFN.INPUT_RADIO]?.message || ""}
            onChangeValue={(value: any) => {
              console.log("check box value", value);
            }}
          />
        </div>
        <div>
          <InputSwitch
            control={control}
            name={DFN.INPUT_SWITCH}
            label="Input Switch"
            required
            defaultValue={''}
            errorMessage={errors[DFN.INPUT_SWITCH]?.message || ""}
            onChangeValue={(value: boolean) => {
              console.log("value switch", value);
            }}
          />
        </div>
        <div>
          <Button onClick={handleSetValue}>Set Value</Button>
          <Button className="ms-3" onClick={handleGetValue}>
            Get Value
          </Button>
          <Button
            className="ms-3"
            onClick={handleSubmit(() => onSubmit(), onError)}
          >
            Submit
          </Button>
        </div>
      </Stack>
    </FormProvider>
  );
};

export default DemoFormInput;
