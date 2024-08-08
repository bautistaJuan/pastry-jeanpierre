/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_CONTENFUL_ENVIRONMENT_ID: string;
  readonly VITE_CONTENTFUL_TOKEN: string;
  readonly VITE_CONTENTFUL_SPACE_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
