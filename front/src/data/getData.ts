// fixme: move to other file (serverConnection) and others data
// fixme: get all texts from server

import image from "src/pictures/jumbatron.jpeg";
import {t} from "src/i18n";
import {ContactsProps} from "src/components/contacts/Contacts";
import {MapProps} from "src/components/map/Map";

export interface BoatData {
	image: string,
	id: number,
	title: string,
	promtText: string,
	price: string,
	maxPeopleCapability: number,
	isUnderMaintenance: boolean,
	isComingSoon: boolean,
}

// fixme: add availability dates (maybe for nearest 3 month only, and lock dates than farther 3 next month )
export const boatsData: BoatData[] = [
	{
		id: 0,
		image: image,
		title: t('Owl'),
		promtText: t('Fishing Boat - If you\'re looking to catch some fish, our fishing boat is the perfect choice. It\'s equipped with a fish finder and a live well to keep your catch fresh. With comfortable seating and plenty of space for your gear, this boat is ideal for a day of fishing on the lake.'),
		price: t('249$ for day'),
		maxPeopleCapability: 12,
		isUnderMaintenance: false,
		isComingSoon: false,
	},
	{
		id: 1,
		image: image,
		title: t('Hawk'),
		promtText: t('Grill Boat - Looking for a unique way to enjoy a meal on the water? Our grill boat is the perfect choice. This boat is equipped with a built-in grill so you can cook up your favorite foods while you cruise around the lake. It also features comfortable seating and a table for dining al fresco. This boat is great for family outings or a fun day with friends.'),
		price: t('349$ for day'),
		maxPeopleCapability: 14,
		isUnderMaintenance: true,
		isComingSoon: false,
	},
	{
		id: 2,
		image: image,
		title: t('Falcon'),
		promtText: t('Party Boat - If you\'re looking to host a party on the water, our party boat is the ultimate choice. This boat is equipped with everything you need to throw a great party, including a sound system, coolers, and plenty of space for dancing. With comfortable seating and a built-in bar, this boat is perfect for birthdays, bachelorette parties, or any other celebration.'),
		price: t('449$ for day'),
		maxPeopleCapability: 16,
		isUnderMaintenance: false,
		isComingSoon: true,
	}
];

// todo: contacts data should be already translated
export const contactsData: ContactsProps = {
	phoneNumber: '+1 123-456-7890',
	email: 'info@example.com',
	address: '123 Boat Rental St, Marina City',
}

export const mapData: MapProps = {
	lonlat: [47.9976275, 11.3449851],
}

export function name(){

}
