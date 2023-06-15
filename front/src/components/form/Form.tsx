import React, {useState} from "react";
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, FormGroup, Modal, Box, Typography } from "@mui/material";

import s from "./form.pcss";
import {FormTranslation} from "src/data/dataTypes";

export interface FormProps {
	translations: FormTranslation;
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

export function Form(props: FormProps): JSX.Element {
	const {
		translations,
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

		// todo: send query (get func from main server connection file)
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
					{translations.title}
				</Typography>
				<form className={s.form}
					onSubmit={(e) => e.preventDefault()}>
					<TextField
						label={translations.name}
						value={name}
						error={nameError}
						helperText={nameError ? translations.nameError : ''}
						onChange={handleNameChange}
					/>
					<TextField
						label={translations.phoneNumber}
						variant="outlined"
						value={'+49'+phoneNumber}
						onChange={handlePhoneNumberChange}
						error={phoneError}
						helperText={phoneError ? translations.phoneNumberError : ''}
						inputProps={{ maxLength: 13 }}
					/>
					<TextField
						label={translations.startDate}
						type="date"
						value={startDate}
						onChange={handleStartDateChange}
						error={dateError}
						helperText={dateError ? translations.dateError : ''}
						InputLabelProps={{
							shrink: true,
						}}
					/>
					<TextField
						label={translations.endDate}
						type="date"
						value={endDate}
						onChange={handleEndDateChange}
						error={dateError}
						helperText={dateError ? translations.dateError : ''}
						InputLabelProps={{
							shrink: true,
						}}
					/>
					<TextField
						label={translations.eMail}
						variant="outlined"
						value={email}
						onChange={handleEmailChange}
						error={emailError}
						helperText={emailError ? translations.eMailError : ''}
					/>
					<FormControl>
						<InputLabel id="boat-select-label">
							{translations.boat}
						</InputLabel>
						<Select
							labelId="boat-select-label"
							value={ selectedBoat }
							onChange={handleBoatChange}
							id="boat-select-label"
							label="boat"
						>
							{boatOptions.map((option: BoatOption) => (
								<MenuItem
									key={option.value}
									itemID={option.value}
									id={option.value}
									value={option.value}
									disabled={option.disabled}
								>
									{option.label} ({translations.max} {option.maxPeopleCapability})
								</MenuItem>
							))}
						</Select>
					</FormControl>
					<Button type="submit"
							onClick={handleSubmit}
							disabled={emailError || phoneError || nameError || dateError || selectedBoatError}>
						{translations.submit}
					</Button>
				</form>
			</div>
		</Modal>
	);
}
