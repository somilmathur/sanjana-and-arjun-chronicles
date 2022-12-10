import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("db");
  switch (req.method) {
    case "POST":
      let bodyObject = JSON.parse(req.body);
      let rsvp = await db.collection("rsvp").insertOne(bodyObject);
      console.log("bodyObject ->>", rsvp)
      res.json(rsvp);
      break;   
  }
}
