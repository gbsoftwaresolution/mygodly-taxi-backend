#!/bin/bash

echo "🚀 Starting Taxi Backend Setup..."

# 1. Install dependencies
echo "📦 Installing npm dependencies..."
npm install

# 2. Create .env if it doesn't exist
if [ ! -f .env ]; then
  echo "🔧 Creating .env file from .env.example"
  cp .env.example .env
else
  echo "✅ .env file already exists"
fi

# 3. Warn user to edit .env if defaults present
if grep -q "your_jwt_secret_key" .env; then
  echo "⚠️  Please update JWT_SECRET and other .env variables before proceeding."
fi

# 4. Run DB migrations
echo "📋 Running database migrations..."
npm run db:migrate

# 5. Prompt for running seeders
read -p "Run DB seeders? (y/n): " run_seed
if [[ "$run_seed" == "y" || "$run_seed" == "Y" ]]; then
  echo "🌱 Running seeders..."
  npm run db:seed
else
  echo "⏭️ Skipping seeders"
fi

# 6. Start dev server with nodemon
echo "🔥 Starting development server..."
npm run start:dev
