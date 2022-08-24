import css from './App.module.css';
import Sidebar from './components/Sidebar';
import StatefulGreeting from './components/StatefulGreeting';
import NavBarSimple from './components/NavBarSimple';
import EventsFunctional from './components/EventsFunctional';
import EventsClass from './components/EventsClass';



function App() {
  return (
    <div className="App">
      {/* Add your components here */}
      <NavBarSimple />
      <StatefulGreeting />
      <EventsFunctional />
      <EventsClass />
      {/* <Sidebar /> */}
    </div>
  );
}

export default App;