export async function fetcher<T>(url: string): Promise<T> {
  // TODO fix address
  const response = await fetch(url);
  return await response.json();
}
