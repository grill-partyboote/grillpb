import React from 'react';

import {
	Card,
	CardContent,
	Typography,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import s from "./contacts.pcss";
import {ContactsData} from "src/data/dataTypes";

export type ContactsProps = ContactsData;

export function Contacts(props: ContactsProps) {
	const {
		translations,
		values,
	} = props;

	return (
		<Card className={s.contactBlock} id='contacts'>
			<CardContent>
				<Typography variant="h6" component="h2" gutterBottom>
					{translations.title}
				</Typography>
				<List>
					<ListItem className={s.listItem}>
						<ListItemIcon>
							<PhoneIcon />
						</ListItemIcon>
						<ListItemText primary={
							<Typography variant="body1" component="p" gutterBottom>
								{translations.phone}: <a href={`tel:${values.phoneNumber}`}>
								<Typography variant="body1" component="p" gutterBottom>
									{values.phoneNumber}
								</Typography>
							</a>
							</Typography>
						}/>
					</ListItem>

					<ListItem className={s.listItem}>
						<ListItemIcon>
							<EmailIcon />
						</ListItemIcon>
						<ListItemText primary={
							<Typography variant="body1" component="p" gutterBottom>
								{translations.eMail}: <a href={`mailto:${values.email}`}>
								<Typography variant="body1" component="p" gutterBottom>
									{values.email}
								</Typography>
								</a>
							</Typography>
						}/>
					</ListItem>

					<ListItem className={s.listItem}>
						<ListItemIcon>
							<LocationOnIcon />
						</ListItemIcon>
						<ListItemText primary={
							<Typography variant="body1" component="p" gutterBottom>
								{translations.address}: {values.address}
							</Typography>
						}/>
					</ListItem>
				</List>
			</CardContent>
		</Card>
	);
}
