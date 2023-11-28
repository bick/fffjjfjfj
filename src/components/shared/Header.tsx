import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  BiLogoReact,
  BiLogoNodejs,
  BiLogoAngular,
  BiLogoWordpress,
  BiLogoDjango,
  BiLogoShopify,
  BiLogoDiscordAlt
} from "react-icons/bi";
import { FiChevronDown } from "react-icons/fi";
import { SiDotnet, SiSalesforce } from "react-icons/si";
import styles from "@/styles/components/shared/Header.module.scss";

const Header: React.FC = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  const [isMegaMenuVisible, setIsMegaMenuVisible] = useState(false);
  const [isScrolled, setScrolled] = useState(false);
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleRouteChange = () => setIsMegaMenuVisible(false);
    router.events.on("routeChangeStart", handleRouteChange);
    return () => router.events.off("routeChangeStart", handleRouteChange);
  }, [router.events]);

  const toggleClass = () => setActive(!isActive);

  const headerClass = `${styles.header}
    ${isScrolled ? styles.scrolled : ""}
    ${isActive ? styles.active : ""}
    ${currentRoute === "/" ? styles.home : ""}`;

  return (
    <>
      {isMegaMenuVisible && (
        <div
          className={`${styles.header__bg} fixed inset-0 bg-black opacity-50 top-10 z-40`}
          onClick={() => setIsMegaMenuVisible(false)}
        />
      )}
      <header className={headerClass}>
        <div className={styles.header__logo}>
          <Link href="/">Devgigs</Link>
        </div>
        <ul
          className={
            isActive
              ? `${styles.header__list} ${styles.header__list__mobile} ${styles.active}`
              : styles.header__list
          }
        >
          <li className={styles.header__item}>
            <a
              className={`
        ${styles.header__link}
        ${styles.header__flex}
        ${isMegaMenuVisible ? styles.active : ""}
    `}
              onClick={() => setIsMegaMenuVisible(!isMegaMenuVisible)}
            >
              Categories{" "}
              <FiChevronDown
                className={
                  isMegaMenuVisible ? styles.rotateIcon : styles.dropdownIcon
                }
              />
            </a>
            {isMegaMenuVisible && (
              <div
                className={`${styles.header__mega} ${styles.visible} =w-screen left-0 p-4 gap-4`}
              >
                <div>
                  <h3>Languages</h3>
                  <ul>
                    <li>
                      <Link href="/javascript-jobs">
                        🚀 JavaScript & TypeScript
                      </Link>
                    </li>
                    <li>
                      <Link href="/python-jobs">🐍 Python</Link>
                    </li>
                    <li>
                      <Link href="/java-jobs">☕ Java &amp; Kotlin</Link>
                    </li>
                    <li>
                      <Link href="/c-jobs">🇨 C, C#, &amp; C++</Link>
                    </li>
                    <li>
                      <Link href="/php-jobs">🐘 PHP</Link>
                    </li>
                    <li>
                      <Link href="/ios-jobs">🍏 Swift &amp; Objective-C</Link>
                    </li>
                    <li>
                      <Link href="/golang-jobs">🐹 Golang</Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3>Technologies</h3>
                  <ul>
                    <li>
                      <Link href="/react-jobs">
                        <BiLogoReact /> React
                      </Link>
                    </li>
                    <li>
                      <Link href="/node-jobs">
                        <BiLogoNodejs /> Node.js
                      </Link>
                    </li>
                    <li>
                      <Link href="/angular-jobs">
                        <BiLogoAngular /> Angular
                      </Link>
                    </li>
                    <li>
                      <Link href="/wordpress-jobs">
                        <BiLogoWordpress /> WordPress
                      </Link>
                    </li>
                    <li>
                      <Link href="/django-jobs">
                        <BiLogoDjango /> Django
                      </Link>
                    </li>
                    <li>
                      <Link href="/dotnet-jobs">
                        <SiDotnet /> .NET
                      </Link>
                    </li>
                    <li>
                      <Link href="/salesforce-jobs">
                        <SiSalesforce /> Salesforce
                      </Link>
                    </li>
                    <li>
                      <Link href="/shopify-jobs">
                        <BiLogoShopify /> Shopify
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3>Industries</h3>
                  <ul>
                    <li>
                      <Link href="/tech-jobs">💻 Software</Link>
                    </li>
                    <li>
                      <Link href="/healthcare-jobs">🏥 Healthcare</Link>
                    </li>
                    <li>
                      <Link href="/fintech-jobs">💰 Fintech</Link>
                    </li>
                    <li>
                      <Link href="/gaming-jobs">🎮 Gaming</Link>
                    </li>
                    <li>
                      <Link href="/aerospace-and-automotive-jobs">
                        ✈️ Aerospace &amp; Automotive
                      </Link>
                    </li>
                    <li>
                      <Link href="/environmental-jobs">🌿 Environmental</Link>
                    </li>
                    <li>
                      <Link href="/government-jobs">
                        🏛️ Government &amp; Public Sector
                      </Link>
                    </li>
                    <li>
                      <Link href="/non-profit-jobs">❤️ Non-Profits</Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3>Skills</h3>
                  <ul>
                    <li>
                      <Link href="/web-development-jobs">
                        🌐 Web Development
                      </Link>
                    </li>
                    <li>
                      <Link href="/mobile-development-jobs">
                        📱 Mobile Development
                      </Link>
                    </li>
                    <li>
                      <Link href="/ai-jobs">🤖 AI & Machine Learning</Link>
                    </li>
                    <li>
                      <Link href="/data-science-jobs">
                        📊 Data Science & Analytics
                      </Link>
                    </li>
                    <li>
                      <Link href="/game-development-jobs">
                        🎮 Game Development
                      </Link>
                    </li>
                    <li>
                      <Link href="/robotics-development-jobs">🤖 Robotics</Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3>Experience</h3>
                  <ul>
                    <li>
                      <Link href="/entry-level-development-jobs">
                        🎓 Entry-Level
                      </Link>
                    </li>
                    <li>
                      <Link href="/mid-level-development-jobs">
                        🛠️ Mid-Level
                      </Link>
                    </li>
                    <li>
                      <Link href="/senior-level-development-jobs">
                        🏅 Senior Level
                      </Link>
                    </li>
                    <li>
                      <Link href="/staff-and-principal-level-development-jobs">
                        🌟 Staff &amp; Principal
                      </Link>
                    </li>
                    <li>
                      <Link href="/executive-development-jobs">
                        👔 Executive
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </li>
          <li className={styles.header__item}>
            <Link
              href="/companies"
              className={
                currentRoute === "/companies"
                  ? `${styles.header__link} ${styles.active}`
                  : styles.header__link
              }
            >
              Companies
            </Link>
          </li>
          <li className={styles.header__item}>
            <Link
              href="https://discord.gg/ZAy7yf6KaV"
              className={styles.header__link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BiLogoDiscordAlt className={styles.discord} /> Community
            </Link>
          </li>
          <li className={styles.header__item}>
            <Link
              className={
                currentRoute === "/blog"
                  ? `${styles.header__link} ${styles.active}`
                  : styles.header__link
              }
              href="/blog"
            >
              Blog
            </Link>
          </li>
        </ul>
        <ul className={`${styles.header__list__right} ${styles.header__list}`}>
          <li className={`${styles.header__item} hidden md:block`}>
            <Link
              className={
                currentRoute === "/hire"
                  ? `${styles.header__link} ${styles.active}`
                  : styles.header__link
              }
              href="/hire"
            >
              For Employers
            </Link>
          </li>
          <li className={styles.header__item}>
            <Link className={styles.header__button} href="/developer-jobs/new">
              Post a Job
            </Link>
          </li>
        </ul>
        <div
          className={
            styles.header__hamburger + (isActive ? " " + styles.active : "")
          }
          onClick={toggleClass}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>
    </>
  );
};

export default Header;
