import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	return <AppContext.Provider value="hello">{children}</AppContext.Provider>;
};

// custom hook
export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
