import React from "react";

import {Button} from "@mui/material";

import {Contacts} from "src/components/contacts/Contacts";
import {ParallaxData} from "src/data/dataTypes";

import s from "./parallax.pcss";

export interface ParallaxProps {
	openModal: () => void;
	parallaxData: ParallaxData
}

export function Parallax(props: ParallaxProps): JSX.Element {
	const {
		openModal,
		parallaxData,
	} = props;

	return (
		<div className={s.parallaxWrapper} id='parallax'>
			<div className={s.parallaxSide}>
				<Contacts {...parallaxData.contacts}/>
			</div>
			<div className={s.parallaxSide}>
				<div>
					<Button size="large"
							className={s.button}
							variant="contained"
							onClick={openModal}
					>
						{parallaxData.button.translations.title}
					</Button>
				</div>
			</div>
		</div>
	);
}


