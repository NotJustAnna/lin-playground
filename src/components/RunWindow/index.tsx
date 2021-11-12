import React, { useMemo, useState } from 'react';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import worker from 'workerize-loader!./worker';
import { LinResult } from './worker';
import RunToolbar from './RunToolbar';
import RunResult from './RunResult';

export interface RunWindowProps {
  code: string;
}

export default function RunWindow(props: RunWindowProps) {
  const [result, setResult] = useState<LinResult>();

  const workerInst = useMemo(() => worker(), []);

  const runFn = () => {
    const promise = workerInst.executeLinCode(props.code) as Promise<LinResult>;
    promise.then(setResult, console.error);
  }

  return <div>
    <RunToolbar runFn={runFn}/>
    {result && <RunResult result={result}/>}
  </div>;
}
