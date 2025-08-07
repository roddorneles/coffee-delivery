import styled from "styled-components";

export const InputNumberContainer = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    padding: 0.5rem;
    border-radius: 6px;
    
    color: ${props => props.theme["base-title"]};
    background-color: ${props => props.theme["base-button"]};

    button {

        display: flex;
        justify-content: center;
        align-items: center;

        background-color: transparent;
        border: 0;
        color: ${props => props.theme["purple"]};


        &:hover{
            color: ${props => props.theme["purple-dark"]};
            transition: 0.2s;
        }
    }



`
