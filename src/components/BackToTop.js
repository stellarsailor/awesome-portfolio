import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Scroll from 'react-scroll'
var scroller = Scroll.scroller

const GoToTopButton = styled.div`
    width: 45px;
    height: 45px;
    border-radius: 30px;
    background-color: rgba(0, 0, 0, 0.3);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    right: 3%;
    bottom: 3%;
    z-index: 30;
    transition: .2s linear;
    &:hover {
        background-color: rgba(0, 0, 0, 0.7);
    }
    cursor: pointer;
`

export default function BackToTop() {

    const [ scrollPosition, setScrollPosition ] = useState(0)

    const handleScroll = () => {
        const position = window.pageYOffset
        setScrollPosition(position)
    }
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true })
    
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const goToTop = () => scroller.scrollTo('top', {
        duration: 1200,
        delay: 50,
        smooth: true,
        offset: 0, 
    })

    if(scrollPosition > 250){
        return (
            <GoToTopButton onClick={() => goToTop()}>
                <img src="/images/icon_top.png" style={{width: 30, height: 30}} />
            </GoToTopButton>
        )
    } else {
        return(
            <></>
        )
    }
}