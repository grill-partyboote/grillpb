import React, {useState} from "react";
import {t} from 'src/i18n';

import s from "./stats.pcss";
import {CardMedia, Typography, Card, CardContent} from "@mui/material";

export interface Stat {
	text: string,
	value: string,
	icon: JSX.Element
}

export interface StatsProps {
	stats: Stat[];
}


export function Stats(props: StatsProps): JSX.Element {
	const {
		stats
	} = props;

	return (
		<div className={s.statsWrapper} id='stats'>
			{ stats.map((stat: Stat)=>{
				return (
					<div className={s.statsCard}
						key={stat.text}>
						{stat.icon}
						<div>
							<Typography gutterBottom variant="h5" component="span" className={s.statText}>
								{stat.text}:
							</Typography>
							<Typography gutterBottom variant="h4œ" component="span" className={s.statValue}>
								{stat.value}
							</Typography>
						</div>
					</div>
				)
			})}
		</div>
	);
}
