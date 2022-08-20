import { useState } from "react";

const Calculatrice = ({onNouveauResultat}) => {

    const [number1, setNumber1] = useState('');
    const [number2, setNumber2] = useState('');
    const [resultat, setResultat] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        const data=parseFloat(parseFloat(number1)+parseFloat(number2));
        setResultat(data);
        onNouveauResultat(data);

    }

    return (
<form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='number1'>Nombre 1 : </label>
                <input id='number1' type="text" value={number1}
                    onChange={(e) => setNumber1(e.target.value)} />
                <label htmlFor='number2'>Nombre 2 : </label>
                <input id='number2' type="text" value={number2}
                    onChange={(e) => setNumber2(e.target.value)} />
                <label htmlFor='resultat' id='result'> L'addittion est de : </label>
                <input id='resultat' type="text" value={resultat}
                       readOnly />
                <br />
                <button type='submit'>Valider</button>
            </div>
        </form>
    )
}

export default Calculatrice;