import mapboxgl from "mapbox-gl";


export function setMapboxGlAccessToken(token: string): void {
  (mapboxgl as any).accessToken = token;
}
