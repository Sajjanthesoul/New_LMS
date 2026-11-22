# New LMS — Intelligent Learning Management System

A full-stack Learning Management System designed to bring student administration, attendance, learning activity, performance analytics, and machine-learning-powered student insights into one application.

## Planned architecture

- **Frontend:** React, TypeScript, Vite
- **Backend:** Python, FastAPI
- **Database:** PostgreSQL
- **ML integration:** API-based integration with the existing Intelligent Student Performance research project
- **Deployment target:** Vercel (frontend), Render (API), Supabase (PostgreSQL)

## Repository structure

```text
New_LMS/
├── frontend/       # React + TypeScript application
├── backend/        # FastAPI application
├── docs/           # Architecture and implementation notes
└── README.md
```

## Run locally

### Backend

Use Python 3.11 or newer.

```powershell
cd backend
python -m venv .venv
.venv\Scripts\Activate.ps1
pip install -r requirements.txt
Copy-Item .env.example .env
uvicorn app.main:app --reload
```

The API health endpoint is available at http://127.0.0.1:8000/health and interactive API documentation at http://127.0.0.1:8000/docs.

### Frontend

Use Node.js 20 or newer.

```powershell
cd frontend
npm install
Copy-Item .env.example .env
npm run dev
```

The Vite development server prints the local frontend URL when it starts.

## Current implementation status

- [x] Initial repository structure
- [x] FastAPI application entry point and health endpoint
- [x] React + TypeScript + Vite starter
- [ ] PostgreSQL connection and database migrations
- [ ] Authentication and role-based access (admin, teacher, student)
- [ ] Student, course, enrollment, and attendance modules
- [ ] Learning activity and assessment modules
- [ ] ML prediction service integration
- [ ] Analytics dashboard and deployment

## Important data and security note

Do not commit student records, credentials, API keys, database dumps, or private research datasets. Use environment variables for secrets and synthetic/sample data for development and demonstrations.
