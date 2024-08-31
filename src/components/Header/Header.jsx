import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className="text-3xl space-x-10 mb-20">
          <Link  to="/">Home</Link>
          <Link to="/login">Login</Link>
        </div>
    );
};

export default Header;