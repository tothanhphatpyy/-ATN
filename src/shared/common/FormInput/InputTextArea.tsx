import React, { useEffect, useRef, useState } from 'react'
import { Form, Stack } from 'react-bootstrap'
import { Controller, ControllerFieldState, ControllerRenderProps, UseFormStateReturn } from 'react-hook-form'

interface InputTextAreaProps {
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
  rows?: number
}

const InputTextArea: React.FC<InputTextAreaProps> = ({
  control,
  name,
  label,
  placeholder,
  defaultValue = "",
  rules,
  disabled,
  errorMessage,
  required,
  rows=3,
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

  const convertMoneyDefault = (input: any) => {
    if (input == -1) {
      return null
    }
    return input
  }

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
          <Form.Control
            {...params?.field}
            as='textarea'
            placeholder={placeholder || label}
            isInvalid={hasError}
            required={required}
            disabled={disabled}
            className='border-1 font-lexend'
            rows={rows}
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

export default InputTextArea