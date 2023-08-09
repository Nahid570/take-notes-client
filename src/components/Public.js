import { Link } from "react-router-dom";

const Public = () => {
  const content = (
    <section className="public">
      <header>
        <h1>
          Welcome <span className="nowrap">Mate</span>
        </h1>
      </header>
      <main className="public__main">
        <p>Plan in Analog — spend time in analog before jumping to digital</p>
        <address className="public__addr">
          Dev World
          <br />
          From Execution Context
        </address>
        <br />
        <p>Owner: Nahid Faraji</p>
      </main>
      <footer>
        <Link to="/login">Employee Login</Link>
      </footer>
    </section>
  );
  return content;
};
export default Public;
