import { FaLinkedin, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
      <footer className="footer bg-neutral text-neutral-content p-10">
  <aside>
    <img className="h-16 w-16 " src="https://i.ibb.co.com/xmNyvnY/brand-17653861.png" alt="logo" />
    <p className="text-slate-200">
      HOSTELVERSE FOOD VILLAGE
      <br />
      Providing reliable chef since 1964
    </p>
  </aside>
  <nav>
    <h6 className="footer-title text-xl">Social</h6>
    <div className="grid grid-flow-col gap-4">
     <Link to='https://www.youtube.com/watch?v=JCX31h10YVw' className="text-3xl"><FaYoutube /></Link>
     <Link className="text-3xl" to='https://x.com/HadisurRahman_X'><FaTwitter></FaTwitter></Link>
     <Link to='https://www.linkedin.com/in/md-hadisur-rahman-manna/' className="text-3xl"><FaLinkedin></FaLinkedin></Link>
    </div>
  </nav>
</footer>
    );
};

export default Footer;