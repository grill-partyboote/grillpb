import React from "react";
import {t} from 'src/i18n';

import s from "./parallax.pcss";
import {Contacts, ContactsProps} from "src/components/contacts/Contacts";
import {Button} from "@mui/material";

export interface ParallaxProps {
	openModal: () => void;
	contacts: ContactsProps;
}

export function Parallax(props: ParallaxProps): JSX.Element {
	const {
		openModal,
		contacts
	} = props;

	return (
		<div className={s.parallaxWrapper} id='parallax'>
			<div className={s.parallaxSide}>
				<Contacts {...contacts}/>
			</div>
			<div className={s.parallaxSide}>
				<div>
					<Button size="large"
							className={s.button}
							variant="contained"
							onClick={openModal}
					>
						{t('Book one of our boats online')}
					</Button>
				</div>
			</div>
		</div>
	);
}


