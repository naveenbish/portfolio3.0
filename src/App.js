import './App.css';
import NavBar from './components/Navbar';
import FootBar from './components/FootBar';
import BodyStuff from './components/BodyStuff';
import ApiTest from './components/ApiTest';

function App() {
  return (
    <div className='overflow-x-hidden bg-sky-950'>
      {/* nav bar component  */}
        <NavBar></NavBar>
      
      {/* main bar component  */}
        <BodyStuff></BodyStuff>

        <div>
          <ApiTest />
        </div>

      {/* Footbar component  */}
        <div className='bg-[#0e101b] text-white w-full h-[240px] flex justify-center items-center'>
          <FootBar></FootBar>
        </div>

    </div>
  );
}

export default App;
