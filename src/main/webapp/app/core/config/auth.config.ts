import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  // issuer: 'https://196.1.92.11:8443/realms/productionD',
  issuer: 'http://localhost:8081/realms/jhipster',
  redirectUri: window.location.origin,
  clientId: 'web_app',
  // clientId: 'adminission',
  responseType: 'code',
  scope: 'openid profile email',
  showDebugInformation: true,
  strictDiscoveryDocumentValidation: false,
};
