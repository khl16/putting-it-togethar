import logo from './logo.svg';
import './App.css';


import PersonCard from "./components/PersonCard"

function App() {
  return (
    <div className="App">
      
      <PersonCard
      firstName={"Doe"}
      lastName={"Jane"}
      colorhir={"Hair Color: Black"}
      counter={"15"} 
      incrementBirthday={""}>
      </PersonCard>

      <PersonCard
      firstName={"Smith"}
      lastName={"John"}
      colorhir={"Hair Color : Brown"} 
      counter={"15"} 
      incrementBirthday={""}>
      </PersonCard>
      
    </div>
  );
}

export default App;
