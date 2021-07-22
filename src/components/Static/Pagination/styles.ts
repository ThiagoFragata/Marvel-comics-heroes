import styled from "styled-components";

export const Container = styled.div`
    margin: 60px;
    display: flex;
    justify-content: center;
    align-items: center;

    ul {
        display: flex;

        li {
            margin: 0 0.5rem;

            button {
                background: var(--black);
                color: var(--white);
                border: 1px solid var(--black);

                padding: 0.5rem 1rem;
                border-radius: .25rem;
                
                font-weight: 700;

                transition: background .2s;

                &:hover {
                    background: var(--white);
                    color: var(--black);
                }
            }

            .current-page {
                background: var(--white);
                color: var(--red);
                border-color: var(--red);
            }
        }
    }
`;
