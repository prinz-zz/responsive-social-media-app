import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { makeRequest } from '../../axios';
import './update.scss';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';


export default function Update({ setOpenUpdate , user }) {
    
    const [cover, setCover] = useState(null);
    const [profile, setProfile] = useState(null);
    const [texts, setTexts] = useState({
        name: '',
        city: '',
        website: '',
    });


    const upload = async (file) => {
        console.log(file)
        try {
          const formData = new FormData();
          formData.append('file', file);
          const res = await makeRequest.post('/upload', formData);
          return res.data;        
        } 
        catch (err) {
          console.log(err);    
        }
      }

    const handleChange = (e) => {
        setTexts((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
    }

        // Access the client
    const queryClient = useQueryClient()
  
    // Mutations
    const mutation = useMutation ((user) => {
        return makeRequest.put('/users', user)
      }, {
        onSuccess: () => {
          // Invalidate and refetch
          queryClient.invalidateQueries(['user'])
        },
    })


        const handleClick = async(e) => {
            e.preventDefault();
            let profileURL;
            let coverURL; 
            profileURL = profile ? await upload(profile) : user.profilPic;
            coverURL = cover ? await upload(cover) : user.coverPic;
            

            mutation.mutate({ ...texts, coverPic: coverURL , profilePic:profileURL});
            setOpenUpdate(null);
            setCover(null);
            setProfile(null);
        }


    

    return (
        <div className="update">
        <div className="wrapper">
          <h1>Update Your Profile</h1>
          <form>
            <div className="files">
              <label htmlFor="cover">
                <span>Cover Picture</span>
                <div className="imgContainer">
                  <img
                    src={
                      cover
                        ? URL.createObjectURL(cover)
                        : "/upload/" + user.coverPic
                    }
                    alt=""
                  />
                  <CloudUploadIcon className="icon" />
                </div>
              </label>
              <input
                type="file"
                id="cover"
                style={{ display: "none" }}
                onChange={(e) => setCover(e.target.files[0])}
              />
              <label htmlFor="profile">
                <span>Profile Picture</span>
                <div className="imgContainer">
                  <img
                    src={
                      profile
                        ? URL.createObjectURL(profile)
                        : "/upload/" + user.profilePic
                    }
                    alt=""
                  />
                  <CloudUploadIcon className="icon" />
                </div>
              </label>
              <input
                type="file"
                id="profile"
                style={{ display: "none" }}
                onChange={(e) => setProfile(e.target.files[0])}
              />
            </div>
            <label>Email</label>
            <input
              type="text"
              value={texts.email}
              name="email"
              onChange={handleChange}
            />
            <label>Password</label>
            <input
              type="text"
              value={texts.password}
              name="password"
              onChange={handleChange}
            />
            <label>Name</label>
            <input
              type="text"
              value={texts.name}
              name="name"
              onChange={handleChange}
            />
            <label>Country / City</label>
            <input
              type="text"
              name="city"
              value={texts.city}
              onChange={handleChange}
            />
            <label>Website</label>
            <input
              type="text"
              name="website"
              value={texts.website}
              onChange={handleChange}
            />
            <button onClick={handleClick}>Update</button>
          </form>
          <button className="close" onClick={() => setOpenUpdate(false)}>
            close
          </button>
        </div>
      </div>
        
    )
}