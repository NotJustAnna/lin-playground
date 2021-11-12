import React from 'react';
import { LinResult } from './worker';
import styles from './result.module.css';

export interface RunResultProps {
  result: LinResult;
}

export default function RunResult({ result }: RunResultProps) {
  console.log(result);

  if (result.failed === 'parsing') {
    return <>
      <pre className={styles.failed}>{result.error.name}: {result.error.message}</pre>
      <div className={styles.duration}>
        Duration: {result.parseDuration} parsing.
      </div>
    </>;
  } else if (result.failed === 'validation') {
    return <>
      <pre className={styles.failed}>{result.message}</pre>
      <div className={styles.duration}>
        Duration: {result.parseDuration} parsing.
      </div>
    </>;
  } else if (result.failed === 'compiling') {
    return <>
      <pre className={styles.failed}>{result.error.name}: {result.error.message}</pre>
      <div className={styles.duration}>
        Duration: {result.parseDuration} parsing, {result.compileDuration} compiling.
      </div>
    </>;
  } else if (result.failed === 'execution') {
    return <>
      <pre className={styles.failed}>
        {(result.consoleLines || []).join('\n')}
        Fatal Error: {result.error.name}: {result.error.message}
      </pre>
      <div className={styles.duration}>
        Duration: {result.parseDuration} parsing, {result.compileDuration} compiling, {result.runDuration} execution.
      </div>
    </>;
  } else {
    return <>
      <pre className={result.errored ? styles.errored : styles.success}>
      {(result.consoleLines || []).join('\n')}
        {result.result === 'null' ? '<no return value>' : !result.result.trim().length ? '<blank string>' : result.result}
      </pre>
      <div className={styles.duration}>
        Duration: {result.parseDuration} parsing, {result.compileDuration} compiling, {result.runDuration} execution.
      </div>
    </>;
  }
}
