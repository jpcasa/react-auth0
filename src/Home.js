import React from 'react';
import {Link} from 'react-router-dom';

class Home extends React.Component {
  render() {
    const { isAuthenticated, login } = this.props.auth;
    return (
      <div className="container">
        <h1>Home!</h1>
        { isAuthenticated() ? (
          <Link to="/profile">View profile</Link>
        ) : (
          <button onClick={login}>Log In</button>
        )}
      </div>
    );
  }
}
//
// Home.propTypes = {
//   children: PropTypes.object.isRequired
// };

export default Home;
