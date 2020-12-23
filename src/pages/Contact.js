import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-grid-system'
import { TextSubTitle, CenteredRow, TextCenterThin } from '../components/StyledComponent'

const Divider = styled.div`
    width: 80%;
    border-bottom: 1px solid var(--mono-3);
    margin: 16px 0px;
`

export default function Contact (){

    return (
        <Row nogutter>
            <Col sm={12} md={12} style={{padding: 24}}>
                contatctS
            </Col>
        </Row>
    )
}