# AI Support Ticket Triage Platform

An AI-powered support ticket triage platform designed to automatically analyze, prioritize, and classify incoming support requests using modern cloud and DevOps deployment practices.

This project demonstrates a complete production-style AI application deployment workflow using Docker, AWS EC2, Nginx, GitHub Actions CI/CD, automated health validation, and rollback capabilities.

---

# Live Features

- AI-powered support ticket analysis
- Ticket prioritization and categorization
- Modern dashboard interface
- Dockerized frontend and backend
- Docker Compose orchestration
- AWS EC2 deployment
- Nginx reverse proxy
- GitHub Actions CI/CD pipeline
- Automated deployment health validation
- Rollback workflow support

---

# Architecture Overview

## Application Flow

```text
User Browser
      ↓
Nginx Reverse Proxy
      ↓
Frontend Container (React/Next.js)
      ↓
Backend API Container (Node.js/Express)
      ↓
AI Ticket Analysis Engine
```

---

## CI/CD Deployment Flow

```text
Developer Pushes Code
          ↓
GitHub Actions Pipeline
          ↓
Docker Image Build
          ↓
EC2 Deployment
          ↓
Docker Compose Restart
          ↓
Health Validation
          ↓
Rollback Available if Needed
```

---

# Tech Stack

## Frontend
- React
- Next.js
- Tailwind CSS

## Backend
- Node.js
- Express.js

## DevOps / Infrastructure
- Docker
- Docker Compose
- Nginx
- AWS EC2
- GitHub Actions

## AI Integration
- OpenAI API

---

# Project Structure

```bash
ai-support-ticket-triage/
│
├── frontend/
│   ├── app/
│   ├── components/
│   └── Dockerfile
│
├── backend/
│   ├── routes/
│   ├── services/
│   └── Dockerfile
│
├── nginx/
│   └── nginx.conf
│
├── .github/
│   └── workflows/
│       ├── deploy.yml
│       └── rollback.yml
│
├── docker-compose.yml
└── README.md
```

---

# Local Development

## Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/ai-support-ticket-triage.git
cd ai-support-ticket-triage
```

---

## Start Containers

```bash
docker-compose up --build
```

---

## Access Application

Frontend:
```bash
http://localhost:3000
```

Backend Health Check:
```bash
http://localhost:5000/health
```

---

# Docker Deployment

## Build Containers

```bash
docker-compose build
```

---

## Run Containers

```bash
docker-compose up -d
```

---

## View Running Containers

```bash
docker ps
```

---

# AWS EC2 Deployment

This project was deployed to an AWS EC2 Ubuntu server using:

- Docker
- Docker Compose
- Nginx reverse proxy
- GitHub Actions automation

Deployment included:
- Production container orchestration
- Reverse proxy routing
- Automated restart workflows
- Health validation checks
- Rollback workflow support

---

# Nginx Reverse Proxy

Nginx was configured as a reverse proxy to route traffic to the frontend application container.

Example architecture:

```text
Internet
    ↓
Nginx :80
    ↓
Frontend Container :3000
```

---

# CI/CD Pipeline

GitHub Actions automates deployment by:

1. Connecting to AWS EC2
2. Pulling latest source code
3. Rebuilding Docker containers
4. Restarting services
5. Performing health validation checks

---

# Rollback Workflow

A manual rollback workflow was implemented using GitHub Actions to support rapid recovery in the event of deployment issues.

Rollback features:
- Manual workflow trigger
- Container redeployment support
- Rapid recovery strategy

---

# Health Validation

Deployment validation checks confirm:
- Backend API availability
- Frontend accessibility
- Container health status
- Reverse proxy functionality

---

# Screenshots

## Application Dashboard

Add Screenshot:
```text
/screenshots/dashboard.png
```

---

## AI Ticket Analysis

Add Screenshot:
```text
/screenshots/ticket-analysis.png
```

---

## GitHub Actions Deployment

Add Screenshot:
```text
/screenshots/github-actions-success.png
```

---

## Docker Containers Running

Add Screenshot:
```text
/screenshots/docker-containers.png
```

---

## Nginx Validation

Add Screenshot:
```text
/screenshots/nginx-validation.png
```

---

## Rollback Workflow

Add Screenshot:
```text
/screenshots/rollback-workflow.png
```

---

# Future Improvements

- User authentication
- Persistent database integration
- Kubernetes deployment
- Monitoring dashboards
- Logging aggregation
- Slack / Teams integrations
- AI analytics reporting
- Role-based access control

---

# Learning Outcomes

This project provided hands-on experience with:

- AI application deployment
- Production Docker workflows
- Reverse proxy configuration
- CI/CD automation
- Cloud infrastructure deployment
- Infrastructure reliability engineering
- Deployment validation strategies
- Rollback recovery workflows

---

# Author

Demarko Little

Cloud | DevOps | AI Engineer
