
import { useState,useRef } from 'react';
import Calculatrice from '../components/calculatrice/calculatrice';
import ListeSomme from '../components/listesomme';
import TotalResultat from '../components/totalresultat/totalresultat';


const Mains = () => {
    const [tableauResultat, SetTableauResultat] = useState([]);
    const nextResultatId = useRef(0);
  
const ajouterResultat = (nouveauResultat) => {

    const nouveauRslt = {      
        id: nextResultatId.current,
        somme : nouveauResultat

    };

    nextResultatId.current++;

    console.log('nouveau resultat', nouveauRslt)
SetTableauResultat(tableauResultat => tableauResultat.concat(nouveauRslt));

}
console.log('tableau :',tableauResultat)

    return (
        <>
        <Calculatrice onNouveauResultat={ajouterResultat}/>
        <ListeSomme donnee={tableauResultat}/>
        <TotalResultat donnee={tableauResultat}/>
        </>
     
    )
}

export default Mains;