import { MouseEvent } from 'react'

import { Track } from '@spotify/web-api-ts-sdk'

import PlayIcon from '@/components/icons/PlayIcon'
import ShareIcon from '@/components/icons/ShareIcon'
import SpotifyIcon from '@/components/icons/SpotifyIcon'

import styles from './track.module.css'

export default function TrackView(track: Track) {
  const title = track.name
  const artist = track.artists.map((artist) => artist.name).join(' / ')
  const imageUrl = track.album.images.filter((obj) => obj.width === 300)[0].url
  const externalUrl = track.external_urls.spotify + '?go=1'

  function onClickShareButton(_event: MouseEvent<HTMLButtonElement>) {
    navigator.clipboard.writeText(externalUrl).catch((error) => {
      console.error(error)
    })
  }

  return (
    <div className={styles.container} key={track.id}>
      <a href={externalUrl} target='_blank'>
        <img className={styles.artwork} src={imageUrl} alt='artwork' />
      </a>

      <div className={styles.information}>
        <p className={styles.title}>{title}</p>
        <p className={styles.artist}>{artist}</p>
        <div>
          <a className={styles.playing} href={externalUrl} target='_blank'>
            <PlayIcon
              width={16}
              height={16}
              fill={'rgb(var(--foreground-rgb))'}
            />
            <p className={styles.playingText}>Spotifyで再生する</p>
          </a>
        </div>
      </div>

      <div className={styles.navigation}>
        <a className={styles.playing} href={externalUrl} target='_blank'>
          <SpotifyIcon fill={'rgb(var(--foreground-rgb))'} />
        </a>
        <button className={styles.share} onClick={onClickShareButton}>
          <ShareIcon fill={'rgb(var(--foreground-rgb))'} />
        </button>
      </div>
    </div>
  )
}
