import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const DummyLayout = () => (
  <div className="flex flex-col">
    <div className="flex flex-row justify-around w-screen">
      <NavLink id="nav-home" data-testid="nav-home" to="/">
        Home
      </NavLink>
      <NavLink id="nav-page" data-testid="nav-page" to="/page">
        Page
      </NavLink>
      <NavLink id="nav-about" data-testid="nav-about" to="/about">
        About
      </NavLink>
    </div>
    <div>
      <Outlet />
    </div>
  </div>
);

export default DummyLayout;
