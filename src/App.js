import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./component/interface/Header";
import List from "./component/contact/List";
import {Provider} from './context'
import AddContact from "./component/contact/AddContact";
import Apropos from "./component/pages/Apropos";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Erreur from "./component/pages/Erreur";

class App extends Component {

    render() {
        return (
            <Provider>
                <Router>
                    <div className="App">
                        <Header/>
                        <div className="container mt-3">
                            <Switch>
                                <Route exact path="/ajouter" component={AddContact}/>
                                <Route exact path="/apropos" component={Apropos}/>
                                <Route exact path="/" component={List}/>
                                <Route component={Erreur}/>
                            </Switch>
                            {/* <List />*/}
                        </div>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;