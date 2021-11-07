import { com } from '../../vendor/lin';

export interface LinResult {
  result: string;
  errored: boolean;
  runDuration: string;
  parseDuration: string;
  compileDuration: string
}

export async function executeLinCode(code: string): Promise<LinResult> {
  const compilation = net.notjustanna.lin.js.Lin.compile(code);
  const execution = compilation.createVM().run();

  return {
    result: execution.result,
    errored: execution.isError,
    runDuration: execution.runDuration,
    parseDuration: compilation.parseDuration,
    compileDuration: compilation.compileDuration,
  }
}
