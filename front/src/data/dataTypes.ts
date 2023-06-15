import image from "src/pictures/jumbatron.jpeg";
// fixme: make properties human readable and not linked to its current values
export interface FormTranslation {
	title: string;
	name: string;
	nameError: string;
	phoneNumber: string;
	phoneNumberError: string;
	startDate: string;
	endDate: string;
	dateError: string;
	eMail: string;
	eMailError: string;
	boat: string;
	submit: string;
	max: string;
}

export interface HeaderTranslation {
	start: string;
	boats: string;
	contacts: string;
	book: string;
}

export interface JumbatronTranslation {
	title: string;
	subtitle: string;
	boats: string;
	contacts: string;
	promoText: string;
}

export interface BoatData {
	id: number,
	translations: {
		title: string,
		promtText: string,
		price: string,
	},
	values: {
		image: string, // todo: check this type
		maxPeopleCapability: number,
		isUnderMaintenance: boolean,
		isComingSoon: boolean,
	}
}

export interface Boats {
	commonTranslations:{
		comingSoon: string
		underMaintenance: string
		bookNow: string
		order: string
	}
	data: BoatData[]
}

export interface StatsData {
	translations: {
		text: string,
		value: string,
	},
}

export interface ContactsData {
	translations: {
		title: string,
		phone: string,
		eMail: string,
		address: string,
	},
	values: {
		phoneNumber: string,
		email: string,
		address: string,
	}
}

export interface ParallaxData {
	button: {
		translations: {
			title: string,
		}
	},
	contacts: ContactsData
}

export interface MapData {
	lonlat: [number, number];
	title: string;
}

export interface AllData {
	form: FormTranslation;
	header: HeaderTranslation;
	jumbatron: JumbatronTranslation;
	boatsData: Boats;
	stats: StatsData[];
	parallax: ParallaxData;
	map: MapData;
}

export const allData: AllData = {
	form: {
		title: 'Book a Boat',
		name: 'name',
		nameError: 'Name shouldnt be empty',
		phoneNumber: 'phone number',
		phoneNumberError: 'Invalid phone number',
		startDate: 'start date',
		endDate: 'end date',
		dateError: 'Invalid date',
		eMail: 'e-mail',
		eMailError: 'Invalid email address',
		boat: 'boat',
		submit: 'Submit',
		max: 'max',
	},
	header: {
		start: 'Start',
		boats: 'Boats',
		contacts: 'Contacts',
		book: 'Book',
	},
	jumbatron: {
		title: 'Grill and party boat rental',
		subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
		boats: 'Boats',
		contacts: 'Contacts',
		promoText: 'Get a discount if you book for tomorrow!',
	},
	boatsData:
		{
			commonTranslations: {
				comingSoon:' (coming soon)',
				underMaintenance:' (under maintenance)',
				bookNow:' (book now)',
				order:'Order',
			},
			data: [
				{
					id: 0,
					translations: {
						title: 'Owl',
						promtText: 'Fishing Boat - If you\'re looking to catch some fish, our fishing boat is the perfect choice. It\'s equipped with a fish finder and a live well to keep your catch fresh. With comfortable seating and plenty of space for your gear, this boat is ideal for a day of fishing on the lake.',
						price: '249$ for day',
					},
					values: {
						image: image,
						maxPeopleCapability: 12,
						isUnderMaintenance: false,
						isComingSoon: false,
					}
				},
				{
					id: 1,
					translations: {
						title: 'Hawk',
						promtText: 'Grill Boat - Looking for a unique way to enjoy a meal on the water? Our grill boat is the perfect choice. This boat is equipped with a built-in grill so you can cook up your favorite foods while you cruise around the lake. It also features comfortable seating and a table for dining al fresco. This boat is great for family outings or a fun day with friends.',
						price: '349$ for day',
					},
					values: {
						image: image,
						maxPeopleCapability: 14,
						isUnderMaintenance: true,
						isComingSoon: false,
					}
				},
				{
					id: 2,
					translations: {
						title: 'Falcon',
						promtText: 'Party Boat - If you\'re looking to host a party on the water, our party boat is the ultimate choice. This boat is equipped with everything you need to throw a great party, including a sound system, coolers, and plenty of space for dancing. With comfortable seating and a built-in bar, this boat is perfect for birthdays, bachelorette parties, or any other celebration.',
						price: '449$ for day',
					},
					values: {
						image: image,
						maxPeopleCapability: 16,
						isUnderMaintenance: false,
						isComingSoon: true,
					}
				}
			]
		},
	stats: [
		{
			translations: {
				text: 'Miles traveled',
				value: ' 2000',
			},
		},
		{
			translations: {
				text: 'Repeat clients',
				value: ' 35%',
			},
		},
		{
			translations: {
				text: 'Emotions delivered',
				value: ' ∞',
			},
		}
	],
	parallax: {
		button: {
			translations: {
				title: 'Book one of our boats online',
			}
		},
		contacts: {
			translations: {
				title: 'Reach us directly',
				phone: 'Phone',
				eMail: 'E-mail',
				address: 'Address',
			},
			values: {
				phoneNumber: '+1 123-456-7890',
				email: 'info@example.com',
				address: '123 Boat Rental St, Marina City',
			}
		}
	},
	map: {
		lonlat: [47.9976275, 11.3449851],
		title: 'You can find us here',
	}
}
