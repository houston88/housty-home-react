# Housty Home React

A modernized React application built with Vite, identifying happiness trends from Twitter data through interactive visualizations.

## Navigation

The application consists of several main sections accessible via the navigation bar:

- **Home**: The landing page of the application.
- **Counter**: A simple demonstration of Redux state management (increment/double async).
- **Twitter Data**: The core visualization dashboard displaying happiness scores derived from Twitter algorithms.
    - **Interactive Map**: US map showing happiness scores by state. Hover for details.
    - **Hashtag Bubbles**: Interactive bubble chart of top hashtags. Drag bubbles to rearrange them.
    - **Historical Timeline**: Bar chart showing happiness scores over time.
- **Resume**: Professional resume page.
- **Resources**: Various educational and orientation resources (`DebisResources`, `handouts`).
- **Theme Support**: The application features a persistent Light/Dark mode toggle (with animated Starscape and Neon accents in dark mode).

## Build and Run

### Prerequisites
- Node.js (v20.19.0 or higher required)
- npm (v9.2.0 or higher recommended)

### Installation
Clone the repository and install dependencies:

```bash
npm install
```

### Development
Start the development server with Hot Module Replacement (HMR):

```bash
npm start
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build
Build the application for production (output to `dist/`):

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Continuous Integration & Deployment

This project uses **GitHub Actions** (`.github/workflows/deploy.yml`) to automatically build and deploy the `master` branch directly to a DigitalOcean Droplet via SSH.

To enable this on a forked or cloned repository, add the following GitHub **Repository Secrets**:
- `DROPLET_HOST`: Your Droplet's IP Address
- `DROPLET_USERNAME`: SSH username (e.g. `root`)
- `DROPLET_SSH_KEY`: The raw private SSH key to authenticate

Additionally, **Dependabot** (`.github/dependabot.yml`) is natively configured to scan the repository weekly, automatically submitting Pull Requests for both `npm` and `github-actions` package updates to keep the environment secure.

## Code Layout

The project follows a feature-based structure for scalability:

```
.
├── public/                  # Static assets (images, favicon)
├── src/
│   ├── components/          # Shared reusable components (Header, Spinner, etc.)
│   ├── containers/          # Top-level Redux containers (AppContainer)
│   ├── layouts/             # Page layouts (CoreLayout)
│   ├── routes/              # Application routes and page-specific logic
│   │   ├── Home/            # Landing page
│   │   ├── Counter/         # Counter example
│   │   ├── TwitterData/     # Visualization dashboard (Map, Bubbles, Timeline)
│   │   └── ...              # Other routes
│   ├── store/               # Redux store configuration and reducers
│   ├── styles/              # Global SCSS styles and variables
│   ├── main.js              # Application entry point
│   └── index.html           # Main HTML template
└── vite.config.mjs          # Vite configuration
```

## Technologies

- **React 18**: UI Library
- **React Router 6**: Client-side Routing
- **Redux 5**: State Management
- **Vite 7**: Build Tool & Dev Server
- **Vitest 4**: Unit Testing Framework
- **D3 (v7)**: Data Visualizations
- **React Simple Maps (v3)**: SVG Maps
- **Sass**: CSS Preprocessing
