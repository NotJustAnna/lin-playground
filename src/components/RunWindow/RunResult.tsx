import React from 'react';
import { LinResult } from './worker';
import styles from './result.module.css';

export interface RunResultProps {
  result: LinResult;
}

export default function RunResult({ result }: RunResultProps) {
  return <>
    <div className={styles.duration}>
      Duration: {result.parseDuration} parsing, {result.compileDuration} compiling, {result.runDuration} execution.
    </div>
    <pre className={result.errored ? styles.errored : styles.success}>
      {result.result.trim().length === 0 ? "<no return value>" : result.result}
    </pre>
  </>;
}
