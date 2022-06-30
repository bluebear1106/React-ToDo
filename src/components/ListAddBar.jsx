import React from "react";
import styled from "styled-components";
import Colors from "../colors/colors";
import { FontAwesomeIcon } from "../../node_modules/@fortawesome/react-fontawesome/index";
import { faPlus } from "../../node_modules/@fortawesome/free-solid-svg-icons/index";

const StyledBox = styled.div`
    background: white;
    width: 600px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
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

const ListAddBar = () => {
    return (
        <>
            <StyledBox>
                <StyledIcon icon={faPlus} size="1x" />
                <StyledInput
                    type="text"
                    placeholder="추가할 일정을 입력해주세요."
                />
                <StyledButton>추가</StyledButton>
            </StyledBox>
        </>
    );
};

export default ListAddBar;
