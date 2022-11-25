import React, { useContext } from 'react'
import FrenchFlag from '../../assets/france.svg';
import SpainFlag from '../../assets/spain.svg';
import EnglishFlag from '../../assets/united-kingdom.svg';
import { Context } from '../../context/LangContext';
import './ToggleLangs.css';


function ToggleLangues() {
    const {toggleLang} = useContext(Context);
    return (
    <div className='container-langs'>
        <img onClick={() => toggleLang('FR')} src={FrenchFlag}/>
        <img onClick={() => toggleLang('ES')} src={SpainFlag}/>
        <img onClick={() => toggleLang('EN')} src={EnglishFlag}/>
    </div>
  )
}

export default ToggleLangues