import { MercedElement, $s } from "../lib/MUIMODULE.js";

class MyFooter extends MercedElement {
  constructor() {
    super(
      (state, props) => {
        // Argument 1: The Build Function
        const style = `<style>h1 {color: ${state.color};}</style>`;

        return `${style}<h1>This is the Footer Component</h1><button>Click Me</button>`;
      },
      { color: "purple" }
    );
  }

  postBuild(state, props) {
    const button = $s.select(this, "button");
    button.addEventListener("click", () => {
      this.setState({ color: "green" });
    });
  }
}

MercedElement.makeTag("my-footer", MyFooter);
