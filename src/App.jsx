import './App.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Level from './components/Level';
import Points from './components/Points';
import Features from './components/Features';
import Banner from './components/Banner';
import RedeemRewards from './components/RedeemRewards';
import Privileges from './components/Privileges';
import Outlet from './components/Outlet';

function App() {
  return (
    <>
      <Navbar />
      <Carousel />
      <div className="container mx-auto px-5 xl:px-36">
        <Level />
        <Points />
        <Features />
        <Banner />
      </div>
      <RedeemRewards />
      <div className="container mx-auto px-5 xl:px-36">
        <Privileges />
        <Outlet />
      </div>
    </>
  );
}

export default App;
