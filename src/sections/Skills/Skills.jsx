import styles from './SkillsStyles.module.css';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

// Import light theme icons
import javaIconLight from '../../assets/java-light.png';
import cIconLight from '../../assets/c-icon.png';
import pythonIconLight from '../../assets/python-light.png';
import sqlIconLight from '../../assets/sql-icon.png';
import matlabIconLight from '../../assets/matlab-light.png';
import awsIconLight from '../../assets/aws-dark.png';
import gcpIconLight from '../../assets/gcp-light.png';
import mysqlIconLight from '../../assets/mysql-light.png';
import githubIconLight from '../../assets/github-light.png';
import vscodeIconLight from '../../assets/vscode-light.png';
import excelIconLight from '../../assets/excel-dark.png';
import photoshopIconLight from '../../assets/photoshop-light.png';
import arduinoIconLight from '../../assets/arduino-light.png';
import lightroomIconLight from '../../assets/lightroom-dark.png';

// Import dark theme icons
import javaIconDark from '../../assets/java-dark.svg';
import cIconDark from '../../assets/c-icon.png';
import pythonIconDark from '../../assets/python-dark.png';
import sqlIconDark from '../../assets/sql-icon.png';
import matlabIconDark from '../../assets/matlab-dark.png';
import awsIconDark from '../../assets/aws-light.png';
import gcpIconDark from '../../assets/gcp-dark.png';
import mysqlIconDark from '../../assets/mysql-dark .png'; // Space intentionally retained
import githubIconDark from '../../assets/github-dark.png';
import vscodeIconDark from '../../assets/vscode-dark.png';
import excelIconDark from '../../assets/excel-dark.png';
import photoshopIconDark from '../../assets/photoshop-dark.png';
import arduinoIconDark from '../../assets/arduino-dark.png';
import lightroomIconDark from '../../assets/lightroom-dark.png';

function Skills() {
  const { theme } = useTheme();

  const icons = theme === 'light' ? {
    java: javaIconLight,
    c: cIconLight,
    python: pythonIconLight,
    sql: sqlIconLight,
    matlab: matlabIconLight,
    aws: awsIconLight,
    gcp: gcpIconLight,
    mysql: mysqlIconLight,
    github: githubIconLight,
    vscode: vscodeIconLight,
    excel: excelIconLight,
    photoshop: photoshopIconLight,
    arduino: arduinoIconLight,
    lightroom: lightroomIconLight
  } : {
    java: javaIconDark,
    c: cIconDark,
    python: pythonIconDark,
    sql: sqlIconDark,
    matlab: matlabIconDark,
    aws: awsIconDark,
    gcp: gcpIconDark,
    mysql: mysqlIconDark,
    github: githubIconDark,
    vscode: vscodeIconDark,
    excel: excelIconDark,
    photoshop: photoshopIconDark,
    arduino: arduinoIconDark,
    lightroom: lightroomIconDark
  };

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList skill="Java" icon={icons.java} />
        <SkillList skill="C" icon={icons.c} />
        <SkillList skill="Python" icon={icons.python} />
        <SkillList skill="SQL" icon={icons.sql} />
        <SkillList skill="MATLAB" icon={icons.matlab} />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList skill="AWS" icon={icons.aws} />
        <SkillList skill="GCP" icon={icons.gcp} />
        <SkillList skill="MySQL" icon={icons.mysql} />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList skill="Github" icon={icons.github} />
        <SkillList skill="VScode" icon={icons.vscode} />
        <SkillList skill="Arduino" icon={icons.arduino} />
        <SkillList skill="Excel" icon={icons.excel} />
        <SkillList skill="Photoshop" icon={icons.photoshop} />
        <SkillList skill="Lightroom" icon={icons.lightroom} />
      </div>
    </section>
  );
}

export default Skills;
