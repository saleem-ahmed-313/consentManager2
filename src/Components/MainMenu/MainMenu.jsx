import React from 'react';
import styles from './MainMenu.module.css';
import addButton from "../../assets/12_addButton.png"
import searchBtn2 from "../../assets/13_search02.png"


const MainMenu = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainConatiner_header}>
        <h1
          style={{
            color: "#212427",
            fontFamily: "Inter",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "normal",
          }}
        >Consent Notices</h1>
        <button className={styles.createNotice_button}>
          <img src={addButton} alt=""
            style={
              {
                width: "20px",
                height: "20px",
              }
            } />
          <span>Create Notice</span>
        </button>
      </div>

      {/* filter part here */}
      <div className={styles.mainConatiner_filter}>
        <div className={styles.inputField_container}>
          <img src={searchBtn2} alt=""  className={styles.searchImage} />
          <input type="text" placeholder='Search by name' className={styles.inputField_search}/>
        </div>
        <div>
          <select name="status" id="status" className={styles.filterOptions}>
            <option value="none">Status</option>
            <option value="Production">Production</option>
            <option value="Draft">Draft</option>
          </select>
        </div>
      </div>
      {/* All stored data */}
      <div className={styles.dataStoreOuterbody}>
        <div className={styles.dataStoreOuterbody2}>
          <div className={styles.mainContainer_dataStoring}>
            <div className={styles.dataStoring_heading}>
              <div className={styles.title_NoticeName}>NOTICE NAME</div>
              <div className={styles.title_Status}>STATUS</div>
              <div className={styles.title_Date_Modified}>DATE MODIFIED</div>
              <div></div>
            </div>
            <div className={styles.mainConatiner_dataList}>
              <div
                style={{
                  display: "flex",
                  width: "458px",
                  paddingLeft: "20px",
                  alignItems: "flex-start",
                }}
              >Lending_notice</div>
              <div
                style={{
                  display: "flex",
                  width: "348px",
                  height: "48px",
                  padding: "8.5px 8px",
                  alignItems: "center",
                  gap: "4px",
                  borderRadius: "4px",
                }}
              >Draft</div>
              <div
                style={{
                  display: "flex",
                  height: "48px",
                  padding: "8.5px 8px",
                  alignItems: "center",
                  gap: "4px",
                  flex: "1 0 0",
                }}>16 Dec 2024</div>
              <div
                style={{
                  display: "flex",
                  width: "156px",
                  height: "48px",
                  padding: "8.5px 12px 8.5px 8px",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: "4px",
                }}
              >...</div>
            </div>
          </div>
          <div></div>
        </div>
        <div>

        </div>
      </div>
    </div >
  );
};

export default MainMenu;
