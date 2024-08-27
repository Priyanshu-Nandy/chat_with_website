import { ragChat } from "@/lib/rag-chat"

interface PageProps{
    params:{
        url:string|string[]|undefined//this is given url as we have given the name url in the file system
    }
}
const reconstructUrl=({url}:{url:string[]})=>{//the url comes in  array format so we need to reconstruct it and also decode it as  it is encoded by  the server

    const decodedComponents=url.map((component)=>
        decodeURIComponent(component))
    return decodedComponents.join("/")
    
}
const Page = async({params}:PageProps) => {//as we put ...url, it indicates that params is being passed automatically from the localhost:3000/[..url]
    const reconstructedUrl=reconstructUrl({url:params.url as string[]})
    console.log(params)
     await ragChat.context.add({
        type: "html",
        source: reconstructedUrl,
        config: { chunkOverlap: 50, chunkSize: 200 }
    })
  return (
    <div>page</div>
  )
}

export default Page