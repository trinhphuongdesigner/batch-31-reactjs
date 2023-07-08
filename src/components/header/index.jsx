import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { LOCATIONS } from 'constants/index';

import Loading from 'components/loading';

function Header() {
  const profile = useSelector((state) => state.profileReducer.profile);
  const isLoading = useSelector((state) => state.profileReducer.isLoading);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <header className="header">
          <nav class="navbar navbar-light bg-light">
            <div class="container-fluid justify-content-end">
              <Link class="navbar-brand d-flex align-items-center" to={LOCATIONS.HOME_PAGE}>
                <img
                  src={profile.avt}
                  alt="avatar"
                  width="50"
                  height="50"
                  class="d-inline-block align-text-top me-4 object-fit-cover border border-primary rounded-circle"
                />
                {profile.name}
              </Link>
            </div>
          </nav>
        </header>
      )}
    </>
  );
}

export default Header;
