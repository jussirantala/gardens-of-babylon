import styled from 'styled-components';

export const MainContainer = styled.div`
    flex: 1;
    color: white;
`;

export const Tooltip = styled.span`
    position: absolute;
    bottom: 10px;
    left: 10px;
    padding: 5px;
    background-color: rgba(0,0,0,0.5);
    color: white;
    z-index: 9999;
`;