import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 25vh;
`;

export const Loader = styled.div`
    animation: is-rotating 1s infinite;
    border: 6px solid var(--black);
    border-radius: 50%;
    border-top-color: var(--red);
    height: 50px;
    width: 50px;

    @keyframes is-rotating {
        to {
            transform: rotate(1turn);
        }
    }
`;
