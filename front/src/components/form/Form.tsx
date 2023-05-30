import React, {useState} from "react";
import {t} from 'src/i18n';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, FormGroup, Modal, Box, Typography } from "@mui/material";

import s from "./form.pcss";

export interface FormProps {
	boatOptions: BoatOption[];
	preSelectedBoatOption?: BoatOption;
	isOpened: boolean;
	onClose: () => void;
}

interface BoatOption {
	id: string,
	value: string,
	label: string,
	maxPeopleCapability: number,
	disabled: boolean;
}
// todo: add grill option
export function Form(props: FormProps): JSX.Element {
	const {
		boatOptions,
		preSelectedBoatOption,
		isOpened,
		onClose,
	} = props;

	const [name, setName] = useState("");
	const [nameError, setNameError] = useState(false);

	const [phoneNumber, setPhoneNumber] = useState('');
	const [phoneError, setPhoneError] = useState(false);

	const [startDate, setStartDate] = useState("");
	const [endDate, setEndDate] = useState("");2
	const [dateError, setDateError] = useState(false);

	const [email, setEmail] = useState('');
	const [emailError, setEmailError] = useState(false);

	const [selectedBoat, setSelectedBoat] = useState(preSelectedBoatOption.id ?? boatOptions[0].id);
	const [selectedBoatError, setSelectedBoatError] = useState(false);

	const handleNameChange = (event) => {
		const value = event.target.value;
		setName(event.target.value);
		setNameError(value === '')
	};

	const handleStartDateChange = (event) => {
		const value = event.target.value;
		setStartDate(value);
		setDateError(value === '' || endDate === '' )
	};

	const handleEndDateChange = (event) => {
		const value = event.target.value;
		setEndDate(value);
		setDateError(value === '' || startDate === '' )
	};

	const handleBoatChange = (event) => {
		const value = event.target.value;
		setSelectedBoat(value as string);
		setSelectedBoatError(value === '');
	};

	const handlePhoneNumberChange = (event) => {
		let value = event.target.value.split('+49')[1];
		if (value == undefined){
			setPhoneError(true);
			return;
		}

		// Limit input to 10 chars and plus sign
		if (value.length > 11) {
			value = value.slice(0, 11);
		}

		setPhoneNumber(formatPhoneNumber(value));
		setPhoneError(!validatePhoneNumber(value));
	};

	const formatPhoneNumber = (phoneNumber) => {
		let formattedPhoneNumber = phoneNumber.trim();

		return formattedPhoneNumber;
	};

	const validatePhoneNumber = (phoneNumber) => {
		const phoneRegex = /^\d{5}\d{5}$/;
		return phoneRegex.test(phoneNumber);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if(compositeValidate()){
			return;
		}

		// todo: send query
		console.log({
			name,
			phoneNumber,
			startDate,
			endDate,
			selectedBoat: boatOptions.filter((x)=> x.id === selectedBoat)[0],
		});
		onClose()
	};

	const compositeValidate = () => {
		const nameError = name === '';
		const phoneError = !validatePhoneNumber(phoneNumber);
		const dateError = startDate === '' || endDate === '';
		const emailError = !validateEmail(email);
		const selectedBoatError = selectedBoat === '';
		setNameError(nameError);
		setPhoneError(phoneError);
		setDateError(dateError);
		setEmailError(emailError);
		setSelectedBoatError(selectedBoatError);
		return nameError || phoneError || dateError || emailError || selectedBoatError;
	}

	const handleEmailChange = (event) => {
		const value = event.target.value;
		setEmail(value);
		setEmailError(!validateEmail(value));
	};

	const validateEmail = (email) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	};

	return (
		<Modal
			open={isOpened}
			onClose={onClose}
			aria-labelledby="form-modal"
			aria-describedby="form-modal-description"
		>
			<div className={s.formWrapper}>
				<Typography id="form-modal" variant="h5" gutterBottom>
					{t('Book a Boat')}
				</Typography>
				<form className={s.form}
					onSubmit={(e) => e.preventDefault()}>
					<TextField
						label={t('name')}
						value={name}
						error={nameError}
						helperText={nameError ? t('Name shouldnt be empty') : ''}
						onChange={handleNameChange}
					/>
					<TextField
						label={t('phone number')}
						variant="outlined"
						value={'+49'+phoneNumber}
						onChange={handlePhoneNumberChange}
						error={phoneError}
						helperText={phoneError ? t('Invalid phone number') : ''}
						inputProps={{ maxLength: 13 }}
					/>
					<TextField
						label={t('start date')}
						type="date"
						value={startDate}
						onChange={handleStartDateChange}
						error={dateError}
						helperText={dateError ? t('Invalid date') : ''}
						InputLabelProps={{
							shrink: true,
						}}
					/>
					<TextField
						label={t('end date')}
						type="date"
						value={endDate}
						onChange={handleEndDateChange}
						error={dateError}
						helperText={dateError ? t('Invalid date') : ''}
						InputLabelProps={{
							shrink: true,
						}}
					/>
					<TextField
						label={t('e-mail')}
						variant="outlined"
						value={email}
						onChange={handleEmailChange}
						error={emailError}
						helperText={emailError ? t('Invalid email address') : ''}
					/>
					<FormControl>
						<InputLabel id="boat-select-label">
							{t('boat')}
						</InputLabel>
						<Select
							labelId="boat-select-label"
							value={ selectedBoat }
							onChange={handleBoatChange}
							id="boat-select-label"
							label="Age"
						>
							{boatOptions.map((option: BoatOption) => (
								<MenuItem
									key={option.value}
									itemID={option.value}
									id={option.value}
									value={option.value}
									disabled={option.disabled}
								>
									{option.label} ({t('max')} {option.maxPeopleCapability})
								</MenuItem>
							))}
						</Select>
					</FormControl>
					<Button type="submit"
							onClick={handleSubmit}
							disabled={emailError || phoneError || nameError || dateError || selectedBoatError}>
						{t('Submit')}
					</Button>
				</form>
			</div>
		</Modal>
	);
}
