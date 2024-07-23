'use client'

import { useState } from 'react'

import { Track } from '@spotify/web-api-ts-sdk'
import useSWR from 'swr'

import { searchTracks } from '@/actions/spotify'
import TrackView from '@/components/track'

import styles from './page.module.css'

export default function Home() {
  const [searchText, setSearchText] = useState<string>('')
  const { data, isLoading } = useSWR(
    ['/v1/search', searchText],
    ([_path, query]) => searchTracks(query),
    {
      keepPreviousData: true,
    }
  )

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Search Tracks from Spotify</h1>
          <p>Incremental Search App</p>
        </div>

        <input
          className={styles.input}
          type='text'
          placeholder='tracks...'
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
        />

        <div
          className={`${styles.tracks} ${(data === undefined || data.length === 0) && styles.justifyContent}`}
        >
          {searchText === '' ? (
            <p className={styles.message}>Let&#39;s search for music!</p>
          ) : data && data.length > 0 ? (
            data.map((track: Track) => TrackView(track))
          ) : isLoading ? (
            <p className={styles.message}>Searching...</p>
          ) : (
            <p className={styles.message}>Not Found...</p>
          )}
        </div>
      </div>
    </main>
  )
}
