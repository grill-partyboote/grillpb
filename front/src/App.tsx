import React, {useState} from "react";

import {getData} from "src/data/getData";
import {allData, AllData, BoatData} from "src/data/dataTypes";

import {Header, HeaderProps} from "./components/header/Header";
import {Jumbatron} from "./components/jumbatron/Jumbatron";
import {Cards, CardProps} from "./components/cards/Cards";
import {Form, FormProps} from "./components/form/Form";
import {Stats} from "./components/stats/Stats.tsx";
import {Parallax, ParallaxProps} from "./components/parallax/Parallax.tsx";
import {MapComponent as Map} from "./components/map/Map.tsx";
import {Footer} from "./components/footer/Footer.tsx";

import s from "./styles.pcss"

export function App() {
	const [data, setData] = useState<AllData>(allData)
	const [modalOpened, setModalOpened] = useState(false);

	const headerProps: HeaderProps = {
		translations: data.header,
		openModal: () => setModalOpened(true),
	};

	const cardProps: CardProps = {
		cardsMeta: data.boatsData,
		openModal: () => setModalOpened(true),
	};

	const parallaxProps: ParallaxProps = {
		openModal: () => setModalOpened(true),
		parallaxData: data.parallax,
	};

	const boatOptions = data.boatsData.data.map((boatData: BoatData) => {
		return {
			id: `${boatData.id}`,
			value: `${boatData.id}`,
			label: boatData.translations.title,
			maxPeopleCapability: boatData.values.maxPeopleCapability,
			disabled: boatData.values.isUnderMaintenance || boatData.values.isComingSoon,
		};
	});

	const formProps: FormProps = {
		translations: data.form,
		boatOptions,
		preSelectedBoatOption: boatOptions[0],
		isOpened: modalOpened,
		onClose: () => setModalOpened(false),
	};

	React.useEffect(()=>{
		setData(getData());
	},[])

	return <>
		<Form { ...formProps }/>
		<Header { ...headerProps }/>
		<Jumbatron {...data.jumbatron}/>
		<Cards { ...cardProps }/>
		<Stats { ...data.stats }/>
		<Parallax {...parallaxProps}/>
		<Map {...data.map}/>
		<Footer/>
	</>;
}

