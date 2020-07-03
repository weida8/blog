import React from 'react';
import styled from 'styled-components'
import { Container, Row, Col } from "shards-react";

const LayoutContainer = styled.div`
    margin-top: 3%;
`;

export default function ContentLayout(props) {
    return(
        <LayoutContainer>
            <Container style={{topMargin: '5%'}}>
                <Row>
                    <Col sm={{ size: 8, order: 2, offset: .5 }}>
                        {props.children}
                    </Col>
                </Row>
            </Container>
        </LayoutContainer>
    )
}