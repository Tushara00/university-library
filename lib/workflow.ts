import {client as WorkflowClient} from "@upstash/workflow"
import config from "@/lib/config"

export const  WorkflowClient = new WorkflowClient({
baseurl: config.env.upstash.qstashUrl,
token:config.env.upstash.qstashToken,
})