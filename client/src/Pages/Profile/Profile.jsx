import './profile.scss';
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from '../../components/Posts/Posts';
import { useQuery, useQueryClient, useMutation } from 'react-query';
import { makeRequest } from '../../axios';
import { useLocation  } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/authContext';
import Update from '../../components/update/Update';


export default function Profile() {

    const [openUpdate, setOpenUpdate] = useState(false);
    const currentUser = useContext(AuthContext);
    const userId = parseInt(useLocation().pathname.split('/')[2]);
    

    const { isLoading, error, data } = useQuery(['user'], () =>
    makeRequest.get('/users/find/' + userId).then((res) => {
        return res.data;
    }));
    

    const { isLoading: rIsLoading, data : relationshipData } = useQuery(['relationship'], () =>
    makeRequest.get('/relationships?followedUserId=' + userId).then((res) => {
        return res.data;
    }));
    
     // Access the client
    const queryClient = useQueryClient()
    
  
     // Mutations
    const mutation = useMutation((following) => {
        if (following) return makeRequest.delete('/relationships?userId=' + userId);
        return makeRequest.post('/relationships', { userId });
    },
         
        {
            onSuccess: () => {
                // Invalidate and refetch
                queryClient.invalidateQueries(['relationship'])
            },
        });
     
     const handleFollow = () => {
         mutation.mutate(relationshipData.includes(currentUser.currentUser.id));
    }
 
  
    return (
        <div className="profile">
            {isLoading ? (
        "loading"
      ) : (
        <>

            <div className="imgWrapper">
                
                <img src={"/upload/" + data.coverPic} alt='' className="coverPic"/>
              
                <img src={"/upload/" + data.profilePic} alt='' className="profilePic"/>
                
            </div>
            <div className="profileContainer">
                <div className="userInfos">
                    <div className="left">
                        <a href="http://">
                            <FacebookTwoToneIcon fontSize='large'/>
                        </a>
                        <a href="http://">
                            <InstagramIcon fontSize='large'/>
                        </a>
                        <a href="http://">
                            <TwitterIcon fontSize='large'/>
                        </a>
                        <a href="http://">
                            <LinkedInIcon fontSize='large'/>
                        </a>
                        <a href="http://">
                            <PinterestIcon fontSize='large'/>
                        </a>
                        
                    </div>
                    <div className="center">
                        <span>{data?.name}</span>
                        <div className="info">
                            <div className="item">
                                <PlaceIcon />
                                <span>{data?.city}</span>
                            </div>
                            <div className="item">
                                <LanguageIcon /> <span>{data?.website}</span>
                            </div>
                        </div>

                {rIsLoading ? (
                  "loading"
                ) : userId === currentUser.currentUser.id ? (<button onClick={()=>setOpenUpdate(true)}>Update</button>) : (<button onClick={handleFollow}>{relationshipData.includes(currentUser.currentUser.id) ? "Following" : "Follow"}</button>)}

                    </div>
                    <div className="right">
                        <EmailOutlinedIcon />
                        <MoreVertIcon/>
                    </div>
                </div>
                <Posts userId={userId}/>
                        </div>
                        </>
      )}
            {openUpdate && <Update setOpenUpdate={setOpenUpdate} user={data} />}
        </div>
    )
}