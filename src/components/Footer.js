import React from 'react'
import styled from 'styled-components'

export default function Footer() {

    return (
        <FooterPane>
            <TextInside>
                <HoverLink href="mailto:minsulee.dev@gmail.com" target="_blank" rel="noreferrer"> Email </HoverLink> 
                | 
                <HoverLink href="https://github.com/stellarsailor" target="_blank" rel="noreferrer"> GitHub </HoverLink> 
                | 
                <HoverLink href="https://www.linkedin.com/in/minsu-lee-b6818b198/" target="_blank" rel="noreferrer"> LinkedIn </HoverLink> 
                |
                <HoverLink href="https://www.instagram.com/stellarsalior" target="_blank" rel="noreferrer"> Instagram </HoverLink>
                </TextInside>
            <TextInside>
                ⓒ 2020 Minsu Lee All Rights Reserved.
            </TextInside>
        </FooterPane>
    )
}

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

const HoverLink = styled.a`
    color: var(--mono-4);
    transition: opacity .3s cubic-bezier(0.25, 0.1, 0.25, 1);
    &:hover {
        color: var(--mono-6);
        opacity: 1;
        cursor: pointer;
    }
`