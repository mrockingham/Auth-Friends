import React, {useState} from 'react'
import friendsImg from '../img/friends.jpeg'
import {axiosWithAuth} from '../utils/axiosWithAuth'
import { useHistory } from 'react-router-dom'

const Login = () => {
  const history= useHistory()
 
  const [credentials, setCredentials] = useState({
    username:'Lambda School',
    password:'i<3Lambd4'
  })
 
const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    })
  }
    

const login = e => {
  e.preventDefault()

  axiosWithAuth().post('/api/login', credentials)
  .then(res => {
    // console.log(res)
    //res.data.payload
    localStorage.setItem('token', res.data.payload)
    history.push("/protected")
  })
  .catch(err => console.log(err))
  setCredentials({
    username:'',
    password:''
  })
}


    
        return (
            <div className='baseContent'>
              <form onSubmit={login}>
                <div className="Login">Log In</div>
                  <div className='imgContent'>
                    <img src={friendsImg} alt='friendsImg'/>
                  </div>
                <div className="logForm">
                  <div className='logGroup'>
                    <label htmlFor='username'>User Name</label>
                      <input 
                      type="text"
                       name="username" 
                       value={credentials.username}
                       onChange={handleChange}
                       placeholder='username'/>
                  </div>
                  <div className='logGroup'>
                    <label htmlFor='password'>Password</label>
                      <input 
                       type="text"
                       name="password"
                       value={credentials.password}
                       onChange={handleChange}
                       placeholder='password'/>
                  </div>
                  <div className='footer'>
                    <button type='submit'  className='btn'>submit</button>
                  </div>
                </div>
              </form>
           </div>
        
        )
              
    }


export default Login