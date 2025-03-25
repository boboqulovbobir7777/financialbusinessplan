import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import { useCallback, useRef, useState } from "react";

import "./navList.scss";

export default function NavList() {
  let [menu, setMenu] = useState(false);
  let input = useRef();

  const closeMenu = useCallback(() => {
    input.current.checked = false;
    setMenu(false);
  }, []);

  return (
    <>
      <ul className={"header-navbar" + (menu ? " active" : "")}>
        <li onClick={closeMenu}>
          <Link to="/">bosh sahifa</Link>
        </li>
        <li onClick={closeMenu}>
          <ScrollLink onClick={closeMenu} offset={-88} to="about">
            haqida
          </ScrollLink>
        </li>
        <li onClick={closeMenu}>
          <ScrollLink onClick={closeMenu} offset={-88} to="resource">
            manbalar
          </ScrollLink>
        </li>
        <li onClick={closeMenu}>
          <ScrollLink onClick={closeMenu} offset={-88} to="contact">
            bog'lanish
          </ScrollLink>
        </li>
      </ul>
      <div className="burger-continer">
        <input
          type="checkbox"
          id="burger-checkbox"
          className="burger-checkbox"
          onChange={() => setMenu(!menu)}
          ref={input}
        />
        <label className="burger" htmlFor="burger-checkbox"></label>
      </div>
    </>
  );
}
