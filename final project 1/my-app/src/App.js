import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Body from './Body';
import Company from './Company/Company';
import Header from './Header';
import Ind from './Individual/Ind';
import Personal from './Personal-cabnet/Personal';

function App() {
  return (
    <div style={{ backgroundColor: "#F6F6F6" }}>
      <Router>
        <Header />

        <Switch>
          <Route path="/company">
            <Company />
          </Route>
          <Route path="/personal-cabnet">
            <Personal />
          </Route>
          <Route path="/individual">
            <Ind />
          </Route>
          <Route path="/" >
            <Body />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
