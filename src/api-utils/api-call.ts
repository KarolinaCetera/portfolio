export async function fetcher<T>(url: string): Promise<T> {
  const response = await fetch(url);
  return await response.json();
}
