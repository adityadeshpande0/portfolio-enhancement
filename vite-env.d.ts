/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_FIRESTORE_API_KEY: string;
    readonly VITE_FIRESTORE_AUTH_DOMAIN: string;
    readonly VITE_FIREBASE_PROJECT_ID: string;
    readonly VITE_FIREBASE_MESSAGINGSENDER_ID: string;
    readonly VITE_FIREBASE_APP_ID: string;
    // Add other environment variables if needed
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  