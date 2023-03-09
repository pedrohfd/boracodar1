import { MutableRefObject, useEffect, useRef, useState } from 'react'

const App = () => {
  const [isPlaying, setIsPlaying] = useState(true)
  const [initialDuration, setInitialDuration] = useState(0)

  const audioRef = useRef() as MutableRefObject<HTMLAudioElement>

  const handleToggleMusicState = () => {
    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current.play()
      setIsPlaying(true)
    }
  }

  const handleReload = () => {
    audioRef.current.load()
  }

  return (
    <>
      <button onClick={handleToggleMusicState}>
        {isPlaying ? 'Play' : 'Pause'}
      </button>
      <button onClick={handleReload}>Reload</button>
      <audio src='/lalala.mp3' autoPlay={false} ref={audioRef} />
    </>
  )
}

export default App
