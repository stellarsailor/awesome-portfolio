import * as React from "react";
import styled from 'styled-components'
import { useEffect, useState } from "react";
import {
  motion,
  useViewportScroll,
  useSpring,
  useTransform
} from "framer-motion";

const Container = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 30px;
    position: fixed;
    left: 3%;
    bottom: 3%;
    z-index: 30;
    transition: .2s linear;
`

export default function CircleIndicator(){
  const [ isComplete, setIsComplete ] = useState(false);
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
  const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });

  useEffect(() => yRange.onChange(v => setIsComplete(v >= 1)), [yRange]);

  return (
        <Container>
            <svg viewBox="0 0 60 60" style={{width: 60, height: 60, marginTop: 10}}>
                <motion.path
                fill="none"
                strokeWidth="5"
                stroke="rgba(0, 0, 0, 0.2)"
                strokeDasharray="0 1"
                d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
                style={{
                    pathLength,
                    rotate: 90,
                    translateX: 5,
                    translateY: 5,
                    scaleX: -1 // Reverse direction of line animation
                }}
                />
                <motion.path
                fill="none"
                strokeWidth="5"
                stroke="rgba(0, 0, 0, 0.3)"
                d="M14,26 L 22,33 L 35,16"
                initial={false}
                strokeDasharray="0 1"
                animate={{ pathLength: isComplete ? 1 : 0 }}
                />
            </svg>
        </Container>
    )
}
