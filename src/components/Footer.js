import React from 'react'
import styled from 'styled-components'

const FooterPane = styled.div`
    margin-top: 3rem;
    background-color: var(--mono-2);
    width: 100%;
    height: 400px;
`

export default function Footer() {

    return (
        <FooterPane>
            Contact
            Email | GitHub | LinkedIn

            Minsu Lee.
            Copyright ⓒ 2020 Minsu Lee All Rights Reserved.
        </FooterPane>
    )
}