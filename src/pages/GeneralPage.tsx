import React from 'react';

import Header from '../components/Header';
import SideBar from '../components/SideBar';
import ProjectPage from '../pages/ProjectPage';

import { Switch, Route, Redirect } from "react-router-dom";

function GeneralPage() {
    return (
        <div className='app'>
              <Header/>
              
              <div className='app__content'>
                <SideBar/>  
                
                <Switch>
                  <Route path="/home"> </Route>
                  
                  <Route path="/projects" component= {ProjectPage}/>

                  <Route path="/chart"> </Route>

                  <Route path="/messages"> </Route>

                  <Route path="/friends"> </Route>

                </Switch>
              </div>
            </div>
            
    )
}

export default GeneralPage;