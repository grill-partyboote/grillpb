import React from 'react';
import {t} from 'src/i18n';
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

export interface ContactsProps { // all strings are translated
	phoneNumber: string;
	email: string;
	address: string;
}

export function Contacts(props: ContactsProps) {
	const {
		phoneNumber,
		email,
		address,
	} = props;

	return (
		<Card className={s.contactBlock}>
			<CardContent>
				<Typography variant="h6" component="h2" gutterBottom>
					{t('Reach us directly')}
				</Typography>
				<List>
					<ListItem className={s.listItem}>
						<ListItemIcon>
							<PhoneIcon />
						</ListItemIcon>
						<ListItemText primary={
							<Typography variant="body1" component="p" gutterBottom>
								{t('Phone')}: <a href={`tel:${phoneNumber}`}>
								<Typography variant="body1" component="p" gutterBottom>
									{phoneNumber}
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
								{t('E-mail')}: <a href={`mailto:${email}`}>
								<Typography variant="body1" component="p" gutterBottom>
									{email}
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
								{t('Address')}: {address}
							</Typography>
						}/>
					</ListItem>
				</List>
			</CardContent>
		</Card>
	);
}
