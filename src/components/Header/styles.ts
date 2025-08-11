import styled from "styled-components";

export const HeaderContainer = styled.header`
  
  position: sticky;
  top: 0;
  z-index: 1; 
  padding: 2rem 10rem;
  background-color: ${props => props.theme["white"]};
  transition: box-shadow 0.2s ease-in-out;
  
  &.scrolled {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`

export const HeaderContent = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
        display: flex;
        gap: 0.75rem;
    }

`

export const AmountInCartContainer = styled.span`

    position: absolute;
    right: -10px;
    top: -10px;

    min-width: 1.2rem;
    height: 1.25rem;
    padding-inline: 0.4rem; /* aumenta largura conforme texto cresce */

    
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 0.75rem;
    font-weight: bold;
    color: ${props => props.theme["white"]};
    border-radius: 50%;
    background-color: ${props => props.theme["yellow-dark"]};

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
