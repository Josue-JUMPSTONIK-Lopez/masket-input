
import styled from 'styled-components';
import { device } from '../../utils/utils';

interface TitleTypes {
    col_start: number,
    col_end: number,
    row_start: number,
    row_end: number,
    order:number
}

export const Title = styled("h1")<TitleTypes>`
    
    display:flex;
    align-items: center;
    border-top: 1px solid var(--complementary);
    border-bottom: 1px solid var(--complementary);

    @media ${device.mobile}{
        font-size: 1.95rem;
        order: ${props => props.order}
    }

    @media ${device.tablet} {
        font-size: 2.4rem;
        grid-column: ${props => props.col_start} / ${props => props.col_end};
        grid-row:    ${props => props.row_start} / ${props => props.row_end};
    }

    @media ${device.laptop} {
        font-size: 2.8rem;
    }
`