// Import React dependencies.
import React, { useState } from 'react';
// Import the Slate editor factory.
import { createEditor } from 'slate';

// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from 'slate-react';

const initialValue = [
  {
    children: [{ text: 'This text is coming from a Slate node.' }],
    type: 'paragraph',
  },
];

const SlateEditor = () => {
  // https://github.com/ianstormtaylor/slate/issues/3477#issuecomment-805901596
  const [editor] = useState(() => withReact(createEditor()));
  // Add the initial value when setting up our state
  const [value, setValue] = useState(initialValue);

  return (
    <Slate
      editor={editor}
      value={value}
      onChange={newValue => setValue(newValue)}
    >
      <Editable />
    </Slate>
  );
};

export default SlateEditor;
