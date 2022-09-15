import React, { useState, createContext } from 'react';

export const BottomSheetContext = createContext();

const BottomSheetProvider = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <BottomSheetContext.Provider
      value={{
        isOpen: isOpen,
        setIsOpen: setIsOpen,
      }}
    >
      {props.children}
    </BottomSheetContext.Provider>
  );
};
export default BottomSheetProvider;
