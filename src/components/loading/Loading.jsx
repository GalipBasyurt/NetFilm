import React from "react";
import styles from "./loading.module.css"
function Loading() {
  return (
    <div className={styles.loadingWrapper}>
      <div className={styles.loading}></div>
    </div>
  );
}

export default  Loading ;