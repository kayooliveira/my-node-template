declare global {
  namespace NodeJS {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    interface ProcessEnv {
      /**
       * App Port
       */
      PORT: string;
    }
  }
}

export {}
