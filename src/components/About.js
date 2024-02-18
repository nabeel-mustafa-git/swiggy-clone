import aboutStyling from "../styling/about.css";
import UserCard from "./UserCard";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  componentWillUnmount() {
    console.log("component will unmount!");
  }

  render() {
    return (
      <div className="about-container">
        <h1>About</h1>
        <UserCard name={"Aks - function"} />
        <UserClass name={"child 1 - class"} location={"skp loc"} />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div className="about-container">
//       <h1>About</h1>
//       {/* <UserCard name={"Aks - function"} /> */}
//       <UserClass name={"Aks name - class"} location={"skp loc"} />
//     </div>
//   );
// };

export default About;
