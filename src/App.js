import './assets/scss/App.scss';
import arrow from './assets/images/icon-arrow.svg'
import DateDisplay from './components/DateDisplay';
import './assets/scss/App.scss'
import ResultDisplay from './components/ResultDisplay';

function App() {
  return (
    <div className='main-container'>
      <DateDisplay />
      <div className='arrow-main'>
      <div className="left-content"></div>
      <div className='arrow'> </div>
      <div className="right-content"></div>

      </div>
     
     
      <ResultDisplay/>
    </div>

  );
}

export default App;
