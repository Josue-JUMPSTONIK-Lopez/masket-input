import styled, { css } from 'styled-components';
import { device } from '../../utils/utils';

interface LabelTypes{
    typeOfOption:boolean,
    isOptional: boolean,
}

export const Label = styled.label<LabelTypes>`
    font-weight: bold;

    ${props => !props.isOptional&&
    css`
        &:after{
            content: "*";
            color: red;
        }
    `
    }

    @media ${device.mobile} {
        ${props => props.typeOfOption?
        css`
            font-size: 1.5rem;
        `:
        css`
            font-size: 1.2rem;
            color: red;
        `
        }
    }

    @media ${device.tablet} {
        ${props => props.typeOfOption?
        css`
            font-size: 1.6rem;
        `:
        css`
            font-size: 1.2rem;
            color: red;
        `
        }
    }

    @media ${device.laptop} {
        
        ${props => props.typeOfOption?
        css`
            font-size: 1.9rem;
        `:
        css`
            font-size: 1.2rem;
            color: red;
        `
        }
    }
`