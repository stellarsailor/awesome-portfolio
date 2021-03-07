import React from 'react'
import styled from 'styled-components'
import { Col } from 'react-grid-system'

export default function SkillPane({
    skill
}) {

    //TODOLIST : image hover, image/text responsive size, star position, AWS etc delete, space horizon/vertical identical
    return(
        <Col xs={3} sm={3} md={2} lg={2} xl={1} style={{padding: '0.5rem'}}>
            <Container>
                <SkillImage src={`/images/icons/${skill.image}.png`} alt={`${skill.name} Icon`} />
                <SkillTitle>
                    {skill.name} 
                </SkillTitle>
                {/* <div style={{width: 40, height: 40, position: 'relative'}}>
                    <div style={{position: 'absolute', right: 0, top: 0, zIndex: 5}}>
                        {skill.highlight && <span style={{color: 'gold', fontSize: 30}}>✭</span>}
                    </div>
                    <img src={`/images/icons/${skill.image}.png`} width={40} height={40} alt={`${skill.name} Icon`} />
                </div> */}
            </Container>
        </Col>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-items: center;
    @media (max-width: 768px) {
        margin-left: 0.5rem;
    }
    transition: 0.2s linear;
    &:hover {
        transform: scale(1.1);
        /* filter: brightness(75%); */
    }
    cursor: pointer;
`

const SkillImage = styled.img`
    src: ${props => props.src};
    @media (max-width: 1920px) {
        width: 50px;
        height: 50px;
    }
    @media (max-width: 1600px) {
        width: 45px;
        height: 45px;
    }
    @media (max-width: 1280px) {
        width: 40px;
        height: 40px;
    }
`

const SkillTitle = styled.div`
    margin-top: 4px;
    font-size: 0.9rem;
    font-weight: 400;
    min-height: 30px;
    color: var(--mono-6);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    @media (max-width: 1280px) {
        font-size: 0.9rem;
    }
    @media (max-width: 768px) {
        font-size: 0.8rem;
    }
`