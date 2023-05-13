export function t(key){
	if (lang === 'en') {
		return key;
	}

	return i18n[lang].key
}

// todo: take lang from browser api
const lang = 'en';

// here you can add translation
const i18n = {
	en: {
		start: 'start',
	},
	de:{
		start: 'start'
	}
}
