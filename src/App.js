import './App.css';
import Cards from './Cards.js';
import img from"./img/image1.jpeg";
import img2 from"./img/image2.jpeg";
import img3 from"./img/image3.jpeg";
import img4 from"./img/image4.jpeg";
import img5 from"./img/image5.jpeg";
import img6 from"./img/image6.jpeg";
import img7 from"./img/_.jpeg";
import img8 from"./img/Baby Driver.jpeg";

function App() {
  return (
    <div className='container'>
      <div className='heading'>
        <h1>Top Movies</h1>
      </div>
      <div className='container'>
        <Cards img={img} name="American Psycho" />
        <Cards img={img2} name="Matrix" />
        <Cards img={img3} name="GodFather" />
        <Cards img={img4} name="Joker" />
        <Cards img={img5} name="John Wick" />
        <Cards img={img6} name="Fight Club" />
        <Cards img={img7} name="Oppenheimer" />
        <Cards img={img8} name="Baby Driver" />
      </div>
    </div>
  );
}

export default App;
