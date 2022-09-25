import Link from "next/link";
import React from "react";

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>Oops!</h1>
            <h2>That page cannot be found</h2>
            <p>Go back to the <Link href="/"><a>home page</a></Link>.</p>
        </div>
    )
}

export default NotFound;