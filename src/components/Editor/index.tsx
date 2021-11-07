import styles from './index.module.css';
import './codemirror.css';
import { useEffect, useRef } from 'react';
import { useCodeMirror } from '@uiw/react-codemirror';
import { lineNumbers } from '@codemirror/gutter';

export interface EditorProps {
  code: string;

  setCode(code: string): void;
}

export default function Editor(props: EditorProps) {
  const editor = useRef<HTMLDivElement>(null);
  const { setContainer } = useCodeMirror({
    container: editor.current,
    extensions: [],
    value: props.code,
    height: '100%',
    width: '100%',
    maxHeight: '100%',
    maxWidth: '100%',
    theme: 'dark',
    basicSetup: true,
    onChange(value: string) {
      props.setCode(value);
    },
  });

  useEffect(() => {
    if (editor.current) {
      setContainer(editor.current);
    }
  }, [setContainer]);

  return <div ref={editor} className={styles.cme}/>;

  // return <textarea className={styles.editor} value={props.code} onChange={event => props.setCode(event.target.value)}/>;
}
