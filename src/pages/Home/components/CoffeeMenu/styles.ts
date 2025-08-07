import styled from "styled-components";

export const CoffeeMenuContainer = styled.section`

    h2 {
        font-family: "Baloo 2", sans-serif;
        font-weight: bolder;
        font-size: 2rem;
        color: ${props => props.theme["base-subtitle"]};

        margin-bottom: 2rem;
    }

`
export const CoffeesCatalogContainer = styled.div`
    
    display: flex;
    gap: 2rem;
    align-items: center;
    flex-wrap: wrap;

`