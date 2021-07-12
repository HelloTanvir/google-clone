import React, { createContext, useReducer } from 'react';
import SearchTextReducer from '../reducers/SearchTextReducer';

export const SearchTextContext = createContext();

const SearchTextContextProvider = ({ children }) => {
    const [queryText, dispatch] = useReducer(SearchTextReducer, '');

    return (
        <SearchTextContext.Provider value={{ queryText, dispatch }}>
            {children}
        </SearchTextContext.Provider>
    );
};

export default SearchTextContextProvider;
