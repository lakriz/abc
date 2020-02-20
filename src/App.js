import React, {Component} from 'react';
import * as queries from './graphql/queries';

import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Overview} from './views/Overview';
import {Detail} from './views/Detail';

import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react';

import awsconfig from './aws-exports';

Amplify.configure(awsconfig);


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }



    render() {

        return (
            <Router basename={process.env.PUBLIC_URL}>
                <div className='App'>

                    <Switch>
                            <Route path='/brand' >
                                <Detail />
                            </Route>

                            <Route>
                                <Overview />
                            </Route>

                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App;

