import { useState } from 'react';
import { Link } from 'react-router-dom';
import './register.scss';
import axios from 'axios';

export default function Register() {

    const [inputs, setInputs] = useState({
        username: '',
        email: '',
        password: '',
        name: '',
    });
    const [error, setError] = useState(null)

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
    
    const handleClick = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:6600/api/auth/register', inputs)
        }
        catch (error) {
            setError(error.response.data);
        }
    }

    return (
        <div className="register">
            <div className="card">
                <div className="left">
                <h1>Register</h1>
                    <form>
                    <input type="text" placeholder='Username' name='username' onChange={handleChange}/>
                    <input type="email" placeholder='Email' name='email' onChange={handleChange}/>
                    <input type="password" placeholder='Password' name='password' onChange={handleChange}/>
                        <input type="text" placeholder='Name' name='name' onChange={handleChange} />
                        <span>{error && error}</span>
                        <button type="submit" onClick={handleClick}>Register</button>
                    </form>
                </div>
                <div className="right">
                    
                    <h1><sub>PG</sub>SOCIAL</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In sed placeat ex ut similique autem commodi hic. </p>
                    <span>Don't you have an account?</span>
                    <Link to='/login'>
                        <button>Login</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}