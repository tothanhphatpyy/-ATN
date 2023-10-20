import { CustomToastType, showCustomToast } from '@shared/common/CustomToast/CustomToast'
import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'

const DemoCustomToast = () => {
    const showSuccessToast = () => {
        showCustomToast({
            type: CustomToastType.SUCCESS,
            message: "Success",
        })
    }

    const showErrorToast = () => {
        showCustomToast({
            type: CustomToastType.ERROR,
            message: "Error",
        })
    }

    const showInfoToast = () => {
        showCustomToast({
            type: CustomToastType.INFO,
            message: "Info",
        })
    }
  return (
    <Row className="my-3">
      <Col>
        <Button onClick={showSuccessToast}>Show Success Toast</Button>
      </Col>
      <Col>
        <Button onClick={showErrorToast}>Show Error Toast</Button>
      </Col>
      <Col>
        <Button onClick={showInfoToast}>Show Info Toast</Button>
      </Col>
    </Row>
  )
}

export default DemoCustomToast