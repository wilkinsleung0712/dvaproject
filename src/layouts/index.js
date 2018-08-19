import Header from './Header';
import React from 'react';
import styles from './index.css';
import { withRouter } from 'dva/router';

function Layout({children, location, history}) {
    return (
        <div className={styles.normal}>
            <Header location={location} />
            <div>
                <div>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default withRouter(Layout);