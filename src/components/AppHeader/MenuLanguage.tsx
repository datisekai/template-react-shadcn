"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { localKey } from "@/constants";
import { changeParamWithLocale, languages } from "@/translation/const";
import { setStringLocalData } from "@/utils";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

export function MenuLanguage() {
  const { i18n, t } = useTranslation();

  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    changeParamWithLocale(lang);
    setStringLocalData(localKey.LANG, lang);
  };

  const currentLanguage = useMemo(() => {
    return languages.find((item) => item.value == i18n.language);
  }, [i18n.language, languages]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{currentLanguage?.label}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {languages?.map((item) => (
          <DropdownMenuCheckboxItem
            checked={i18n.language == item.label}
            key={item.value}
            onCheckedChange={(checked) => {
              if (checked) {
                handleChangeLanguage(item.value);
              }
            }}
          >
            {item.label}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
