import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import React from 'react';
import { initReactI18next } from 'react-i18next';
import { DEFAULT_LANGUAGE, getLangParams } from './const';
import enTranslation from './languages/en.json';
import koTranslation from './languages/ko.json';
import viTranslation from './languages/vi.json';

type Props = {
    children: React.ReactNode;
};

i18n.use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources: {
            en: {
                translation: enTranslation.translation
            },
            vi: {
                translation: viTranslation.translation
            },
            ko: {
                translation: koTranslation.translation
            }
        },
        lng: getLangParams(),
        fallbackLng: DEFAULT_LANGUAGE,
        interpolation: {
            escapeValue: false
        }
    });

const I18nProvider: React.FC<Props> = ({ children }) => {
    return children;
};

export default I18nProvider;

export const i18nInstance = i18n;
