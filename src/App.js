import './App.css';
import Movies from './Component/Movies';
import Header from './Component/Header';
import movies from './movie.json';
function App() {
  return (
    <div className="App">
      <Header />
     <div className='main'>
     {
       movies.map((element,index) => {
        return (
        <Movies
        key = {index}
        title = {element.Title}
        year = {element.Year}
        img = {element.Poster}
        />
        )
       })
     }
     </div>
    </div>
  );
}

export default App;
