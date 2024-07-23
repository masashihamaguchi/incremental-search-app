'use server'

import { PartialSearchResult, SpotifyApi, Track } from '@spotify/web-api-ts-sdk'

export async function searchTracks(query: string): Promise<Track[]> {
  if (query === '') return Promise.resolve([])

  const clientId = process.env.SPOTIFY_CLIENT_ID as string
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET as string
  const scopes: string[] = []

  const client = SpotifyApi.withClientCredentials(
    clientId,
    clientSecret,
    scopes
  )

  return await client
    .search(query, ['track'], 'JP', 50)
    .then((data: Required<Pick<PartialSearchResult, 'tracks'>>) => {
      return data.tracks.items
    })
    .catch((error: Error) => {
      console.error(error)
      return []
    })
}
