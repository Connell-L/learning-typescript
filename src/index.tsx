import React from 'react';
import ReactDOM from 'react-dom';
import NavDrawer from './components/NavDrawer';

const App = () => {
    return (
        <div>
            <NavDrawer />
        </div>
    );
};

const root = document.getElementById('root');
ReactDOM.render(<App />, root);
