import {
	Button,
	Link
} from '@mui/material';
import React from "react";

import logo from "src/pictures/logo.svg";
import {HeaderTranslation} from "src/data/dataTypes";

import s from "./header.pcss";

export interface HeaderProps {
	translations: HeaderTranslation;
	openModal: () => void;
}

export function Header(props: HeaderProps): JSX.Element {
	const {
		translations,
		openModal
	} = props;
	return (
		<div className={ s.headerWrapper } >
			<div className={ s.header }>
				<a href="#jumbatron">
					<img src={logo} alt="" className={ s.logo }/>
				</a>
				<div className={ s.navbar }>
					<Link href="#jumbatron" variant="body2">
						{translations.start}
					</Link>
					<Link href="#boats" variant="body2">
						{translations.boats}
					</Link>
					<Link href="#contacts" variant="body2">
						{translations.contacts}
					</Link>
					<Button variant="contained" onClick={openModal}>{translations.book}</Button>
				</div>
			</div>
		</div>)
}
