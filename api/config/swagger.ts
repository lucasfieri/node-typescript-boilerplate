const swaggerDefinition = {
  info: {
    title: 'Node-typescript-boilerplate',
    version: '1.0.0',
    description: 'A easy boilerplate using nodejs, express and typescript',
  },
  host: `localhost:${process.env.PORT}`,
  basePath: '/api',
  securityDefinitions: {
    ApiKeyAuth: {
      type: 'apiKey',
      name: 'Authorization',
      in: 'header',
    },
  },
};

export const options = {
  swaggerDefinition,
  apis: ['./api/controllers/*/*.ts', './api/models/*.ts'],
};
