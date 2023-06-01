import Header from './components/Header.js';
import Nav from './components/Nav.js';
import Main from './components/Main.js';
import About from './components/About.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className='app'>
      <Nav />
      <Header />
      <Main />
      <About />
      <Footer />
    </div>
  );
}

export default App;
