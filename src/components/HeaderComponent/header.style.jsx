import styled from "styled-components";

export const Nav = styled.div`
    display: flex;
    width: 100%;
    /* padding: .5rem 1rem .5rem 0; */
    background-color: rgb(56, 107, 201);
    color: #fefefe;
    align-items: center;

    & i {
        margin-right: 1rem;
    }
`

export const Conteudo = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const MenuName = styled.span`
    text-transform: uppercase;
`

export const Icon = styled.i`
    font-size: 2rem;
    padding: 0;
`

export const UserInfo = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
`