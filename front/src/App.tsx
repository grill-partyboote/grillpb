import React from "react";

import {Header} from "./components/header/Header";
import {Jumbatron} from "./components/jumbatron/Jumbatron";
import {Slider} from "./components/slider/Slider";
import s from "./styles.pcss"

export function App() {
	return <>
		<Header />
		<Jumbatron />
		<Slider />
	</>;
}
