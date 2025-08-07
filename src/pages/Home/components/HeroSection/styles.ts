import styled from "styled-components";
import { defaultTheme } from "../../../../styles/themes/default";

export type IconBackGroundVariant = "purple" | "yellowDark" | "yellowLight" | "gray"

interface IconWrapperProps {
    $iconBackground: IconBackGroundVariant
}

const iconBackgroundVariants = {
    purple: defaultTheme["purple"],
    yellowDark: defaultTheme["yellow-dark"],
    yellowLight: defaultTheme["yellow"],
    gray: defaultTheme["base-text"]
} as const

export const HeroSectionContainer = styled.section`
    display: flex;
    /* height: calc(100vh - 15rem); */

    margin-top: 5rem;
`

export const HeroSectionContent = styled.section`

    display: flex;
    align-items: center;
    gap: 3.5rem;

    & > * {
        flex: 1
    }

    h1 {    
        font-family:  'Baloo 2', sans-serif;
        font-weight: bolder;
        font-size: 3rem;
        line-height: 130%;
        
        color: ${props => props.theme["base-title"]};

        margin-bottom: 1rem;
    }

    h2 {
        font-family:  'Roboto', sans-serif;
        font-weight: normal;
        font-size: 1.25rem;
        line-height: 130%;

        margin-bottom: 4rem;

        color: ${props => props.theme["base-subtitle"]};
    }

    span{
        font-size: 1rem;
    }

    div.left-side{
        display: flex;
        flex-direction: column;
    }

`

export const BenefitsContainer = styled.div`
    display: grid;
    grid-template-columns: 2fr 2.5fr; // 2 colunas com largura igual
    gap: 1.25rem 2.5rem; // row-gap, column-gap

    div.benefits-row{
        display: flex;
        align-items: center;
        gap: 0.75rem;

    }
`

export const BenefitsRow = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;

`

export const IconWrapper = styled.div<IconWrapperProps>`

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0.5rem;
    border-radius: 100px;

    background-color: ${props => iconBackgroundVariants[props.$iconBackground]};
    color: white;
`