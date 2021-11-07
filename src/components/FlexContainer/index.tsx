import styles from './index.module.css';
import { ReactNode } from 'react';

export interface FlexContainerProps {
  children: ReactNode
}

export default function FlexContainer(props: FlexContainerProps) {
  return <div className={styles.container}>{props.children}</div>
}
