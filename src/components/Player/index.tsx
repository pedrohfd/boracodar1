import { MutableRefObject, useRef, useState } from 'react'
import {
  Author,
  Container,
  Controls,
  CurrentDuration,
  Duration,
  LeftImage,
  Play,
  PlayBack,
  PlayerArea1,
  PlayerArea2,
  PlayerArea3,
  PlayForward,
  Progress,
  ProgressBar,
  Right,
  RightImage,
  TimeArea,
  Title,
  UpperBox,
} from './styles'
import PlayIcon from '/assets/play.svg'
import PauseIcon from '/assets/pause.svg'
import PlayBackIcon from '/assets/play-back.svg'
import PlayForwardIcon from '/assets/play-forward.svg'

export const Player = () => {
  const audioRef = useRef() as MutableRefObject<HTMLAudioElement>
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState('0:00')
  const [progress, setProgress] = useState(0)
  const [initialDuration, setInitialDuration] = useState('0:00')

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`
  }

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
    audioRef.current.play()
  }

  const handleTimeUpdate = () => {
    const currentTime = audioRef.current.currentTime

    let time = currentTime / audioRef.current.duration

    setProgress(time * 100)

    setDuration(formatTime(currentTime))
  }

  setInterval(() => {
    if (isPlaying) {
      handleTimeUpdate()
    }
  }, 1000)

  return (
    <Container>
      <audio
        src='/NaOndadoGin.mp3'
        ref={audioRef}
        preload='metadata'
        onLoadedMetadata={() => {
          setInitialDuration(formatTime(audioRef.current.duration))
        }}
      />
      <PlayerArea1>
        <LeftImage src='/image.png' />

        <section
          style={{
            marginTop: 28,
            width: '100%',
          }}
        >
          <Title>Na Onda do Gin</Title>

          <Author>WC no Beat, Igão</Author>
        </section>

        <Controls>
          <PlayBack src={PlayBackIcon} alt='play-back' onClick={handleReload} />
          <Play
            src={isPlaying ? PauseIcon : PlayIcon}
            alt='play'
            onClick={handleToggleMusicState}
          />
          <PlayForward src={PlayForwardIcon} alt='play-forward' />
        </Controls>

        <TimeArea>
          <ProgressBar>
            <Progress progress={progress} />
          </ProgressBar>
          <section>
            <Duration>{initialDuration}</Duration>

            <CurrentDuration>{duration}</CurrentDuration>
          </section>
        </TimeArea>
      </PlayerArea1>
      <Right>
        <PlayerArea2>
          <UpperBox>
            <RightImage src='/image.png' />

            <section>
              <Title>Na Onda do Gin</Title>

              <Author>WC no Beat, Igão</Author>
            </section>
          </UpperBox>
          <Controls
            style={{
              paddingLeft: 56,
              paddingRight: 56,
            }}
          >
            <PlayBack
              src={PlayBackIcon}
              alt='play-back'
              onClick={handleReload}
            />
            <Play
              src={isPlaying ? PauseIcon : PlayIcon}
              alt='play'
              onClick={handleToggleMusicState}
            />
            <PlayForward src={PlayForwardIcon} alt='play-forward' />
          </Controls>

          <TimeArea>
            <ProgressBar>
              <Progress progress={progress} />
            </ProgressBar>
            <section>
              <Duration>{initialDuration}</Duration>

              <CurrentDuration>{duration}</CurrentDuration>
            </section>
          </TimeArea>
        </PlayerArea2>
        <PlayerArea3>
          <UpperBox>
            <RightImage src='/image.png' />

            <section>
              <Title>Na Onda do Gin</Title>

              <Author>WC no Beat, Igão</Author>
            </section>
          </UpperBox>
          <Controls
            style={{
              paddingLeft: 56,
              paddingRight: 56,
            }}
          >
            <PlayBack
              src={PlayBackIcon}
              alt='play-back'
              onClick={handleReload}
            />
            <Play
              src={isPlaying ? PauseIcon : PlayIcon}
              alt='play'
              onClick={handleToggleMusicState}
            />
            <PlayForward src={PlayForwardIcon} alt='play-forward' />
          </Controls>
        </PlayerArea3>
      </Right>
    </Container>
  )
}
