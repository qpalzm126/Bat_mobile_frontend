import React, { useState } from "react";

const SiteContext = React.createContext({
    searchSiteInput: "",
    setSearchSiteInput: (input) => {},
    extendBar: false,
    setExtendBar: (prev) => {},
});

export const SiteContextProvider = (props) => {
    const [searchSiteInput, setSearchSiteInput] = useState("");
    const [extendBar, setExtendBar] = useState(false);

    return (
        <SiteContext.Provider
            value={{
                searchSiteInput: searchSiteInput,
                setSearchSiteInput: setSearchSiteInput,
                extendBar: extendBar,
                setExtendBar: setExtendBar,
            }}
        >
            {props.children}
        </SiteContext.Provider>
    );
};

export default SiteContext;
