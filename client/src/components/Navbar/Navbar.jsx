import './navBar.scss';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';
import { AuthContext } from '../../context/authContext';

export default function Navbar() {

    const { toggle, darkMode } = useContext(DarkModeContext); 
    const { currentUser } = useContext(AuthContext);
    
    return (
        <div className="navBar">
            <div className="left">
                <Link to='/'>
                    <span className="logo"><sub>PG</sub>Social</span>
                </Link>
                <HomeOutlinedIcon />
                {!darkMode ?<DarkModeOutlinedIcon onClick={toggle}/> : <WbSunnyOutlinedIcon onClick={toggle}/>}
                <GridViewOutlinedIcon/>
                <div className="search">
                    <SearchOutlinedIcon/>
                    <input type="text" placeholder="Search"/>
                </div>
            </div>
            <div className="right">
            <PersonOutlineOutlinedIcon/>
            <EmailOutlinedIcon/>
            <NotificationsNoneOutlinedIcon />
                <div className="user">
                    <img src={"/upload/" + currentUser.profilePic} alt='' />
                    <Link to={`/profile/${currentUser.id}`}>
                    <span>{currentUser.username}</span>
                    </Link>
                </div> 
            </div>
        </div>
    )
}