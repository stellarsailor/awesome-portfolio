import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import { CenteredRow } from './StyledComponent'

const WorkTogetherPane = styled.div`
    width: 100%;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const WorkTogetherText = styled.div`
    color: var(--mono-8);
    font-size: 48px;
    font-weight: 1000;
    text-align: center;
    @media (max-width: 576px) {
        font-size: 28px;
    }
    &:hover{
        text-decoration-line: underline;
    }
    cursor: pointer;
`

const WorkTogetherSmallText = styled.div`
    color: var(--mono-4);
    font-size: 16px;
    font-weight: 600;
    text-align: center;
    @media (max-width: 576px) {
        font-size: 13px;
    }
`

const Divider = styled.div`
    width: 30px;
    border-bottom: 1px solid var(--mono-3);
    margin: 24px 0px 16px 0px;
`

export default function WorkTogether(props) {

    const { linkTo, smallText, bigText } = props

    return(
        <WorkTogetherPane>
            <WorkTogetherSmallText>
                {smallText}
            </WorkTogetherSmallText>
            <Divider />
            <Link to={linkTo}>
                <WorkTogetherText>
                    {bigText} →
                </WorkTogetherText>
            </Link>
        </WorkTogetherPane>
    )
}