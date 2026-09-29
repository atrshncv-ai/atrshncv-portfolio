export const BASE_PATH = "/atrshncv-portfolio";

export function publicAssetPath(path: string): string {
  return `${BASE_PATH}${path.startsWith("/") ? path : `/${path}`}`;
}
