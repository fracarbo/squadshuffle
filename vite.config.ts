import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import inkline from '@inkline/plugin/vite';
import type { UserOptions } from '@inkline/plugin';
import { VitePWA } from 'vite-plugin-pwa'


const inklineConfig: UserOptions = {
    outputDir: 'src/css/variables'
};

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
      VitePWA({
        registerType: 'autoUpdate',
        devOptions: {
          enabled: true
        },
        manifest: {
          "name": "Squadshuffle",
          "short_name": "Squadshuffle",
          "icons": [
            {
              "src": "./icons/android-chrome-192x192.png",
              "sizes": "192x192",
              "type": "image/png"
            },
            {
              "src": "./icons/android-chrome-512x512.png",
              "sizes": "512x512",
              "type": "image/png"
            },
            {
              "src": "./src/assets/football.png",
              "sizes": "192x192",
              "type": "image/png"
            }
          ],
          "start_url": "/index.html",
          "display": "standalone",
          "background_color": "#000000",
          "theme_color": "#AAFF01"
        }
      }),
      inkline(inklineConfig),
      vue()
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
});
