import React, { useEffect, useState } from 'react'


const NoteItems = (props) => {
    const {chats} = props
    const [bulletList, setBulletList] = useState([])
    const [noList, setNoList] = useState([])
   
    useEffect(() => {
        if (chats.bulletList != null) {
            setBulletList(chats.bulletList.split('\n'))
        }
        if(chats.noList != null){
            setNoList(chats.noList.split('\n'))
        }
    })

    let dsp = ""
    let dsp2 = ""
    let dsp4 = ""
    if (chats.hyperLink === "#") {
        dsp = 'none'
    }
    if (chats.codeBlock === "") {
        dsp2 = 'none'
    }
    if (chats.filePath == ""){
        dsp4 = 'none'
    }

    return (
        <div className='my-3'>
            <div className="card">
                <div className="card-body">
                    <p>{chats.name}</p> 
                    <p className="card-text" style={{ fontStyle: chats.font, fontWeight: chats.fontWeight, textDecoration: chats.fontStrick }}>{chats.discription}</p>
                    {bulletList.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                    {noList.map((item, index) => (
                        <p>{index +1} {item}</p>
                    ))}
                    <a style={{ display: dsp }} href={chats.hyperLink}>{chats.textLink}</a>
                    <code><pre>{chats.codeSnippet}</pre></code>
                    <code><pre style={{ background: 'black', color: '#00ff0f;', padding: '10px', border: '3px solid #05eaff', borderRadius: '5px', display: dsp2 }}>{chats.codeBlock}</pre></code>
                    <p>{chats.path}</p>
                    <a href= {`../../${chats.filePath}`} style={{display:dsp4}} download={chats.fileName}>{chats.fileName}</a> 
                </div>
            </div>
        </div>
    )
}

export default NoteItems
