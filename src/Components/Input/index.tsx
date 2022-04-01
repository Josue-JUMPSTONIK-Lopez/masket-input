import styled, { css } from 'styled-components';

interface InputTypes{
    typeOfInput:  string
}

export const Input = styled.input<InputTypes>`
    
    width: 100%;
    font-size: 1.5rem;
    border: 1px solid var(--secondary);
    border-radius: 5px;
    ${props => (props.typeOfInput === 'date' || props.typeOfInput === 'month') ?
    css`
        padding: 3.8px;
    `:
    css`
        padding: 6px;
    `}

    &:active{
        border: 1px solid var(--complementary)
    }
`