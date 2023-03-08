
import './post.scss';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import { Link } from 'react-router-dom';
import Comments from '../Comments/Comments';
import { useContext, useState } from 'react';
import moment from 'moment';
import { useQuery, useQueryClient, useMutation } from 'react-query';
import { makeRequest } from '../../axios';
import { AuthContext } from '../../context/authContext';

export default function Post({ post }) {

    const [commentOpen, setCommentOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const { currentUser } = useContext(AuthContext);
    
    const { isLoading, error, data } = useQuery(['likes', post.id], () =>
    makeRequest.get('/likes?postId=' + post.id).then((res) => {
        return res.data;
    }));

    // Access the client
    const queryClient = useQueryClient()
  
    // Mutations
    const mutation = useMutation((liked) => {
        if (liked) return makeRequest.delete('/likes?postId='+ post.id);
        return makeRequest.post('/likes', { postId : post.id });
    },
        
        {
        onSuccess: () => {
          // Invalidate and refetch
          queryClient.invalidateQueries(['likes'])
        },
        })
    
    // Mutations
    const deleteMutation = useMutation((postId) => {
        return makeRequest.delete('/posts/'+postId);
    },
        
        {
        onSuccess: () => {
          // Invalidate and refetch
          queryClient.invalidateQueries(['posts'])
        },
    })
    
    const handleLike = (e) => {
        e.preventDefault();
        mutation.mutate(data?.includes(currentUser.id));
    }

    const handleDelete = ()=>{
        deleteMutation.mutate(post.id);
    }

    return (
        <div className="post">
            <div className="postContainer">
            <div className="user">
                <div className="userInfo">
                    <img src={"/upload/" + post.profilePic} alt='' />
                    <div className="details">
                        <Link to={`/profile/${post.userId}`}>
                        <span>{post.name}</span>       
                        </Link>
                            <span className="date">{ moment(post.createdAt).fromNow()}</span>
                    </div>
                </div>
                    <div className="ellipsis"><MoreHorizIcon onClick={() => setMenuOpen(true)} />
                    {(menuOpen && post.userId === currentUser.id ) && (<button onClick={handleDelete}>Delete</button>)}
                    </div>
            </div>
                <div className="content">
                    <span>{post.desc}</span>
                    <img src={'../upload/' + post.img} alt='' />
            </div>
                <div className="buttons">
                    <div>
                        {data?.includes(currentUser.id) ? <FavoriteIcon className='liked' onClick={handleLike}/> : <FavoriteBorderOutlinedIcon onClick={handleLike}/> } 
                        <span>{data?.length} Likes</span>
                    </div>
                    <div>
                        <ChatOutlinedIcon onClick={() => setCommentOpen(!commentOpen)}/>
                        <span>See Comments</span>
                    </div>
                    <div>
                        <ShareOutlinedIcon />
                        <span>Share</span>
                    </div>
                </div>
                {commentOpen && <Comments postId={post.id} />}
               
                
            </div>
       </div>
    )
}