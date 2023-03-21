import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const Container = styled.div`
  display: flex;
`

export const Right = styled.div`
  margin-left: 32px;
`

export const PlayerArea1 = styled.div`
  width: 266px;
  height: 498px;
  background: ${colors.player};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9.6px;

  flex-direction: column;
  padding: 0 37px;
`

export const Controls = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const PlayerArea2 = styled.div`
  width: 360px;
  height: 266px;
  background: ${colors.player};
  margin-bottom: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 9.6px;
  padding: 0 29px;
`

export const PlayerArea3 = styled.div`
  width: 360px;
  height: 200px;
  background: ${colors.player};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 9.6px;
  padding: 0 29px;
`

export const Play = styled.img`
  &:hover {
    cursor: pointer;
  }
`

export const PlayBack = styled.img`
  &:hover {
    cursor: pointer;
  }
`

export const PlayForward = styled.img`
  &:hover {
    cursor: pointer;
  }
`

export const Title = styled.p`
  font-family: 'Roboto';
  font-weight: 700;
  color: ${colors.text};

  margin-bottom: 10px;
`

export const Author = styled.p`
  font-family: 'Roboto';
  font-weight: 400;
  color: ${colors.text};
`

export const ProgressBar = styled.div`
  height: 6px;
  width: 100%;

  display: flex;
  background: ${colors.progress}4d;
  border-radius: 3px;
  margin-top: 30px;
  margin-bottom: 10px;
`

interface ProgressProps {
  progress?: number
}

export const Progress = styled.span<ProgressProps>`
  height: 6px;
  width: ${props => props.progress}%;
  background: ${colors.progress}cc;
  border-radius: 3px;
`

export const Duration = styled.p`
  color: ${colors.numbers};
  font-family: 'Roboto';
`

export const CurrentDuration = styled.p`
  color: ${colors.numbers};
  font-family: 'Roboto';
`

export const TimeArea = styled.div`
  width: 100%;

  section {
    display: flex;
    justify-content: space-between;
  }
`

export const LeftImage = styled.img`
  width: 190px;
  height: 190px;
`

export const RightImage = styled.img`
  width: 84px;
  height: 84px;
`

export const UpperBox = styled.div`
  display: flex;
  width: 100%;
  align-items: center;

  section {
    margin-left: 28px;
  }
`
