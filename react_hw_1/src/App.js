import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Content from './components/Content/Content';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <div className='container'>
          <div className='main__wrapper'>
            <Content />
            <Sidebar />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
