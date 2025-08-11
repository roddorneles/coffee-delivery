import styled from "styled-components";

export const DeleteItemButtonContainer = styled.button`

    border: 0;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    padding: 0.5rem;
    border-radius: 6px;
    
    color: ${props => props.theme["purple"]};
    background-color: ${props => props.theme["base-button"]};

    span {
        font-size: 0.75rem;
        color: ${props => props.theme["base-text"]};
    }

    &:hover{
        color: ${props => props.theme["purple-dark"]};
        background-color: ${props => props.theme["base-hover"]};
        transition: 0.2s;
    }

`