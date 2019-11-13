import { createElement } from "./jsxRenderer";

const app = ({ name }) => <h1>Hello {name}</h1>;

const getHtml = (): HTMLElement => {
  const container = document.getElementById("app");
  let content = <div>{app({ name: "Sirwan" })}</div>;
  return container.appendChild(content);
};

document.onreadystatechange = () => {
  if (document.readyState === "complete") {
    getHtml();
  }
};
