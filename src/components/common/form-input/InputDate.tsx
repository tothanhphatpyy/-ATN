import React, { useEffect, useRef, useState } from "react";
import { Form, Stack } from "react-bootstrap";
import {
  Controller,
  ControllerFieldState,
  ControllerRenderProps,
  UseFormStateReturn,
} from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./textDate.scss"

interface InputDateProps {
  control?: any;
  name?: string;
  placeholder?: any;
  label?: any;
  defaultValue?: any;
  rules?: any;
  disabled?: boolean;
  errorMessage?: any;
  onChangeValue?: (value: any) => void;
  required?: boolean;
  dateFormat?: string;
}

const InputDate: React.FC<InputDateProps> = ({
  control,
  name,
  placeholder,
  label,
  defaultValue,
  rules,
  disabled,
  errorMessage,
  onChangeValue,
  required,
  dateFormat,
}) => {
  const valueRef = useRef(null);
  const [hasError, setHasError] = useState<boolean>(false);
  const [startDate, setStartDate] = useState(defaultValue || null);

  useEffect(() => {
    if (errorMessage && errorMessage !== "") {
      setHasError(true);
    } else {
      setHasError(false);
    }
  }, [errorMessage]);

  const renderComponent = (params: {
    field: ControllerRenderProps<any, any>;
    fieldState: ControllerFieldState;
    formState: UseFormStateReturn<any>;
  }) => {
    const { onChange, onBlur, value, name } = params?.field;
    if (value !== valueRef.current) {
      valueRef.current = value;
    }

    return (
      <Stack>
        <Form.Label>
          <span className="text-6-medium">
            {label} {required && <span className="text-danger"> *</span>}
          </span>
        </Form.Label>
          <DatePicker
            {...params?.field}
            selected={startDate}
            onChange={(date) => {
              onChange(date);
              onChangeValue && onChangeValue(date);
              setStartDate(date);
            }}
            placeholderText={placeholder}
            className="form-control font-lexend"
            dateFormat={dateFormat} // reference https://reactdatepicker.com/#example-placeholder-text
            defaultValue={defaultValue}
          />
        {hasError && <p className="text-validate-error mb-0">{errorMessage}</p>}
      </Stack>
    );
  };

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      render={renderComponent}
      rules={rules}
    />
  );
};

export default InputDate;
