import React, {useState} from "react";

const Login = ({onAdd}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        if (!username) {
            alert("Please enter username");
            return;
        }
        if (!password) {
            alert("Please enter password");
            return;
        }
        onAdd({username, password});
        setUsername("");
        setPassword("");
    };

    return (
        <div className="border border-dark rounded-pill" id="logindiv">
            <h3>Login</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control" id="usernamediv">
                    <label>Username</label>
                    <input type="text" className="form-check-input" placeholder="username"
                    value={username} onChange={(e)=>setUsername(e.target.value)}/>
                </div>
                <div className="form-control" id="passworddiv">
                    <label>Password</label>
                    <input type="password" className="form-check-input" placeholder="password"
                    value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <input type="submit" value="Submit" className="buttonLog"/>
            </form>
        </div>
    );
};
export default Login;