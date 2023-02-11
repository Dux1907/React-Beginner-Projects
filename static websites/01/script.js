function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <img
          src="png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png"
          alt="react"
          width="60px"
        />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
function Main() {
  return (
    <main className="main">
      <h1>Fun Facts About React</h1>
      <ul>
        <li>Was first released in 2013.</li>
        <li>Was originally created by Jordan Walke.</li>
        <li>Has well over 100k stars on GitHub.</li>
        <li>Is maintained by Facebook.</li>
        <li>Powers thousands of enterprise apps,including mobile apps</li>
      </ul>
    </main>
  );
}
function Footer() {
  return (
    <footer className="footer">
      <small>&copy;2023 React development. All rights reserved.</small>
    </footer>
  );
}
function Page() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
ReactDOM.render(<Page />, document.getElementById("heading"));
