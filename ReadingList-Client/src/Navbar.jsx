import React, { useState, useEffect } from 'react';
import { Link,  } from 'react-router-dom';
import './Navbar.css';

export function Navbar() {
  const [pageTitle, setPageTitle] = useState('MY READING LIST');

  useEffect(() => {
    document.title = `My Website - ${pageTitle}`;
  }, [pageTitle]);

  return (
    <nav className="flex items-center justify-between bg-[#622A0F] p-4">
      <div className="title">{pageTitle}</div>
      <ul className="flex">
        <li className="mr-6">
          <Link to="/addBook" className="text" onClick={() => setPageTitle('ADD BOOK')}>Add Book</Link>
        </li>
        <li className="mr-6">
          <Link to="/upUser" className="text" onClick={() => setPageTitle('PROFILE')}>Profile</Link>
        </li>
        <li>
          <Link to="/login" className="text" onClick={() => handleLogout()}>Log Out</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
