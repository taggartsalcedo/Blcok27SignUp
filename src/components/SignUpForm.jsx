import { useState } from "react"


const SignUpForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)

const handleSubmit = async (event) => { 
    event.preventDefault();
    console.log("test");
}
    return (
        <>
             <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input value={username} onChange={(event) => setUsername(event.target.value)}/>
                <label>Password</label>
                <input value={password} onChange={(event) => setPassword(event.target.value)}/>
                <button>Submit</button>
            </form>
        </>
    )};

export default SignUpForm
