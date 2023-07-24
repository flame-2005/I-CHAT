import React, { useContext, useState } from 'react'
import chatContext from '../context/chatContext'
import styled from 'styled-components';
import { Picker } from 'emoji-mart';
import axios from 'axios';
const host = 'http://localhost:5000'


const Addglobal = (props) => {
  const {users,chats} = props
  const context = useContext(chatContext)
  const { addGlobal,addFile } = context
  const [font, setFont] = useState('normal')
  const [weight, setWeight] = useState('normal')
  const[decoration,setDecoration] = useState(null)
  const[hyperLink,setHyperlink]= useState('#')
  const[codeSnippet,setcodeSnippet]= useState(null)
  const[dsp,setDsp]= useState('none')
  const[dsp1,setDsp1]= useState('none')
  const[dsp3,setDsp3]= useState('none')
  const[dsp4,setDsp4]= useState('none')
  const[dsp5,setDsp5]= useState('none')
  const[emoji,setEmoji] = useState(null)
  

  const [chat, setChat] = useState({ discription: "",font:font,weight:weight,fontStrick:decoration,hyperLink:hyperLink,textLink:"",codeSnippet:codeSnippet,codeBlock:"",bulletList:null,noList:null})
  const handleClick = (e) => {
    e.preventDefault();
    addGlobal(chat.discription,chat.font,chat.weight,chat.fontStrick,chat.hyperLink,chat.textLink,chat.codeSnippet,chat.codeBlock,chat.bulletList,chat.noList,users.name)
  }
  const onChange = (e) => {
    setChat({ ...chat, [e.target.name]: e.target.value })
    // console.log(chat.bList.split('\n'))
  }
  
  const fontNormal = () => {
    setFont('normal')
  }
  const fontitalic = () => {
    setFont('italic')

  }
  const fontBold = () => {
      setWeight('bold')
  }
  const fontLight = () => {
      setWeight('normal')
  }
  const fontStrick = () =>{
      setDecoration('line-through')   
  }
  const fontnonStrick = ()=>{
    setDecoration(null)
  }

  const myStyle = {
    fontStyle: font,
    fontWeight: weight,
    textDecoration: decoration
  }

  const myStyle2 = {
    display:'flex',
    flexDirection:'row',
  }
  const myStyle3 = {
    width:'99%',
    padding: '10px'
  }
  const myStyle4 = {
    height: '20%',
    position: 'relative',
    top: '10px',
  }
  const myStyle5 = {
    margin:"0px 10px",
    color:"black",
    background:"white",

  }
  const linkAct = ()=>{
    if(dsp=="none"){
      setDsp("")
    }
    else{
      setDsp('none')
    }
  }
  const Snippet = ()=>{
    if(dsp1=='none'){
      setDsp1("")
    }
    else{
      setDsp1('none')
    }
  }
  const codeBlock = ()=>{
    if(dsp3=='none'){
      setDsp3("")
    }
    else{
      setDsp3('none')
    }
  }
  const List = ()=>{
    if(dsp4=='none'){
      setDsp4("")
    }
    else{
      setDsp4('none')
    }
  }
  const noList = ()=>{
    if(dsp5=='none'){
      setDsp5("")
    }
    else{
      setDsp5('none')
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission and page reload
  };


  const StyledInput = styled.input`
  font-family: Arial, sans-serif;
`;
  return (
    <div className='container'>
      <h1>Chats</h1>
      <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
        <input type="radio" class="btn-check" name="font" id="btnradio1" autocomplete="off" onClick={fontNormal} onChange={onChange} value={'normal'} />
        <label class="btn btn-outline-primary" for="btnradio1" onClick={fontNormal}>N</label>

        <input type="radio" class="btn-check" name="font" id="btnradio2" autocomplete="off" onChange={onChange} value={'italic'}/>
        <label class="btn btn-outline-primary" for="btnradio2" onClick={fontitalic} ><i class="fa fa-italic" aria-hidden="true"></i></label>
        <input type="radio" class="btn-check" name="fontStrick" id="btnradio3" autocomplete="off" onChange={onChange} value={decoration}/>
        <label class="btn btn-outline-primary" for="btnradio3" onClick={fontStrick} ><i class="fas fa-strikethrough    "></i></label>
        <input type="radio" class="btn-check" name="fontStrick" id="btnradio4" autocomplete="off" onChange={onChange} value={decoration}/>
        <label class="btn btn-outline-primary" for="btnradio4" onClick={fontnonStrick} >S</label>
        <input type="radio" class="btn-check" name="link" id="btnradio5" autocomplete="off" onChange={onChange} value={hyperLink}/>
        <label class="btn btn-outline-primary" for="btnradio5" onClick={linkAct} ><i class="fa fa-link" aria-hidden="true"></i></label>
        <input type="radio" class="btn-check" id="btnradio6" name='weight' autocomplete="off" onChange={onChange} value={weight}/>
        <label class="btn btn-outline-secondary" for="btnradio6" onClick={fontBold}><i class="fa fa-bold" aria-hidden="true"></i></label>
        <input type="radio" class="btn-check" id="btnradio7" name='weight' autocomplete="off" onChange={onChange} value={weight}/>
        <label class="btn btn-outline-secondary" for="btnradio7" onClick={fontLight}>L</label>
        <input type="radio" class="btn-check" name="link" id="btnradio8" autocomplete="off" onChange={onChange} value={hyperLink}/>
        <label class="btn btn-outline-primary" for="btnradio8" onClick={Snippet} ><i class="fa fa-code" aria-hidden="true"></i></label>
        <input type="radio" class="btn-check" name="link" id="btnradio9" autocomplete="off" onChange={onChange} value={hyperLink}/>
        <label class="btn btn-outline-primary" for="btnradio9" onClick={codeBlock} ><i class="fas fa-code-branch    "></i></label>
        <input type="radio" class="btn-check" name="link" id="btnradio10" autocomplete="off" onChange={onChange} value={hyperLink}/>
        <label class="btn btn-outline-primary" for="btnradio10" onClick={List} ><i class="fa fa-list" aria-hidden="true"></i></label>
        <input type="radio" class="btn-check" name="link" id="btnradio11" autocomplete="off" onChange={onChange} value={hyperLink}/>
        <label class="btn btn-outline-primary" for="btnradio11" onClick={noList} ><i class="fa fa-list-ol" aria-hidden="true"></i></label>

      </div>
      <form style={myStyle}>
        <div style={myStyle2}>
        <div class="mb-3" style={myStyle3}>
        <input class="form-control form-control-sm" name = 'hyperLink' type="text" style={{display: dsp,margin:'5px'}} onChange={onChange} placeholder=".com" aria-label=".form-control-sm example"/>
        <input class="form-control form-control-sm" name = 'textLink' type="text" style={{display: dsp ,margin:'5px'}} onChange={onChange} placeholder="text for link" aria-label=".form-control-sm example"/>
        <textarea class="form-control form-control-sm" name = 'codeSnippet' type="text" style={{display: dsp1 ,margin:'5px'}} onChange={onChange} placeholder="</>" aria-label=".form-control-sm example" rows="5" cols="10"></textarea>
        <textarea class="form-control form-control-sm" name = 'codeBlock' type="text" style={{display: dsp3 ,margin:'5px'}} onChange={onChange} placeholder="</> Add code Block" aria-label=".form-control-sm example" rows="25" cols="10"></textarea>
        <textarea class="form-control-sm" name = 'bulletList' type="text" style={{display: dsp4 ,margin:'5px'}} onChange={onChange} placeholder="Add Your Bullet List" aria-label=".form-control-sm example" rows="10" cols="25"></textarea>
        <textarea class="form-control-sm" name = 'noList' type="text" style={{display: dsp5 ,margin:'5px'}} onChange={onChange} placeholder="Add Your Ordered List" aria-label=".form-control-sm example" rows="10" cols="25"></textarea>
          <input id='myText' type='text' class="form-control" style={myStyle} name='discription' onChange={onChange} />
        </div>
        <form action={`${host}/api/chats/addfile`} method='POST' encType='multipart/form-data' onSubmit={handleSubmit}>
          <input type="file" name="file" id="file" />
          <button type='submit'>Upload</button>
          <p>{chats.filePath}</p>
          </form>
        {/* <textarea onChange={(e)=>setEmoji(e.target.value)}></textarea>
        <Picker onEmojiClick={onEmojiClick}/> */}
        {/* {emoji && <EmojiData emoji = {emoji}/>} */}
        <button type="submit" class="btn btn-primary" onClick={handleClick} style={myStyle4}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-airplane-fill" viewBox="0 0 16 16">
          <path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849Z" />
        </svg></button>
        </div>
      </form>
    </div>
  )
}

export default Addglobal
