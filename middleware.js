// Vercel Edge Middleware — gates the whole site behind a password (HTTP Basic Auth).
// The password lives in the SITE_PASSWORD environment variable (set in Vercel),
// never in this file. Any username is accepted; only the password is checked.

export const config = {
  // Run on everything except Vercel internals.
  matcher: ['/((?!_vercel/).*)'],
};

export default function middleware(request) {
  const expected = process.env.SITE_PASSWORD;

  // If no password is configured, fail closed (deny) rather than expose the site.
  if (!expected) {
    return new Response('Site password not configured.', { status: 503 });
  }

  const header = request.headers.get('authorization') || '';
  const [scheme, encoded] = header.split(' ');

  if (scheme === 'Basic' && encoded) {
    let decoded = '';
    try { decoded = atob(encoded); } catch (_) { decoded = ''; }
    const provided = decoded.slice(decoded.indexOf(':') + 1);
    if (provided && provided === expected) {
      return; // authorized — continue to the static site
    }
  }

  return new Response('Authentication required.', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Private — California trip itinerary"',
      'content-type': 'text/plain; charset=utf-8',
    },
  });
}
