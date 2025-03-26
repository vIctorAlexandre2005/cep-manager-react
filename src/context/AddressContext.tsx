import { createContext, ReactNode, useContext } from 'react';
  
  const AddressProvider = createContext<any>({});
  
  const AddressContext = ({ children }: { children: ReactNode }) => {
  
    return (
      <AddressProvider.Provider
        value={{
        }}
      >
        {children}
      </AddressProvider.Provider>
    );
  };
  
  export const useContextAddress = () => useContext(AddressProvider);
  export default AddressContext;
  