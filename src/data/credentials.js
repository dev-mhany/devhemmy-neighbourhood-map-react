// Credentials are loaded from environment variables.
// For local dev: put them in `.env.local` (gitignored).
// For Vercel: set them under Project Settings → Environment Variables.
// CRA only exposes vars prefixed with REACT_APP_ to the client bundle.

export const CLIENT_ID = process.env.REACT_APP_FOURSQUARE_CLIENT_ID || '';
export const CLIENT_SECRET = process.env.REACT_APP_FOURSQUARE_CLIENT_SECRET || '';
export const MAP_KEY = process.env.REACT_APP_GOOGLE_MAPS_KEY || '';
