import style from './totalresultat.module.css'


const TotalResultat = ({donnee2}) => {
    let total =0;
     {donnee2.map((test) => (
            total = total + test.rslt
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