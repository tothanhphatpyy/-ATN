import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import { Form, Stack } from "react-bootstrap";
import {
  Controller,
  ControllerFieldState,
  ControllerRenderProps,
  UseFormStateReturn,
} from "react-hook-form";
import Select, {
  type DropdownIndicatorProps,
  components,
  StylesConfig,
} from "react-select";

interface OptionType {
  label: string | React.ReactNode;
  value: string;
}

interface InputSelectProps {
  control: any;
  name: string;
  options: OptionType[];
  value?: any;
  placeholder?: string;
  onSelectValue?: (selectCode: any) => void;
  defaultValue?: any;
  rules?: any;
  label?: string;
  required?: boolean;
  errorMessage?: string;
  disabled?: boolean;
  propertyLabel?: string;
  propertyValue?: string;
  loading?: boolean;
  multi?: boolean;
  loadingMessage?: (obj: { inputValue: string }) => ReactNode;
  customOption?: (data: any) => ReactNode;
}

const InputSelect: React.FC<InputSelectProps> = ({
  control,
  name,
  options,
  value,
  placeholder = "placeholder",
  label,
  defaultValue,
  rules,
  required,
  onSelectValue = () => {},
  errorMessage,
  disabled,
  loading,
  multi,
  loadingMessage,
  customOption,
}) => {
  const valueRef = useRef(null);
  const [hasError, setHasError] = useState<boolean>(false);

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
        <Select
          {...params?.field}
          options={options}
          isLoading={loading}
          isMulti={multi}
          loadingMessage={loadingMessage}
          value={options.find((c) => c.value === value)}
          defaultValue={defaultValue}
          onChange={(value) => {
            // console.log({ value });
            onChange(value.value);
            onSelectValue && onSelectValue(value?.value);
          }}
          styles={customStyles}
          className="text-6-regular"
          components={{ IndicatorSeparator: () => null, DropdownIndicator }}
          placeholder={placeholder || label}
          isDisabled={disabled}
          formatOptionLabel={customOption}
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
    />
  );
};

export default InputSelect;

const customStyles: StylesConfig = {
  control: (provided: Record<string, unknown>, state: any) => ({
    ...provided,
    border: state.isFocused
      ? "1px solid var(--digibird-input-focus-border-color)"
      : "1px solid var(--digibird-input-border-color)",
    boxShadow: state.isFocused
      ? "var(--digibird-box-shadow-inset), 0 0 0 0.25rem rgba(44, 123, 229, 0.25)"
      : "none",
    "&:hover": {
      border: "1px solid var(--digibird-input-border-color)",
    },
    "&:focus": {
      color: "var(--digibird-input-color)",
      backgroundColor: "var(--digibird-input-bg)",
      borderColor: "var(--digibird-input-focus-border-color)",
      outline: 0,
      boxShadow:
        "var(--digibird-box-shadow-inset), 0 0 0 0.25rem rgba(44, 123, 229, 0.25)",
    },
  }),
};

const CaretDownIcon = () => {
  return <FontAwesomeIcon icon="caret-down" />;
};

const DropdownIndicator: React.FC<DropdownIndicatorProps> = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <CaretDownIcon />
    </components.DropdownIndicator>
  );
};
