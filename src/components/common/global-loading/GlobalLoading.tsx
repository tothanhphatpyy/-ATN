import React, { useImperativeHandle, useState } from 'react'
import "./style.css";
import { Spinner } from 'react-bootstrap';

export const globalLoadingRef = React.createRef<any>();

export const globalLoading = {
    show: () => {
        globalLoadingRef?.current?.show();
    },
    hide: () => {
        globalLoadingRef?.current?.hide();
    },
};

const GlobalLoading = React.forwardRef((props, ref) => {

    const [loading, setLoading] = useState(false);
    const show = () => {
        setLoading(true);
    };

    const hide = () => {
        setLoading(false);
    };

    useImperativeHandle(ref, () => {
        return { show: show, hide: hide };
    });

    return loading ? (
        <>
            <div className='overlay'>

                <div id="container">
                    <Spinner animation="border" role="status" />
                    <p id="svg-para">Loading...</p>
                </div>
            </div>
        </>
    ) : (
        <></>
    );
})

export default GlobalLoading