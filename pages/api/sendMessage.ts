import clientPromise from "../../lib/mongodb";
const dayjs = require("dayjs");
const utc = require("dayjs/plugin/utc");
dayjs.extend(utc);

export default async function handler(req, res) {
	const client = await clientPromise;
	const db = client.db("db");
	switch (req.method) {
		case "POST":
			let bodyObject = JSON.parse(req.body);
			console.log("body", bodyObject);
			const UUID = bodyObject.UUID;
			const messageObject = {
				message: bodyObject.message,
				createdAt: dayjs()
					.utcOffset(330)
					.format(),
			};
			let rsvp = await db
				.collection("rsvp")
				.update(
					{ UUID },
					{ $push: { messages: messageObject } },
					{ upsert: true }
				);
			res.json(rsvp);
			break;
	}
}
