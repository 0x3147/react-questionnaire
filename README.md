# 🌳 uno 问卷网

- 在线预览: [未来将打算部署至 vercel，主体功能还在开发中~]

## ⭐ 项目介绍（碎碎念）

- 一个基于 react 的问卷调查小程序，目前还在开发中，后续会部署至 vercel~
- 项目前端基础库使用 react，基于 cra 脚手架搭建（或许以后迁移至 vite）
- UI 库使用 antd，样式使用 sass + css module，styled-components 不是很想写，不过后续可能会用上 🤷‍♀️
- 状态管理采用 redux，新兴的状态管理库 zustand 用于了自己的博客后台项目，博客后台项目仓库：[链接](https://github.com/0x3147/share-content-management)👈
- 项目后端采用 koa+mock 的形式，后续有空会选择 nest、java(spring boot)、go 这三者之一重构后端，实现完整服务 😊
- 欢迎大家提出宝贵的意见和建议，一起学习进步~有什么问题可以在 issue 中提出，亦可直接通过邮箱(radeonk@foxmail.com)联系我，我会尽快回复~👌

## 📦 项目依赖安装

```shell
npm install
```

## 🚀 项目启动

```shell
npm start
```

## 📝 项目结构

```shell
├── .husky
├── node_modules
├── public
├── src
│   ├── components
│   ├── costant
│   ├── hooks
│   ├── layouts
│   ├── pages
│   ├── router
│   ├── services
│   ├── store
│   ├── utils
│   ├── App.css
│   ├── App.tsx
│   ├── index.tsx
│   ├── react-app-env.d.ts
├── .editorconfig
├── .eslintrc.js
├── .gitignore
├── .prettierignore
├── .prettierrc
├── commitlint.config.js
├── cra.config.js
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.json

```
