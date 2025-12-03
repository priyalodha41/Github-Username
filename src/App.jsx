import React, { useEffect, useState } from 'react'
import ProfileCard from './Components/ProfileCard';

const App = () => {

const[userData,setuserData]=useState({});
const[userName,setuserName]=useState("");
const [error, setError] = useState("");


useEffect(()=>{

  const fetchApi= async ()=>{

    if(userName != ""){
        const Url= "https://api.github.com/users";
        const res= await fetch(`${Url}/${userName}`);
        if (res.status === 404) {
          setError("Invalid username — user not found");
          setuserData({});
          return;
        }
        const data = await res.json();
        console.log(data);
        setuserData(data);
    }
  }
  fetchApi();

},[userName]);

const fetchUserData = () => {
 
  let name=document.getElementById("user").value;

  if(name.trim() === ""){
    setError("UserName input is empty!!!");
    return;
  }
  setuserName(name);
  
  document.getElementById("user").value="";
  setError("");
};



  return (
    <div>
      <h2 className='title'>Github User Profile Card</h2>
        <div className='user-input'>
            <div> 
                <label htmlFor="user">Enter Your Github Username : </label>
                <input type="text" id="user" />

            </div>
          <div>
                <button onClick={()=>{
                  fetchUserData(); 
                }} className='fetch-btn'>Fetch User</button>
          </div>
            {error && (
                <p className="error" style={{ color: "red", marginTop: "10px" }}>
                {error}
            </p>
            )}
          {userData && userData.login && (
            <div className='card'>
              <ProfileCard
                img={userData.avatar_url}
                bio={userData.bio}
                name={userData.name}
                followers={userData.followers}
                following={userData.following}
                repos={userData.public_repos}
              />
            </div>
            )}
        </div>

    </div>
  )
}

export default App