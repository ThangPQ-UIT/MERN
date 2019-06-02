const StarWarsApp = () => {
  const title = "Star Wars";
  const subtitle = "Movies";
  return (
    <div>
      <Header title={title} />
      <Movies />
    </div>
  );
}

const Header = ({ title }) => (
  <div>
    <h1>{title}</h1>
  </div>
);

class Movies extends React.Component {
  state = {
    movies: [],
    showCrawl: {}
  };

  componentDidMount() {
    this.handleMovies();
  }

  handleMovies = () =>
    fetch("https://swapi.co/api/films")
      .then(results => results.json())
      .then(data => this.setState({ movies: data.results }));

  handleCrawl = e => {
    const { id } = e.target;
    this.setState(current => ({
      showCrawl: { ...current.showCrawl, [id]: !current.showCrawl[id] }
    }));
  };

  render() {
    return (
      <div>
        <h1>Episodes</h1>
        <div>
          {this.state.movies.map(movie => (
            <div
              key={movie.episode_id}
              id={movie.episode_id}
              onClick={this.handleCrawl}
            >
              {movie.title}
              {this.state.showCrawl[movie.episode_id] && (
                <div style={{ border: "1px black solid" }}>
                  {movie.opening_crawl}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<StarWarsApp />, document.getElementById("root"));