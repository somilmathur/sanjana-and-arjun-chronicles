import clientPromise from "../../lib/mongodb";
const dayjs = require("dayjs");
const utc = require("dayjs/plugin/utc");
dayjs.extend(utc);

export default async function handler(req, res) {
	const client = await clientPromise;
	const db = client.db("db");
	switch (req.method) {
		case "GET":
			const UUID = req.query.UUID;
			let user = await db.collection("rsvp").find({ UUID }).toArray();
			console.log("User from server --> ", user);
            if (user.length === 0) res.json(null)
			else res.json(user);
			break;
	}
}
