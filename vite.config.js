import { defineConfig } from 'vite';

// base './' keeps asset paths relative, so the build works at a domain root
// or inside a sub-folder without changes.
export default defineConfig({
  base: './',
});
