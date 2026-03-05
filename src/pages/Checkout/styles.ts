import styled from "styled-components";

export const CheckoutContainer = styled.div`

    display: flex;
    
    form {

        display: flex;
        gap: 2rem;
        width: 100%;
        align-items: flex-start;
        
        > :first-child {
            flex: 3;
            min-width: 0;
        }

        > :last-child {
            flex: 2;
            min-width: 0;
        }
    }

`