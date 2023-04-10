import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import React, {createContext, useContext, useEffect, useState} from 'react'

import LandingPage from './sides/landing_page'
import Vorstand from './sides/vorstand'
import Events from './sides/events'
import News from './sides/news'
import Positions from './sides/positions'
import BecomeMember from './sides/become_member'
import ViewArticle from './sides/view_article'
import Contact from './sides/contact'
import Person from './sides/person';
import ViewPosition from './sides/view_position';
import Donate from './sides/donate';
import Imprint from './sides/imprint';
import Datenschutzhinweise from './sides/datenschutzhinweise';
import Campange from './sides/campange';
import { ArticleContext, PositionContext, EventContext, VorstandContext } from './context';

const App = () => {
  const [positionData, setPositionData] = useState([" "])
  const [articleData, setArticleData] = useState([" "])
  const [eventData, setEventData] = useState([" ", " "])
  const [vorstandData, setVorstandData] = useState([" "])
  
  useEffect(() => {
    fetch('https://api.wrire.com/partner/ju-kirchheim/Positionen', { // fetch data from backend server
        method: 'GET',
    }).then((response) =>  response.json().then((data)=>{
        setPositionData(data)
    }))
    fetch('https://api.wrire.com/partner/ju-kirchheim/Events', { // fetch data from backend server
        method: 'GET',
    }).then((response) =>  response.json().then((data)=>{
        setEventData(data)
    }))
    fetch('https://api.wrire.com/partner/ju-kirchheim?page=0', { // fetch data from backend server
        method: 'GET',
    }).then((response) =>  response.json().then((data)=>{
        setArticleData(data)
    }))
    fetch('https://api.wrire.com/partner/ju-kirchheim/Vorstand', { // fetch data from backend server
        method: 'GET',
    }).then((response) =>  response.json().then((data)=>{
        setVorstandData(data)
    }))
  }, [])

  return (
    <VorstandContext.Provider value={vorstandData}>
      <EventContext.Provider value={eventData}>
        <ArticleContext.Provider value={articleData}>
          <PositionContext.Provider value={positionData}>
            <div className="font-['Helvatica Neue'] pr-2">
                <Router>
                  <Routes>
                    <Route path="/home" element={<LandingPage />} /> 
                    <Route path="/mitglied-werden" element={<BecomeMember />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/vorstand" element={<Vorstand />} />
                    <Route path="/positionen" element={<Positions />} />
                    <Route path="/aktuelles" element={<News />} />
                    <Route path="/tempo-50" element={<Campange />} />
                    <Route path="/position/">
                      <Route path=':positionID' element={<ViewPosition />} />
                    </Route>
                    <Route path="/personen/">
                      <Route path=':personID' element={<Person />} />
                    </Route>
                    <Route path="/article/">
                      <Route path=":articleID" element={<ViewArticle />} />
                    </Route>
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/spenden" element={<Donate />} />
                    <Route path="/impressum" element={<Imprint />} />
                    <Route path="/datenschutzhinweise" element={<Datenschutzhinweise />} />
                    <Route path="*" element={<Navigate to="/home" replace />} />
                  </Routes>
              </Router>
            </div>
          </PositionContext.Provider>
        </ArticleContext.Provider>
      </EventContext.Provider>
    </VorstandContext.Provider>
  );
}

export default App;
