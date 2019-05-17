import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  state = {
    mylist: [],
    recommendations: []
  };

  onClickRemoveHandler = index => {
    const { mylist, recommendations } = this.state;

    this.setState({
      mylist: [...mylist.slice(0, index), ...mylist.slice(index + 1)],
      recommendations: [...recommendations, mylist[index]]
    });
  };

  onClickAddHandler = index => {
    const { mylist, recommendations } = this.state;

    this.setState({
      mylist: [...mylist, recommendations[index]],
      recommendations: [
        ...recommendations.slice(0, index),
        ...recommendations.slice(index + 1)
      ]
    });
  };

  componentDidMount() {
    this.setState({
      mylist: [
        {
          title: "Futurama",
          id: 1,
          img: "http://cdn1.nflximg.net/webp/7621/3787621.webp"
        },
        {
          title: "The Interview",
          id: 2,
          img: "http://cdn1.nflximg.net/webp/1381/11971381.webp"
        },
        {
          title: "Gilmore Girls",
          id: 3,
          img: "http://cdn1.nflximg.net/webp/7451/11317451.webp"
        }
      ],
      recommendations: [
        {
          title: "Family Guy",
          id: 4,
          img: "http://cdn5.nflximg.net/webp/5815/2515815.webp"
        },
        {
          title: "The Croods",
          id: 5,
          img: "http://cdn3.nflximg.net/webp/2353/3862353.webp"
        },
        {
          title: "Friends",
          id: 6,
          img: "http://cdn0.nflximg.net/webp/3200/9163200.webp"
        }
      ]
    });
  }

  render() {
    const { mylist, recommendations } = this.state;

    return (
      <div className="App">
        <h1>Netflix</h1>
        <div>
          <div className="List">
            <h2>My List</h2>
            <ul>
              {mylist.map((show, index) => (
                <li key={show.id}>
                  <div>
                    <div className="Show">
                      <img src={show.img} alt={show.img} />
                      <button onClick={() => this.onClickRemoveHandler(index)}>
                        Remove
                      </button>
                    </div>
                    <p>{show.title}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="List">
            <h2>Recommendations</h2>
            <ul>
              {recommendations.map((show, index) => (
                <li key={show.id}>
                  <div>
                    <div className="Show">
                      <img src={show.img} alt={show.img} />
                      <button onClick={() => this.onClickAddHandler(index)}>
                        Add
                      </button>
                    </div>
                    <p>{show.title}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
