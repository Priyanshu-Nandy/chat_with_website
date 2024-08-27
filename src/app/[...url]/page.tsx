import ChatWrapper from "@/components/ChatWrapper"
import { ragChat } from "@/lib/rag-chat"
import { redis } from "@/lib/redis"
interface PageProps{
    params:{
        url:string|string[]|undefined//this is given url as we have given the name url in the file system
    }
}
function reconstructUrl({url}:{url:string[]}){//the url comes in  array format so we need to reconstruct it and also decode it as  it is encoded by  the server

    const decodedComponents=url.map((component)=>
        decodeURIComponent(component))
    return decodedComponents.join("/")
    
}
const Page = async({params}:PageProps) => {//as we put ...url, it indicates that params is being passed automatically from the localhost:3000/[..url]
    const reconstructedUrl=reconstructUrl({url:params.url as string[]})
    // console.log(params)
    const isAlreadyIndexed=await redis.sismember("indexed-urls",reconstructedUrl)//checking whether reconstructedUrl is already present in the redis db or not
    const sessionId="mock-session"
    if(!isAlreadyIndexed){
        await ragChat.context.add({
           type: "html",
           source: reconstructedUrl,
           config: { chunkOverlap: 50, chunkSize: 200 }
       })
       await redis.sadd("indexed-urls",reconstructedUrl)//if not present adding to the db
    }
  return (
    <ChatWrapper sessionId={sessionId}/>
  )
}

export default Page