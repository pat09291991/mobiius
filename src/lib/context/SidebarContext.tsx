import React, {
  ReactNode,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

interface Props {
  isOpen: boolean;
  updateIsOpen: (value: boolean) => void;
}

const SidebarContext = createContext<Props | undefined>(undefined);

export const useData = () => useContext(SidebarContext);

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const contextValue = useMemo(
    () => ({
      isOpen,
      updateIsOpen: setIsOpen,
    }),
    [isOpen],
  );

  return (
    <SidebarContext.Provider value={contextValue}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useOpenSidebar = (): Props => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useOpenSidebar must be used within a SidebarProvider");
  }
  return context;
};
