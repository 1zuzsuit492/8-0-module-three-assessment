import { Component } from "react";

class Movies extends Component {
  constructor() {
    super();
    this.state = {
      movies: {},
      display: "",
      data: "",
      options: [],
    };
  }
  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((result) => result.json())
      .then((json) => {
        this.setState({ data: json });
        json.forEach((movie) => {
          let films = this.state.movies;
          films[movie.title] = movie;
          this.setState({
            options: [...this.state.options,
              <option value={movie.title}>{movie.title}</option>,
            ],
            movies: films,
          });
        });
        console.log(this.state.options);
      })
      .catch((error) => console.log(error));
  }

  handleSelect = (event) => {
if (event.target.value === "") {
      this.setState({ display: "" });
    } else {
      this.setState({
        display: (
          <div className="display">
            <h1>Title: {this.state.movies[event.target.value].title}</h1>
            <p>
              Release Date: {this.state.movies[event.target.value].release_date}
            </p>
            <p>Description: {this.state.movies[event.target.value].description}</p>
          </div>
        ),
      });
    }
  };
  //data that's displayed upon selection

  render() {
    return (
      <div className="movies">
        <h1>Select a Movie</h1>
        <select name="movieSelection" onChange={this.handleSelect}>
          <option value=""></option>
          {this.state.options}
        </select>
        {this.state.display}
      </div>
    );
  }
}
//render dropdown menu above

export default Movies;