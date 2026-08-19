import { cache } from "react";

const BLOG_API_BASE =process.env.BLOG_URL;

function authHeader() {
  const username = process.env.BLOG_USERNAME;
  const password = process.env.BLOG_PASSWORD;
  return "Basic " + Buffer.from(`${username}:${password}`).toString("base64");
}

export const getBlogBySlug = cache(async (slug) => {
  let response;
  try {
    response = await fetch(`${BLOG_API_BASE}/${slug}/`, {
      headers: { Authorization: authHeader() },
      next: { revalidate: 300 },
    });
  } catch {
    return { error: true };
  }

  if (response.status === 404) {
    return { notFound: true };
  }

  if (!response.ok) {
    return { error: true };
  }

  return { blog: await response.json() };
});

export async function getAllBlogs() {
  let response;
  try {
    response = await fetch(`${BLOG_API_BASE}/`, {
      headers: { Authorization: authHeader() },
      next: { revalidate: 300 },
    });
  } catch {
    return { error: true };
  }

  if (!response.ok) {
    return { error: true };
  }

  return { blogs: await response.json() };
}
