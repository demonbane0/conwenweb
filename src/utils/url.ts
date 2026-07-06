export function withBase(path: string): string {
  if (/^(https?:)?\/\//.test(path) || /^(mailto|tel):/.test(path) || path.startsWith("#")) {
    return path;
  }

  const base = import.meta.env.BASE_URL || "/";
  const normalizedBase = base.endsWith("/") ? base : `${base}/`;
  const normalizedPath = path.replace(/^\/+/, "");

  if (!normalizedPath) {
    return normalizedBase;
  }

  return `${normalizedBase}${normalizedPath}`.replace(/\/{2,}/g, "/");
}
