import React, { useEffect, useRef, useState } from 'react'
import { Form } from 'react-bootstrap'
import { Controller, ControllerFieldState, ControllerRenderProps, UseFormStateReturn } from 'react-hook-form'

interface InputSwitchProps {
    control: any
    name: any
    label?: string
    defaultValue?: string
    required?: boolean
    disabled?: boolean
    errorMessage?: string
    onChangeValue?: (value: boolean) => void
}

const SwitchLabel = ({ label, required }) => {
    return <span>{label}
        {required && <span className='text-danger'> *</span>}</span>
}

const InputSwitch: React.FC<InputSwitchProps> = ({
    control,
    name,
    label,
    defaultValue = false,
    required,
    disabled,
    errorMessage,
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
                    type='switch'
                    isInvalid={hasError}
                    disabled={disabled}
                    label={<SwitchLabel label={label} required={required} />}
                    onChange={(e: any) => {
                        onChange(e)
                        const checked: boolean = e.target.checked
                        onChangeValue && onChangeValue(checked)
                    }}
                />
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

export default InputSwitch