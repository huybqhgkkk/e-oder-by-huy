import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from '../public/locales/en/translation.json';
import vnTranslation from '../public/locales/vi/translation.json';
import jpTranslation from '../public/locales/jp/translation.json';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: enTranslation,
            },
            vn: {
                translation: vnTranslation,
            },
            jp: {
                translation: jpTranslation,
            },
        },
        lng: 'vn',
        fallbackLng: 'vn',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
