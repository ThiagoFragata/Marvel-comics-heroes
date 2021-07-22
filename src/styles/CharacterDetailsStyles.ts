import styled from "styled-components";

export const Container = styled.main`
    max-width: 1024px;
    margin: 0 auto 4rem;

    h1 {
        margin-top: 4rem;
    }
`;

export const Content = styled.div`
    display: flex;

    justify-content: center;
    align-items: center;

    .containerImage {
        img {
            border: 4px solid var(--black);
            border-radius: .25rem;
            height: 100%;
        }
    }

    .context {
        position: relative;

        .name {
            
            display: inline-flex;
            position: absolute;
            left: -25px;
            top: -20px;

            h2 {
                padding: 0.5rem 0.8rem;
                background-color: var(--red);
                color: var(--white);
                font-size: 1.5rem;
                font-weight: 700;
                border-radius: .25rem;
            }
        }

        .description {
            padding: 3rem 2rem 4rem;
            
            border-top: 4px solid var(--black);
            border-right: 4px solid var(--black);
            border-bottom: 4px solid var(--black);
            border-radius: .25rem;
            color: var(--black);

            display: flex;
            justify-content: center;
            align-items: center;

            font-size: 1.2rem;
        }
    }
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto;
    grid-gap: 30px;
`;
