import styled from 'styled-components'
import { motion } from 'framer-motion'

export const initialProps = { opacity: 0, y: 20 }
export const animateProps = { opacity: 1, y: 0 }

export const TextMain = styled(motion.div)`
    font-size: 3rem;
    font-weight: 1000;
    color: var(--mono-8);
    margin-top: 1rem;
    @media (max-width: 1280px) {
        font-size: 2.5rem;
        font-weight: 1000;
    }
    @media (max-width: 768px) {
        font-size: 2rem;
        font-weight: 1000;
    }
`

export const TextMainSmall = styled.span`
    font-size: 2rem;
    font-weight: 800;
    color: var(--mono-8);
    @media (max-width: 1280px) {
        font-size: 1.6rem;
        font-weight: 800;
    }
    @media (max-width: 768px) {
        font-size: 1.2rem;
        font-weight: 800;
    }
`

export const TextMainTitle = styled.div`
    font-size: 4rem;
    font-weight: 1000;
    color: var(--mono-8);
`

export const TextSubTitle = styled.div`
    font-size: 2rem;
    font-weight: 800;
    color: var(--mono-5);
`

export const TextDesc = styled(motion.div)`
    font-size: 1.4rem;
    font-weight: 600;
    color: var(--mono-4);
    @media (max-width: 1280px) {
        font-size: 1.2rem;
        font-weight: 600;
    }
    @media (max-width: 768px) {
        font-size: 1rem;
        font-weight: 600;
    }
`

export const TextCenterThin = styled.div`
    font-size: 1.2rem;
    font-weight: 300;
    color: var(--mono-4);
`

export const TextUpper = styled(motion.div)`
    font-size: 2rem;
    font-weight: 100;
    letter-spacing: 3px;
    color: var(--mono-5);
    @media (max-width: 1280px) {
        font-size: 1.7rem;
    }
    @media (max-width: 768px) {
        font-size: 1.4rem;
    }
    margin-top: 1rem;
    margin-bottom: 0.2rem;
`

export const TextSticky = styled.div`
    font-size: 1.8rem;
    font-weight: bold;
    color: var(--mono-6);
`

export const FlexDRow = styled.div`
    display: flex;
    flex-direction: row;
`

export const FlexDCol = styled.div`
    display: flex;
    flex-direction: column;
`

export const CenteredRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Divider = styled.div`
    width: 100%;
    border-bottom: 1px solid var(--mono-3);
    margin: 16px 0px;
`

export const DividerTitle = styled.div`
    font-size: 26px;
    margin-top: 40px;
    font-weight: 800;
    color: var(--mono-7);
    @media (max-width: 1280px) {
        font-size: 24px;
    }
    @media (max-width: 768px) {
        font-size: 22px;
    }
`