import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 2rem;
    margin-bottom: 1rem;
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

export default function SkillPane(props) {

    const { skill } = props

    return(
        <Container>
            <img src={`/images/icons/${skill.image}.png`} width={40} height={40} style={{marginRight: 8}} />
            <ColumnContainer>
                <div style={{fontSize: 18, fontWeight: 600}}>
                    {skill.name} {skill.highlight && <span style={{color: 'gold'}}>✭</span>}
                </div>
                <div style={{color: 'gray', fontSize: 13}}>
                    {skill.comment}
                </div>
            </ColumnContainer>
        </Container>
    )
}