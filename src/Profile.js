import React from 'react';

class Profile extends React.Component {
  state = {
    profile: null,
    error: ""
  };

  componentDidMount() {
    this.loadUserProfile();
  }

  loadUserProfile() {
    this.props.auth.getProfile((profile, error) =>
      this.setState({ profile, error })
    );
  }

  render() {
    const {profile} = this.state;
    if (!profile) return null;
    return (
      <>
        <p>{profile.nickname}</p>
        <img
          style={{ maxWidth: 50, maxHeight: 50 }}
          src={profile.picture}
          alt="Profile Pic" />
        <pre>{JSON.stringify(profile, null, 2)}</pre>
      </>
    );
  }
}
//
// Profile.propTypes = {
//   children: PropTypes.object.isRequired
// };

export default Profile;
