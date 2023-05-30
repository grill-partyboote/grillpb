import React from "react";

import {} from '@mui/material';

import {t} from 'src/i18n';


import s from "./grills.pcss";

export interface GrillsProps {
	grillMeta: string[]
	openModal: () => void;
}

export function Grills(props: GrillsProps): JSX.Element {
	const {
		grillMeta,
		openModal
	} = props;

	return (
		<div className={s.grillsWrapper} id='grills'>
		</div>
	);
}
