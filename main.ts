import { MongoClient}from "mongodb";


const MONGO_URL = Deno.env.get("MONGO_URL");
if (!MONGO_URL) {
  throw new Error("url not set")
}

const client = new MongoClient(MONGO_URL);
await client.connect();
console.info("Connected to MongoDB");
const handler = async (req: Request): Promise<Response> => {
  const method = req.method;
  const url = new URL(req.url);
  const path = url.pathname;

  if (method === "GET") {
    if (path === "/prueba") {
        return new Response("prueba")
    }
  }
  return new Response("endpoint not found")
}
Deno.serve({ port: 3000 }, handler);