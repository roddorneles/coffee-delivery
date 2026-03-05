import styled from "styled-components";

export const SelectedCoffeesMenuContainer = styled.div`

    h2 {
        font-family: 'Baloo 2';
        font-weight: bold;
        font-size: 1.125rem;
        color: ${props => props.theme["base-subtitle"]};
        margin-bottom: 0.75rem;
    }

`
export const OrderSummary = styled.div`

    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    background-color: ${props => props.theme["base-card"]};

    padding: 2.5rem;

    border-top-right-radius: 44px;
    border-bottom-left-radius: 44px;

    border-top-left-radius: 6px;
    border-bottom-right-radius: 6px;

    /* allow children to shrink and prevent horizontal overflow */
    > * {
        min-width: 0;
    }

    /* clip any accidental overflow so grey box always encloses content */
    overflow: hidden;
`



export const PricesInOrderSummary = styled.div`

    display: flex;
    flex-direction: column;

    color: ${props => props.theme["base-text"]};
    font-size: 0.875rem;

    gap: 0.75rem;
    

`

export const PricesInOrderSummaryLine = styled.div`

    display: flex;
    justify-content: space-between;

    &.total-price{
       color: ${props => props.theme["base-subtitle"]};
       font-size: 1.25rem;
       font-weight: bold;
    }

`
export const FinishOrderButton = styled.button`

    width: 100%;
    border: 0;
    padding: 1rem;
    border-radius: 6px;

    display: flex;
    align-items: center;
    justify-content: center;
    
    gap: 0.5rem;
    font-weight: bold;
    font-size: 0.875rem;
    cursor: pointer;

    text-transform: uppercase;

    background-color: ${props => props.theme["yellow"]};
    color: white;


`