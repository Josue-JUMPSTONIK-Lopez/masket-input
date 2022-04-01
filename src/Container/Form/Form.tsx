import styled from 'styled-components';
import { device } from '../../utils/utils';



export const Form = styled.form`
    border: 1px solid black;
    width: 100%;
    height: 100%;
    padding: 20px;
    background: var(--primary);
    gap: 10px;
    overflow: hidden;
    min-width: 320px;

    @media ${device.mobile} {
        display:flex;
        flex-direction: column;
    }

    @media ${device.tablet} {
        display: grid;
        grid-template-columns: repeat(6, minmax(0,1fr)); 
        grid-template-rows: repeat(16, minmax(0,1fr));
    }
`