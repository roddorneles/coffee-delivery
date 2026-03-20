import styled from "styled-components";

export const ConfirmedOrderContainer = styled.div`

    display: flex;
    flex-direction: column;

    .subtitle{
        color: ${props => props.theme["base-subtitle"]};
        font-family: "Roboto";
        font-size: 1.25rem; 
        margin-bottom: 2.5rem;
    }

    h1 {
        color: ${props => props.theme["yellow-dark"]};
        font-family: "Baloo 2";
        font-size: 3rem;
    }

    .confirmed-order-section {
        display: flex;
        gap: 0.75rem;

        .column-align { 
            display: flex;
            flex-direction: column;
        }

    }

    .checkout-info-section{        
        padding: 40px;
        
        display: flex;
        flex-direction: column;
        gap: 2rem;

        font-family: 'Roboto';
        font-size: 1rem;
        color: ${props => props.theme["base-text"]};

        border-style: solid;
        border-width: 1px;
        border-color: linear-gradient(90deg, orange, purple) border-box;

        border-top-right-radius: 36px;
        border-bottom-left-radius: 36px;

        border-top-left-radius: 6px;
        border-bottom-right-radius: 6px;

        border: 1px solid transparent;

    background: 
    linear-gradient(white, white) padding-box,
    linear-gradient(90deg, #DBAC2C, #8047F8) border-box;
    }

    .screen-confirmed-order{
        display: flex;
        flex-direction: row;
        gap: 6.25rem;

        > * {
            flex-grow: 1;
        }
        
    }    

`

const CIRCLE_COLOR = {
    yellowDark: 'yellow-dark',
    yellow: 'yellow',
    purple: 'purple'
} as const

interface IconCircleProps {
    $circleColor: keyof typeof CIRCLE_COLOR;
}

export const IconCircle = styled.div<IconCircleProps>`

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    background-color: ${props => props.theme[CIRCLE_COLOR[props.$circleColor]]};
    border-radius: 20px;

    svg {
        color: white;
    }

`