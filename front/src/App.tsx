import React, {useState} from "react";

import {statsData} from "src/data/statData";
import {
	BoatData,
	boatsData,
	contactsData,
	mapData
} from "src/data/getData";

import {Header, HeaderProps} from "./components/header/Header";
import {Jumbatron} from "./components/jumbatron/Jumbatron";
import {Cards, CardProps} from "./components/cards/Cards";
import {Form, FormProps} from "./components/form/Form";
import {Stat, Stats, StatsProps} from "./components/stats/Stats.tsx";
import {Parallax, ParallaxProps} from "./components/parallax/Parallax.tsx";
import {MapComponent as Map, MapProps} from "./components/map/Map.tsx";
import {Footer} from "./components/footer/Footer.tsx";

import s from "./styles.pcss"

export function App() {
	const [modalOpened, setModalOpened] = useState(false);

	const headerProps: HeaderProps = {
		openModal: () => setModalOpened(true),
	};

	const cardProps: CardProps = {
		cardsMeta: boatsData,
		openModal: () => setModalOpened(true),
	};

	const parallaxProps: ParallaxProps = {
		openModal: () => setModalOpened(true),
		contacts: contactsData,
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

	const formProps: FormProps = {
		boatOptions,
		preSelectedBoatOption: boatOptions[0],
		isOpened: modalOpened,
		onClose: () => setModalOpened(false),
	};

	const statsProps: StatsProps = {
		stats: statsData,
	};

	React.useEffect(()=>{
		translations();
	},[])

	return <>
		<Form { ...formProps }/>
		<Header { ...headerProps }/>
		<Jumbatron/>
		<Cards { ...cardProps }/>
		<Stats { ...statsProps }/>
		<Parallax {...parallaxProps}/>
		<Map {...mapData}/>
		<Footer/>
	</>;
}

function translations() {
	// todo: send overall query with navigator.languages
	console.log(navigator.languages); // format: ["en-US", "en", "de"]
}
