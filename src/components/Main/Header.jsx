import * as React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="flex px-5 py-5 justify-between bg-blue-200 fixed w-full">
      <p>logo</p>
      <Link to={"/admin/courses"} className="font-bold">
        JOIN NOW
      </Link>
    </div>
  );
};

export default Header;
