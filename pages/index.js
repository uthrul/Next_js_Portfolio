import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';

import SuperComponent from '../components/SuperComponent';

class Index extends SuperComponent {
    constructor(props) {
        super(props);

        this.state = {
            title: 'I am Index Page '
        }

        console.log('constructor');
    }

    componentDidMount() {
        console.log('componenDidMount');
    }

    componentDidUpdate() {
        console.log('componenDidUpdate');
    }

    componentWillUnmount() {
        console.log('componenWillUnmount')
    }

    updateTitle() {
        this.setState({ title: 'I am Update Index Page' })
    }

    render() {
        return (
            <BaseLayout>
                <h1>I am index page from Class Componenet</h1>
                <h3>{this.state.title}</h3>
                <button onClick={() => this.updateTitle() }>Change Title</button>
            </BaseLayout>
        )
    }
}

export default Index;