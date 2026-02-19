import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
    plugins: [
        react({
            jsxRuntime: 'classic' // Essential for React 15
        })
    ],
    resolve: {
        alias: {
            'styles': path.resolve(__dirname, 'src/styles'),
        }
    },
    define: {
        // Define global constants expected by the application
        '__DEV__': process.env.NODE_ENV !== 'production',
        '__PROD__': process.env.NODE_ENV === 'production',
        '__DEBUG__': process.env.NODE_ENV !== 'production',
        '__BASENAME__': JSON.stringify('/'),
        // If there are other globals like __TEST__, __COVERAGE__, add them here
    },
    esbuild: {
        loader: 'jsx', // Treat .js files as .jsx
        include: /src\/.*\.js$/, // Apply to .js files in src
        exclude: []
    },
    optimizeDeps: {
        esbuildOptions: {
            loader: {
                '.js': 'jsx', // Enable JSX in .js files for dependency optimization if needed
            },
        },
    },
})
