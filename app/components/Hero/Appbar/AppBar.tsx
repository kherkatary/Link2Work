"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';

const AppBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">LowJOB</Link>
      </div>
      <div className={`${styles.menu} ${isOpen ? styles.active : ''}`}>
        <ul>
          <li><Link href="/shots">Shots</Link></li>
          <li><Link href="/designers">Designers</Link></li>
          <li><Link href="/jobs">Jobs</Link></li>
          <li><Link href="/events">Events</Link></li>
          <li 
            className={styles.dropdown} 
            onClick={toggleDropdown}
          >
            <span>Learn</span>
            {isDropdownOpen && (
              <ul className={styles.dropdownMenu}>
                <li><Link href="/tutorials">Tutorials</Link></li>
                <li><Link href="/webinars">Webinars</Link></li>
                <li><Link href="/workshops">Workshops</Link></li>
              </ul>
            )}
          </li>
        </ul>
      </div>
      <div className={styles.actions}>
        <Link href="/signup" className={styles.signup}>Sign Up</Link>
      </div>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
    </nav>
  );
};

export default AppBar;
