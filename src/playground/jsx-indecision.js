console.log("App.js is running");
const root = document.getElementById("app");

// JSX javascript XML
const app = {
  title: "Indecision App",
  subtitle: "Let's help you make that difficult decision",
  options: [],
};

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    renderForm();
  }
};

const reset = () => {
  if (app.options.length > 0) {
    // app.options.splice(0, app.options.length);
    app.options = [];
    renderForm();
  }
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  console.log(randomNum);
  const option = app.options[randomNum];
  alert(option);
};

const renderForm = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      {<p>{app.options.length > 0 ? "Here are your options" : "No Options"}</p>}
      <button onClick={reset}>Remove All</button>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>
        What should i do
      </button>
      <ol>
        {app.options.map((opt) => (
          <li key={opt}>{opt}</li>
        ))}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, root);
};
renderForm();

//[<p key="1">a</p>, <p key="2">b</p>, <p key="3">c</p>]
