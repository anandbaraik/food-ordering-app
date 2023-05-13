import { Link } from "react-router-dom";
export default function ErrorPage() {
  return (
    <div>
      <h1>Ooops!</h1>
      <p>Something went wrong</p>
      <Link to="/">Go to home</Link>
    </div>
  );
}
