export async function fetcher<T>(url: string): Promise<T> {
  // TODO fix address
  const response = await fetch(
    `https://portfolio-api-production-2977.up.railway.app/${url}`,
    {
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return await response.json();
}
