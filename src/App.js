import { fetchUser } from "./utils";
import { Logo } from "./Logo";
import "./styles.css";

export default function App() {
  const user = fetchUser();

  return (
    <div className="App">
      <nav className="navbar">
        <Logo />
        {/* Render "Logout" button in the top right corner */}
        {user && <button className="logout-btn">Logout</button>}
      </nav>

      {/* Welcome message below the header */}
      {user && (
        <div className="welcome-message">
          {user.username ? (
            <p>Welcome {user.username}!</p>
          ) : (
            <p>Logged in, please complete your username!</p>
          )}
        </div>
      )}

      {/* If user is not logged in, render Login button */}
      {!user && <button className="login-btn">Login</button>}
    </div>
  );
}
{/* Write your code : 
          - if the user is not logged in : render a button that says "login" yang ini sepertinya pakai &&

          - if the user is logged in :
            render a button that says logout and
              - if the user has a username : render a greeting message with the username "Welcome username !" pake ? sebagai if : sebagai else
              - if the user does not have a user name : render "Logged and Please complete your username!""

*/}