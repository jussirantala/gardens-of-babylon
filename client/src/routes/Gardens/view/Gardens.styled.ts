import styled from 'styled-components';

export const MainContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    background-color: black;
    flex-direction: column;
`;

export const TabsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    background-color: white;
`;

export const Tab = styled.div`
    user-select: none;
    padding: 10px;
    cursor: pointer;
    color: #03363d;
    ${(props: any) => props['is-selected'] ? `
        background-color: #03363D;
        color: white;
    ` : `
        &:hover {
            color: #087c61;
            text-decoration: underline;
        }
    `}
`;