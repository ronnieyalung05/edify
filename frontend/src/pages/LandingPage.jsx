import { Link } from 'react-router-dom';
const LandingPage = () => {
  return (
    <div>
      <h1>Hey check out this page! This is what we offer!</h1>
      <p>have or want to create an account? <br /><br />
        <Link to="/signin">Sign In!</Link>
        <br />
        <br />
        <Link to="/signup">Sign Up!</Link>
      </p>
    </div>
  );
};

export default LandingPage;
