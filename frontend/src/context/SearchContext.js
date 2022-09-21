import React, {createContext, useState} from "react";

export const SearchContext = createContext(null);

export default ({children}) => {

    const [searchOptions, setSearchOptions] = useState({
        naziv: null,
        tip: null,
        grad: null,
        minCena: null,
        maxCena: null,
        minKvadratura: null,
        maxKvadratura: null,
        sobe: null,
        kupatila: null,
        parkingMesto: null,
        ostava: null,
        zajednickaProstorija: null,
        oprema: null,
        pomocnoSkladiste: null,
        ventilacija: null
    });

    return (
        <SearchContext.Provider value={{searchOptions, setSearchOptions}}>
            {children}
        </SearchContext.Provider>
    )
}