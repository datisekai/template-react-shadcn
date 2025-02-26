import { localKey } from "@/constants";
import { changeParamWithLocale, DEFAULT_LANGUAGE } from "@/translation/const";
import { getStringLocalData } from "@/utils";
import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

const DefaultLayout = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    changeParamWithLocale(
      getStringLocalData(localKey.LANG) || DEFAULT_LANGUAGE
    );
  }, [pathname]);
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default DefaultLayout;
