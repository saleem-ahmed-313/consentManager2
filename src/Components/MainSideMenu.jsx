import React from "react";
import {HypervergeLogo} from "./assets/01_HypervergeLogo";
import {home} from './assets/02_home';
import {applications} from './assets/03_applications';
import {analytics} from './assets/04_analytics';
import {workflows} from './assets/05_workflows';
import {devhub} from './assets/06_devhub';
import {account} from './assets/07_account';
import {consentmanager} from './assets/08_consentmanager';



import styles from "./MainSideMenu.module.css";

function MainSideMenu() {
  const SidebarItems = [
    {
      id: 1,
      name: "Home",
      icon: {home} ,
    },
    {
      id: 2,
      name: "Applications",
      icon: <PiFolderUserDuotone className={styles.sideIcon} />,
    },
    {
      id: 3,
      name: "Analytics",
      icon: <MdOutlineAnalytics className={styles.sideIcon} />,
    },
    {
      id: 4,
      name: "Workflows",
      icon: <LuWorkflow className={styles.sideIcon} />,
    },
    {
      id: 5,
      name: "Dev Hub",
      icon: <AiOutlineCode className={styles.sideIcon} />,
    },
    {
      id: 6,
      name: "Account",
      icon: <MdOutlineAccountCircle className={styles.sideIcon} />,
    },
    {
      id: 7,
      name: "Consent Manager",
      icon: <LuKeyRound className={styles.sideIcon} />,
    },
  ];

  return (
    <div className={styles.main}>
      <div className={styles.img}>
        <img src={HypervergeLogo} alt="logo" className={styles.image} />
      </div>

      <div className={styles.sideMenu}>
        {SidebarItems.map((item) => (
          <div key={item.id} className={styles.sideItem}>
            {item.icon}
            <p className={styles.text}>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainSideMenu;
