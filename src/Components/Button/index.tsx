import styled from 'styled-components';
import { device } from '../../utils/utils';

interface ButtonTypes {
    col_start: number,
    col_end: number,
    row_start: number,
    row_end: number,
    order: number
  }

export const Button = styled.button<ButtonTypes>`

    background: white;
    border: 1px solid var(--complementary);
    border-radius: 10px;
    font-size: 3rem;
    
    font-family: Monserrat;
    align-self: center;
    
    @media ${device.mobile}{
      order: ${props => props.order};
      height: 60%;
      width: 60%;
    }
    
    @media ${device.tablet} {
      grid-column: ${props => props.col_start} / ${props => props.col_end};
      grid-row:    ${props => props.row_start} / ${props => props.row_end};
      justify-self: center;
      height: 70%;
      width: 70%;
      
    }
`