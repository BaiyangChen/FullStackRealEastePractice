import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Residencies from '../components/Residencies/Risidencies'
import Story from '../components/Story/Story'
import Footer from '../components/Footer/Footer'
import '../App.css'


function Home() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient">
          <Header />
          <Hero />
          <Residencies />
          <Story />
          <Footer />
        </div>

      </div>
    </div>
  );
}

export default Home;
