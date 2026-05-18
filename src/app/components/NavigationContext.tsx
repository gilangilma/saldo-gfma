import { createContext, useContext, useState } from "react";

type Page = "home" | "finance";

const NavigationContext = createContext<{
  page: Page;
  navigate: (page: Page) => void;
}>({ page: "home", navigate: () => {} });

export function NavigationProvider({ children }: { children: React.ReactNode }) {
  const [page, setPage] = useState<Page>("home");
  return (
    <NavigationContext.Provider value={{ page, navigate: setPage }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  return useContext(NavigationContext);
}
