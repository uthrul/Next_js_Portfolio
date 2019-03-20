import React from 'react';
import Header from '../components/shared/Header';

class Index extends React.Component {

    render() {
        return (
            <div>
                <h1>I am index page from Class Componenet</h1>
                <Header title={'I am a header component'} >
                    <h2> I am header subtitle</h2>
                </Header>
            </div>
        )
    }
}


export default Index;