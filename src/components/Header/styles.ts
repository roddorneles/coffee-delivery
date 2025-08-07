import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 1; 
  padding: 2rem 0rem;
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