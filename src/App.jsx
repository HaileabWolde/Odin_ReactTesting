import { Link } from "react-router";
const App = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
    Hello world!
  </h1>
      <p>Here are some examples of links to other pages</p>
      <nav>
        <ul>
          <li>
           <Link to="profile">Profile page</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default App;