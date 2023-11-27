export function baseImageURL(imagePath: string) {
  return `${import.meta.env.VITE_API_URL}/upload/${imagePath}`;
}
