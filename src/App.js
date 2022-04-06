import Navbar from "./components/Navbar";
import Card from "./components/Card"
import data from "./data.js"
import Footer from "./components/Footer"

function App() {
  const cards = data.map(item =>{
    return <Card
              key={item.title}
              item={item}
          />
  })

  return (
    <div>
      <Navbar />
      <section className="main-container">
        {cards}
      </section>
      <Footer />
    </div>
  );
}

export default App;
