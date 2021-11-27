import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <div>
      <Nav />
      {children}
      <Footer/>
<script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/20720134.js"></script>

    </div>
  );
};
export default Layout;
