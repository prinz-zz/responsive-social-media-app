import { useContext, useState } from 'react';
import './comments.scss';
import { AuthContext } from '../../context/authContext';
import { useMutation, useQueryClient, useQuery } from 'react-query';
import { makeRequest } from '../../axios';
import moment from 'moment';
import CircularProgress from '@mui/material/CircularProgress';

export default function Comments({postId}) {

    const [desc, setDesc] = useState('');
    const { currentUser } = useContext(AuthContext);

    

    const { isLoading, error, data } = useQuery(['comments'], () =>
    makeRequest.get('/comments?postId='+ postId).then((res) => {
        return res.data;
    }));
        
     // Access the client
     const queryClient = useQueryClient()
  
     // Mutations
     const mutation = useMutation((newComment) => {
         return makeRequest.post('/comments', newComment)
     },
         
         {
         onSuccess: () => {
           // Invalidate and refetch
           queryClient.invalidateQueries(['comments'])
         },
     })

     
   const handleClick = async(e) => {
        e.preventDefault();
        mutation.mutate({ desc, postId });
        setDesc('');
    }



    return (
        <div className="comments">
            <div className="write">
                <img src={"/upload/" + currentUser.profilePic} alt='' />
                <input type="text" maxLength={300} placeholder="Write a comment..." onChange={(e) => setDesc(e.target.value)} value={desc} />
                <button onClick={handleClick}>Send</button>
            </div>
            {isLoading ? <CircularProgress/> : data.map((comment) => (
                <div className="comment" key={comment.id}>
                    <img src={"/upload/" + comment.profilePic} alt='' />
                    <div className="comm">
                        <span>{currentUser.username}</span> 
                        <p>{comment.desc}</p>
                    </div>
                    <span className="time">{moment(comment.createdAt).fromNow()}</span>
                </div>
            ))}
        </div>
    )
}