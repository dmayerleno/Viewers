window.config = {
  routerBasename: '/',
  whiteLabelling: {},
  enableGoogleCloudAdapter: true,
  healthcareApiEndpoint: 'https://healthcare.googleapis.com/v1beta1',
  servers: {
    // This is an array, but we'll only use the first entry for now
    dicomWeb: [],
  },
  // This is an array, but we'll only use the first entry for now
  oidc: [
    {
      // ~ REQUIRED
      // Authorization Server URL
      authority: 'https://accounts.google.com',
      client_id:
        '409596160399-jvos1lrt8q6lqc1u2u9fi2vokn4upe4a.apps.googleusercontent.com',
      redirect_uri: '/callback', // `OHIFStandaloneViewer.js`
      response_type: 'id_token token',
      scope:
        'email profile openid https://www.googleapis.com/auth/cloudplatformprojects.readonly https://www.googleapis.com/auth/cloud-healthcare', // email profile openid
      // ~ OPTIONAL
      post_logout_redirect_uri: '/',
      revoke_uri: 'https://accounts.google.com/o/oauth2/revoke?token=',
      automaticSilentRenew: true,
      revokeAccessTokenOnSignout: true,
    },
  ],
  studyListFunctionsEnabled: true,
};
