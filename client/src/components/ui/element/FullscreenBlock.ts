import styled from 'styled-components';
import { colorBackgroundLight } from '../defaultStyles';

export const FullscreenBlock = styled.div`
    display: flex;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${colorBackgroundLight};
    position: fixed;
    z-index: 999;
    justify-content: center;
    align-items: center;
`;
