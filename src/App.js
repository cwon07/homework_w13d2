import Movies from './components/Movies';

function App() {
      
const movies = [
    {
      name: "Barbie",
      year: "2023",
      rating: "G",
      image: "https://deadline.com/wp-content/uploads/2023/04/barbie-BARBIE_VERT_TSR_W_TALENT_2764x4096_DOM_rgb.jpg?w=800"

    },
    {
      name: "Wonka",
      year: "2023",
      rating: "G",
      image: "https://m.media-amazon.com/images/M/MV5BNzJiZGRkMDgtZWFlOS00MWRhLThhNTEtMjljZTJjYTljYTBjXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1000_.jpg"

    },
    {
      name: "Spider-Man: Across the Spider-Verse",
      year: "2023",
      rating: "G",
      image: "https://i0.wp.com/halcyonrealms.com/blogpics/spidyv2posters02.jpg?resize=750%2C1111&ssl=1"

    },
    {
      name: "Asteroid City",
      year: "2023",
      rating: "G",
      image: "https://m.media-amazon.com/images/M/MV5BNDJmMzY0ZGUtYWE1My00OWViLTg1NTctOWMwZWJlNDQzNGRiXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_FMjpg_UX1000_.jpg"

    },
    {
      name: "Elemental",
      year: "2023",
      rating: "G",
      image: "https://cdn.dribbble.com/userupload/8140647/file/original-24e89bc2c0137de5689650117199767e.jpg"

    },
  ]
    return (
    <div className="App">
    <Movies movies={movies}/>
    </div>
  );
}

export default App;
