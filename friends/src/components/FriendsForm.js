import React, {useState} from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth'

const FriendsForm = () => {
    const [addFriend, setAddFriend] = useState({
        name:'',
        age:'',
        email:''
    })

const handleChange = e =>{
    e.preventDefault()
    setAddFriend({
        ...addFriend,
        [e.target.name]: e.target.value
    })
}

const handleSubmit = e => {
    e.preventDefault()
    axiosWithAuth()
    .post('/api/friends', addFriend)
    .then(res =>{
        setAddFriend({
            name:'',
            age: '',
            email:''
        })
    })
}

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="AddForm">Add A Friend</div>
                <div className="AddForm">
                  <div className='AddGroup'>
                    <label htmlFor='AddName'>Friend Name</label>
                      <input 
                      type="text"
                       name="name" 
                       value={addFriend.name}
                       onChange={handleChange}
                       placeholder='name'/>
                  </div>
                  <div className='AddGroup'>
                    <label htmlFor='AddAge'>Age</label>
                      <input 
                       type="number"
                       name="age"
                       value={addFriend.age}
                       onChange={handleChange}
                       placeholder='age'/>
                  </div>
                  <div className='AddGroup'>
                    <label htmlFor='AddEmail'>Email</label>
                      <input 
                       type="text"
                       name="age"
                       value={addFriend.email}
                       onChange={handleChange}
                       placeholder='email'/>
                  </div>
                  <div className='footer'>
                    <button type='submit'  className='btn'>submit</button>
                  </div>
                </div>
              </form>
            
        </div>
    )
}

export default FriendsForm
