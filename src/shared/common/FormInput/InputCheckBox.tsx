import React, { useEffect, useRef, useState } from "react"
import { Form } from "react-bootstrap"
import {
  Controller,
  ControllerFieldState,
  ControllerRenderProps,
  UseFormStateReturn,
} from "react-hook-form"

interface InputCheckBoxProps {
  control: any
  name: any
  label?: string
  defaultValue?: string
  required?: boolean
  disabled?: boolean
  errorMessage?: string
  onChangeValue?: (value: boolean) => void
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "dark"
    | "light"
}

const InputCheckBox: React.FC<InputCheckBoxProps> = ({
  control,
  name,
  label,
  defaultValue = false,
  required,
  disabled,
  errorMessage,
  color,
  onChangeValue,
}) => {
  const valueRef = useRef(null)
  const [hasError, setHasError] = useState<boolean>(false)

  useEffect(() => {
    if (errorMessage && errorMessage !== "") {
      setHasError(true)
    } else {
      setHasError(false)
    }
  }, [errorMessage])

  const getInputClassName = (value: boolean, color?: string) => {
    if (!!color) {
      if (value) {
        return `bg-${color} text-${color}`
      } else {
        return `border-${color} text-${color}`
      }
    }

    return ""
  }

  const renderComponent = (params: {
    field: ControllerRenderProps<any, any>
    fieldState: ControllerFieldState
    formState: UseFormStateReturn<any>
  }) => {
    const { onChange, value, name } = params?.field
    if (value !== valueRef.current) {
      valueRef.current = value
    }

    return (
      <>
        <Form.Check
          {...params?.field}
          label={label}
          isInvalid={hasError}
          disabled={disabled}
        >
          <Form.Check.Input
            {...params?.field}
            ref={valueRef}
            className={getInputClassName(value, color)}
            isInvalid={hasError}
            onChange={(e: any) => {
              onChange(e)
              const checked: boolean = e.target.checked
              onChangeValue && onChangeValue(checked)
            }}
          />
          <Form.Check.Label className={!!color ? `text-${color}` : ""}>
            {label}
            {required && <span className='text-danger'> *</span>}
          </Form.Check.Label>
        </Form.Check>
        <Form.Control.Feedback
          className={hasError ? "d-block" : "d-none"}
          type='invalid'
        >
          {errorMessage}
        </Form.Control.Feedback>
      </>
    )
  }
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      render={renderComponent}
    />
  )
}

export default InputCheckBox
