import {Link} from 'react-router-dom';
const Footer = () => {
  return (
    <div className="px-5 mt-10 mb-10">
      <div>
        <p className="font-bold">Company</p>
        <Link to={'/aboutus'} className="text-sm mt-5">About us</Link>
        <Link to={'/termsofuse'} className="text-sm mt-1">Terms of Use</Link>
        <Link to={'/copyright'} className="text-sm mt-1">Copyright Policy</Link>
        <Link to={'/privacy-policy'} className="text-sm mt-1">Privacy Policy</Link>
      </div>
    </div>
  );
};

export default Footer;
