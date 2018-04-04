import React from 'react';
import { Container, Row } from 'reactstrap';

function HomeLayout (props)
{
    return(
        <Container fluid>
            <Row>
                {props.children}
            </Row>
        </Container>
    )
}

export default HomeLayout;