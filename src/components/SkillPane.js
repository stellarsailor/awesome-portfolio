import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 2rem;
    margin-bottom: 1.5rem;
    align-items: center;
    @media (max-width: 768px) {
        margin-left: 0.5rem;
    }
`

const ColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 8px;
    @media (max-width: 768px) {
        margin-left: 4px;
    }
`

const SkillTitle = styled.div`
    font-size: 20px;
    font-weight: 600;
    @media (max-width: 1280px) {
        font-size: 19px;
    }
    @media (max-width: 768px) {
        font-size: 18px;
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

    return(
        <Container>
            <img src={`/images/icons/${skill.image}.png`} width={40} height={40} style={{marginRight: 8}} alt={`${skill.name} Icon`} />
            <ColumnContainer>
                <SkillTitle>
                    {skill.name} {skill.highlight && <span style={{color: 'gold'}}>✭</span>}
                </SkillTitle>
                <SkillComment>
                    {skill.comment}
                </SkillComment>
            </ColumnContainer>
        </Container>
    )
}