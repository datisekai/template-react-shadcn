import React from "react";
import { Button } from "../ui/button";
import { MenuLanguage } from "./MenuLanguage";
import { SidebarProvider, SidebarTrigger } from "../ui/sidebar";

const AppHeader = () => {
  return (
    <div className="pl-4 md:pl-16 flex bg-[#001B26] text-white items-center justify-between py-4 pr-4">
      <div className="block md:hidden">
        <SidebarTrigger />
      </div>
      <h1>LOGO</h1>
      <div className="flex items-center gap-[26px]">
        <div className="flex items-center gap-2">
          <Button>Join now</Button>
          <Button>Login</Button>
        </div>
        <div>
          <MenuLanguage />
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
