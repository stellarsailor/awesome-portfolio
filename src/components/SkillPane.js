import React from 'react'
import styled from 'styled-components'
import { Col } from 'react-grid-system'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-items: center;
    @media (max-width: 768px) {
        margin-left: 0.5rem;
    }
`

const SkillTitle = styled.div`
    margin-top: 4px;
    font-size: 1rem;
    font-weight: 400;
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

const SkillComment = styled.div`
    color: var(--mono-4);
    font-size: 18px;
    @media (max-width: 1280px) {
        font-size: 16px;
    }
    @media (max-width: 768px) {
        font-size: 14px;
    }
`

export default function SkillPane(props) {

    const { skill } = props
    //TODOLIST : image hover, image/text responsive size, star position, AWS etc delete, space horizon/vertical identical
    return(
        <Col xs={3} sm={3} md={2} style={{padding: '1rem'}}>
            <Container>
                <img src={`/images/icons/${skill.image}.png`} width={40} height={40} alt={`${skill.name} Icon`} />
                <SkillTitle>
                    {skill.name} 
                </SkillTitle>
                {/* {skill.highlight && <span style={{color: 'gold'}}>✭</span>} */}
                {/* <SkillComment>
                    {skill.comment}
                </SkillComment> */}
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