import React from "react";
import s from "./header.pcss";
import Button from '@mui/material/Button';
interface HeaderProps {

}

export function Header(props: HeaderProps): JSX.Element {
	return (
		<header className={ s.header } >
			header
			<Button variant="contained">Hello World</Button>
		</header>)
};
