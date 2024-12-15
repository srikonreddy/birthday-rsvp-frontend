import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/birthday-rsvp-frontend/',
  plugins: [react()],
});