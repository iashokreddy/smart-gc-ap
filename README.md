# Markapuram Digital Development Portal

A modern, AI-powered digital development portal for Markapuram District, Andhra Pradesh.

## Features

- Citizen-facing portal with Telugu & English support
- AI content engine with editorial review workflow
- Development dashboards (roads, schools, hospitals, etc.)
- Veligonda Rehabilitation Project tracker
- Government schemes with eligibility calculator
- Employment, Agriculture, Education, Healthcare portals
- Citizen grievance system
- Volunteer management
- Interactive maps
- AI chatbot (Telugu + English)
- News & blog with AI-generated drafts
- PWA with offline support
- Role-based admin panel

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js 15 (static export), React 18, TypeScript, Tailwind CSS, MUI |
| Backend | NestJS (Node.js), TypeScript |
| Database | PostgreSQL |
| Caching | Redis |
| Search | Meilisearch |
| Maps | Leaflet / MapLibre |
| Storage | Azure Blob Storage / Amazon S3 |
| Auth | Auth0 / Azure AD B2C |
| AI | OpenAI GPT-4 / Azure OpenAI |
| Containerization | Docker |
| Orchestration | Kubernetes |
| CI/CD | GitHub Actions |
| Monitoring | Grafana, Prometheus, Application Insights |

## Project Structure

```
markapuram-portal/
├── frontend/          # Next.js 15 App Router
├── backend/           # NestJS REST API
├── k8s/               # Kubernetes manifests
├── .github/workflows/ # CI/CD pipelines
└── docker-compose.yml # Local development
```

## Quick Start

### Prerequisites
- Node.js 20+
- Docker & Docker Compose
- PostgreSQL 16+

### Development

```bash
# Clone and install
git clone <repo>
cd markapuram-portal

# Start all services
docker-compose -f docker-compose.dev.yml up -d

# Frontend
cd frontend
npm install
npm run dev

# Backend
cd backend
npm install
npm run start:dev
```

Frontend: http://localhost:3000  
Backend API: http://localhost:4000/api  
API Docs: http://localhost:4000/api/docs

## Environment Variables

Copy `.env.example` to `.env` in both `frontend/` and `backend/` directories and fill in the values.

## Deployment

```bash
# Build Docker images
docker build -t markapuram-frontend ./frontend
docker build -t markapuram-backend ./backend

# Apply Kubernetes manifests
kubectl apply -f k8s/
```

## Static Hosting (Netlify / GitHub Pages)

The frontend is configured for static export, so it can be deployed directly on Netlify or GitHub Pages.

### Netlify

1. Connect this repository in Netlify.
2. Netlify will auto-detect `netlify.toml` at the repo root.
3. Deploy settings used:
	 - Base directory: `frontend`
	 - Build command: `npm ci && npm run build:static`
	 - Publish directory: `out`

### GitHub Pages

1. Push to `main`.
2. The workflow `.github/workflows/deploy-pages.yml` builds and deploys `frontend/out` automatically.
3. In GitHub repo settings, set **Pages > Source** to **GitHub Actions**.

### Notes for Static Deployment

- Next.js API routes and middleware are disabled for static hosting compatibility.
- The chatbot works in local guidance mode by default on static hosts.
- To enable live chatbot responses, set:
	- `NEXT_PUBLIC_CHATBOT_API_URL=<your-hosted-chat-endpoint>`

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## License

MIT
