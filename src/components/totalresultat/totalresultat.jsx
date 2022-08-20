import style from './totalresultat.module.css'


const TotalResultat = ({donnee}) => {
    let total =0;
     {donnee.map((test) => (
            total = total + test.somme
          ))}

        const affichetotal = total ===0 ? <p></p> : <p>{total}</p>

    return (
        <>
        <h2>Total Somme</h2>
        {affichetotal}
    
        </>


        // <>
        // <h2>Liste des sommes</h2>
        //   <ul>{donnee.map((test) => (
        //     <li>{test.somme}</li>
        //   ))}</ul>
        // </>
    )
}
export default TotalResultat