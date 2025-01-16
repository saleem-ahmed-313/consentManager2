import React from "react";

import HypervergeLogo from "../../assets/00_HypervergeLogo.png";
import Notice from "../../assets/01_consentNotice.png";
import Logs from "../../assets/02_consentLogs.png";
import Analytics from "../../assets/03_anlaytics.png";

import styles from "./MainSideMenu.module.css";

function MainSideMenu() {
  const SidebarItems = [
    {
      id: 1,
      name: "Consent Notices",
      icon: <img src={Notice} alt="icon" className={styles.sideIcon} />,
    },
    {
      id: 2,
      name: "Consent Logs",
      icon: <img src={Logs} alt="icon" className={styles.sideIcon} />,
    },
    {
      id: 3,
      name: "Analytics",
      icon: <img src={Analytics} alt="icon" className={styles.sideIcon} />,
    },
  ];

  return (
    <div className={styles.main}>
      <div className={styles.sideMenu}>
        {SidebarItems.map((item) => (
          <div key={item.id} className={styles.sideItem}>
            <div className={styles.imageContainer}>{item.icon}</div>
            <p className={styles.text}>{item.name}</p>
          </div>
        ))}
      </div>

      <div className={styles.img}>
        <img src={HypervergeLogo} alt="logo" className={styles.image} />
      </div>
    </div>
  );
}

export default MainSideMenu;
