import Header from "./components/Header";
import { Sidebar } from "./Sidebar";
import { Card } from "./Card";
function App() {
  return (
    <div className="bg-[#161b23] min-h-screen">
      <Header />
      <main className="h-[90vh] flex gap-8 p-8 pt-0">
        <Sidebar />
        <div className="flex-1 h-full overflow-y-scroll">
          {/*Cover*/}
          <div className="flex rounded-2xl">
            <img
              src="https://www.diez.hn/binrepository/mwii_2433507_20220912223752.jpg"
              className=" w-full h-[350px] md:object-cover
               rounded-2xl pb-5 pr-2"
            />
          </div>
          <div className="flex md:grid md:grid-cols-2 lg:flex items-center justify-around lg:justify-between flex-wrap gap-8 rounded 2-xl pr-3">
            <Card
              img="https://image.api.playstation.com/vulcan/img/rnd/202011/0714/vuF88yWPSnDfmFJVTyNJpVwW.png"
              title="Marvel's Spider-Man"
              category="PS5"
              price="30"
            />
            <Card
              img="https://cdna.artstation.com/p/assets/images/images/033/037/878/4k/artur-tarnowski-femalemain.jpg?1608208309"
              title="Cyberpunk 2077"
              category="PC"
              price="41"
            />
            <Card
              img="https://www.denofgeek.com/wp-content/uploads/2019/12/halo-infinite.jpg?fit=1920%2C1080"
              title="Halo Infinite"
              category="Xbox Series"
              price="62"
            />
            <Card
              img="https://top-mmo.fr/wp-content/uploads/2022/09/horizon-forbidden-west-1-scaled.jpg"
              title="Horizon Forbidden West™"
              category="PS4/PS5"
              price="60"
            />
            <Card
              img="https://image.api.playstation.com/vulcan/img/rnd/202106/1514/fkPaEpz998Uu7QaofSj1VIhr.png"
              title="Far Cry 6"
              category="Xbox Series"
              price="55"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
