import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/app-sidebar";

type Props = {};

const MyQuestion = ({}: Props) => {
  return (
    <div className="h-full">
      <p>sidebar</p>
      {/* <SidebarProvider>
        <AppSidebar />
        <main>
          <SidebarTrigger />
        </main>
      </SidebarProvider> */}
    </div>
  )
};

export default MyQuestion;
