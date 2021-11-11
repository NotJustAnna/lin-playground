type Nullable<T> = T | null | undefined
export namespace net.notjustanna.lin.js {
    class CompilationResult {
        private constructor();
        readonly isError: boolean;
        readonly isSyntaxError: boolean;
        readonly errorMessage: Nullable<string>;
        readonly errorStackTrace: Nullable<string>;
        readonly compileDuration: string;
        sourceToBytes(): Int8Array;
        sourceToHex(): string;
        sourceToBase64(): string;
        run(): net.notjustanna.lin.js.ExecutionResult;
    }
}
export namespace net.notjustanna.lin.js {
    class ExecutionResult {
        private constructor();
        readonly consoleLines: Array<string>;
        readonly runDuration: string;
        readonly isError: boolean;
        readonly result: string;
    }
}
export namespace net.notjustanna.lin.js {
    const Lin: {
        parse(source: string, name: string): net.notjustanna.lin.js.ParseResult;
    };
}
export namespace net.notjustanna.lin.js {
    class ParseResult {
        private constructor();
        readonly isError: boolean;
        readonly isSyntaxError: boolean;
        readonly errorMessage: Nullable<string>;
        readonly errorStackTrace: Nullable<string>;
        readonly parseDuration: string;
        compile(): net.notjustanna.lin.js.CompilationResult;
    }
}
export as namespace lin;