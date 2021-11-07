type Nullable<T> = T | null | undefined
export namespace net.notjustanna.lin.js {
    class Compilation {
        private constructor();
        readonly parseDuration: string;
        readonly compileDuration: string;
        sourceToBytes(): Int8Array;
        sourceToHex(): string;
        sourceToBase64(): string;
        createVM(): net.notjustanna.lin.js.VirtualMachine;
    }
}
export namespace net.notjustanna.lin.js {
    class ExecutionResult {
        private constructor();
        readonly runDuration: string;
        readonly isError: boolean;
        readonly result: string;
    }
}
export namespace net.notjustanna.lin.js {
    const Lin: {
        compile(source: string): net.notjustanna.lin.js.Compilation;
    };
}
export namespace net.notjustanna.lin.js {
    class VirtualMachine {
        private constructor();
        run(): net.notjustanna.lin.js.ExecutionResult;
    }
}
export as namespace lin;