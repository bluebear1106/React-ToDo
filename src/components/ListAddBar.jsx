import React from "react";
import styled from "styled-components";
import Colors from "../colors/colors";

const StyledBox = styled.div`
    height: 32px;
    display: flex;
    align-items: stretch;
    justify-content: center;
`;

const StyledDiv = styled.div`
    width: 32px;
    background: skyblue;
`;

const StyledInput = styled.input`
    width: 500px;
    background: White;
    border: 2px solid ${Colors.AAAAAA};
    outline: none;
    &:focus {
        border: 2px solid ${Colors.A4EBF3};
    }
`;

const StyledButton = styled.button`
    background: ${Colors.A4EBF3};
    width: 60px;
    outline: none;
    border: none;
    font-weight: bold;
    color: white;
`;

const ListAddBar = () => {
    return (
        <>
            <StyledBox>
                <StyledDiv />
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
