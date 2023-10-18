import React, { useEffect, useState } from "react";
import { Form, Stack } from "react-bootstrap";
import {
  Controller,
  ControllerFieldState,
  ControllerRenderProps,
  UseFormStateReturn,
} from "react-hook-form";

interface InputRadioProps {
  control: any;
  name: any;
  label?: string;
  options: RadioOption[];
  defaultValue?: string | object;
  required?: boolean;
  disabled?: boolean;
  errorMessage?: string;
  onChangeValue?: (value: any) => void;
  inline?: boolean;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "dark"
    | "light";
}

interface RadioOption {
  label: string;
  value: any;
  disabled?: boolean;
}

const InputRadio: React.FC<InputRadioProps> = ({
  control,
  name,
  label,
  options,
  defaultValue,
  disabled,
  required,
  errorMessage,
  onChangeValue,
  inline,
  color,
}) => {
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    if (errorMessage && errorMessage !== "") {
      setHasError(true);
    } else {
      setHasError(false);
    }
  }, [errorMessage]);

  const getInputClassName = (value: boolean, color?: string) => {
    if (!!color) {
      if (value) {
        return `bg-${color} border-${color}`;
      } else {
        return `border-${color} text-${color}`;
      }
    }

    return "";
  };

  const renderComponent = (params: {
    field: ControllerRenderProps<any, any>;
    fieldState: ControllerFieldState;
    formState: UseFormStateReturn<any>;
  }) => {
    const { onChange, value, name } = params?.field;
    return (
      <Stack>
        <Form.Label>
          <span className="text-6-medium">
            {label} {required && <span className="text-danger"> *</span>}
          </span>
        </Form.Label>
        <Form.Group>
          {options?.map((option: RadioOption, index: number) => {
            return (
              <Form.Check
                {...params.field}
                type={"radio"}
                inline={inline}
                key={index}
                isInvalid={hasError}
              >
                <Form.Check.Input
                  name={name}
                  disabled={option?.disabled}
                  isInvalid={hasError}
                  type={"radio"}
                  defaultChecked={option?.value == defaultValue}
                  className={getInputClassName(value == option?.value, color)}
                  onChange={(e: any) => {
                    onChange(e);
                    const value = e.target.value;
                    onChangeValue && onChangeValue(value);
                  }}
                  value={option?.value}
                />
                <Form.Check.Label className={!!color ? `text-${color}` : ""}>
                  {option?.label || ""}
                </Form.Check.Label>
              </Form.Check>
            );
          })}

          <Form.Control.Feedback
            className={hasError ? "d-block" : "d-none"}
            type="invalid"
          >
            {errorMessage}
          </Form.Control.Feedback>
        </Form.Group>
      </Stack>
    );
  };

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      render={renderComponent}
    />
  );
};

export default InputRadio;
