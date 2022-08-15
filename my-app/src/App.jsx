import './App.css';
// import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
// import StatefulGreeting from "./components/StatefulGreeting";
// import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';
// import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';
// import EventsFunctional from './components/EventsFunctional';
// import EventsClass from './components/EventsClass';
// import EventBinding from './components/EventBinding';
// import ConditionalRenderingFunctional from './components/ConditionalRenderingFunctional';
// import ConditionalRenderingClass from './components/ConditionalRenderingClass';
// import ConditionalRenderingClass from './components/ConditionalRenderingClass';
// import NestingComponents from './components/NestingComponents';
import MethodsAsPropsParent from './components/MethodsAsPropsParent';

function App() {
  return (
    <div className="App">
      {/* <FunctionalGreetingWithProps greeting="nice to meet you!" name="Mike" age="32" /> */}
      {/* <StatefulGreeting greeting="I'm a stateful class component!" name="Mike" /> */}
      {/* <StatefulGreetingWithCallback greeting="I'm a stateful class component with a callback function!" name="Alison" /> */}
      {/* <StatefulGreetingWithPrevState greeting="I'm a stateful class component with a callback function!" name="James" /> */}
      {/* <EventsFunctional /> */}
      {/* <EventsClass /> */}
      {/* <EventBinding /> */}
      {/* <ConditionalRenderingFunctional connected={true} /> */}
      {/* <ConditionalRenderingClass /> */}
      {/* <ConditionalRenderingClass /> */}
      {/* <NestingComponents /> */}
      <MethodsAsPropsParent />
    </div>
  );
}

export default App;
