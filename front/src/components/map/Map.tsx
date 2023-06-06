import React, {useState} from "react";
import {t} from 'src/i18n';

import s from "./map.pcss";
import {CardMedia, Typography, Card, CardContent} from "@mui/material";

export interface Stat {
	text: string,
	value: string,
	icon: JSX.Element
}

export interface MapProps {
}


export function Map(props: MapProps): JSX.Element {
	const {
	} = props;

	return (
		<div className={s.mapWrapper} id='map'>
		</div>
	);
}
