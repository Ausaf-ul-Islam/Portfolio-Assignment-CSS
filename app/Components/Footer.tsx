import "../CSS/Footer.css"; // Import CSS file

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Ausaf Portfolio. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
