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
    @media (max-width: 768px) {
        font-size: 1.4rem;
    }
`

const ContactImage = styled.div`
    width: 100%;
    height: 55vh;
    background-color: gray;
    display: flex;
    justify-content: center;
    align-items: center;
    /* filter: brightness(30%); */
    background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/images/contact.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    @media (max-width: 768px) {
        height: 30vh;
    }
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
    color: var(--mono-6);
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    cursor: pointer;
    transition: .2s linear;
    &:hover{
        transform: scale(1.1);
    }
    @media (max-width: 768px) {
        font-size: 16px;
    }
`

export default function Contact (){

    useEffect(() => {
        window.scrollTo(0, 0)
    },[])

    const contactType = ['Email', 'GitHub', 'LinkedIn', 'Instagram']
    const contactLink = ['mailto:dev.stellarsailor@gmail.com', 'https://github.com/stellarsailor', 'https://www.linkedin.com/in/minsu-lee-b6818b198/', 'https://www.instagram.com/stellarsalior']

    return (
        <Row nogutter justify="center">
            <ContactImage>
                <HighlightText>
                    <div style={{color: 'white', filter: 'none'}}>
                        <div>TORONTO, CA</div>
                        I'm willing to work with anything if you give a chance to me.
                    </div>
                </HighlightText>
            </ContactImage>
            <Col sm={12} md={8} >
                <ContactText>
                    Contact
                </ContactText>
                <Row nogutter justify="center" style={{minHeight: 200}}>
                    {contactType.map( (type, index) => (
                        <Col xs={6} sm={6} md={3} style={{padding: 8}} key={index}>
                            <a href={contactLink[index]} target="_blank" rel="noreferrer">
                                <ContactTypeBox>
                                    <img src={`/images/icons/${type.toLowerCase()}.png`} width={60} height={60} />
                                    {type}
                                </ContactTypeBox>
                            </a>
                        </Col>
                    ))}
                </Row>
            </Col>
        </Row>
    )
}