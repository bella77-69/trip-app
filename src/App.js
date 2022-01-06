import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./components/Nav";
import { TripsCount } from "./components/trips/TripsCount";
import { AddTrip } from "./components/trips/AddTrip";
import { TripsList } from "./components/trips/TripsList";
import { Error404 } from "./components/Error404"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allTrips: [
        {
          place: "Manali",
          date: "2017-01-01",
          type: "Trek",
        },
        {
          place: "Mumbai",
          date: "2017-04-05",
          type: "Club",
        },
        {
          place: "Marina",
          date: "2017-02-09",
          type: "Tropic",
        },
      ],
    };
    this.addTrip = this.addTrip.bind(this);
  }

  addTrip(newTrip) {
    this.setState((prevState) => {
      return {
        allTrips: [...prevState.allTrips, newTrip],
      };
    });
  }
  countDays(filter) {
    const { allTrips } = this.state;
    return allTrips.filter((trip) => (filter ? trip.type === filter : trip))
      .length;
  }

  render() {
    return (
      <div className="app">
        <Router>
          <div className="route-container">
            <Nav />
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <TripsCount
                    {...props}
                    total={this.countDays()}
                    trek={this.countDays("Trek")}
                    tropic={this.countDays("Tropic")}
                    club={this.countDays("Club")}
                  />
                )}
              ></Route>
              <Route
                path="/list/:filter"
                render={(props) => (
                  <TripsList {...props} days={this.state.allTrips} />
                )}
              />
              <Route
                path="/list"
                render={(props) => (
                  <TripsList {...props} days={this.state.allTrips} />
                )}
              />
              <Route
                path="/add"
                render={(props) => (
                  <AddTrip {...props} newTrip={this.addTrip} />
                )}
              />
              <Route component={Error404} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
