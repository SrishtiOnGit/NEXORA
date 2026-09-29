import "../styles/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <p className="footer-p">&copy; 2026 NEXORA</p>
      <div className="footer-links">
        <a
          href="https://hackclub.com/"
          className="hc-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hack Club
        </a>
        <a
          href="https://github.com/SrishtiOnGit/NEXORA"
          className="hc-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </div>
    </div>
  );
};

export default Footer;
