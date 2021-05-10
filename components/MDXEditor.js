import { Editor, serializer, stringifyMDX } from 'mdx-editor';

// These are probably gonna change later
const __DEVELOPER_SAVE = value => {
  // eslint-disable-next-line no-console
  console.log('value', value);
  const result = stringifyMDX(serializer.serialize(value));
  window.localStorage.lastMDX = result;
};

const initialValue =
  typeof window !== 'undefined'
    ? window.localStorage.lastMDX
    : '# MDX Editor\n\nThis text comes from MDXEditor';

const MDXEditor = () => (
  <>
    <Editor
      initialValue={initialValue}
      onChange={({ value }) => {
        // eslint-disable-next-line no-console
        console.log('value', value);
        __DEVELOPER_SAVE(value);
      }}
      components={{}}
    />
  </>
);

export default MDXEditor;
