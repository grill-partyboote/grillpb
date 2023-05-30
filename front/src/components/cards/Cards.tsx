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
	openModal: () => void;
}

export function Cards(props: CardProps): JSX.Element {
	const {
		cardsMeta,
		openModal
	} = props;

	return (
		<div className={s.cardsWrapper}>
			{ cardsMeta.map((cardMeta: BoatData)=>{
				return (
					<Card className={`${s.card} ${(cardMeta.isUnderMaintenance || cardMeta.isComingSoon) && s.disabled}`} key={cardMeta.id}>
						<div>
							<CardMedia
								component="img"
								alt={cardMeta.title}
								height="140"
								image={cardMeta.image}
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="span">
									{cardMeta.title}{
										cardMeta.isComingSoon && <Typography gutterBottom variant="h5" component="span" className={s.kek}>
											{t(' (coming soon)')}
										</Typography>
									}{
										cardMeta.isUnderMaintenance && <Typography gutterBottom variant="h5" component="span" className={s.kek}>
											{t(' (under maintenance)')}
										</Typography>
									}{
										!cardMeta.isUnderMaintenance && !cardMeta.isComingSoon && <Typography gutterBottom variant="h5" component="span" className={s.kek}>
											{t(' (book now)')}
										</Typography>
									}
								</Typography>
								<Typography variant="body2" color="text.secondary">
									{cardMeta.promtText}
								</Typography>
							</CardContent>
						</div>
						<CardActions className={s.cardActions}>
							<Button size="small"
									disabled={cardMeta.isUnderMaintenance || cardMeta.isComingSoon}
									onClick={openModal}
							>
								{t('Order')}
							</Button>
						</CardActions>
					</Card>
				)
			})}
		</div>
	);
}
