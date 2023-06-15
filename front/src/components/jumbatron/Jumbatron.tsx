import React from "react";
import {
	Button,
	Typography,
} from '@mui/material';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';

import {t} from 'src/i18n';
import s from "./jumbatron.pcss";
interface JumbatronProps {

}

export function Jumbatron(props: JumbatronProps): JSX.Element {
	// fixme: think what to do with grills button
	return (
		<div className={ s.jumbatron } id='jumbatron'>
			<div className={ s.jumbatronHeader }>
				<h1>{t('Grill and party boat rental')}</h1>
				<h3>{t('Lorem ipsum dolor sit amet, consectetur adipisicing elit')}</h3>
			</div>
			<div className={ s.jumbatronButtons }>
				<a href="#boats">
					<Button variant="contained">
						{t('Boats')}
					</Button>
				</a>
				<a href="#grills">
					<Button variant="contained">
						{t('Grills')}
					</Button>
				</a>
			</div>
			<div className={ s.promoText }>
				<Typography gutterBottom variant="h4" component="span" className={s.typo}>
					{t('Get a discount if you book for tomorrow!')}
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
