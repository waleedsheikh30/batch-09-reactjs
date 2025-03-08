import React from 'react'
import { Link } from 'react-router-dom'

function Services() {
    return (
        <div>
            <h1>Services</h1>
            <ul>
                <Link>
                    <li>Mobile</li>
                </Link>
                <Link>
                    <li>Watches</li>
                </Link>
                <Link>
                    <li>Covers</li>
                </Link>
                <Link>
                    <li>Airbuds</li>
                </Link>
            </ul>
        </div>
    )
}

export default Services