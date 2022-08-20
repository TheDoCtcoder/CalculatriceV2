 import style from './listesomme.module.css'


const ListeSomme = ({donnee}) => {
    
    return (
      

        <>
        <h2>Liste des sommes</h2>
          <ul>{donnee.map((test) => (
            <li key={test.id}>{test.somme}</li>
          ))}</ul>
        </>
    )
}
export default ListeSomme