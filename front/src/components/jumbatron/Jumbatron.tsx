import React from "react";
import {
	Button,
} from '@mui/material';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';

import {t} from 'src/i18n';
import s from "./jumbatron.pcss";
interface JumbatronProps {

}

export function Jumbatron(props: JumbatronProps): JSX.Element {
	// todo: add proper links
	return (
		<div className={ s.jumbatron }>
			<div className={ s.jumbatronHeader }>
				<h1>{t('Grill and party boat rental')}</h1>
				<h3>{t('Lorem ipsum dolor sit amet, consectetur adipisicing elit')}</h3>
			</div>
			<div className={ s.jumbatronButtons }>
				<Button variant="contained">
					{t('Boats')}
				</Button>
				<Button variant="contained">
					{t('Grills ')}
				</Button>
			</div>
			<div className={ s.jumbatronArrow }>
				<ExpandMoreRoundedIcon
					color="primary"
					sx={{ fontSize: 100 }}>
				</ExpandMoreRoundedIcon>
			</div>
		</div>)
}
