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
        UUID: bodyObject.UUID,
        name: bodyObject.answers.steps["rsvp-answer"]?.message,
        requiresAccommodation: bodyObject.answers.steps["accomodation-answer"]?.message,
        peopleInParty: bodyObject.answers.steps["how-many-people-answer"].value,
        createdAt: dayjs().utcOffset(330).format(),
        answers: bodyObject.answers.steps,
      }
      let rsvp = await db.collection("rsvp").insertOne(rsvpObject);
      console.log("bodyObject ->>", rsvp)
      res.json(rsvp);
      break;   
  }
}
