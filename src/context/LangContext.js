import React, {createContext, useState} from 'react'

export const Context = createContext();

const supportedLangs = ['EN', 'ES', 'EN'];



const defaultBrowserLang = () => {
    let browserLang = navigator.language.slice(0,2).toUpperCase();
    if(browserLang.indexOf(browserLang) === -1){
        console.log('Not supported ' + browserLang);
        return supportedLangs[0];
    }else{
        return browserLang;
    }
}

const ContextProvider = props => {
    const [lang, setLang] = useState(defaultBrowserLang);
    
    const toggleLang = changeLang => {
        setLang(changeLang);
    }

    return (
        <Context.Provider value={{lang, toggleLang}}>
            {props.children}
        </Context.Provider>
    );
}

export default ContextProvider;