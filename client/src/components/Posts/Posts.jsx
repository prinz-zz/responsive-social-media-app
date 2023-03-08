import Post from '../post/post';
import './posts.scss';
import {useQuery } from 'react-query'
import { makeRequest } from '../../axios';
import CircularProgress from '@mui/material/CircularProgress';


export default function Posts({userId}) {

    const { isLoading, error, data } = useQuery(['posts'], () =>
        makeRequest.get('/posts?userId='+userId).then((res) => {
            return res.data;
        }));
    

   return (
        <div className="posts">
            {error ? 'Something went wrong!' : (isLoading ? <CircularProgress/> :data.map((post) => 
                <Post post={post} key={post.id}/>
            ))}
           
        </div>
    )
}