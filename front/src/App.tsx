import React, {useState} from "react";

import {Header, HeaderProps} from "./components/header/Header";
import {Jumbatron} from "./components/jumbatron/Jumbatron";
import {Cards, CardProps} from "./components/cards/Cards";
import {Grills, GrillsProps} from "./components/grills/Grills";
import {Contacts, ContactsProps} from "./components/contacts/Contacts";
import {Form, FormProps} from "./components/form/Form";
import s from "./styles.pcss"
import image from "src/pictures/jumbatron.jpeg";
import {t} from "src/i18n";

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

const boatsData: BoatData[] = [
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


export function App() {
	const [modalOpened, setModalOpened] = useState(false);

	const headerProps: HeaderProps = {
		openModal: () => setModalOpened(true),
	};

	const cardProps: CardProps = {
		cardsMeta: boatsData,
		openModal: () => setModalOpened(true),
	};

	const grillsProps: GrillsProps = {
		grillMeta: ['bronze', 'gold', 'silver'], // todo: move to data
		openModal: () => setModalOpened(true),
	};

	const contactsProps: ContactsProps = {};// todo: move to data

	const boatOptions = boatsData.map((boatData: BoatData) => {
		return {
			id: `${boatData.id}`,
			value: `${boatData.id}`,
			label: boatData.title,
			maxPeopleCapability: boatData.maxPeopleCapability,
			disabled: boatData.isUnderMaintenance || boatData.isComingSoon,
		};
	})

	const formProps: FormProps = {
		boatOptions,
		preSelectedBoatOption: boatOptions[0],
		isOpened: modalOpened,
		onClose: () => setModalOpened(false),
	};

	return <>
		<Form { ...formProps }/>
		<Header { ...headerProps }/>
		<Jumbatron/>
		<Cards { ...cardProps }/>
		{<Grills { ...grillsProps }/>/* todo: implement */}
		{<Contacts { ...contactsProps }/>/* todo: implement */}
	</>;
}
