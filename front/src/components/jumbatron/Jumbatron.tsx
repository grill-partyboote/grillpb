import React from "react";
import {
	Button,
	Typography,
} from '@mui/material';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import {JumbatronTranslation} from "src/data/dataTypes";

import s from "./jumbatron.pcss";

type JumbatronProps = JumbatronTranslation;
// fixme: make arrow jumping
export function Jumbatron(props: JumbatronProps): JSX.Element {
	return (
		<div className={ s.jumbatron } id='jumbatron'>
			<div className={ s.jumbatronHeader }>
				<h1>{props.title}</h1>
				<h3>{props.subtitle}</h3>
			</div>
			<div className={ s.jumbatronButtons }>
				<a href="#boats">
					<Button variant="contained">
						{props.boats}
					</Button>
				</a>
				<a href="#contacts">
					<Button variant="contained">
						{props.contacts}
					</Button>
				</a>
			</div>
			<div className={ s.promoText }>
				<Typography gutterBottom variant="h4" component="span" className={s.typo}>
					{props.promoText}
				</Typography>
			</div>
			<div className={ s.jumbatronArrow }>
				<a href="#boats">
					<ExpandMoreRoundedIcon
						color="primary"
						sx={{ fontSize: 100 }}>
					</ExpandMoreRoundedIcon>
				</a>
			</div>
		</div>)
}
