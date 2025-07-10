// Environment configuration
const config = {
  development: {
    port: process.env.PORT || 3000,
    corsOptions: {
      origin: 'http://localhost:5173', // Frontend development server
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      allowedHeaders: ['Content-Type', 'Authorization'],
      credentials: true
    },
    rateLimit: {
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100 // limit each IP to 100 requests per windowMs
    },
    pagination: {
      defaultLimit: 10,
      maxLimit: 50
    }
  },
  production: {
    port: process.env.PORT || 8080,
    corsOptions: {
      origin: process.env.FRONTEND_URL || 'https://hoops-highlights.com',
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      allowedHeaders: ['Content-Type', 'Authorization'],
      credentials: true
    },
    rateLimit: {
      windowMs: 15 * 60 * 1000,
      max: 100
    },
    pagination: {
      defaultLimit: 20,
      maxLimit: 100
    }
  }
};

// Get current environment
const environment = process.env.NODE_ENV || 'development';

// Export configuration for current environment
module.exports = config[environment];