/** Prefix an absolute path with the configured Astro `base`. */
export function baseUrl(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return path === '/' ? base + '/' : base + path;
}
