import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import axios from 'axios';

import SuperComponent from '../components/SuperComponent';

class Index extends SuperComponent {

    static async getInitialProps() {
        let userData = [];

        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
            userData = response.data;
        } catch (err) {
            console.error(err);
        }
        return { initialData: [1, 2, 3, 4] };
    }

    constructor(props) {
        super(props);

        this.state = {
            title: 'I am Index Page '
        }
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
        // console.log('i am update title')
        this.setState({ title: 'I am Update Index Page' })
    }

    render() {
        const { title } = this.state;
        const initialData = this.props.initialData;

        return (
            <BaseLayout>
                <h1>I am index page from Class Componenet</h1>
                <h3>{this.state.title}</h3>
                <button onClick={() => this.updateTitle()}>Change Title</button>
            </BaseLayout>
        )
    }
}

export default Index;