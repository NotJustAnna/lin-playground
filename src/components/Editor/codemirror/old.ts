import React, { useEffect, useState } from 'react';
import { basicSetup as defaultBasicSetup } from '@codemirror/basic-setup';
import { EditorState, EditorStateConfig, Extension, StateEffect } from '@codemirror/state';
import { indentWithTab as defaultIndentWithTab } from '@codemirror/commands';
import { EditorView, keymap, placeholder as extendPlaceholder, ViewUpdate } from '@codemirror/view';
import { oneDarkTheme } from '@codemirror/theme-one-dark';

export interface ReactCodeMirrorProps
  extends Omit<EditorStateConfig, 'doc' | 'extensions'>,
    Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'placeholder'> {
  /** value of the auto created model in the editor. */
  value?: string;
  height?: string;
  minHeight?: string;
  maxHeight?: string;
  width?: string;
  minWidth?: string;
  maxWidth?: string;
  /** Enables a placeholder—a piece of example content to show when the editor is empty. */
  placeholder?: string | HTMLElement;
  /**
   * Whether to optional basicSetup by default
   * @default true
   */
  basicSetup?: boolean;
  /**
   * Whether to optional basicSetup by default
   * @default true
   */
  indentWithTab?: boolean;

  /** Fired whenever a change occurs to the document. */
  onChange?(value: string, viewUpdate: ViewUpdate): void;

  /** Fired whenever a change occurs to the document. There is a certain difference with `onChange`. */
  onUpdate?(viewUpdate: ViewUpdate): void;

  /**
   * Extension values can be [provided](https://codemirror.net/6/docs/ref/#state.EditorStateConfig.extensions) when creating a state to attach various kinds of configuration and behavior information.
   * They can either be built-in extension-providing objects,
   * such as [state fields](https://codemirror.net/6/docs/ref/#state.StateField) or [facet providers](https://codemirror.net/6/docs/ref/#state.Facet.of),
   * or objects with an extension in its `extension` property. Extensions can be nested in arrays arbitrarily deep—they will be flattened when processed.
   */
  extensions?: Extension[];
  /**
   * If the view is going to be mounted in a shadow root or document other than the one held by the global variable document (the default), you should pass it here.
   * Originally from the [config of EditorView](https://codemirror.net/6/docs/ref/#view.EditorView.constructor%5Econfig.root)
   */
  root?: ShadowRoot | Document;
}

export interface UseCodeMirror extends ReactCodeMirrorProps {
  container?: HTMLDivElement | null;
}

export function useCodeMirror(props: UseCodeMirror) {
  const {
    value,
    selection,
    onChange,
    onUpdate,
    extensions = [],
    height = '',
    minHeight = '',
    maxHeight = '',
    placeholder = '',
    width = '',
    minWidth = '',
    maxWidth = '',
    indentWithTab = true,
    basicSetup = true,
    root,
  } = props;
  const [container, setContainer] = useState(props.container);
  const [view, setView] = useState<EditorView>();
  const [state, setState] = useState<EditorState>();
  const defaultThemeOption = EditorView.theme({
    '&': {
      height,
      minHeight,
      maxHeight,
      width,
      minWidth,
      maxWidth,
    },
  });
  const updateListener = EditorView.updateListener.of((vu: ViewUpdate) => {
    if (vu.docChanged && typeof onChange === 'function') {
      const doc = vu.state.doc;
      const value = doc.toString();
      onChange(value, vu);
    }
  });
  let getExtensions = [updateListener, defaultThemeOption];
  if (indentWithTab) {
    getExtensions.unshift(keymap.of([defaultIndentWithTab]));
  }
  if (basicSetup) {
    getExtensions.unshift(defaultBasicSetup);
  }

  if (placeholder) {
    getExtensions.unshift(extendPlaceholder(placeholder));
  }

  getExtensions.push(oneDarkTheme);

  if (onUpdate && typeof onUpdate === 'function') {
    getExtensions.push(EditorView.updateListener.of(onUpdate));
  }
  getExtensions = getExtensions.concat(extensions);

  useEffect(() => {
    if (container && !state) {
      const stateCurrent = EditorState.create({
        doc: value,
        selection,
        extensions: getExtensions,
      });
      setState(stateCurrent);
      if (!view) {
        const viewCurrent = new EditorView({
          state: stateCurrent,
          parent: container as any,
          root,
        });
        setView(viewCurrent);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [container, state]);

  useEffect(() => {
    return () => {
      if (view) {
        view.destroy();
      }
    };
  }, [view]);

  useEffect(() => {
    if (view) {
      const currentValue = view.state.doc.toString();
      if (value !== currentValue) {
        view.dispatch({
          changes: { from: 0, to: currentValue.length, insert: value || '' },
        });
      }
    }
  }, [value, view]);

  useEffect(() => {
    if (view) {
      view.dispatch({ effects: StateEffect.reconfigure.of(getExtensions) });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    extensions,
    placeholder,
    height,
    minHeight,
    maxHeight,
    width,
    minWidth,
    maxWidth,
    indentWithTab,
    basicSetup,
  ]);

  return { state, setState, view, setView, container, setContainer };
}
