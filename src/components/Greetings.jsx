import React from 'react'

function Greetings(isLoggedIn) {
    // ternary operator
    // if -> ?, else -> :
    // What is props?
    const a = 10;

    if (a == 10 || a >= 10) {
        console.log("hello");

    }
    else {
        console.log("value false");

    }
    if (isLoggedIn == false) {
        console.log("welcome");

    }
    else {
        console.log("pls sign in");

    }
    return (
        <div>
            <h1>Greetings</h1>

            {
                isLoggedIn ? "pls sign in" : "welcome back"
            }
        </div>
    )
}

export default Greetings