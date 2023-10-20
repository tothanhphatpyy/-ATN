import React from "react"
import { Image } from "react-bootstrap"
import toastSuccessImage from "@assets/images/logo/Logo-DigiBird.png"
import toastErrorImage from "@assets/images/logo/Logo-DigiBird.png"
import toastInfoImage from "@assets/images/logo/Logo-DigiBird.png"
import { toast } from "react-toastify"

interface CustomToastProps {
  type?: number
  message?: string
  image?: any
}

export enum CustomToastType {
  SUCCESS = 1,
  ERROR,
  INFO,
}

export const showCustomToast = ({ type, message, image }: CustomToastProps) => {
  const toastId = type || 0
  const getImage = (toastType?: number) => {
    switch (toastType) {
      case CustomToastType.SUCCESS:
        return toastSuccessImage
      case CustomToastType.ERROR:
        return toastErrorImage
      case CustomToastType.INFO:
        return toastInfoImage
      default:
        return image || toastInfoImage
    }
  }
  if (!toast.isActive(toastId)) {
    toast(
      <div className="text-6-regular">
        <Image src={getImage(type)} /> {message}
      </div>,
      {
        position: toast.POSITION.TOP_RIGHT,
        toastId: toastId,
      }
    )
  }

}
