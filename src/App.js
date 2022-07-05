import './App.css';
import Questions from './Questions/Questions';

function App() {
  return (
    <>
      <div className="content center">
        <div className="box center">
          <div className="left">
            <h2 className="title">Questions And Answers About Login</h2>
          </div>
          <div className="right">
            <Questions />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
