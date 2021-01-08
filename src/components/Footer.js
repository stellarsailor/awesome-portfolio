import React from 'react'
import styled from 'styled-components'

const FooterPane = styled.div`
    margin-top: 3rem;
    background-color: var(--mono-2);
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const TextInside = styled.div`
    color: var(--mono-4);
    margin-bottom: 4px;
`

export default function Footer() {

    return (
        <FooterPane>
            <TextInside>
            <a href="mailto:dev.stellarsailor@gmail.com" target="_blank" rel="noreferrer"> Email </a> 
            | 
            <a href="https://github.com/stellarsailor" target="_blank" rel="noreferrer"> GitHub </a> 
            | 
            <a href="https://www.linkedin.com/in/minsu-lee-b6818b198/" target="_blank" rel="noreferrer"> LinkedIn </a> 
            |
            <a href="https://www.instagram.com/stellarsalior" target="_blank" rel="noreferrer"> Instagram </a>
            </TextInside>
            <TextInside>
                ⓒ 2020 Minsu Lee All Rights Reserved.
            </TextInside>
        </FooterPane>
    )
}