import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';
import EnviarId from './pages/EnviarId';
import Error404 from './pages/Error404/';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path = "/" exact component = {Logon} />
                <Route path = "/register" component = {Register} />
                <Route path = "/profile" component = {Profile} />
                <Route path = "/salvar" component = {EnviarId} />
                <Route path = "/incidents/new" component = {NewIncident} />
                <Route component = {Error404} />
            </Switch>
        </BrowserRouter>
    );
}