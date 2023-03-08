import './rightBar.scss';
import Icon from '../../assets/icon.jpeg';



export default function Rightbar() {
    return (
        <div className="rightBar">
            <div className="cards">
            <span className='subHeader'>Suggestions for you</span>
                <div className="item">
                <div className="userInfo">
                    <img src={Icon} alt='' />
                        <span>Friends</span>
                </div>
                    <div className="buttons">
                        <button className='blue'>Confirm</button>
                        <button className='red'>Dismiss</button>
                    </div>
            </div>
                <div className="item">
                <div className="userInfo">
                    <img src={Icon} alt='' />
                        <span>Friends</span>
                </div>
                    <div className="buttons">
                        <button className='blue'>Confirm</button>
                        <button className='red'>Dismiss</button>
                    </div>
            </div>
            </div>
            <div className="cards">
            <span className='subHeader'>Latest Activities</span>
                <div className="item">
                <div className="userInfo">
                <img src={Icon} alt='' />
                    <span>Friends</span>
                        <span className="activity">Changed the cover picture </span>
                </div>
                    <div className="rightInfo">
                    <span>1 hour ago</span>
                    </div>
            </div>
                <div className="item">
                <div className="userInfo">
                <img src={Icon} alt='' />
                    <span>Friends</span>
                        <span className="activity">Liked a comment </span>
                </div>
                    <div className="rightInfo">
                    <span>1 hour ago</span>
                    </div>
            </div>
                <div className="item">
                <div className="userInfo">
                <img src={Icon} alt='' />
                    <span>Friends</span>
                        <span className="activity">Liked a post </span>
                </div>
                    <div className="rightInfo">
                    <span>1 hour ago</span>
                    </div>
            </div>
                <div className="item">
                <div className="userInfo">
                <img src={Icon} alt='' />
                    <span>Friends</span>
                        <span className="activity">posted </span>
                </div>
                    <div className="rightInfo">
                    <span>1 hour ago</span>
                    </div>
            </div>
            </div>
            <div className="cards">
            <span className='subHeader'>Online Friends</span>
                <div className="item">
                <div className="userInfo">
                    <img src={Icon} alt='' />
                    <span className="online"></span>
                        <span>Friends</span>
                </div>
                </div>
                <div className="item">
                <div className="userInfo">
                    <img src={Icon} alt='' />
                    <span className="online"></span>
                        <span>Friends</span>
                </div>
                </div>
                <div className="item">
                <div className="userInfo">
                    <img src={Icon} alt='' />
                    <span className="online"></span>
                        <span>Friends</span>
                </div>
                </div>
                <div className="item">
                <div className="userInfo">
                    <img src={Icon} alt='' />
                    <span className="online"></span>
                        <span>Friends</span>
                </div>
                </div>
                <div className="item">
                <div className="userInfo">
                    <img src={Icon} alt='' />
                    <span className="online"></span>
                        <span>Friends</span>
                </div>
                </div>
                <div className="item">
                <div className="userInfo">
                    <img src={Icon} alt='' />
                    <span className="online"></span>
                        <span>Friends</span>
                </div>
                </div>
                <div className="item">
                <div className="userInfo">
                    <img src={Icon} alt='' />
                    <span className="online"></span>
                        <span>Friends</span>
                </div>
                </div>
                <div className="item">
                <div className="userInfo">
                    <img src={Icon} alt='' />
                    <span className="online"></span>
                        <span>Friends</span>
                </div>
                </div>
               
                
            </div>
        </div>
    )
}