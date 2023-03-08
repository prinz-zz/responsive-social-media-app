import './stories.scss';
//import Icon from '../../assets/icon.jpeg';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';

export default function Stories() {

    const { currentUser } = useContext(AuthContext);

    const stories = [
        {
            id: 1,
            username: 'Jason',
            img:'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
            id: 2,
            username: 'Josh',
            img:'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
            id: 3,
            username: 'Anna',
            img:'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
            id: 4,
            username: 'Sarah',
            img:'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        }
    ];

    return (
        <div className="stories">
           
                <div className="story">
                    <img src={"/upload/" + currentUser.profilePic} alt='' />
                <span>{currentUser.name}</span>
                <button>+</button>
                </div>
           
            {stories.map((story) => (
                <div className="story" key={story.id}>
                    <img src={story.img} alt='' />
                    <span>{story.username}</span>
                </div>
            ))}
        </div>
    )
}