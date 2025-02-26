import { getLangParams } from "@/translation/const";

const lang = getLangParams();
const basePath = lang === "en" ? "" : `/${lang}`;

const withBasePath = (path: string) => `${basePath}${path}`;

export const pathNames = {
  HOME: withBasePath("/"),
  REGISTER: withBasePath("/register"),
  LOGIN: withBasePath("/login"),
};
