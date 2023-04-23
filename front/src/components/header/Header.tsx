import React from "react";
import s from "./header.pcss";
import logo from "./../../pictures/logo.svg";
import Button from '@mui/material/Button';
interface HeaderProps {

}

export function Header(props: HeaderProps): JSX.Element {
	return (
		<header className={ s.header } >
			<img src={logo} alt="" className={ s.logo }/>
			<div className={ s.navbar }>
				<a href="google.com">Start</a>
				<a href="google.com">Boats</a>
				<a href="google.com">Gallery</a>
				<a href="google.com">Contacts</a>
				<Button variant="contained">Book</Button>
			</div>
		</header>)
};
