import { com } from '../../vendor/lin';

export interface LinParseError {
  errored: 'parsing';
  isSyntaxError: boolean;
  errorMessage: string | null | undefined;
  errorStackTrace: string | null | undefined;
  parseDuration: string;
}

export interface LinCompileError {
  errored: 'compiling';
  isSyntaxError: boolean;
  errorMessage: string | null | undefined;
  errorStackTrace: string | null | undefined;
  parseDuration: string;
  compileDuration: string;
}

export interface LinExecutionResult {
  result: string;
  errored: false | 'execution';
  consoleLines: string[];
  parseDuration: string;
  compileDuration: string;
  runDuration: string;
}

export type LinResult = LinParseError | LinCompileError | LinExecutionResult;

export async function executeLinCode(code: string): Promise<LinResult> {
  const parseResult = net.notjustanna.lin.js.Lin.parse(code, 'snippet.lin');

  if (parseResult.isError) {
    return {
      errored: 'parsing',
      isSyntaxError: parseResult.isSyntaxError,
      errorMessage: parseResult.errorMessage,
      errorStackTrace: parseResult.errorStackTrace,
      parseDuration: parseResult.parseDuration,
    }
  }

  const compileResult = parseResult.compile();
  if (compileResult.isError) {
    return {
      errored: 'compiling',
      isSyntaxError: compileResult.isSyntaxError,
      errorMessage: compileResult.errorMessage,
      errorStackTrace: compileResult.errorStackTrace,
      parseDuration: parseResult.parseDuration,
      compileDuration: compileResult.compileDuration,
    }
  }

  const runResult = compileResult.run();

  return {
    errored: runResult.isError ? 'execution' : false,
    result: runResult.result,
    consoleLines: runResult.consoleLines || [],
    parseDuration: parseResult.parseDuration,
    compileDuration: compileResult.compileDuration,
    runDuration: runResult.runDuration,
  }
}
