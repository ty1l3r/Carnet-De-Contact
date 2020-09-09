import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./component/Header";
import List from "./component/List";
import Contenu from "./component/Contenu";


class App extends Component {

     state = {
         nom1:'Hugo',
         nom2:'Fabien',
         nom3:'Alex',
     }

    render() {
        return (
            <div className="App">
                <Header/>
                <div className='container mt-2'>
                    <Contenu/>
                    <List/>
                </div>
            </div>
        );
    }
}
export default App;
