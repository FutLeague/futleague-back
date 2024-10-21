import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    app: {
      appName: process.env.APP_NAME,
      app_port: process.env.PORT,
      api_key: process.env.APP_API_KEY,
      app_global_prefix: process.env.APP_GLOBAL_PREFIX,
      front: {
        front_base_url: process.env.FRONT_BASE_URL,
      },
      jwt: {
        secret: process.env.JWT_SECRET,
        expiresIn: process.env.JWT_EXPIRATION_TIME,
      },
      domain: process.env.APP_DOMAIN,
      env: process.env.NODE_ENV,
      app_db: process.env.APP_DB,
    },
    postgres: {
      type: 'postgres',
      port: parseInt(<string>process.env.DB_PORT),
      host: process.env.DB_HOST,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
    },
    providerPayment: {
      mercadoPago: {
        publicKey: process.env.MP_PUBLIC_KEY,
        accessToken: process.env.MP_ACCESS_TOKEN,
      },
    },
    providerEmail: {
      resend: {
        apyKey: process.env.RESEND_API_KEY,
      },
    },
    enterpriseData: {
      email: process.env.ENTERPRISE_EMAIL,
    },
  };
});
