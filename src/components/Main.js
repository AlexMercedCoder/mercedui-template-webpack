import { MercedElement } from "../lib/MUIMODULE.js";

class MyMain extends MercedElement {
  constructor() {
    super((state, props) => {
      // Argument 1: The Build Function

      const style = `<style>h1 {color: ${props.color};}</style>`;

      return `${style}<h1>This is the Main Component</h1>`;
    });
  }

}

MercedElement.makeTag("my-main", MyMain);
