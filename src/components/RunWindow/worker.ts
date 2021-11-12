import { Lin } from '@lin-lang/lin';

export interface LinParseError {
  failed: 'parsing';
  error: Error;
  parseDuration: string;
}

export interface LinValidationError {
  failed: 'validation';
  message: string;
  parseDuration: string;
}

export interface LinCompileError {
  failed: 'compiling';
  error: Error;
  parseDuration: string;
  compileDuration: string;
}

export interface LinExecutionError {
  failed: 'execution';
  consoleLines: string[];
  error: Error;
  parseDuration: string;
  compileDuration: string;
  runDuration: string;
}

export interface LinExecutionResult {
  failed: false;
  errored: boolean;
  result: string;
  consoleLines: string[];
  parseDuration: string;
  compileDuration: string;
  runDuration: string;
}

export type LinResult = LinParseError | LinValidationError | LinCompileError | LinExecutionError | LinExecutionResult;

export async function executeLinCode(code: string): Promise<LinResult> {
  const parseResult = Lin.parse(code, 'snippet.lin');
  if (parseResult.isFailure) {
    return {
      failed: 'parsing',
      error: parseResult.exceptionOrNull()!,
      parseDuration: parseResult.duration.toString(),
    };
  }

  const parsedSnippet = parseResult.getOrNull()!;

  const validationReport = parsedSnippet.validate();
  if (!validationReport.isValid) {
    return {
      failed: 'validation',
      message: validationReport.toString(),
      parseDuration: parseResult.duration.toString(),
    };
  }

  const compileResult = parsedSnippet.compile();
  if (compileResult.isFailure) {
    return {
      failed: 'compiling',
      error: compileResult.exceptionOrNull()!,
      parseDuration: parseResult.duration.toString(),
      compileDuration: compileResult.duration.toString(),
    };
  }

  const compiledSnippet = compileResult.getOrNull()!;

  const runReport = compiledSnippet.run();
  if (runReport.result.isFailure) {
    return {
      failed: 'execution',
      error: runReport.result.exceptionOrNull()!,
      consoleLines: runReport.consoleLines,
      parseDuration: parseResult.duration.toString(),
      compileDuration: compileResult.duration.toString(),
      runDuration: runReport.result.duration.toString(),
    };
  }

  const result = runReport.result.getOrNull()!;
  return {
    failed: false,
    errored: result.isFailure,
    result: result.isSuccess ? result.getOrNull()! : result.thrownOrNull()!,
    consoleLines: runReport.consoleLines,
    parseDuration: parseResult.duration.toString(),
    compileDuration: compileResult.duration.toString(),
    runDuration: runReport.result.duration.toString(),
  };
}
