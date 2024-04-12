import Header from 'layouts/header/Header';
import Router from 'router/Router';
import 'styles/index.css';

function App() {
  return (
    <div className="im-landing-page">
      <Header />
      <main className="im-landing-page-content">
        <Router />
      </main>
    </div>
  );
}

export default App;
