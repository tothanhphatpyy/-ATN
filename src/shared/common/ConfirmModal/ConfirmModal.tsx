import React, { useImperativeHandle, useState } from "react"
import { Button, Image, Modal, Stack } from "react-bootstrap"
import confirmModalTrash from "@assets/images/logo/Logo-DigiBird.png"
import confirmModalSaveFile from "@assets/images/logo/Logo-DigiBird.png"

export interface GlobalMessageProps {
  title?: string
  source?: string
  content?: string
  acceptButton?: ActionButton
  cancelButton?: ActionButton
  rightContent?: React.ReactNode
  type?: ConfirmType
  isNotTimeout?: boolean
  // showClose?: boolean
  res?: any
}

export interface ActionButton {
  text?: string
  onClick?: () => void
}

export const confirmModalRef = React.createRef<any>()
export const confirmModal = {
  show: (props: GlobalMessageProps) => {
    confirmModalRef?.current?.show(props)
  },
}

export enum ConfirmType {
  Delete,
  Save,
  Info,
  Warning,
  Follow,
}

const ConfirmModal = React.forwardRef((props, ref) => {
  const [visible, setVisible] = useState<boolean>(false)
  const [source, setSource] = useState<string>("")
  const [title, setTitle] = useState<string>("Bạn chắc chắn chứ?")
  const [content, setContent] = useState<string>()
  const [buttonAcceptText, setButtonAcceptText] = useState<string>("Đồng ý")
  const [buttonCancelText, setButtonCancelText] = useState<string>()
  const [onPressAcceptButton, setOnPressAcceptButton] = useState<() => void>(
    () => () => {}
  )
  const [onPressCancelButton, setOnPressCancelButton] = useState<() => void>(
    () => () => {}
  )
  const [type, setType] = useState<ConfirmType | any>()
  const [showClose, setShowClose] = useState<boolean>(true)

  useImperativeHandle(ref, () => {
    return { show }
  })

  const renderStyle = (type?: number): any => {
    switch (type) {
      case ConfirmType.Delete:
        return confirmModalTrash
      case ConfirmType.Save:
        return confirmModalSaveFile
      case ConfirmType.Follow:
        return <div>okela</div>
      default:
        return source || ""
    }
  }

  const show = (props: GlobalMessageProps) => {
    const {
      title,
      content,
      acceptButton,
      cancelButton,
      source,
      rightContent,
      type,
      // showClose = true,
      res,
    } = props
    setVisible(true)
    title && setTitle(title)
    source && setSource(source)
    acceptButton && setButtonAcceptText(acceptButton?.text || "")
    cancelButton && setButtonCancelText(cancelButton?.text || "")
    acceptButton && setOnPressAcceptButton(() => acceptButton?.onClick)
    cancelButton && setOnPressCancelButton(() => cancelButton?.onClick)
    type && setType(type)
    content && setContent(content)
    setShowClose(showClose)
  }

  const hide = async () => {
    setTitle("Bạn chắc chắn chứ?")
    setSource("")
    setContent("")
    setButtonCancelText("")
    setOnPressAcceptButton(() => () => {})
    setOnPressCancelButton(() => () => {})
    setVisible(false)
    setShowClose(true)
    setType("")
  }

  return (
    <Modal show={visible} onHide={hide} size="sm" centered className="px-3">
      <Modal.Body>
        <Stack className='mx-auto py-3' gap={3}>
          <div className="mx-auto">
            {(renderStyle(type) instanceof String)}
          {(typeof renderStyle(type) == 'string') ? <Image src={renderStyle(type)} fluid /> : renderStyle(type)}
          </div>
          <div className='mx-auto'>
            <p className='text-4-medium text-black text-center'>{title}</p>
            <p className='text-6-regular text-center'>{content}</p>
          </div>
          <Stack gap={3} className=''>
            <Button
              onClick={async () => {
                await hide()
                onPressAcceptButton && onPressAcceptButton()
              }}
            >
              {buttonAcceptText}
            </Button>
            {!!buttonCancelText && (
              <Button
                variant='outline-secondary'
                onClick={async () => {
                  await hide()
                  onPressCancelButton && onPressCancelButton()
                }}
              >
                {buttonCancelText}
              </Button>
            )}
          </Stack>
        </Stack>
      </Modal.Body>
    </Modal>
  )
})

export default ConfirmModal
