import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  devServer: {
    host: '0.0.0.0', // allows access from any device on the network
    port: 5173,      // default port
  }
})
