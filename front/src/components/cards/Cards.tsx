import React from "react";

import {
	Button,
	Card,
	CardContent,
	Typography,
	CardActions,
	CardMedia
} from '@mui/material';

import {Boats} from "src/data/dataTypes";
import {BoatData} from "src/data/dataTypes";

import s from "./cards.pcss";

export interface CardProps {
	cardsMeta: Boats
	openModal: () => void;
}

export function Cards(props: CardProps): JSX.Element {
	const {
		cardsMeta,
		openModal
	} = props;

	return (
		<div className={s.cardsWrapper} id='boats'>
			{ cardsMeta.data.map((cardMeta: BoatData)=>{
				return (
					<Card className={`${s.card} ${(cardMeta.values.isUnderMaintenance || cardMeta.values.isComingSoon) && s.disabled}`} key={cardMeta.id}>
						<div>
							<CardMedia
								component="img"
								alt={cardMeta.translations.title}
								height="140"
								image={cardMeta.values.image}
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="span">
									{cardMeta.translations.title}{
										cardMeta.values.isComingSoon && <Typography gutterBottom variant="h5" component="span" className={s.kek}>
											{cardsMeta.commonTranslations.comingSoon}
										</Typography>
									}{
										cardMeta.values.isUnderMaintenance && <Typography gutterBottom variant="h5" component="span" className={s.kek}>
											{cardsMeta.commonTranslations.underMaintenance}
										</Typography>
									}{
										!cardMeta.values.isUnderMaintenance && !cardMeta.values.isComingSoon && <Typography gutterBottom variant="h5" component="span" className={s.kek}>
											{cardsMeta.commonTranslations.bookNow}
										</Typography>
									}
								</Typography>
								<Typography variant="body2" color="text.secondary">
									{cardMeta.translations.promtText}
								</Typography>
							</CardContent>
						</div>
						<CardActions className={s.cardActions}>
							<Button size="small"
									disabled={cardMeta.values.isUnderMaintenance || cardMeta.values.isComingSoon}
									onClick={openModal}
							>
								{cardsMeta.commonTranslations.order}
							</Button>
						</CardActions>
					</Card>
				)
			})}
		</div>
	);
}
