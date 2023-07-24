import React, { useContext, useEffect, useRef,useState } from 'react'
import chatContext from '../context/chatContext'
import ChatItems from './ChatItems'
import Addchat from './Addchat'
import {useNavigate} from 'react-router-dom'


const chats = (props) => {
  const Context = useContext(chatContext)
  const { chats,users, getChats,getUser } = Context
  const history = useNavigate()
  useEffect(() => {
    if(localStorage.getItem('token')){
      console.log('hi')
      getChats()
      getUser()
    }
    else{
      console.log('buy')
      history('/login')
    }  
  }, [])
  const ref = useRef(null)
  const [chat, setChat] = useState({id:"", ediscription: "",})
  const onChange = (e) => {
    setChat({ ...chat, [e.target.name]: e.target.value })
  }

  return (
    <>
      

      <button type="button" ref={ref} class="btn btn-primary d-none" data-toggle="modal" data-target="#exampleModal">
        Launch demo modal
      </button>
      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-body">
              <form>
                
                <div class="mb-3">
                  <label type='text' for="ediscription" class="form-label" >discription</label>
                  <input type="text" class="form-control" id="ediscription" name='ediscription' onChange={onChange} value={chat.ediscription}/>
                </div>
                {/* <button type="submit" class="btn btn-primary" onClick={handleClick}>Submit</button> */}
              </form>
            </div>
          </div>
        </div>
      </div>
      

      <div className='row my-3'>
        <h2>Your chats</h2>
        <div className="container">
          {chats.length ===0 && "no chats to display"}
          </div>
        {chats.map((chats) => {
          return [<ChatItems chats={chats} key={chats._id} users = {users} />]
         
        })}

      </div>
      <Addchat users = {users} chats={chats}/>
    </>
  )
}

export default chats
