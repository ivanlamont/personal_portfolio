import {createContext, useContext, useState} from "react";

export type AlertContent = {
  //children: React.ReactNode;
  isOpen: boolean;
  type: string;
  message: string;
  onOpen: (type: string, message: string) => void;
  onClose: () => void;
};

const AlertContext = createContext<AlertContent>({} as AlertContent);

export const AlertProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState({
    isOpen: false,
    type: 'success',
    message: '',
  });

  return (
    <AlertContext.Provider
      value={{
        ...state,
        onOpen: (type, message) => setState({ isOpen: true, type, message }),
        onClose: () => setState({ isOpen: false, type: '', message: '' }),
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export const useAlertContext = () => useContext(AlertContext);
