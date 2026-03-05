
import { CurrencyDollar, MapPinLine } from "phosphor-react";
import styled from "styled-components";
import * as RadioGroup from "@radix-ui/react-radio-group";

export const FinishOrderSectionContainer = styled.div`

    display: flex;
    flex-direction: column;
    gap: 0.75rem;

     h2 {
        font-family: 'Baloo 2';
        font-weight: bold;
        font-size: 1.125rem;
        color: ${props => props.theme["base-subtitle"]};
    }

    .section-header {
        
        display: flex;
        gap: 0.5rem;
        margin-bottom: 2rem;

        h3 {
            color: ${props => props.theme["base-subtitle"]};
            font-size: 1rem;
            font-weight: normal;
            margin-bottom: 0.125rem;
        }

        span{
            color: ${props => props.theme["base-text"]};
            font-size: 0.875rem;
        }
    }

`
export const FinishOrderSectionBoxContainer = styled.div`

    background-color: ${props => props.theme["base-card"]};
    padding: 2.5rem;
    border-radius: 6px;
    
    .inputs-section{
        display: grid;
        /* permite que as colunas encolham abaixo do conteúdo */
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 16px;
    }

    .inputs-section > * {   /* ou .inputs-section input, .inputs-section div, … */
        min-width: 0;
    }
    
    #cep {
        grid-column: span 1;
    }

    #street {
    grid-column: span 3;
    }

    #number {
    grid-column: span 1;
    }

    #complement {
    grid-column: span 2;
    }

    #district {
    grid-column: span 1;
    }

    #city {
    grid-column: span 1;
    }

    #uf {
    grid-column: span 1;
    }


`

export const PinIcon = styled(MapPinLine)`
  color: ${props => props.theme["yellow-dark"]};
`

export const CoinIcon = styled(CurrencyDollar)`
  color: ${props => props.theme["purple"]};
`

export const BaseInput = styled.input`
    background-color: ${props => props.theme["base-input"]};
    height: 2.625rem;
    border: 0;
    border: 1px solid ${props => props.theme["base-button"]};
    border-radius: 4px;
    color: ${props => props.theme["base-text"]};
    font-size: 0.875rem;
    padding: 0.75rem;
    font-family: "Roboto";
    max-width: 100%;

    &:focus{
        box-shadow: none;
        border-color: ${props => props.theme["yellow-dark"]};;
    }

    &::placeholder{
        color: ${props => props.theme["base-label"]};

    }
`
export const PaymentMethod = styled(RadioGroup.Root)`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem;
    margin-top: 0.5rem;
`

export const PaymentMethodButton = styled(RadioGroup.Item)`
    background: ${props => props.theme["base-button"]};
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    border-radius: 6px;
    cursor: pointer;
    border: 0;
    color: ${props => props.theme["base-text"]};
    text-transform: uppercase;
    font-size: 0.75rem;

    svg {
        color: ${props => props.theme["purple"]};
    }

    &[data-state="unchecked"]:hover{
        background: ${props => props.theme["base-hover"]};
    }

    &[data-state="checked"]{
        background-color: ${props => props.theme["purple-light"]};
        border: 1px solid ${props => props.theme["purple"]};
    }

`
