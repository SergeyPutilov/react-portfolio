import './App.scss';

import {
  About,
  Footer,
  Header,
  Skills
} from './container';

import { Navbar } from './components';

function App() {
  return (
    <div className="app ">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
