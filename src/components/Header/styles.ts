import styled from "styled-components";

export const HeaderContainer = styled.header`
    padding: 2rem 0rem;
    background-color: ${props => props.theme["white"]};
`

export const HeaderContent = styled.div`
    width: 100%;
    
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
        display: flex;
        gap: 0.75rem;
    }
`

export const LocationContainer = styled.div`
    padding: 0.5rem;
    border-radius: 6px;
    
    background-color: ${props => props.theme["purple-light"]};
    color: ${props => props.theme["purple-dark"]};
    font-size: 0.875rem;
    
    display: flex;
    align-items: center;
    gap: 0.25rem

`