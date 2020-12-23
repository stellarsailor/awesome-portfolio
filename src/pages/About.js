import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-grid-system'
import { TextSubTitle, CenteredRow, TextCenterThin } from '../components/StyledComponent'

const Divider = styled.div`
    width: 80%;
    border-bottom: 1px solid var(--mono-3);
    margin: 16px 0px;
`

export default function About (){

    return (
        <Row nogutter>
            <Col sm={12} md={12} style={{padding: 24}}>
                <TextCenterThin>
                    About Me
                </TextCenterThin>
                <TextSubTitle>
                    I'm Minsu Lee. Web developer who has passion on design as well. Big fan of React.js and Next.js and javascript. Web development is blah since 2012.
                </TextSubTitle>
                <img src="/images/navy.jpg" style={{width: '100%'}} />

                Skills

                Front-End

                Back-End/DB

                DevOps

                etc.

                OS

                <Divider />

                Education/Career

                Languages
            </Col>
        </Row>
    )
}