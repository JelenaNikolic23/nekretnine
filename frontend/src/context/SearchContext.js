import React, {createContext, useState} from "react";

export const SearchContext = createContext(null);

export default ({children}) => {

    const [searchOptions, setSearchOptions] = useState({
        name: ''
    });

    return (
        <SearchContext.Provider value={{searchOptions, setSearchOptions}}>
            {children}
        </SearchContext.Provider>
    )
}