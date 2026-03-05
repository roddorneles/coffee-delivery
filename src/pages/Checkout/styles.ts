import styled from "styled-components";

export const CheckoutContainer = styled.div`

    display: flex;
    
    form {

        display: flex;
        gap: 2rem;
        width: 100%;
        align-items: flex-start;
        
        > * {             
            flex: 1;
            min-width: 0;
        }
    }

`