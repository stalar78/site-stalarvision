import { getSafeErrorCode, startServer } from './server.js';

try {
  startServer();
} catch (error) {
  console.error(JSON.stringify({
    message: 'contact_api_start_failed',
    error_code: getSafeErrorCode(error),
  }));
  process.exit(1);
}
