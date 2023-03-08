import './leftBar.scss';
import Friends from '../../assets/friendship.png';
import Clock from '../../assets/clock.png';
import Course from '../../assets/course.png';
import Email from '../../assets/email.png';
import Shop from '../../assets/shop.png';
import Funding from '../../assets/funding.png';
import Gallery from '../../assets/gallery.png';
import Game from '../../assets/game.png';
import Events from '../../assets/events.png';
import Groups from '../../assets/groups.png';
import Video from '../../assets/video.png';
import Tutorial from '../../assets/tutorial.png';
//import Icon from '../../assets/icon.jpeg';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';

export default function Leftbar() {

    const { currentUser } = useContext(AuthContext);

    return (
        <div className="leftBar">
            <div className="user">
                <img src={"/upload/" + currentUser.profilePic} alt='' />
                <span>{currentUser.name}</span>
            </div>
            <div className="item">
                <img src={Friends} alt='' />
                <span>Friends</span>
            </div>
            <div className="item">
                <img src={Groups} alt='' />
                <span>Groups</span>
            </div>
            <div className="item">
                <img src={Shop} alt='' />
                <span>Marketplace</span>
            </div>            
            <div className="item">
                <img src={Video} alt='' />
                <span>Video</span>
            </div>
            <div className="item">
                <img src={Clock} alt='' />
                <span>Memories</span>
            </div>
            <span className='subHeader'>Your shortcuts</span>
            <div className="item">
                <img src={Events} alt='' />
                <span>Events</span>
            </div>
            <div className="item">
                <img src={Game} alt='' />
                <span>Gaming</span>
            </div>
            <div className="item">
                <img src={Gallery} alt='' />
                <span>Gallery</span>
            </div>
            <div className="item">
                <img src={Email} alt='' />
                <span>Messages</span>
            </div>
           
            <span className='subHeader'>Others</span>
            <div className="item">
                <img src={Funding} alt='' />
                <span>Fundraiser</span>
            </div>
            <div className="item">
                <img src={Tutorial} alt='' />
                <span>Tutorial</span>
            </div>
            <div className="item">
                <img src={Course} alt='' />
                <span>Courses</span>
            </div>
            <div className="item">
                <img src={Course} alt='' />
                <span>Courses</span>
            </div>
            <div className="item">
                <img src={Course} alt='' />
                <span>Courses</span>
            </div>
        </div>
    )
}