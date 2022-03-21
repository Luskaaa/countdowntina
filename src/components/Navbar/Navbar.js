import './style.css';
import React, { useState, useRef, useEffect } from 'react';

export function Navbar() {
    return (
        <nav>
            <ul className="list">
                <li className="items">Home</li>
                <li className="items">Services</li>
                <li className="items">Contact</li>
            </ul>
        </nav>

    )
}

