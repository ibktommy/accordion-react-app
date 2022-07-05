import './App.css';
import data from './data'

import Questions from './Questions/Questions';

function App() {
  return (
    <>
      <div className="content">
        <div className="box center">
          <div className="left">
            <h2 className="title">Questions And Answers About Login</h2>
          </div>
          <div className="right">
            {
              data.map(({ id, ...props }) => {
                return <Questions key={id} {...props} />
              })
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
