import clientPromise from "../../lib/mongodb";
const dayjs = require('dayjs')
const utc = require('dayjs/plugin/utc');
dayjs.extend(utc);

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("db");
  switch (req.method) {
    case "POST":
      let bodyObject = JSON.parse(req.body);
      console.log("body", bodyObject)
      const rsvpObject = {
        name: bodyObject.steps["rsvp-answer"].message,
        requiresAccommodation: bodyObject.steps["accomodation-answer"]?.message,
        peopleInParty: bodyObject.steps["how-many-people-answer"].message,
        createdAt: dayjs().utcOffset(330).format(),
        answers: bodyObject.steps,
      }
      let rsvp = await db.collection("rsvp").insertOne(rsvpObject);
      res.json(rsvp);
      break;   
  }
}
