export function getMediaUrl(media: { url?: null | string } | string): string {
  if (typeof media === 'string') {
    return media
  }
  return media.url ?? ''
}

export default {
  getMediaUrl,
}
