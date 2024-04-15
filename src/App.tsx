import Header from 'layouts/header/Header';
import { useRef } from 'react';
import Router from 'router/Router';
import 'styles/index.css';

function App() {
  const appRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="im-landing-page">
      <Header appRef={appRef} />
      <main className="im-landing-page-content" ref={appRef}>
        <Router />
      </main>
    </div>
  );
}

export default App;
