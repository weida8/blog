import React from 'react'
import LayoutContainer from '../../Layout'
import { Container, Row, Col } from "shards-react";


export default function AuthLayoutContainer(props) {
    return(
        <Container>
            <Row>
                <Col 
                    sm={{ size: 11, order: 2, offset: .5 }}
                    md={{ size: 10, order: 2, offset: 1 }}
                    lg={{ size: 8, order: 2, offset: 2 }}
                    xl={{ size: 6, order: 2, offset: 3 }}
                >
                    {props.children}
                </Col>
            </Row>
        </Container>
    )
}