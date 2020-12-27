import React, { useContext } from 'react'
import { Input, Button } from 'react-native-elements'
import { Context as LocationContext } from '../context/LocationContext'
import Spacer from './Spacer'
import useSaveTrack from '../hooks/useSaveTrack'

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName
  } = useContext(LocationContext)
  const [saveTrack] = useSaveTrack()
  return (
    <>
      <Spacer>
        <Input
          placeholder="Enter a name"
          onChangeText={changeName}
          value={name}
        />
      </Spacer>
      <Spacer>
        { recording
         ? <Button title="Stop" onPress={stopRecording} />
         : <Button title="Start recording" onPress={startRecording} />
        }
      </Spacer>
      <Spacer>
        {!recording && locations.length
          ? <Button title="Save recording" onPress={saveTrack} />
          : null
        }
      </Spacer>
    </>
  )
}

export default TrackForm