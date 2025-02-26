import AppFooter from "@/components/AppFooter";
import AppHeader from "@/components/AppHeader";
import AppSidebar from "@/components/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex min-h-screen">
      <SidebarProvider>
        <div>
          <AppSidebar />
        </div>
        <div className="flex-1">
          <AppHeader />
          <div className="px-16 bg-body min-h-[calc(100vh-68px)] pt-16 pb-24">
            <Outlet />

            <div>
              <AppFooter />
            </div>
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default MainLayout;
