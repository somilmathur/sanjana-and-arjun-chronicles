export const singleDayWithStay = (UUID: string) => {
	let steps = [
		{
			id: "are-you-free",
			message: "A celebration hard to miss is coming your way! Are you free on 16th February, 2023?",
			trigger: "are-you-free-answer",
		},
		{
			id: "are-you-free-answer",
			options: [
				{ value: "yes", label: "Yes!  🎉", trigger: "do-you-like-to-party" },
				{ value: "no", label: "No  😔", trigger: "can-you-cancel" },
			],
		},
		{
			id: "can-you-cancel",
			message: "Can you cancel your plans?",
			trigger: "can-you-cancel-answer",
		},
		{
			id: "can-you-cancel-answer",
			options: [
				{
					value: "yes",
					label: "Anything for you guys! 🥹",
					trigger: "go-to-rsvp",
				},
				{ value: "no", label: "No!  😞", trigger: "please" },
			],
		},
		{
			id: "please",
			message: "Please? We promise it will be a great time!",
			trigger: "please-answer",
		},
		{
			id: "please-answer",
			options: [
				{
					value: "yes",
					label: "Alright then!  🫡",
					trigger: "go-to-rsvp",
				},
				{
					value: "no",
					label: "Still a no.  😞",
					trigger: "negative-end",
				},
			],
		},
		{
			id: "go-to-rsvp",
			message:
				"Woohoo! Awesome! Sanjana and Arjun are getting married on 16th February, 2023 and we'd love for you to join us!",
			trigger: "rsvp",
		},
		{
			id: "rsvp",
			message: "Let us RSVP you in. What's your name?",
			trigger: "rsvp-answer",
		},
		{
			id: "rsvp-answer",
			user: true,
			trigger: "how-many-people",
		},
		{
			id: "how-many-people",
			message: "How many people in your party will be joining?",
			trigger: "how-many-people-answer",
		},
		{
			id: "how-many-people-answer",
			options: [
				{
					value: "1",
					label: "Just me",
					trigger: "accommodation",
				},
				{
					value: "2",
					label: "2",
					trigger: "accommodation",
				},
				{
					value: "3",
					label: "3",
					trigger: "accommodation",
				},
				{
					value: "4",
					label: "4",
					trigger: "accommodation",
				},
				{
					value: "4+",
					label: "4+",
					trigger: "accommodation",
				},
			],
		},
		{
			id: "accommodation",
			message: "Would you be requiring accommodation?",
			trigger: "accommodation-answer",
		},
		{
			id: "accommodation-answer",
			options: [
				{
					value: "yes",
					label: "Yes, please!",
					trigger: "positive-end",
				},
				{
					value: "no",
					label: "No, I'll manage.",
					trigger: "positive-end",
				},
			],
		},
		{
			id: "how-about-foods-and-drinks",
			message: "How about good food and drinks, won't that be a delight?",
			trigger: "how-about-foods-and-drinks-answer",
		},
		{
			id: "how-about-foods-and-drinks-answer",
			options: [
				{
					value: "yes",
					label: "Oh yes, I'm down for that!",
					trigger: "go-to-rsvp",
				},
			],
		},
		{
			id: "do-you-like-to-party",
			message: "Do you want to party?",
			trigger: "do-you-like-to-party-answer",
		},
		{
			id: "do-you-like-to-party-answer",
			options: [
				{
					value: "yes",
					label: "Yep, who doesn't?",
					trigger: "go-to-rsvp",
				},
				{
					value: "no",
					label: "Nope",
					trigger: "how-about-foods-and-drinks",
				},
			],
		},
		{
			id: "negative-end",
			message:
				"Bummer! We'll miss you at the event. However, you can check back here to see live photos of the event at any time!",
			trigger: "send-message",
		},
		{
			id: "positive-end",
			message:
				"Got it. Thanks for the info! We have added you to our list and will get in touch shortly to tell you more about our plans.",
			trigger: (e) => {
				fetch("/api/rsvp", {
					method: "POST",
					body: JSON.stringify({
						answers: e,
						UUID,
					}),
				});
				return "send-message";
			},
		},
		{
			id: "send-message",
			message: "Meanwhile, do you have any message for the couple?",
			trigger: "send-message-to-couple-answer",
		},
		{
			id: "send-message-to-couple-answer",
			user: true,
			trigger: (e) => {
				fetch("/api/sendMessage", {
					method: "POST",
					body: JSON.stringify({
						message: e.steps["send-message-to-couple-answer"].message,
						UUID,
					}),
				});
				return "thanks-for-your-message";
			},
		},
		{
			id: "thanks-for-your-message",
			message: "Thanks for your message! See you soon! 🫶",
			end: true,
		},
	];
	return steps;
};
