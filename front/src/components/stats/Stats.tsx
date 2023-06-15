import React from "react";

import {Typography} from "@mui/material";
import SailingIcon from "@mui/icons-material/Sailing";
import SurfingIcon from "@mui/icons-material/Surfing";
import MoodSharpIcon from "@mui/icons-material/MoodSharp";
import {StatsData} from "src/data/dataTypes";

import s from "./stats.pcss";

type StatsProps = StatsData;

export function Stats(props: StatsProps): JSX.Element {
	return (
		<div className={s.statsWrapper} id='stats'>
			<div className={s.statsCard}
				 key={props[0].text}>
				<SailingIcon
					color="primary"
					sx={{ fontSize: 100 }}>
				</SailingIcon>
				<div>
					<Typography gutterBottom variant="h5" component="span" className={s.statText}>
						{props[0].translations.text}:
					</Typography>
					<Typography gutterBottom variant="h4œ" component="span" className={s.statValue}>
						{props[0].translations.value}
					</Typography>
				</div>
			</div>
			<div className={s.statsCard}
				 key={props[1].translations.text}>
				<SurfingIcon
					color="primary"
					sx={{ fontSize: 100 }}>
				</SurfingIcon>
				<div>
					<Typography gutterBottom variant="h5" component="span" className={s.statText}>
						{props[1].translations.text}:
					</Typography>
					<Typography gutterBottom variant="h4œ" component="span" className={s.statValue}>
						{props[1].translations.value}
					</Typography>
				</div>
			</div>
			<div className={s.statsCard}
				 key={props[2].text}>
				<MoodSharpIcon
					color="primary"
					sx={{ fontSize: 100 }}>
				</MoodSharpIcon>
				<div>
					<Typography gutterBottom variant="h5" component="span" className={s.statText}>
						{props[2].translations.text}:
					</Typography>
					<Typography gutterBottom variant="h4œ" component="span" className={s.statValue}>
						{props[2].translations.value}
					</Typography>
				</div>
			</div>
		</div>
	);
}
