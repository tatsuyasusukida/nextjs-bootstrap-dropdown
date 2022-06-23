# 💧 How to use Bootstrap dropdown in Next.js

## About this repository

This repository describes how to show and hide Bootstrap 5 [Dropdowns](https://getbootstrap.com/docs/5.2/components/dropdowns/) in Next.js. The related resource is shown below.

- [日本語版 / Japanese version](https://zenn.dev/tatsuyasusukida/articles/nextjs-bootstrap-dropdown)



## Workflow

The workflow is shown below.

1. Coding preparation
2. Coding
3. Operation check



## Coding preparation

Run the following commands in your terminal to prepare for coding.

```shell
npx create-next-app nextjs-bootstrap-dropdown --typescript
cd nextjs-bootstrap-dropdown
npm install --save bootstrap
npm run dev
```



## Coding

### pages/\_app.tsx

Open pages/\_app.tsx in you editor and enter the following content.

[Click to go to pages/\_app.tsx](https://github.com/tatsuyasusukida/nextjs-bootstrap-dropdown/blob/main/pages/_app.tsx)

### pages/index.tsx

Open pages/index.tsx in you editor and enter the following content.

[Click to go to pages/index.tsx](https://github.com/tatsuyasusukida/nextjs-bootstrap-dropdown/blob/main/pages/index.tsx)

The points are shown below.

1. Create a state to show / hide the dropdown.
2. Show or hide when the dropdown toggler is clicked.
3. Hide the dropdown when the dropdown menu is clicked.
4. Hide the dropdown when the non-menu area is clicked while the dropdown menu is displayed.



## Operation check

Go to http://localhost:3000/ in your browser.

Check that the menu is displayed by clicking Dropdown at the top right of the screen.

Check that the menu disappears when you click the drop-down menu or an area other than the menu.

### Reference images

![](https://github.com/tatsuyasusukida/nextjs-bootstrap-dropdown/blob/main/images/img-check-01.png)

![](https://github.com/tatsuyasusukida/nextjs-bootstrap-dropdown/blob/main/images/img-check-02.png)



## Conslusion

If you use Next.js (React), it seems better to use [Chakui UI](https://chakra-ui.com/) or [Tailwind UI](https://tailwindui.com/). If you know of other good UI libraries, I would appreciate your guidance comments. Thank you for reading!
