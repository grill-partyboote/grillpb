import React from "react";
import s from "./jumbatron.pcss";
interface HeaderProps {

}

export function Jumbatron(props: HeaderProps): JSX.Element {
	return (
		<div className={ s.jumbatron }>
			jumbatron
		</div>)
};
