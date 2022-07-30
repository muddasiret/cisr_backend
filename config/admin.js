module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '611e9c735375d111c097ad9c0aa16dbf'),
  },
});
