import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <body>
          <div class="container">
            <h2>Add Todo</h2>
            <form id="todoForm">
              <div class="form-group">
                <label for="note">Note:</label>
                <input type="text" id="note" name="note" required></input>
              </div>
              <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required></input>
              </div>
              <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required></input>
              </div>
              <div class="form-group">
                <label for="phone">Phone:</label>
                <input type="tel" id="phone" name="phone" required></input>
              </div>
              <button type="submit">Submit</button>
            </form>

            <h2>Todo List</h2>
            <ul id="todoList"></ul>
          </div>

          <script src="https://cdnjs.cloudflare.com/ajax/libs/redux/4.1.1/redux.min.js"></script>
          <script src="script.js"></script>
        </body>
      </header>
    </div>
  );
}

export default App;
