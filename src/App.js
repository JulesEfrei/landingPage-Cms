import './App.css';
import Contact from './view/Contact'
import Header from './view/Header'
import HeroBanner from './view/HeroBanner'
import Service from './view/Service';

function App() {
  return (
    <div className="App">

      <Header />

      <HeroBanner />

      <Service />
      
      <Contact />
      
    </div>
  );
}

export default App;
