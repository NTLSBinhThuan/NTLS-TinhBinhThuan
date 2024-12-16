import React from "react";
import styles from "./Uheader.module.css";

export const Uheader = () => {
  return (
    <div className={styles['header']}>
        <div className={styles['topContent']}>
            <div className={styles['logo']}>
                <img src="LogoBT.png" alt="Logo"/>
                <img src="LogoHCM.png" alt="Logo"/>
            </div>
            <div className={styles['name']}>
                <img src="tachnen.png" alt="Logo"/>
            </div>
        </div>
        <div className={styles['title-dong']}>
            <span>
                CÔNG TRÌNH CỦA TUỔI TRẺ THÀNH PHỐ HỒ CHÍ MINH CHÀO MỪNG KỶ NIỆM 50 NĂM NGÀY GIẢI PHÓNG MIỀN NAM, THỐNG NHẤT ĐẤT NƯỚC (30/4/1975 - 30/4/2025)
            </span>
        </div>
        <div className={styles['big-picture']}>
            <img src="maubannerbt.png" alt="Big picture"/>
        </div>
    </div>
  );
};
