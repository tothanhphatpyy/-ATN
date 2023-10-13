import React from 'react'
import { Button, Container, ThemeProvider } from 'react-bootstrap'
import { GlobalLoading } from '@shared/common/GlobalLoading' 
import { globalLoading, globalLoadingRef } from '@shared/common/GlobalLoading/GlobalLoading'

import { DemoConfirmModal } from './Component/DemoConfirmModal'
import { ConfirmModal } from '@shared/common/ConfirmModal'
import { confirmModalRef } from '@shared/common/ConfirmModal/ConfirmModal'
import { ToastContainer } from 'react-toastify'
import DemoCustomToast from './Component/DemoCustomToast/DemoCustomToast'
import { DemoFormInput } from './Component/DemoFormInput'
/* import { CustomTable } from '@shared/common/CustomTable'
import { DemoTable } from './Component/DemoTable' */

const Demo = () => {

    const handleClickLoading3s = () => {
        globalLoading.show();
        setTimeout(() => {
            globalLoading.hide();
        }, 3000)
    }
    return (
        <>
            <GlobalLoading ref={globalLoadingRef} />
            <ConfirmModal ref={confirmModalRef} />
            <ToastContainer />
            <Container className='bg-white'>
                <DemoFormInput />
                <Button className='my-3' onClick={handleClickLoading3s}>Loading 3s ...</Button>
                {/* <DemoTable /> */}
                <DemoConfirmModal />
                <DemoCustomToast />
            </Container>
        </>
    )
}

export default Demo