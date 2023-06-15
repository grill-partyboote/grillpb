// fixme: move to other file (serverConnection) and others data
import {allData, AllData} from "src/data/dataTypes";

export function getData(): AllData {
	const lang = translations;
	// todo: send lang and get data here
	return allData; // mock data (partly can be used to )
}

function translations(): string[] {
	// todo: send overall query with navigator.languages
	console.log(navigator.languages); // format: ["en-US", "en", "de"]
	return navigator.languages;
}
