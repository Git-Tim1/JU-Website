import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import LandingPage from './sides/landing_page'
import Vorstand from './sides/vorstand'
import Events from './sides/events'
import News from './sides/news'
import Positions from './sides/positions'
import BecomeMember from './sides/become_member'
import ViewArticle from './sides/view_article'
import Contact from './sides/contact'
import Mitmachen from './sides/mitmachen';
import Person from './sides/person';
import ViewPosition from './sides/view_position';
import Donate from './sides/donate';
import Imprint from './sides/imprint';


const App = () => {
  return (
    <div className="font-['Helvatica Neue']">
        <Router>
          <Routes>
            <Route path="/home" element={<LandingPage />} /> 
            <Route path="/mitmachen" element={<Mitmachen />} />
            <Route path="/mitglied-werden" element={<BecomeMember />} />
            <Route path="/events" element={<Events />} />
            <Route path="/vorstand" element={<Vorstand />} />
            <Route path="/positionen" element={<Positions />} />
            <Route path="/aktuelles" element={<News />} />
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
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
