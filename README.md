# Site Sync

A scalable, cloud-native solution for automated code deployment using AWS ECS, S3, and containerization to achieve parallel builds with cost optimization.

---

## 📁 Folder Structure

- **Api-server**  
  Handles all RESTful APIs, automates code build triggers.

- **Build-server**  
  Builds Docker images from user code, manages container lifecycle, and pushes build outputs to S3.

- **Reverse-proxy**  
  Custom reverse proxy for retrieving and streaming static assets from S3.

---

## 🚀 Workflow Overview

1. **API Server**
    - Receives Git repository URLs via REST API.
    - Triggers the build process.

2. **Build Server**
    - Clones the GitHub code in an isolated (containerized) environment using AWS ECS.
    - Builds Docker images and pushes them to AWS ECR.
    - Containers are ephemeral (self-destruct after job), ensuring cost efficiency.
    - The final build output is uploaded to a central AWS S3 bucket.

3. **Reverse Proxy**
    - Streams static build output from S3 to users.
    - Handles subdomain/domain routing to S3 assets.
    - Prevents server overload and enables efficient handling of large files.

4. **Log Collection Pipeline**
    - Deployment logs are sent via a socket server and stored in Redis for real-time monitoring and troubleshooting.

---

## 🛠️ Key Technologies

- **AWS ECS**: Parallel, isolated, and scalable build environments.
- **AWS ECR**: Docker image registry.
- **AWS S3**: Centralized storage for build artifacts.
- **Redis**: Log storage and real-time log streaming.
- **Docker**: Containerization of build environments.
- **Custom Reverse Proxy**: Efficient asset streaming and routing.
---

## 📸 Screenshots
![image](https://github.com/user-attachments/assets/f3218c09-aceb-4f6f-b078-eebae1b42450)
![image](https://github.com/user-attachments/assets/540cdd88-ed0b-4fcc-ade6-10437ed4b3c3)

