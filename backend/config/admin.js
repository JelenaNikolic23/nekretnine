module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '87c904c791dfd908fa32b7d124b1e734'),
  },
});
