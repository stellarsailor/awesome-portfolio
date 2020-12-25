import React, { useState } from 'react'
import Sticky from 'react-sticky-el'
import styled from 'styled-components'

const HeaderPane = styled.div`
    height: 55px;
    background-color: ${ props => props.isFixed ? 'rgba(255,255,255, 1)' : 'rgba(255,255,255, 1)' };
    display: flex;
    align-items: center;
    z-index: 100;
`

const HeaderBottomBorder = styled.div`
    width: ${ props => props.isFixed ? '100vw' : '100%' };
    margin-left:  ${ props => props.isFixed ? 'calc(50% - 50vw)' : '0' };
    border-bottom: 1px solid var(--mono-3);
    z-index: 100;
    margin-bottom: 16px;
`

export default function StickyHeader (props){

    const [ isFixed, setIsFixed ] = useState(false)

    return (
        <Sticky onFixedToggle={(e) => setIsFixed(e)} stickyStyle={{zIndex: 100}}>
            <HeaderPane isFixed={isFixed}>
                {props.children}
            </HeaderPane>
            <HeaderBottomBorder isFixed={isFixed} />
        </Sticky>
    )
}