import { Header } from "@/components/ui/header/Header";
import { MenuSidebar } from "@/components/ui/sidebar/MenuSidebar";

export default function FlashCardsAppLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="min-h-dvh">
      <MenuSidebar>
        <div className="flex flex-1">
          <div className="flex min-h-dvh w-full flex-1 flex-col overflow-y-auto p-2 dark:bg-contenedor-dark md:p-10 md:pl-10">
            <Header />
            {children}
          </div>
        </div>
      </MenuSidebar>
    </main>
  );
}
