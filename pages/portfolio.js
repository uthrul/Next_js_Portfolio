import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import { withRouter } from "next/router";

class Portfolio extends React.Component {
    render() {
        return (
            <BaseLayout>
                <h1> Portfolio page </h1>
                <h3>{this.props.router.query.title}</h3>
            </BaseLayout>
        )
    }
}


export default withRouter(Portfolio);