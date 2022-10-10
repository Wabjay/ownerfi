import React from 'react';
import {
    FirestoreTextEditor,
    FirestoreTextEditorProvider,
  } from 'firestore-text-editor';
  import { app } from '../firebase-config';
  
  function EditorContainer() {
    return (
      <FirestoreTextEditorProvider app={app}>
        <FirestoreTextEditor path="pages/editor" />
      </FirestoreTextEditorProvider>
    );
  }
  
  export default EditorContainer;