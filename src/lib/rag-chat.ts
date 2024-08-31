import { RAGChat, upstash } from "@upstash/rag-chat";
import { redis } from "./redis";

export const ragChat=new RAGChat({
    model:upstash("meta-llama/Meta-Llama-3-8B-Instruct"),//optional field to mention which model to use
    redis:redis//persist our messages in our database
})