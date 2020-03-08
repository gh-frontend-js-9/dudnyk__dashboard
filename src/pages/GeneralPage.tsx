import React from 'react';

import Header from '../components/Header';
import SideBar from '../components/SideBar';
import ProjectPage from '../pages/ProjectPage';
import MessagesPage from './MessagesPage';

import { Switch, Route } from "react-router-dom";

function GeneralPage() {
    return (
        <div className='app'>
              <Header/>
              
              <div className='app__content'>
                <SideBar/>  
                
                <Switch>
                  <Route path="/home">      
                    <p style={{textAlign:'center' , width:'100%'}}>Will be addded soon or not</p>
                  </Route>
                  
                  <Route path="/projects" component= {ProjectPage}/>

                  <Route path="/chart" >
                    <p style={{textAlign:'center' , width:'100%'}}>Will be addded soon or not</p>
                  </Route>

                  <Route path="/messages" component={MessagesPage} />

                  <Route path="/friends">  
                    <p style={{textAlign:'center' , width:'100%'}}>Will be addded soon or not</p>
                  </Route> 

                </Switch>
              </div>
            </div>
            
    )
}

export default GeneralPage;