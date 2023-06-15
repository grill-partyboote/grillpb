import {Stat} from "src/components/stats/Stats";
import {t} from "src/i18n";
import SailingIcon from "@mui/icons-material/Sailing";
import SurfingIcon from "@mui/icons-material/Surfing";
import MoodSharpIcon from "@mui/icons-material/MoodSharp";
import React from "react";

export const statsData: Stat[] = [
	{
		text: t('Miles traveled'),
		value: ' 2000',
		icon: (<SailingIcon
			color="primary"
			sx={{ fontSize: 100 }}>
		</SailingIcon>),
	},
	{
		text: t('Repeat clients'),
		value: ' 35%',
		icon: (<SurfingIcon
			color="primary"
			sx={{ fontSize: 100 }}>
		</SurfingIcon>),
	},
	{
		text: t('Emotions delivered'),
		value: ' ∞',
		icon: (<MoodSharpIcon
			color="primary"
			sx={{ fontSize: 100 }}>
		</MoodSharpIcon>),
	}
]
