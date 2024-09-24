

const User = (name, recordSingle, recordAverange, image) => {


/*const myName = 'Enzo'
const myLastName = 'Perriat'
const myAge = 22
const isAuthenticated = true*/

    return (
        /*<>
        {isAuthenticated === true ? <h1>Vous êtes connecté</h1> : <h1>Connectez vous</h1>}
        <h1>Bonjour, mon prenom est {myName} et mon nom est {myLastName}</h1>
        <p>Je suis passionner de Rubik's Cube, d'échecs, et de jeux en tout genre. J'ai {myAge} ans.</p>
        </>*/
        <>
        
        <h1>Mon nom est {name}</h1>
        <p>Mon meilleur temps au Rubiks Cube est : {recordSingle} et ma meilleur moyenne est : {recordAverange}</p>
        <img src={image}/>
        
        </>
    )
}

export default User