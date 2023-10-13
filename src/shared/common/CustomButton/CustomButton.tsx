import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import React from 'react'
import { Button } from 'react-bootstrap';

interface CustomButtonProps {
    title?: any
    type?: 'solid' | 'outline' | 'falcon' | 'link';
    color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | 'white';
    size?: 'small' | 'large'
    onClick?: () => void;

}

const CustomButton: React.FC<CustomButtonProps> = ({
    title,
    type='solid',
    color='primary',
    size,
    onClick,
}) => {
    return (
        <Button variant={color} onClick={onClick}>{title}</Button>
    )
}

export default CustomButton