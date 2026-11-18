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
# Day 4 – Artifact Management using GitHub Actions

## Goal

Learn how to store, upload, download, manage, and share build outputs using GitHub Actions artifacts.

## Topics Covered

- Upload Artifact
- Download Artifact
- Artifact Retention
- Sharing Artifacts Between Jobs
- Deploy Using Artifacts

## What is Artifact Management?

Artifacts are files or collections of files generated during a GitHub Actions workflow.

They help store build outputs, test reports, deployment packages, and other generated files. Artifacts can also be transferred between different jobs in a workflow.

## Hands-on Implementation

- Created an artifact management workflow using GitHub Actions.
- Configured the Node.js application build process.
- Generated build output inside the `dist` directory.
- Uploaded the build folder using `actions/upload-artifact@v4`.
- Configured artifact retention for 7 days.
- Downloaded uploaded artifacts using `actions/download-artifact@v4`.
- Shared artifacts between multiple jobs using job dependencies.
- Verified downloaded artifact files.
- Implemented a deployment simulation using downloaded artifacts.

## Pipeline Workflow

The artifact management pipeline consists of the following stages:

1. **Checkout:** Retrieves source code from the GitHub repository.
2. **Setup Node.js:** Configures the Node.js environment.
3. **Install Dependencies:** Installs project dependencies using npm.
4. **Build Application:** Generates application build files inside the `dist` directory.
5. **Upload Artifact:** Uploads the generated build folder as a GitHub Actions artifact.
6. **Download Artifact:** Downloads the uploaded artifact in another job.
7. **Verify Artifact:** Checks the downloaded build files.
8. **Deploy Application:** Copies downloaded files into the deployment directory.

## GitHub Actions Configuration

The workflow uses the following GitHub Actions:

| Action | Purpose |
|---|---|
| `actions/checkout@v4` | Checkout repository code |
| `actions/setup-node@v4` | Setup Node.js environment |
| `actions/upload-artifact@v4` | Upload build artifacts |
| `actions/download-artifact@v4` | Download build artifacts |

## Artifact Retention

Configured artifact retention using:

```yaml
- name: Upload Build Artifact
  uses: actions/upload-artifact@v4
  with:
    name: nodejs-build
    path: dist/
    retention-days: 7
```

The uploaded artifact is retained for 7 days.

## Sharing Artifacts Between Jobs

Used the `needs` keyword to ensure the download job executes only after the build job completes successfully.

```yaml
download:
  runs-on: ubuntu-latest
  needs: build
```

The downloaded artifact is stored inside the `downloaded-build/` directory.

## Deployment

Implemented a basic deployment simulation by copying the downloaded build files into a separate deployment directory.

```bash
mkdir -p deployment
cp -r downloaded-build/* deployment/
```

Verified the deployment files using:

```bash
ls -la deployment/
```

## Expected Results

- Node.js application build completed successfully.
- Build folder uploaded as an artifact.
- Artifact retention configured for 7 days.
- Uploaded artifact downloaded successfully.
- Build files shared between workflow jobs.
- Downloaded files verified.
- Deployment simulation completed successfully.

## Learning Outcomes

- Understood GitHub Actions artifact management.
- Learned artifact uploading and downloading.
- Understood artifact retention policies.
- Learned how to share artifacts between multiple jobs.
- Practiced transferring build outputs between pipeline stages.
- Understood how artifacts can be used in deployment workflows.