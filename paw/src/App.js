import './App.css';
import SportInfo from './SportInfo';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (
    <div className="App">
      {/* <Router> */}
        <SportInfo />
        {/* <Switch>
          <Route path="/Results/:result" render={(props) => <Results {...props} />} />
        </Switch>  */}
      {/* </Router> */}
    </div>
  );
}

export default App;
