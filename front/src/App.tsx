import React, {useState} from "react";
import SailingIcon from "@mui/icons-material/Sailing";
import SurfingIcon from "@mui/icons-material/Surfing";
import MoodSharpIcon from "@mui/icons-material/MoodSharp";

import {t} from "src/i18n";
import image from "src/pictures/jumbatron.jpeg";

import {Header, HeaderProps} from "./components/header/Header";
import {Jumbatron} from "./components/jumbatron/Jumbatron";
import {Cards, CardProps} from "./components/cards/Cards";
import {GrillsProps} from "./components/grills/Grills";
import {ContactsProps} from "./components/contacts/Contacts";
import {Form, FormProps} from "./components/form/Form";
import {Stat, Stats, StatsProps} from "./components/stats/Stats.tsx";
import {Parallax, ParallaxProps} from "./components/parallax/Parallax.tsx";
import {MapComponent as Map, MapProps} from "./components/map/Map.tsx";
import {Footer} from "./components/footer/Footer.tsx";

import s from "./styles.pcss"

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
// todo: fix links and make them make sense
// todo: move to other file (serverConnection) and others data
// todo: add availability dates (maybe for nearest 3 month only, and lock dates than farther 3 next month )
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

const statsData: Stat[] = [
	{
		text: t('Miles traveled'),
		value: ' 2000',
		icon: (<SailingIcon
			color="primary"
			sx={{ fontSize: 100 }}>
		</SailingIcon>),
	},
	{
		text: t('Repeat clients'),
		value: ' 35%',
		icon: (<SurfingIcon
			color="primary"
			sx={{ fontSize: 100 }}>
		</SurfingIcon>),
	},
	{
		text: t('Emotions delivered'),
		value: ' ∞',
		icon: (<MoodSharpIcon
			color="primary"
			sx={{ fontSize: 100 }}>
		</MoodSharpIcon>),
	}
]

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

	// todo: contacts data should be already translated
	const contactsProps: ContactsProps = {// todo: move to data
		phoneNumber: '+1 123-456-7890',
		email: 'info@example.com',
		address: '123 Boat Rental St, Marina City',
	};

	const parallaxProps: ParallaxProps = { // todo: move to data
		openModal: () => setModalOpened(true),
		contacts: contactsProps,
	};

	const boatOptions = boatsData.map((boatData: BoatData) => {
		return {
			id: `${boatData.id}`,
			value: `${boatData.id}`,
			label: boatData.title,
			maxPeopleCapability: boatData.maxPeopleCapability,
			disabled: boatData.isUnderMaintenance || boatData.isComingSoon,
		};
	});

	const mapProps: MapProps = {
		lonlat: [47.9976275, 11.3449851],
	}

	const formProps: FormProps = {
		boatOptions,
		preSelectedBoatOption: boatOptions[0],
		isOpened: modalOpened,
		onClose: () => setModalOpened(false),
	};

	const statsProps: StatsProps = {
		stats: statsData,
	};

	return <>
		<Form { ...formProps }/>
		<Header { ...headerProps }/>
		<Jumbatron/>
		<Cards { ...cardProps }/>
		<Stats { ...statsProps }/>
		<Parallax {...parallaxProps}/>
		<Map {...mapProps}/>
		<Footer/>
	</>;
}
