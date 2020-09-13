import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./component/interface/Header";
import List from "./component/contact/List";
import { Provider } from './context'
import AddContact from "./component/contact/AddContact";

class App extends Component {

    render() {
        return (
            <Provider>
                <div className="App">
                    <Header />
                    <div className="container mt-3">
                        <AddContact/>
                        <List />
                    </div>
                </div>
            </Provider>
        );
    }
}

export default App;