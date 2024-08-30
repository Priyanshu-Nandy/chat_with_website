"use client"

import { useChat } from "ai/react"
import { Messaages } from "./Messages"

const ChatWrapper = ({sessionId}:{sessionId:string}) => {
  
    const {messages,handleInputChange,input,handleSubmit} =useChat(
        {api:"/api/chat-stream",
        body:{sessionId}
    
    }
    )
    return (
    <div className="relative min-h-full bg-zinc-900 flex divide-y divide-zinc-700 flex-col justify-between gap-2">
        <div className="flex-1 text-black bg-zinc-800 justify-between flex flex-col">
            {<Messaages messages={messages}/>}
        </div>
        <form onSubmit={handleSubmit}>
        <input className="bg-white text-black" onChange={handleInputChange} type="text" value={input}/>
        <button type="submit">send</button>
        </form>
    </div>
        )
}

export default ChatWrapper