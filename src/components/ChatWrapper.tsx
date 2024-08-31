"use client"

import { Message, useChat } from "ai/react"
import { Messaages } from "./Messages"
import ChatInput from "./ChatInput"

const ChatWrapper = ({
    sessionId,
    initialMessages
}:{
    sessionId: string
    initialMessages:Message[]
}) => {
  
    const {messages,handleInputChange,input,handleSubmit,setInput} =useChat(
        {api:"/api/chat-stream",
        body:{sessionId},
        initialMessages
    }
    )
    return (
    <div className="relative min-h-full bg-zinc-900 flex divide-y divide-zinc-700 flex-col justify-between gap-2">
        <div className="flex-1 text-black bg-zinc-800 justify-between flex flex-col">
            {<Messaages messages={messages}/>}
        </div>
        <ChatInput  input={input} setInput={setInput} handleSubmit={handleSubmit} handleInputChange={handleInputChange} />


    </div>
        )
}

export default ChatWrapper