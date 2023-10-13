import { confirmModal, ConfirmType } from "@shared/common/ConfirmModal/ConfirmModal"
import { CustomToastType, showCustomToast } from "@shared/common/CustomToast"
import React from "react"
import { Button, Col, Row, Stack } from "react-bootstrap"

const DemoConfirmModal = () => {
  const showModalSuccess = () => {
    confirmModal.show({
      content: 'Bạn sẽ không thể khôi phục bản ghi đã xóa',
      acceptButton: {
        text: 'Xóa',
        onClick: () => {
          showCustomToast({
            type: CustomToastType.SUCCESS,
            message: 'Thành công',
          })
        }
      },
      cancelButton: {
        text: 'Hủy'
      }
    })
  }

  const showModalSave = () => {
    confirmModal.show({
      content: 'Bạn có muốn lưu trữ dự án này?',
      type: ConfirmType.Save,
      acceptButton: {
        text: 'Lưu trữ',
      },
      cancelButton: {
        text: 'Hủy'
      }
    })
  }
  return (
    <Row className="my-3">
      <Col>
        <Button onClick={showModalSuccess}>Show Modal Delete</Button>
      </Col>
      <Col>
        <Button onClick={showModalSave}>Show Modal Save</Button>
      </Col>
    </Row>
  )
}

export default DemoConfirmModal
