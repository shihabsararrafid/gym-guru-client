import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';


function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link className={`${match ? "text-green-500" : "text-white"}`}
                style={{ color: match ? "#05F61E" : "white" }}
                to={to}
                {...props}
            >
                {children}
            </Link>
            {match && ""}
        </div>
    );
}



export default CustomLink;