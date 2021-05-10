# Next.js w **`mdx-editor`**

### **Run it**

```bash
yarn && yarn dev
```

### **Descritpion**
This Branch adds `0.0.6@alpha` version of **`mdx-editor`** package to the project. `0.0.6@alpha` contains the latest slate with no modifications (same as the branch `SA/Add-Slate---latest`).

While adding slate works on the branch it fails here with the below error.

This seems to be an issue with how [mdx-editor](https://github.com/ijsto/mdx-editor) is packaged with **Rollup**.

Currently failing due to:

```
Unhandled Runtime Error
Error: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.
```
