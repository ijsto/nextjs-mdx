# Next.js

### **Run it**

```bash
yarn && yarn dev
```

This Branch is a greenfield (clean `npx create-next-app`) Next.js project.

Supporting branches include:

- [`SA/Add-Slate---latest`](https://github.com/ijsto/nextjs-mdx/tree/SA/Add-Slate---latest) - `slate` + `slate-react` install (**_Working_**)
- [`SA/MDX-Editor-with-MDX-Serializer`](https://github.com/ijsto/nextjs-mdx/tree/SA/MDX-Editor-with-MDX-Serializer) - [`mdx-editor@0.0.6`](https://www.npmjs.com/package/mdx-serializer/v/0.0.6) same as [`SA/Add-Slate---latest`](https://github.com/ijsto/nextjs-mdx/tree/SA/Add-Slate---latest) but the slate deps are bundled w `rollup` and published to NPM as [`mdx-editor@0.0.6`](https://www.npmjs.com/package/mdx-serializer/v/0.0.6) (**_Failing_**)
- - React Hooks error
- [`SA/MDX-Editor---original-@blocks-split`](https://github.com/ijsto/nextjs-mdx/tree/SA/MDX-Editor---original-%40blocks-split) - [`mdx-editor@0.0.7`](https://www.npmjs.com/package/mdx-serializer/v/0.0.7) the original @blocks editor, bundled w `rollup` (**_Failing_**)
- - Fails with an error: `Module not found: Can't resolve 'fs'`
