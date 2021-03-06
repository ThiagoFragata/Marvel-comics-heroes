import styled from "styled-components";

export const Container = styled.footer`
    background-color: var(--black);
    padding: 1.5rem;
    color: var(--white);
    font-size: 1rem;
    font-weight: 400;

    display: flex;
    justify-content: center;

    a {
        color: var(--white);
        margin-left: .5rem;

        transition: color .2s;

        &:hover {
            color: var(--red);
        }
    }
`