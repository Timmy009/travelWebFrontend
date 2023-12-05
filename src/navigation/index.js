
import React, { useState } from 'react';
import { FiHome, FiSearch, FiShoppingCart, FiUser, FiBell, FiGlobe, FiPlus, FiTrendingUp, FiDownloadCloud, FiAirplay } from 'react-icons/fi';
import './style/navigation.css';
import Logo from "../../src/assets/logo.jpg"

const NavigationBar = () => {
  const [cartCount, setCartCount] = useState(0);
  const [notificationCount, setNotificationCount] = useState(3); // Example count for notifications
  const [searchOpen, setSearchOpen] = useState(false);
  const [hoveredProfile, setHoveredProfile] = useState(false);


  const increaseCartCount = () => {
    setCartCount(cartCount + 1);
  };

  const handleProfileHover = () => {
    setHoveredProfile(true);
  };

  const handleProfileLeave = () => {
    setHoveredProfile(false);
  };

  return (
    <nav className={`navbar ${searchOpen ? 'search-open' : ''}`}>
      <div className="logo-search">
        {/* Logo */}
        <div className="logo3">
          <img src={Logo} alt="Logo" />
        </div>
        {/* Search bar */}
        <div className={`search ${searchOpen ? 'active' : ''}`}>
          <input type="text" placeholder="Search..." />
          <button onClick={() => setSearchOpen(!searchOpen)}>
            <FiSearch />
          </button>
        </div>
      </div>

      <div className="nav-links">
        {/* Navigation Links */}
        <ul>
          <li>
            <div> <FiHome /></div>
            <a href="/">
             
              Home
            </a>
          </li>
          <li>
          <div> <FiDownloadCloud /></div>
            <a href="/wallet">Wallet</a>
          </li>
          <li>
          <div> <FiTrendingUp /></div>
            <a href="/trends">Trends</a>
          </li>
          <li>
          <div> <FiGlobe /></div>
            <a href="/goeasy">GoEasy</a>
          </li>
          <li>
          <div> <FiAirplay /></div>
            <a href="/commissionforlife">Commission for Life</a>
          </li>
           {/* Separator Line */}
        <div className="separator-line" />

{/* Notification, Cart, Profile */}
<div className="icons">
  <div className="notification-container" title="Notifications">
    <FiBell />
    {notificationCount > 0 && <div className="notification-count">{notificationCount}</div>}
  </div>
  <div
    className="cart-container"
    onClick={increaseCartCount}
    title="Shopping Cart"
  >
    <FiShoppingCart />
    {cartCount > 0 && <div className="cart-count">{cartCount}</div>}
  </div>
  <FiPlus className="plus-icon" onClick={increaseCartCount} />
  <div
    className={`profile-container ${hoveredProfile ? 'hovered' : ''}`}
    onMouseEnter={handleProfileHover}
    onMouseLeave={handleProfileLeave}
  >
    <FiUser />
    {hoveredProfile && <div className="profile-tooltip">Your Name</div>}
  </div>
</div>
        </ul>

       
      </div>
    </nav>
  );
};

export default NavigationBar;



