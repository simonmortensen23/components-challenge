import css from './App.module.css';
import Sidebar from './components/Sidebar';
import StatefulGreeting from './components/StatefulGreeting';
import NavBarSimple from './components/NavBarSimple';
import EventsFunctional from './components/EventsFunctional';
import EventsClass from './components/EventsClass';
import ConditionalRenderingClass from './components/ConditionalRenderingClass';
import ConditionalRenderingFunctional from './components/ConditionalRenderingFunctional';
import NestingComponents from './components/NestingComponents';
import MethodsAsPropsParent from './components/MethodsAsPropsParent';
import NavBarForm from './components/NavBarForm';



function App() {
  return (
    <div className="App">
      {/* Add your components here */}
      <NavBarForm />
      {/* <NavBarSimple />
      <StatefulGreeting />
      <MethodsAsPropsParent /> */}
      {/* <NestingComponents /> */}
      {/* <ConditionalRenderingClass />
      <ConditionalRenderingFunctional connected={false}/> */}
      {/* <EventsFunctional />
      <EventsClass /> */}
      {/* <Sidebar /> */}
    </div>
  );
}

export default App;