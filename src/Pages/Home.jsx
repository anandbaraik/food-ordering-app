import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div>
      <h3>Welcome to neoG Food Ordering App</h3>
      <p>Click below button to go to menu page.</p>
      <Link to="/menu">Explore menu</Link>
    </div>
  );
}
