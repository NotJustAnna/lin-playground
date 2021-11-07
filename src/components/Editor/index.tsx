import styles from './index.module.css';
import './codemirror.css';
import { defaultExtensions, useEditorViewAndState } from './codemirror';

export interface EditorProps {
  code: string;

  setCode(code: string): void;
}

export default function Editor({ code, setCode }: EditorProps) {
  const { setContainer } = useEditorViewAndState({
    doc: code,
    extensions: defaultExtensions(setCode),
  });

  return <div ref={setContainer} className={styles.cme}/>;
}
