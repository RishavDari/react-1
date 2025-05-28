const heading = React.createElement("h1", { className: "hello" }, "hello world");

const container = document.querySelector(".container");

const root = ReactDOM.createRoot(container);

root.render(heading);
