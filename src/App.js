import { fetchUser } from "./utils";
import { Logo } from "./Logo";
import "./styles.css";

export default function App() {
  const user = fetchUser();

  return (
    <div className="App">
      <nav className="navbar">
        <Logo />

        {/* Render a button that says "login" if the user is not logged in */}
        {!user && <button>Login</button>}

        {/* If the user is logged in */}
        {user && (
          <>
            <button>Logout</button>
            {/* Check if the user has a username */}
            <p>
              {user.username
                ? `Welcome ${user.username}!`
                : "Logged in, please complete your username!"}
            </p>
          </>
        )}
      </nav>
    </div>
  );
}
