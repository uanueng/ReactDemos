import React from 'react';
import styles from './index.less';

class HomeLayout extends React.Component {
  render() {
    return (
      <div className={styles.super}>
        <div className={styles.header}>

        </div>
        <div className={styles.content}>
          {this.children}
        </div>
        <div className={styles.footer}>
          uanueng ©
        </div>
      </div>
    )
  }
}
