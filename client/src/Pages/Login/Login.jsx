import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';
import './login.scss';

export default function Login() {

    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const [inputs, setInputs] = useState({
        username: '',
        password: '',
    });
    const [error, setError] = useState(null)

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await login(inputs);
            navigate('/');
        } catch (error) {
            setError(error.response.data);
       }
    }

    return (
        <div className="login">
            <div className="card">
                <div className="left">
                    <h1>Hello World</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In sed placeat ex ut similique autem commodi hic. </p>
                    <span>Don't you have an account?</span>
                    <Link to='/register'>
                        <button>Register</button>
                     </Link>
                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form>
                    <input type="text" placeholder='Username' name='username' onChange={handleChange}/>
                    <input type="password" placeholder='Password' name='password' onChange={handleChange} />
                        <span>{ error && error}</span>  
                        <button type="submit" onClick={handleLogin}>Login</button>
                     </form>
                </div>
                
            </div>
        </div>
    )
}