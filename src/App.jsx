import "./App.scss";

function App() {
  return (
    <div className="trello-container">
      <nav className="navbar app">App bar</nav>
      <nav className="navbar board">Board Bar</nav>
      <div className="board-columns">
        <div className="column">
          <header>Brainstorm</header>
          <ul>
            <li>
              <img src="https://dailyepaper.in/wp-content/uploads/2023/02/cropped-DailyEpaper-Logo.png" />
              Design & Research
            </li>
            <li>second</li>
            <li>third</li>
            <li>third</li>
          </ul>
          <footer>Add another card</footer>
        </div>
      </div>
    </div>
  );
}

export default App;
