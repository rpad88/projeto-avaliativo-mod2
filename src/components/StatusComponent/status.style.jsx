import styled from "styled-components";

export const StatusContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
`

export const StatusTitle = styled.h5`
    text-transform: uppercase;
`

export const StatusWrapper = styled.div`
    display: flex;
    justify-content: space-around;
`
export const StatusCard = styled.div`
    border: 1px solid #d3d3d3;
    padding: .5rem 1rem;
    border-radius: .5rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    div {
        display: flex;
        align-items: baseline;
        justify-content: center;
    }

    &:hover {
        box-shadow: 0 0 5px #d3d3d3;
    }
`

export const IconCategory = styled.i`
    font-size: 3rem;
    margin-right: 5px;
`

export const SpanQtd = styled.span`
    font-weight: bold;
    font-size: 2rem;
`