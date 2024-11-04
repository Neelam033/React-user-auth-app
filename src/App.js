import React, { useState } from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import './App.css';

const App = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>User Authentication</h1>
                <div className="container">
                    {isLogin ? <Login /> : <Signup />}
                    <button className="toggle-button" onClick={toggleForm}>
                        Switch to {isLogin ? 'Signup' : 'Login'}
                    </button>
                </div>
            </header>
        </div>
    );
};

export default App;




















