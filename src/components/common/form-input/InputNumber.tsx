import React, { useEffect, useRef, useState } from 'react'
import { Form, InputGroup, Stack } from 'react-bootstrap'
import { Controller, ControllerFieldState, ControllerRenderProps, UseFormStateReturn } from 'react-hook-form'

interface InputNumberProps {
  control?: any
  name?: string
  placeholder?: any
  label?: any
  defaultValue?: any
  rules?: any
  disabled?: boolean
  errorMessage?: any
  inputProps?: any
  onChangeValue?: (value: any) => void
  onBlurInput?: (value: any) => void
  required?: boolean
  leftText?: string
  rightText?: string
}

const InputNumber: React.FC<InputNumberProps> = ({
  control,
  name,
  label,
  placeholder,
  defaultValue = "",
  rules,
  disabled,
  errorMessage,
  required,
  leftText,
  rightText,
  onChangeValue,
  onBlurInput,
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

  const renderComponent = (params: {
    field: ControllerRenderProps<any, any>
    fieldState: ControllerFieldState
    formState: UseFormStateReturn<any>
  }) => {
    const { onChange, onBlur, value, name } = params?.field
    if (value !== valueRef.current) {
      valueRef.current = value
    }

    return (
      <Stack>
        <Form.Label>
          {label}
          {required && <span className="text-danger"> *</span>}
        </Form.Label>
        <InputGroup>
          {!!leftText && <InputGroup.Text>{leftText}</InputGroup.Text>}
          <Form.Control
            {...params?.field}
            type='number'
            placeholder={placeholder || label}
            isInvalid={hasError}
            required={required}
            disabled={disabled}
            className='border-1'
            onChange={(e: any) => {
              const value = e.target.value
              onChange(e)
              onChangeValue && onChangeValue(value)
            }}
            onBlur={(e: any) => {
              const value = e.target.value
              onBlur()
              onBlurInput && onBlurInput(value)
            }}
          />
          {!!rightText && <InputGroup.Text>{rightText}</InputGroup.Text>}
        </InputGroup>
        {hasError && (
          <Form.Control.Feedback type='invalid'>
            {errorMessage}
          </Form.Control.Feedback>
        )}
      </Stack>
    )
  }

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      render={renderComponent}
      rules={rules}
    />
  )
}

export default InputNumber