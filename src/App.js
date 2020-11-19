import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import BlockContainer from './components/Block/BlockContainer';
import Preloader from './components/Common/Preloder/Preloader';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomeContainer from './components/Home/HomeContainer';
import PopularContainer from "./components/Popular/PopularContainer";
import Search from './components/Search/Search';
import TopRatedContainer from './components/TopRated/TopRatedContainer';

function App() {
  return (
    <div>
      <Header />
      <Route path = "/movieblock/:movieId" render = { () => <BlockContainer /> } />
      <div className={"container"}>
        <Route path = "/popular" render = { () => <PopularContainer /> } />
        <Route path = "/toprated" render = { () => <TopRatedContainer /> } />
        <Route exact path = "/" render = { () => <HomeContainer /> } />
        <Route path = "/preloader" render = { () => <Preloader /> } />
        <Route path = "/search" render = { () => <Search /> } />
      </div>
      <Footer />
    </div>
  );
}

export default App;
