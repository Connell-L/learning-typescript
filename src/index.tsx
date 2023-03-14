import React from 'react';
import { createRoot } from 'react-dom/client';
import NavDrawer from './components/NavDrawer';

function App() {
    return (
        <>
            <NavDrawer />
        </>
    );
}

const rootElement = document.getElementById('root') as Element;

if (rootElement) {
    const root = createRoot(rootElement);
    root.render(<App />);
} else {
    throw new Error('No root element found');
    //eslint-disable-next-line no-console
    console.error('No root element found');
}
