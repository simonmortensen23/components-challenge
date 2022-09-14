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
import LifeCyclesCDM from './components/LifeCyclesCDM';
import LifeCyclesCDU from './components/LifeCyclesCDU';
import LifeCyclesCWU from './components/LifeCyclesCWU';
import Content from './components/Content';



function App() {
  return (
    <div className="App">
      {/* Add your components here */}
      <NavBarForm />
      <Sidebar />
      <Content />
      {/* <NavBarSimple />
      <StatefulGreeting />
      <MethodsAsPropsParent /> */}
      {/* <NestingComponents /> */}
      {/* <ConditionalRenderingClass />
      <ConditionalRenderingFunctional connected={false}/> */}
      {/* <EventsFunctional />
      <EventsClass /> */}
      
      {/* <LifeCyclesCDM /> */}
      {/* <LifeCyclesCDU /> */}
      {/* <LifeCyclesCWU /> */}
    </div>
  );
}

export default App;