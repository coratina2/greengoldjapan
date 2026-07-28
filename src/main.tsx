import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const cloudflareAnalyticsSrc = 'https://static.cloudflareinsights.com/beacon.min.js';

if (!document.querySelector(`script[src="${cloudflareAnalyticsSrc}"]`)) {
  const cloudflareAnalyticsScript = document.createElement('script');
  cloudflareAnalyticsScript.src = cloudflareAnalyticsSrc;
  cloudflareAnalyticsScript.type = 'module';
  cloudflareAnalyticsScript.setAttribute(
    'data-cf-beacon',
    '{"token":"ae161310319642bdb7161fa74da31b22"}',
  );
  document.body.appendChild(cloudflareAnalyticsScript);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
