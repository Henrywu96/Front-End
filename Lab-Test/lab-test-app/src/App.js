import './App.css';
import TweeterContainer from './components/TweeterContainer';

function App() {

  const tweeterContainer = [
    {status: "Stop COVID-19, Take-out only!", tweeterId: "1"},
    {status: "At home, binge watching Breaking Bad for second time!", tweeterId: "2"},
    {status: "When is the beach opening up? Can't wait...", tweeterId: "3"}
  ];

  return (
    <>
      {/* 3 TweeterContainers */}
      {tweeterContainer.map(tweeter => {
          return (
            <TweeterContainer key={tweeter.tweeterId} {...tweeter} />
          );
        })
      }
    </>
  );
}

export default App;
