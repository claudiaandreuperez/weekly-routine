import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.weeklyroutine.app',
  appName: 'La meva rutina setmanal',
  webDir: 'dist/weekly-routine/browser',
  server: {
    androidScheme: 'https',
  },
};

export default config;
