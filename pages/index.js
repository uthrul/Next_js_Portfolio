import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';

import {Container, Button } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

class Index extends React.Component {

    render() {

        return (
            <BaseLayout>
                <Container>
                    <Button color="primary">primary</Button>{' '}
                </Container>
            </BaseLayout>
        )
    }
}

export default Index;