import React from "react";

import {t} from 'src/i18n';

import s from "./jumbatron.pcss";

import {
	Card,
} from '@mui/material';

interface JumbatronProps {

}

export function Jumbatron(props: JumbatronProps): JSX.Element {
	return (
		<div className={ s.jumbatron }>
			<div className={ s.jumbatronHeader }>
				<h1>{t('Grill and party boat rental')}</h1>
				<h3>{t('Lorem ipsum dolor sit amet, consectetur adipisicing elit')}</h3>
			</div>

			<div className={ s.cards }>
				<Card className={ s.card }>{t('card1')}</Card>
				<Card className={ s.card }>{t('card2')}</Card>
				<Card className={ s.card }>{t('card3')}</Card>
				<Card className={ s.card }>{t('card4')}</Card>
			</div>
		</div>)
}
