import React from "react";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  state = {
    advice: "",
  };

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip;

        this.setState({ advice: advice });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { advice } = this.state;
    return (
      <div className="app">
        <div className="card">
          <h1 className="heading">{advice}</h1>

          <div class="d-grid gap-2 col-6 mx-auto" onClick={this.fetchAdvice}>
            <button class="btn btn-primary" type="button">
              GIVE ME ADVICE!
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
