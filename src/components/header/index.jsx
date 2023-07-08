import Loading from 'components/loading';
import React from 'react';
import { useSelector } from 'react-redux';

function Header() {
  const profile = useSelector((state) => state.profileReducer.profile);
  const isLoading = useSelector((state) => state.profileReducer.isLoading);

  return (
    <div className="d-flex align-items-center">
      {isLoading ? (
        <Loading />
      ) : (
        <header className="header">
          <div className="image me-3">
            <img width={12} height={12} src={profile.avt} alt="Profile Image" />
          </div>
          <span>{profile.name}</span>
        </header>
      )}
    </div>
  );
}

export default Header;
