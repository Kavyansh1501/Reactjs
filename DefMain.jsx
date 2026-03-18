import React from 'react'
import { Link } from "react-router-dom";

export const DefMain = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">home</Link>

                    </li>
                    <li>
                        <Link to="/about">about</Link>
                    </li>
                    <li>
                        <Link to="/contact">contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default DefMain;
