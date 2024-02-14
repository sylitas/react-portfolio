import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import LoadingScreen from './app/LoadingScreen';
import './index.scss';

const LoadingScene = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const bar = document.querySelector('.loading__bar--inner');
    const counterNumber = document.querySelector('.loading__counter--number');
    let c = 0;

    let barInterval = setInterval(() => {
      bar.style.width = c + '%';
      counterNumber.innerText = c + '%';
      c++;
      if (c > 100) {
        clearInterval(barInterval);
        setIsLoading(false);
      }
    }, 40);
  }, []);

  return isLoading ? <LoadingScreen /> : <App />;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LoadingScene />
  </React.StrictMode>
);
