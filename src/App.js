import React from 'react';
import Header from './components/Header';
import Details from './components/Details';
import ContactForm from './components/ContactForm';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <Details />
                <ContactForm />
            </main>
        </div>
    );
}

export default App;
