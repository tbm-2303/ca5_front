import React from "react";

const WelcomePage = ({name, role}) => {
    return (
        <div>
            <h3>Welcome {name}</h3>
            <br/>
            <h7>Your role on this site is {role}</h7>
        </div>
    )
}
export default WelcomePage;