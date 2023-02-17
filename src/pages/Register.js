import React from 'react' ; 
import { useState } from 'react';
import PhotoIcon from "@mui/icons-material/Photo";
import {  createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth , storage , db} from "../firebase.js" ; 
import {  ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 
import { useNavigate , Link} from 'react-router-dom';

const Register = () => {
 const [err , setErr] = useState(false) ; 
const navigate = useNavigate()

  const handleSubmit = async (e) =>{
   e.preventDefault()
   const displayName = e.target[0].value ; 
   const email = e.target[1].value ; 
   const password = e.target[2].value ; 
   const file = e.target[3].files[0] ; 

   try {
    
     const res = await createUserWithEmailAndPassword(auth, email, password) ; 
const storageRef = ref(storage, displayName);

const uploadTask = uploadBytesResumable(storageRef, file);

uploadTask.on(
   (err) => {
    setErr(true) ; 
  }, 
  () => {
    getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
     await updateProfile(res.user , {
      displayName ,
       photoURL : downloadURL , 
     });
     await setDoc(doc(db , "users" , res.user.uid), {
      uid : res.user.uid , 
       displayName ,
       email ,
        photoURL : downloadURL
     });
     await setDoc(doc(db , "userChats" , res.user.uid), { });
     navigate("/");
    });
  }
);
 
   } catch (err) {
    setErr(true); 
   }
  
    

  }

  return (
    <div className='formContainer'>
     <div className="formWrapper">
        <span>Ritz Chat</span>
        <span>SIGN UP</span>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='display name'/>
            <input type="email" placeholder='Email'/>
            <input type="password" placeholder='Password'/>
            <input style={{display : "none"}} type="file" id="file"/>
            <label htmlFor="file">
            <PhotoIcon />
                <span>Add dp</span>
            </label>
            <button>SIGN UP</button>
            {err && <span>Something went Wrong !</span>}
        </form>
        <p>have an account ? <Link to="/login">Login</Link> </p>
     </div>
    </div>
  )
}

export default Register
