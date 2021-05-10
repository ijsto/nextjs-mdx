import { Editor, serializer, stringifyMDX } from 'mdx-editor/src';

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
    : '# Blocks\n\nBlocks turns your MDX into WYSIWYG\n supports all **md formattings**\n\n## And even YouTube:\n\n<YouTube videoId="d2sQiI5NFAM" />';

const MDXBlocksEditor = () => (
  <>
    {' '}
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

export default MDXBlocksEditor;
