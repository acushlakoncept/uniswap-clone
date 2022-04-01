import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: '51ialwqd',
  dataset: 'production',
  apiVersion: 'v1',
  token: 'skXBiBRVc4s1joW3qQ13KKj75wKhftDuGHktWjH5dWZxjkh7Rh7mqt2WtMznVefffEQw8TrdfxHqdKd1lMgBUXJuMYRiyyzcD9C5fbbysGy3vDp9OkuVKlINpvSvJCh3ueHA4lc3R2tCA9oG8wf5jP6ON4s8RMrCOGgc8Bg9KYMKX732dIqg',
  useCdn: false,
})