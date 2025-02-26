export const languages = [
  {
    label: "English",
    value: "en",
  },
  { label: "Tiếng Việt", value: "vi" },
  { label: "한국어", value: "ko" },
];

export const changeParamWithLocale = (lang: string) => {
  const pathname = window.location.pathname;
  const query = window.location.search;
  const params = pathname.split("/");
  const languageValues = languages.map((item) => item.value);
  if (languageValues?.includes?.(params?.[1])) {
    params[1] = lang;
  } else {
    params.splice(1, 0, lang);
  }

  if (params[1] === DEFAULT_LANGUAGE) {
    params.splice(1, 1);
  }

  window.history.replaceState({}, "", params.join("/") + query || "/");
};

export const DEFAULT_LANGUAGE = "en";

export const getLangParams = () => {
  const pathname = window.location.pathname;
  const params = pathname.split("/");
  const languageValues = languages.map((item) => item.value);
  if (languageValues?.includes?.(params?.[1])) {
    return params?.[1];
  }
  return DEFAULT_LANGUAGE;
};
