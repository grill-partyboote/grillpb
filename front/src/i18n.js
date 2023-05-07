export function t(key){
	if (lang === 'en') {
		return key;
	}

	return i18n[lang].key
}

const lang = 'en';

const i18n = {
	en: {
		start: 'start',
	},
	de:{
		start: 'start'
	}
}
