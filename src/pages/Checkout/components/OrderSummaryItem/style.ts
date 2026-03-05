import styled from "styled-components";

export const OrderSummaryItemContainer = styled.div`

    padding: 0.5rem;

    display: flex;
    align-items: flex-start;
    gap: 1.25rem;

    color: ${props => props.theme["base-subtitle"]};

    padding-bottom: 1.5rem;

    border-bottom: 1px solid ${props => props.theme["base-button"]};

    /* make this a full‑width, shrinkable flex item */
    width: 100%;
    min-width: 0;

    img {
        max-width: 4rem;
        max-height: 4rem;
        flex-shrink: 0;
    }

    >.coffee-price{
        align-self: flex-start;
        font-weight: bold;
        color: ${props => props.theme["base-text"]};
        flex-shrink: 0;
    }

`

export const OrderSummaryItemAmountContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    min-width: 0;

    .buttons {
        display: flex;
        gap: 0.5rem;
    }
`