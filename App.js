import './App.css';
import Personal from './Components/Personal'
import Education from './Components/Education'
import Experience from './Components/Experience'
import Header from './Components/Header'

function App() {

  function handleSubmit(){
    console.log('click')
  }

  return (
    <div>
      <Header />
      <Personal />
      <Education />
      <Experience />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
