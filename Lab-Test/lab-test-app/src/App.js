import './App.css';
import TweeterContainer from './components/TweeterContainer';

function App() {

  const tweeterContainer = [
    {status: "Today is a good day!"},
    {status: "Cute animal and other stuff..."},
    {status: "Toronto's food festival"}
  ];

  return (
    <>
      {/* 3 TweeterContainers */}
      {tweeterContainer.map(tweeter => {
          return (
            <TweeterContainer {...tweeter} />
          );
        })
      }
    </>
  );
}

export default App;
