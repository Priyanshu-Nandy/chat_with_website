
interface MessageProps{
    content:string,
    isUserMessage:boolean
}
const Message = ({content,isUserMessage}:MessageProps) => {
  return (
    <div className="">Message</div>
  )
}

export default Message