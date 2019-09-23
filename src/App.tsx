import React from "react";
import "./App.css";
import posed from "react-pose";
import * as _ from "lodash";

const Box = posed.p({
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
});

let emojiSelection = _.range(128000, 128064).map(int =>
  String.fromCodePoint(int)
);

class App extends React.Component {
  state = { isVisible: true };

  componentDidMount() {
    setInterval(() => {
      this.setState({ isVisible: !this.state.isVisible });
    }, 300);
  }

  render() {
    const { isVisible } = this.state;
    const emoji = isVisible
      ? emojiSelection[_.random(0, emojiSelection.length)]
      : "";

    return (
      <div>
        <h1> Zoooooooooo </h1>
        <Box
          style={{ fontSize: "100px" , paddingLeft: "50px"}}
          pose={isVisible ? "visible" : "hidden"}
        >
          {" "}
          {emoji}{" "}
        </Box>
      </div>
    );
  }
}

export default App;
