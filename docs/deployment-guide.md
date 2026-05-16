# Deployment Guide

# AI Support Ticket Triage Starter Kit

This guide explains how to run the AI Support Ticket Triage Starter Kit locally using Docker and Docker Compose.

---

# Prerequisites

Before starting, install the following:

- Docker Desktop
- Git
- Node.js (optional for local development)

---

# Project Structure

```text
ai-support-ticket-triage-starter-kit/

├── frontend/
├── backend/
├── nginx/
├── screenshots/
├── docs/
├── sample-data/
└── docker-compose.yml
```

---

# Clone or Extract the Project

If downloaded from Gumroad, extract the ZIP file to your desired directory.

Example:

```bash
unzip ai-support-ticket-triage-starter-kit.zip
```

---

# Start the Application

From the project root directory, run:

```bash
docker compose up --build
```

Docker will:

- Build the frontend container
- Build the backend container
- Create internal container networking
- Start the application services

---

# Access the Application

## Frontend Dashboard

```text
http://localhost:3000
```

## Backend API

```text
http://localhost:5000
```

## Health Check Endpoint

```text
http://localhost:5000/health
```

---

# Stop the Application

To stop the containers:

```bash
docker compose down
```

---

# Rebuild Containers

If changes are made to the application:

```bash
docker compose up --build
```

---

# Sample Workflow

1. Start the containers
2. Open the frontend dashboard
3. Submit a sample support ticket
4. Review the AI-generated analysis
5. Update ticket status and severity
6. Test dashboard search and metrics

---

# Example Test Ticket

```text
Production API is returning 503 errors after deployment. Users are unable to access the application.
```

---

# Docker Overview

The project uses Docker Compose to orchestrate:

- Frontend container
- Backend container
- Internal networking

This provides:

- Environment consistency
- Simplified deployment
- Production-style workflows
- Easy local development

---

# Optional AWS Deployment

This project can also be deployed to AWS EC2 using:

- Docker
- Nginx reverse proxy
- GitHub Actions CI/CD

Typical deployment flow:

```text
GitHub → GitHub Actions → AWS EC2 → Docker Containers → Nginx
```

---

# Troubleshooting

## Containers Fail To Start

Verify Docker Desktop is running.

Check running containers:

```bash
docker ps
```

View logs:

```bash
docker logs <container_name>
```

---

## Port Conflicts

If ports 3000 or 5000 are already in use:

- Stop conflicting applications
- Or update the `docker-compose.yml` port mappings

---

## Frontend Cannot Connect To Backend

Verify:

- backend container is running
- API port mappings are correct
- Docker networking is functioning properly

---

# Purpose Of This Project

This starter kit is designed to help engineers learn:

- AI-powered support workflows
- Docker containerization
- Frontend/backend architecture
- DevOps deployment workflows
- Cloud infrastructure concepts
- CI/CD automation

The project is intentionally structured as a production-style starter system engineers can customize and expand.