export const ADMIN_SESSION_COOKIE = "snsoft_admin_session";

export function createSessionValue(username: string) {
  return encodeURIComponent(username);
}

export function readSessionUsername(value: string | undefined) {
  if (!value) return null;
  try {
    return decodeURIComponent(value);
  } catch {
    return null;
  }
}
