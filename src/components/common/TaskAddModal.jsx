import React, { useState } from "react";
import styled from "styled-components";
import Colors from "../../colors/colors";
import Modal from "./Modal";

const StyledInput = styled.input`
    width: 100%;
    height: 30px;
    border: none;
    border-bottom: 2px solid ${Colors.AAAAAA};
    outline: none;
    background: white;
    font-size: bold;
    margin-bottom: 10px;
    padding: 0px;

    &:focus {
        border-bottom: 2px solid ${Colors.A4EBF3};
    }
`;

const Content = ({ onChange }) => {
    return <StyledInput type="text" placeholder="추가할 작업을 적어주세요.." onChange={onChange} />;
};

const TaskAddModal = ({ visible, onCancel, onConfirm }) => {
    const [text, setText] = useState("");
    const onChange = (e) => {
        setText(e.target.value);
    };

    return (
        <Modal
            visible={visible}
            title="작업 추가"
            //content={<Content onChange={onChange} />}
            onCancel={onCancel}
            confirmText="추가"
            onConfirm={() => onConfirm(text)}
        >
            <Content onChange={onChange} />
        </Modal>
    );
};

export default TaskAddModal;
