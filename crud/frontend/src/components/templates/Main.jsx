import './Main.css';
import Header from './Header'
import React from 'react';

export default function() {
    return(
        <React.Fragment>
            < Header />
                <main className="content">
                    Main
                </main>
        </React.Fragment>
    )
    
}