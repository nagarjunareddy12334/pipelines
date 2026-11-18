# GitHub Actions & CI/CD Pipeline Practice

## Project Overview

This repository contains hands-on practice and implementations of CI/CD pipelines using GitHub Actions.

The objective is to understand workflow automation, CI/CD fundamentals, Docker integration, Node.js application testing, and automated build processes.

## Technologies Used

- Git & GitHub
- GitHub Actions
- YAML
- Docker
- Docker Hub
- Node.js
- NPM
- ESLint
- Jest

---

# Day 1 – Introduction to GitHub Actions

### Topics Covered

- Introduction to GitHub Actions
- CI/CD fundamentals
- Understanding workflows
- Workflow YAML configuration
- Jobs and steps
- GitHub Actions runners
- Workflow triggers
- Push and Pull Request events
- Manual workflow execution

### Hands-on Implementation

- Created a GitHub repository.
- Configured GitHub Actions workflows.
- Created YAML workflow files.
- Configured workflow triggers.
- Executed workflows using GitHub Actions.
- Verified workflow execution in the Actions tab.

### Learning Outcome

Understood GitHub Actions fundamentals and learned how to automate tasks using workflows.

---

# Day 2 – GitHub Actions Secrets, Variables and Docker Integration

### Topics Covered

- GitHub Actions Secrets
- Repository Variables
- Environment Variables
- Docker fundamentals
- Dockerfile configuration
- Docker Hub authentication
- Docker image building
- Docker image pushing

### Hands-on Implementation

- Configured GitHub repository secrets.
- Created Docker Hub username and access token secrets.
- Configured Docker build and push workflow.
- Integrated Docker Buildx.
- Built Docker images using GitHub Actions.
- Pushed Docker images to Docker Hub.
- Troubleshot workflow execution issues.

### Learning Outcome

Learned how to manage sensitive credentials securely and automate Docker image building and publishing using GitHub Actions.

---

# Day 3 – CI Pipeline for Node.js Project

### Goal

Create an automated CI pipeline for a Node.js application.

### Topics Covered

- Install dependencies
- NPM dependency management
- Cache npm modules
- Code linting using ESLint
- Unit testing using Jest
- Application build
- Artifact upload

### Pipeline Workflow

1. Checkout source code.
2. Setup Node.js environment.
3. Install dependencies using npm.
4. Cache npm modules.
5. Execute ESLint checks.
6. Run unit tests using Jest.
7. Build the application.
8. Upload build artifacts.

### Hands-on Implementation

- Created a Node.js application.
- Configured package.json.
- Generated package-lock.json.
- Configured ESLint.
- Created Jest unit test cases.
- Implemented GitHub Actions CI workflow.
- Configured npm caching.
- Generated application build output.
- Uploaded build files as artifacts.

### Learning Outcome

Implemented an automated Node.js CI pipeline with dependency installation, npm caching, linting, unit testing, application building, and artifact uploading.

---

## Repository Structure

```text
pipelines/
│
├── .github/
│   └── workflows/
│       ├── day1-workflow.yml
│       ├── day2-docker.yml
│       └── day3-nodejs-ci.yml
│
└── README.md
```

*Note: Update the workflow filenames above according to the actual files available in your repository.*