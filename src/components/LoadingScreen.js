import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    background-color: #f5f5f5;
    width: 100%;
    height: 80vh;
    position: absolute;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default function LoadingScreen(){

    return(
        <Container>
            Loading...
        </Container>
    )
}