import React from 'react';
import styles from './SkillList.module.css';

const SkillList = ({ src, skill, icon }) => {
  return (
    <div className={styles.skillItem}>
      
      {icon && <img src={icon} alt={`${skill} icon`} className={styles.skillIcon} />}
      <span>{skill}</span>
    </div>
  );
};

export default SkillList;
