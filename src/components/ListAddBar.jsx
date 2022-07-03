import React, { useState } from "react";
import styled from "styled-components";
import Colors from "../colors/colors";
import { FontAwesomeIcon } from "../../node_modules/@fortawesome/react-fontawesome/index";
import { faPlus } from "../../node_modules/@fortawesome/free-solid-svg-icons/index";
import Modal from "./common/Modal";

const StyledBox = styled.div`
    background: white;
    width: 600px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px auto 0 auto;
`;

const StyledIcon = styled(FontAwesomeIcon)`
    width: 35px;
    padding: 2px;
`;

const StyledInput = styled.input`
    //width: 500px;
    flex-grow: 2;
    align-self: stretch;
    background: White;
    border: none;
    outline: none;
    margin-left: 5px;
    padding: 0;

    &:focus {
        //border: 1px solid ${Colors.A4EBF3};
    }
`;

const StyledButton = styled.button`
    background: ${Colors.A4EBF3};
    align-self: stretch;
    width: 60px;
    outline: none;
    border: none;
    font-weight: bold;
    color: white;

    &:hover {
        background: ${Colors.CCF2F4};
    }
`;

const ListAddBar = ({ taskId, onToDoAdd }) => {
    const [text, setText] = useState("");
    const [modal, setModal] = useState(false);

    const onChange = (e) => {
        setText(e.target.value);
    };

    const onAdd = () => {
        if (text === "") {
            setModal(true);
            return;
        }
        onToDoAdd(taskId, text);
        setText("");
    };

    const onModalConfirm = () => {
        setModal(false);
    };

    return (
        <>
            <StyledBox>
                <StyledIcon icon={faPlus} size="1x" />
                <StyledInput type="text" placeholder="추가할 일정을 입력해주세요." value={text} onChange={onChange} />
                <StyledButton onClick={onAdd}>추가</StyledButton>
                <Modal visible={modal} title="정보" confirmText="확인" onCancel={false} onConfirm={onModalConfirm}>
                    <p>내용을 적어주세요!</p>
                </Modal>
            </StyledBox>
        </>
    );
};

export default ListAddBar;
