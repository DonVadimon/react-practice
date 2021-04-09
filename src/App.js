import React, { useState } from 'react';
import Axoops from './assets/img/Axoops.png'
import './assets/css/App.css';
import TaskLinks from './components/TaskLinks';
import Carousel from './components/taskOne/Carousel';
import BackButton from './components/BackButton';

function App() {
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);

  function handleTaskLink(taskLinkId) {
    setPage(taskLinkId);
  }

  function handleBack() {
    setPage(0);
    setLoading(true);
  }

  function onPageLoad() {
    setLoading(false);
  }

  switch (page) {
    case '1':
      return (
        <div style={{
          position: 'relative',
          height: loading ? '100vh' : 'auto',
        }}>
          <Carousel load={loading} onLoad={onPageLoad} />
          {
            !loading && <BackButton handleParent={handleBack} />
          }
        </div>
      );

    default:
      return (
        <div className='App'>
          <header className='App-header'>
            <img src={Axoops} className='App-logo' alt='logo' />
            <TaskLinks handleParent={handleTaskLink} />
            <a
              className='App-link'
              href='https://reactjs.org'
              target='_blank'
              rel='noopener noreferrer'
            >
              React Documentation
        </a>
          </header>
        </div>
      );
  }
}

export default App;
