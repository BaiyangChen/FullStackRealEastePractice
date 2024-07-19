
import Hero from '../components/Hero/Hero'
import Residencies from '../components/Residencies/Risidencies'
import Story from '../components/Story/Story'
import '../App.css'


function Home() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient">
          <Hero />
          <Residencies />
          <Story />
        </div>
      </div>
    </div>
  );
}

export default Home;
