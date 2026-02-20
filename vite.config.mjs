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
            'components': path.resolve(__dirname, 'src/components'),
            'routes': path.resolve(__dirname, 'src/routes'),
            'store': path.resolve(__dirname, 'src/store'),
            'layouts': path.resolve(__dirname, 'src/layouts'),
            'containers': path.resolve(__dirname, 'src/containers'),
            'utils': path.resolve(__dirname, 'src/utils'),
        }
    },
    define: {
        // Define global constants expected by the application
        '__DEV__': process.env.NODE_ENV !== 'production',
        '__PROD__': process.env.NODE_ENV === 'production',
        '__DEBUG__': process.env.NODE_ENV !== 'production',
        '__BASENAME__': JSON.stringify('/'),
        // If there are other globals like __TEST__, __COVERAGE__, add them here
        '__TEST__': true // Defined for tests
    },
    esbuild: {
        loader: 'jsx', // Treat .js files as .jsx
        include: /(src|tests)\/.*\.js$/, // Apply to .js files in src and tests
        exclude: []
    },
    optimizeDeps: {
        esbuildOptions: {
            loader: {
                '.js': 'jsx', // Enable JSX in .js files for dependency optimization if needed
            },
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern-compiler'
            }
        }
    },
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './src/test/setup.js',
        css: true,
        server: {
            deps: {
                inline: ['react-router']
            }
        }
    },
})
