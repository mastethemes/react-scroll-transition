import React from "react"
import styled from "styled-components"

const Container = styled.div`
    scroll-snap-type: ${p => (p.direction === "vertical" ? "y" : "x")} mandatory;
    ${p => (p.direction === "vertical" ? "height: 100vh" : "width: 100vm")}
    ${p => (p.direction === "vertical" ? "overflow-y: scroll" : "overflow-x: scroll")};
    > * {
        scroll-snap-align: start;
        ${p => (p.direction === "vertical" ? "height: 100vh" : "width: 100vm")}
    }
`

const ScrollTransition = ({ children, direction = "vertical" }) => {
    return <Container direction={direction}>{children}</Container>
}

export default ScrollTransition
