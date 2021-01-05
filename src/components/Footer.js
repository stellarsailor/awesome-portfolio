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
    color: var(--mono-5);
    margin-bottom: 4px;
`

export default function Footer() {

    return (
        <FooterPane>
            <TextInside>
                Email | GitHub | LinkedIn | Instagram
            </TextInside>
            <TextInside>
                ⓒ 2020 Minsu Lee All Rights Reserved.
            </TextInside>
        </FooterPane>
    )
}