# Next.js

### **Run it**

```bash
yarn && yarn dev
```

## Description

This branch installs `mdx-editor@0.0.7@alpha` which contains the original Rich Editor from @blocks project.
When implemented, it fails with an error:

```
error - ./node_modules/@babel/core/lib/transformation/normalize-file.js:30:0
Module not found: Can't resolve 'fs'
null

/../nextjs-mdx/node_modules/mdx-editor/src/index.js:1
export { default as Editor } from './components/Editor';
^^^^^^

SyntaxError: Unexpected token 'export'
    at wrapSafe (internal/modules/cjs/loader.js:1054:16)
```
