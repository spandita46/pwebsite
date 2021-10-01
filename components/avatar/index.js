import Image from 'next/image';
import { devName } from '../../lib/constants';
import styles from './index.module.css';
import utilStyles from '../../styles/utils.module.css';
import React from 'react';

const Avatar = ({ height, width }) => (
  <div
    className={`${styles.avatarContainer} ${utilStyles.primaryBorder} ${utilStyles.borderCircular}`}
  >
    <Image
      priority
      src='/images/profile.jpg'
      className={`${utilStyles.borderCircular}`}
      height={height}
      width={width}
      alt={devName}
    />
  </div>
);

export default Avatar;
