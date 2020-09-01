import { MercedElement, $s } from "./lib/MUIMODULE.js";
import "./components/Header";
import "./components/Main";
import "./components/Footer";
import "./styles.scss";

class MyApp extends MercedElement {
  constructor() {
    super(
      (state, props) => {
        // Argument 1: The Build Function
        return `
        <my-header></my-header>
        <my-main color=blue></my-main>
        <my-footer></my-footer>
        `;
      },

      {}, //Argument 2: The Initial State

      (oldstate, payload) => {
        //Argument 3: Reducer Function (think redux)
        if (payload.action === "") {
          return {};
        }
      }
    );
  }
}

MercedElement.makeTag("my-app", MyApp);

//Inject into body
const body = document.querySelector("body");
body.innerHTML = `<my-app></my-app><h2>I am styled using Sass</h2>`;
