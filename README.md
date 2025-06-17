# Taxi Backend Monolith

## Overview

Enterprise-grade Node.js backend for a world-class taxi platform.  
Designed as a modular monolith with microservice readiness.

## Features

- Multi-tenant architecture with strict data isolation  
- Role-based access control (RBAC) for Admin, Operator, Driver, Fleet, Customer  
- Async task queue with BullMQ + Redis  
- Event-driven communication with RabbitMQ  
- Secure JWT authentication  
- Sequelize ORM with MySQL and migrations  
- Modular feature-based architecture  
- Comprehensive logging and error handling  
- API validation and sanitization  
- Dockerized for containerized deployments  
- Unit and integration tests with Jest  

## Prerequisites

- Node.js >= 20.x  
- MySQL >= 8.x  
- Redis >= 7.x  
- RabbitMQ >= 3.11.x  
- Docker (optional but recommended)  

## Installation

```bash
git clone <repo-url>
cd taxi-backend
npm install
cp .env.example .env
# configure .env variables
npm run db:migrate
npm run db:seed
npm run start:dev
```

## Project Structure

- `/src/api` - feature modules  
- `/src/common` - shared utilities, middleware, models  
- `/src/jobs` - BullMQ job processors  
- `/src/messaging` - RabbitMQ event consumers and publishers  
- `/src/config` - environment configuration  
- `/src/db` - Sequelize connection, migrations, seeders  

## Running

- `npm run start:dev` - start in development mode with hot reload  
- `npm run build` - compile TypeScript  
- `npm run start` - start compiled production server  
- `npm run test` - run tests  

## Environment Variables

See `.env.example` for all required environment variables.

## Contributing

PRs welcome. Please ensure tests pass and follow coding standards.

## License

MIT
