import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-grid-system'
import { TextSubTitle, CenteredRow, TextCenterThin } from '../components/StyledComponent'

const Divider = styled.div`
    width: 80%;
    border-bottom: 1px solid var(--mono-3);
    margin: 16px 0px;
`

const HighlightText = styled.div`
    color: var(--mono-1);
    font-size: 2rem;
    font-weight: 800;
    text-align: center;
    margin: 24px 0px;
`

const ContactImage = styled.div`
    width: 100%;
    height: 400px;
    background-color: gray;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ContactText = styled.div`
    width: 100%;
    color: var(--mono-8);
    font-size: 2rem;
    font-weight: 800;
    display: flex;
    justify-content: center;
    margin: 24px 0px;
`

const ContactTypeBox = styled.div`
    width: 100%;
    font-size: 24px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
`

export default function Contact (){

    useEffect(() => {
        window.scrollTo(0, 0)
    },[])

    const contactType = ['Email', 'GitHub', 'LinkedIn', 'Instagram']

    return (
        <Row nogutter justify="center">
            <ContactImage>
                <HighlightText>
                    <div>TORONTO, CA</div>
                    I'm willing to work with anything if you give a chance to me.
                </HighlightText>
            </ContactImage>
            <Col sm={12} md={8} >
                <ContactText>
                    Contact
                </ContactText>
                <Row nogutter justify="center">
                    {contactType.map( (v, index) => (
                        <Col xs={6} sm={6} md={3} style={{padding: 8}} key={index}>
                            <ContactTypeBox>
                                <div style={{width: 80, height: 80, backgroundColor: 'gold'}} />
                                {v}
                            </ContactTypeBox>
                        </Col>
                    ))}
                </Row>
            </Col>
        </Row>
    )
}