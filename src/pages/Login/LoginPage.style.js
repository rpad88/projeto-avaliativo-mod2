import styled from "styled-components";

export const LoginContainer = styled.div`
    display: grid;
    width: 100%;
    height: 100%;
    place-items: center;
`

export const Container = styled.div`
    max-width: 800px;

    @media (min-width: 580px) {
        display: flex;
    }
`