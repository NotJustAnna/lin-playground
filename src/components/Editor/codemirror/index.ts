import { EditorState, Extension } from '@codemirror/state';
import { oneDarkTheme } from '@codemirror/theme-one-dark';
import { basicSetup } from '@uiw/react-codemirror';
import { EditorView, keymap, ViewUpdate } from '@codemirror/view';
import { indentWithTab } from '@codemirror/commands';
import { useState } from 'react';

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
  const [state, setState] = useState<EditorState>();
  const [view, setView] = useState<EditorView>();
  const setContainer = (node: HTMLElement | null) => {
    if (!node) return;
    let latestState = state;
    if (!latestState) {
      latestState = EditorState.create({ doc, extensions });
      setState(latestState);
    }
    let latestView = view;
    if (!latestView) {
      latestView = new EditorView({ state: latestState });
      setView(latestView);
    }
    if (latestView.dom.parentElement !== node) {
      node.appendChild(latestView.dom);
    }
  };
  return { state, view, setContainer };
}
