import React from "react";

import {} from '@mui/material';

import {t} from 'src/i18n';


import s from "./contacts.pcss";

export interface ContactsProps {
}

export function Contacts(props: ContactsProps): JSX.Element {
	const {
	} = props;

	return (
		<div className={s.contactsWrapper} id='contacts'>
		</div>
	);
}
