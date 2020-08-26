export function sleep(msec: number) {
  return new Promise((res) => setTimeout(() => res(), msec));
}
