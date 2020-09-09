import React, {Fragment}from 'react';

const Contenu = () => {
    return (
        /*On utilise les fragments pour éviter de rajouter des noeuds aux DOM et ainsi éviter de ralentir l'app
        * a utiliser au maximum
        * */
            <Fragment>
                <h1>Carnet de contacts</h1>
                <p className='ml-1'>histoire de n'oublier personne..</p>
            </Fragment>
    );
};

export default Contenu;
