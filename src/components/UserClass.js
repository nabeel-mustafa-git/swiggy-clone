import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        // name: "dummy",
        // location: "default",
        // avatar_url: "dummy",
      },
    };
  }

  async componentDidMount() {
    //API calls to make them after rendering

    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("prev: " + prevState + " prop: " + prevProps);
  }
  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log("prev " + prevState);
  // }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url}></img>
        <h2>Name: {name}</h2>
        <p>Location: {location}</p>
        <p>Contact: @aks.google.web</p>
      </div>
    );
  }
}

export default UserClass;
