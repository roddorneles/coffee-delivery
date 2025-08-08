import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    
    padding: 0rem 1.5rem 1.25rem 1.5rem;

    position: relative;
    
    border-top-right-radius: 36px;
    border-bottom-left-radius: 36px;

    border-bottom-right-radius: 6px;
    border-top-left-radius: 6px;

    background: ${props => props.theme["base-card"]};
    
    max-width: 16rem;

    margin-top: 2rem;

    img {
        margin-top: -2rem;
    }
    
    h3 {
        font: bold 1.25rem "Baloo 2", sans-serif;

        margin-bottom: 0.5rem;
    }

    span.coffee-description{
        font-size: 0.875rem;
        color: ${props => props.theme["base-label"]};
        text-align: center;

        margin-bottom: 2rem;

    }

`

export const CoffeeCategoriesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    row-gap: 0.25rem;

    margin: 1rem;
`

export const CoffeeCategory = styled.span`
    font-family: "Roboto", sans-serif;
    font-size: 0.625rem;
    font-weight: bold;

    padding: 0.25rem 0.5rem;
    background-color: ${props => props.theme["yellow-light"]};
    border-radius: 100px;

    color: ${props => props.theme["yellow-dark"]};

    text-transform: uppercase;
`

export const PriceCoffeeCard = styled.div`

    width: 100%;
    
    flex: 1;
    display: flex;
    align-items: flex-end;
    
    div.price-actions{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    span.coffee-coin{
        font-size: 0.875rem;
        color: ${props => props.theme["base-text"]};
    }

    span.coffee-price{
        font-family: "Baloo 2", sans-serif;
        font-weight: bolder;
        font-size: 1.5rem;
        color: ${props => props.theme["base-text"]};
    }

    div.amount-and-cart{
        display: flex;
        gap: 0.5rem;
    }

`