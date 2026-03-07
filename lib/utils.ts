import { type ClassValue, clsx } from "clsx";

const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

// Lightweight cn() without tailwind-merge dependency
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function publicAsset(path: string): string {
  if (!path.startsWith("/")) {
    return path;
  }

  return `${publicBasePath}${path}`;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

export function truncate(str: string, length: number): string {
  if (str.length <= length) return str;
  return str.slice(0, length) + "...";
}

export function formatDate(date: Date | string): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
