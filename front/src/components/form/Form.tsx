import React, {useState} from "react";
import {t} from 'src/i18n';
import { TextField, Button, Checkbox, FormControl, InputLabel, Select, MenuItem, FormGroup, Modal, Box, Typography } from "@mui/material";

import s from "./form.pcss";

export interface FormProps {
	boatOptions: BoatOption[];
	isOpened: boolean;
	onClose: () => void;
}

interface BoatOption {
	value: string,
	label: string,
}

export function Form(props: FormProps): JSX.Element {
	const {
		boatOptions,
		isOpened,
		onClose,
	} = props;

	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [startDate, setStartDate] = useState("");
	const [endDate, setEndDate] = useState("");
	const [selectedBoat, setSelectedBoat] = useState<BoatOption>({}); // todo: set from props
	const handleNameChange = (event) => {
		setName(event.target.value);
	};

	const handlePhoneChange = (event) => {
		setPhone(event.target.value);
	};

	const handleStartDateChange = (event) => {
		setStartDate(event.target.value);
	};

	const handleEndDateChange = (event) => {
		setEndDate(event.target.value);
	};

	const handleBoatChange = (event) => {
		setSelectedBoat(event.target.value as BoatOption);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		// todo: send query
		console.log({
			name,
			phone,
			startDate,
			endDate,
			selectedBoats: selectedBoat
		});
		// todo: add model with thank words
		onClose();
	};

	// todo: add i18n
	// todo: add styles
	// todo: fix console errors

	return (
		<Modal
			open={isOpened}
			onClose={onClose}
			aria-labelledby="form-modal"
			aria-describedby="form-modal-description"
		>
			<Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
				<Typography id="form-modal" variant="h5" gutterBottom>
					Book a Boat
				</Typography>
				<form className={s.formWrapper}
					  onSubmit={handleSubmit} >
					<TextField
						label="Name"
						value={name}
						onChange={handleNameChange}
					/>
					<TextField
						label="Phone Number"
						value={phone}
						onChange={handlePhoneChange}
					/>
					<TextField
						label="Start Date"
						type="date"
						value={startDate}
						onChange={handleStartDateChange}
						InputLabelProps={{
							shrink: true,
						}}
					/>
					<TextField
						label="End Date"
						type="date"
						value={endDate}
						onChange={handleEndDateChange}
						InputLabelProps={{
							shrink: true,
						}}
					/>
					<FormControl>
						<InputLabel id="boat-select-label">Boats</InputLabel>
						<Select
							labelId="boat-select-label"
							value={selectedBoat.label}
							onChange={handleBoatChange}
						>
							{boatOptions.map((option) => (
								<MenuItem key={option.value} value={option.value}>
									{option.label}
								</MenuItem>
							))}
						</Select>
					</FormControl>
					<Button type="submit">Submit</Button>
				</form>
			</Box>
		</Modal>
	);
}
