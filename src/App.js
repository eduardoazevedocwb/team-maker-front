import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Views/Home';
import ErrorBoundary from './Error-boundary';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ErrorBoundary>
          <Home />
        </ErrorBoundary>
      </header>
    </div>
  );
}

export default App;
