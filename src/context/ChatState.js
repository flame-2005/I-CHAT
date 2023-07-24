import React, { useState } from "react";
import chatContext from "./chatContext";
import axios from 'axios';

const ChatState = (props)=>{
//get all chats
const chatsInitial = []
const [chats,setChats] = useState(chatsInitial)
const [users,setUsers] = useState([])
const host = 'http://localhost:5000'

const getChats = async()=>{
  //API call
  console.log("chats getting")
  const response = await fetch(`${host}/api/chats/fetchallchats`,{
    method:"GET",
    headers:{
      "Content-Type":"application/json",
      'auth-token': localStorage.getItem('token')
    }
  })
  const json = await response.json()
  setChats(json)
  
} 
// api to get user info who has messaged
 const getUser = async()=>{
   //API call
   console.log("chats getting")
   const response = await fetch(`${host}/api/auth/userdetails`,{
     method:"POST",
     headers:{
       'auth-token': localStorage.getItem('token')
     }
   })
   const json = await response.json()
   setUsers(json)
 }  
// getting all global chats
const getGlobal = async()=>{
  //API call
  console.log("chats getting")
  const response = await fetch(`${host}/api/chats/fetchallglobal`,{
    method:"GET",
    headers:{
      "Content-Type":"application/json",
      'auth-token': localStorage.getItem('token')
    }
  })
  const json = await response.json()
  setChats(json)
  
}  
    //add a chats
    const addChat = async (discription,font,fontWeight,fontStrick,hyperLink,textLink,codeSnippet,codeBlock,bulletList,noList,name)=>{
      const response = await fetch(`${host}/api/chats/addchats`,{
        method : "POST",
        headers:{
          'Content-Type':'application/json',
          'auth-token':localStorage.getItem('token')
        },
        body:JSON.stringify({discription,font,fontWeight,fontStrick,hyperLink,textLink,codeSnippet,codeBlock,bulletList,noList,name})
      })
      const json = await response.json()
      setChats(chats.concat(json))
    }
    //adding file to the data base
    const addFile =(file)=>{
      const formData = new FormData()
      formData.append('file',file)
      // const response = await fetch(`${host}/api/chats/addfile`,{
      //   method : "POST",
      //   headers:{
      //     'auth-token':localStorage.getItem('token'),
      //     // 'Content-Type': 'multipart/form-data'
      //   },
      //   formData,
      //   body:JSON.stringify({formData})
      // })
      axios.post(`${host}/api/chats/addfile`,formData)
        .then(res => console.log(res))
        .catch(err => console.log(err)) 
      // console.log(response) 
    }
    //add a chats to global page
    const addGlobal = async (discription,font,fontWeight,fontStrick,hyperLink,textLink,codeSnippet,codeBlock,bulletList,noList,name)=>{
      const response = await fetch(`${host}/api/chats/addglobal`,{
        method : "POST",
        headers:{
          'Content-Type':'application/json',
          'auth-token':localStorage.getItem('token')
        },
        body:JSON.stringify({discription,font,fontWeight,fontStrick,hyperLink,textLink,codeSnippet,codeBlock,bulletList,noList,name})
      })
      const json = await response.json()
      setChats(chats.concat(json))
    }


    return(
        <chatContext.Provider value={{chats,users,setChats,addChat,getChats,getGlobal,addGlobal,addFile,getUser}}>
            {props.children}
        </chatContext.Provider>
    )
}

export default ChatState