import { EditorState, Extension } from '@codemirror/state';
import { oneDarkTheme } from '@codemirror/theme-one-dark';
import { basicSetup } from '@codemirror/basic-setup';
import { EditorView, keymap, ViewUpdate } from '@codemirror/view';
import { indentWithTab } from '@codemirror/commands';
import { useEffect, useMemo } from 'react';

interface ReactEditorViewAndState {
  doc: string;
  extensions: Extension;
}

export function defaultExtensions(setCode?: (value: string) => void): Extension[] {
  return [
    oneDarkTheme,
    basicSetup,
    keymap.of([indentWithTab]),
    EditorView.updateListener.of((event: ViewUpdate) => {
      if (event.docChanged && typeof setCode === 'function') {
        setCode(event.state.doc.toString());
      }
    }),
    EditorView.theme({ '&': { height: '100%', width: '100%' } }),
  ];
}

export function useEditorViewAndState({ doc, extensions }: ReactEditorViewAndState) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const state = useMemo(() => EditorState.create({ doc, extensions }), []);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const view = useMemo(() => new EditorView({ state }), []);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => () => view?.destroy(), []);

  const setContainer = (node: HTMLElement | null) => {
    if (!node) return;
    if (view.dom.parentElement !== node) {
      node.appendChild(view.dom);
    }
  };
  return { state, view, setContainer };
}
