const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [React.createElement("h1", {}, "H1 tag"), React.createElement("h2", {}, "H2 tag")]),
  React.createElement("div", { id: "child2" }, [React.createElement("h1", {}, "H1 tag"), React.createElement("h2", {}, "H2 tag")]),
]);

//jsx

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

console.log(heading);
