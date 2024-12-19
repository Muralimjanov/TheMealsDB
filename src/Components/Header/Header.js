import React, { useState } from "react";
import styles from "./Header.module.css";
import Logo from "../../Assets/logo.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [input, setInput] = useState("");
  const navigate=useNavigate()
  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search/${input}`)
    setInput("")
  };
  return (
    <nav className={styles.navbar}>
      <div className="container">
        <div className={styles.navbar_content}>
          <Link to="/">
            <img width={296} height={41} src={Logo} alt="" />
          </Link>
          <form onSubmit={handleSearch} className={styles.form_control}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Search"
              name=""
              id=""
            />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
