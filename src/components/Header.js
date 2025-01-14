import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10">
      <div>
        <Link to="/">
          <img className="w-36" alt="netlifx" src="./assets/netflix-logo.svg" />
        </Link>
      </div>
      <div>SignIn</div>
    </div>
  );
};

export default Header;
