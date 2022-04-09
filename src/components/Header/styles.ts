import styled from "styled-components"

export const Container = styled.header`
    background-color: var(--purple);
`

export const Content = styled.div`
    margin: 0 auto;
    width: 1120px;
    padding: 2rem 1rem 12rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
        font-size: 1rem;
        background-color: var(--purple-light);
        color: white;
        border: none;
        padding: 0 2rem;
        border-radius: .25rem;
        height: 3rem;

        transition: filter .2s;

        &:hover {
            filter: brightness(.95)
        }
    }
`