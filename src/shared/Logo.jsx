import { Link } from "react-router-dom";
import logoImg from "../assets/images/logo.png";
const Logo = () => {
  return (
    <>
      {/* Logo */}
      <Link to="/">
        <img src={logoImg} alt="logo" width="150" height="150" />
      </Link>
    </>
  );
};
export default Logo;
