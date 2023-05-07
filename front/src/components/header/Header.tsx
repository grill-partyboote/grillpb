import {
	Button,
	Link
} from '@mui/material';
import React from "react";

import {t} from 'src/i18n';
import logo from "src/pictures/logo.svg";

import s from "./header.pcss";

interface HeaderProps {

}

export function Header(props: HeaderProps): JSX.Element {
	return (
		<div className={ s.headerWrapper } >
			<div className={ s.header }>
				<img src={logo} alt="" className={ s.logo }/>
				<div className={ s.navbar }>
					<Link href="#" variant="body2">
						{t('Start')}
					</Link>
					<Link href="#" variant="body2">
						{t('Boats')}
					</Link>
					<Link href="#" variant="body2">
						{t('Gallery')}
					</Link>
					<Link href="#" variant="body2">
						{t('Contacts')}
					</Link>
					<Button variant="contained">{t('Contacts')}</Button>
				</div>
			</div>
		</div>)
}
