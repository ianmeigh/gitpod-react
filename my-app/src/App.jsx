import './App.css';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from "./components/StatefulGreeting";
import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';
import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';

function App() {
  return (
    <div className="App">
      <FunctionalGreetingWithProps greeting="nice to meet you!" name="Mike" age="32" />
      <StatefulGreeting greeting="I'm a stateful class component!" name="Mike" />
      <StatefulGreetingWithCallback greeting="I'm a stateful class component with a callback function!" name="Alison" />
      <StatefulGreetingWithPrevState greeting="I'm a stateful class component with a callback function!" name="James" />
    </div>
  );
}

export default App;
