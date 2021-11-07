import styles from './index.module.css';

export interface EditorProps {
  code: string;

  setCode(code: string): void;
}

export default function Editor(props: EditorProps) {
  return <textarea className={styles.editor} value={props.code} onChange={event => props.setCode(event.target.value)}/>;
}
