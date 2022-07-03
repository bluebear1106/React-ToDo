import React from "react";
import styled from "styled-components";
import Colors from "../../colors/colors";

const StyledModalBack = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.25);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
`;

const StyledModalBox = styled.div`
    width: 320px;
    background: white;
    padding: 10px;
    border-radius: 4px;

    h2 {
        margin-top: 0px;
    }

    p {
        //margin: 0;
    }

    .modal-content {
    }

    .modal-btn {
        display: flex;
        justify-content: space-around;
        border-top: 1px solid ${Colors.A4EBF3};
    }
`;

const StyleModalButton = styled.button`
    width: 120px;
    height: 30px;
    background: ${Colors.A4EBF3};
    border-radius: 4px;
    border: none;
    color: white;
    font-weight: bold;
    margin-top: 15px;
    margin-bottom: 5px;

    &:hover {
        background: ${Colors.CCF2F4};
    }
`;

const Modal = ({
    children,
    visible,
    title,
    content,
    onCancel,
    cancelText = "취소",
    onConfirm,
    confirmText = "확인",
}) => {
    return (
        <>
            {visible && (
                <StyledModalBack>
                    <StyledModalBox>
                        <h2>{title}</h2>
                        <>{children}</>
                        <div className="modal-btn">
                            {onCancel !== false ? (
                                <StyleModalButton onClick={onCancel}>{cancelText}</StyleModalButton>
                            ) : null}
                            <StyleModalButton onClick={onConfirm}>{confirmText}</StyleModalButton>
                        </div>
                    </StyledModalBox>
                </StyledModalBack>
            )}
        </>
    );
};

export default Modal;
