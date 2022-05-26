/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { RiHeart2Line } from "react-icons/ri"

const Footer = () => (
  <footer
    className="site-footer"
    sx={{
      bg: "siteColor",
    }}
  >
    <div className="container"> 
      <p> 
      © Working Alongside Refugees in Mental Health 
      </p>
    </div>
  </footer>
)

export default Footer
