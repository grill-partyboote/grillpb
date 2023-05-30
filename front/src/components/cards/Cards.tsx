import React from "react";

import {
	Button,
	Card,
	CardContent,
	Typography,
	CardActions,
	CardMedia
} from '@mui/material';

import {t} from 'src/i18n';

import {BoatData} from "src/App";

import s from "./cards.pcss";

export interface CardProps {
	cardsMeta: BoatData[]
}

// todo: add nearest available dates
// todo: lock 2 of 3 boats
export function Cards(props: CardProps): JSX.Element {
	const {
		cardsMeta
	} = props;

	return (<>
		<div className={s.cardsWrapper}>
			{ cardsMeta.map((cardMeta)=>{
				return (
					<Card className={s.card} key={cardMeta.id}>
						<div>
							<CardMedia
								component="img"
								alt={cardMeta.title}
								height="140"
								image={cardMeta.image}
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="div">
									{cardMeta.title}
								</Typography>
								<Typography variant="body2" color="text.secondary">
									{cardMeta.promtText}
								</Typography>
							</CardContent>
						</div>
						<CardActions  className={s.cardActions}>
							<Button size="small">{t('Order')}</Button>
						</CardActions>
					</Card>
				)
			})}
		</div>
	</>);
}
