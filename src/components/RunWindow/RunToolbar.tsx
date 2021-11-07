import styles from './toolbar.module.css';
import React from 'react';

export interface RunToolbarProps {
  runFn(): void;
}

export default function RunToolbar(props: RunToolbarProps) {
  return <div className={styles.toolbar}>
    <button className={styles.button} onClick={props.runFn}>Run!</button>
  </div>;
}
