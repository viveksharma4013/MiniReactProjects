import './App.css';
import Timer from './projects/Timer/Timer';
import BstrapDropDown from './projects/bootStrapDropDown/BstrapDropDown';
import QuizApp from './projects/quizApp/QuizApp';


const App = () => {
  return (
    <div className='app'>
      <div className='dropDown'>
        <BstrapDropDown/>
      </div>
      <div id='page-content'>
        <QuizApp/>
      </div>
    </div>
  );
};

export default App;
