## Dependencies:

- [React Hooks](https://pt-br.reactjs.org/docs/hooks-intro.html)

### For more informations

- [HTMLAudioElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement)

### Example

```
import React from 'react';
import useAudio from './useAudio';
import SOURCE_SOUND from './sound.wav';

const styles = {
  padding: `10px`,
};

const YourComponent = () => {
  const [metaData, { playing, toggle}] = useAudio(SOURCE_SOUND);

  return (
    <div style={{ ...styles }}>
      <button type="button" name="button" style={{ ...styles }} onClick={toggle}>
        {!playing ? `Play` : `Stop`}
      </button>
    </div>
  );
};

export default YourComponent;

```


