import React from 'react';
import { LinExecutionResult } from './worker';
import styles from './result.module.css';

export interface RunResultProps {
  result: LinExecutionResult;
}

export default function RunResult({ result }: RunResultProps) {
  console.log(result);
  return <>
    <div className={styles.duration}>
      Duration: {result.parseDuration} parsing, {result.compileDuration} compiling, {result.runDuration} execution.
    </div>
    <pre className={result.errored ? styles.errored : styles.success}>
      {(result.consoleLines || []).join('\n')}
      {result.result.trim().length === 0 ? "<no return value>" : result.result}
    </pre>
  </>;
}
