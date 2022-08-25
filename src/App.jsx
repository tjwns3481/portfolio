import './App.css';
import Footer from './layouts/Footer';
import Header from './layouts/Header';

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div id='body' className='pf-body'>
        
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;