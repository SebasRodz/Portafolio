import './App.css';
import { Switch, Route } from 'wouter';
import Navbar from './Navbar/Navbar';
import Principal from './Principal/Principal';

function App() {
  return (
    <section className='App'>
      <Navbar />
      <Switch>
        <Route component = {Principal} path = '/' />
      </Switch>
    </section>
  );
}

export default App;
