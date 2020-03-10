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
                  <Route path="/home" component={EmptyPage}/>
                  
                  <Route path="/projects" component= {ProjectPage}/>

                  <Route path="/chart" component={EmptyPage}/>

                  <Route path="/messages" component={MessagesPage} />

                  <Route path="/friends" component={EmptyPage}/>  

                </Switch>
              </div>
            </div>
            
    )
}

export default GeneralPage;


//temporary page
function EmptyPage() {
  return (
    <div style={{height: '100%', width:'100%',  backgroundColor: '#2b2d3c', display:'flex'}}>
      <p style={{margin:'auto', color:'#9ca1b2', fontSize: '30px'}}>
        Will be addded soon or not)
      </p>
    </div>
  )
}