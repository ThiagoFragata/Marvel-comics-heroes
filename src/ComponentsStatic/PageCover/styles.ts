import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    background: url(https://images.unsplash.com/photo-1620928572438-075c466c48da?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)
        no-repeat bottom;
    background-size: cover;
    margin-bottom: 4rem;

    display: flex;
    justify-content: center;

    .content {
        max-width: 1024px;
        width: 100%;
        padding: 4rem 1rem;

        h1 {
            position: relative;
            bottom: -1rem;
            left: -1rem;
            display: inline-block;
            padding: 0.5rem 1rem;

            border-radius: .25rem;

            background-color: var(--red);
            color: var(--white);
            font-weight: 700;
        }

        p {
            background-color: var(--white);
            border: 4px solid var(--black);
            border-radius: .25rem;
            padding: 2rem 1.5rem;
        }
    }
`;
