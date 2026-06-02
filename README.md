# DELI WORLD 全球 GEO 战略方案项目 (changsen-sports-geo-strategy)

本仓库包含了 **得力集团全球 ToB 业务 AI 搜索优化战略方案**（DELI WORLD Global GEO Strategy）的交互式方案展示页面及配套托管服务的源代码。

项目前端基于 **React + Vite + Tailwind CSS** 进行响应式开发，并配备了平滑计数动画、交互式时间轴、报价卡片及各类图表展示；后端提供了一个轻量级的 **Express 服务**，用于在生产环境中高能效地托管打包后的静态文件，并完美处理单页应用（SPA）的路由回退。

---

## 📂 项目目录结构

```text
├── client/                     # 前端 React 源代码目录
│   ├── public/                 # 前端公共静态资源
│   ├── src/                    # 前端核心源码
│   │   ├── assets/             # 页面图片、Logo 等资源（如 deli.png）
│   │   ├── components/         # 通用 UI 组件 (如地图组件、弹窗、错误边界及 Radix UI 组件)
│   │   ├── contexts/           # 上下文（主题 ThemeContext 等）
│   │   ├── hooks/              # 自定义 React Hooks
│   │   ├── lib/                # 工具函数 (如 Tailwind 类合并 cn 库)
│   │   ├── pages/              # 页面级组件 (包含核心 Home.tsx 主页)
│   │   ├── App.tsx             # 路由和主题包装入口
│   │   ├── index.css           # 全局 CSS 样式及 Tailwind 基础变量
│   │   └── main.tsx            # Vite 挂载入口
│   └── index.html              # HTML 入口及 SEO TDK 配置
├── server/                     # 后端 Express 源代码目录
│   └── index.ts                # Express 静态托管及客户端路由分发服务
├── shared/                     # 前后端共享文件目录
│   └── const.ts                # 共享常量 (如 Cookie 键名、Session 等)
├── patches/                    # pnpm 依赖补丁目录
│   └── wouter@3.7.1.patch      # wouter 路由库的自定义补丁
├── package.json                # 项目依赖及运行脚本配置
├── pnpm-lock.yaml              # pnpm 依赖锁定文件 (确保团队环境一致)
├── tsconfig.json               # TypeScript 全局配置
├── tsconfig.node.json          # Vite 构建环境的 TS 配置
├── vite.config.ts              # Vite 配置文件 (包含 Manus 调试日志插件及路径别名映射)
├── components.json             # Shadcn UI 组件系统配置文件
├── .gitignore                  # Git 忽略规则文件
├── .prettierrc                 # Prettier 代码格式化配置
└── .prettierignore             # Prettier 忽略文件列表
```

---

## 🛠️ 技术栈说明

- **构建工具**：Vite 7.x
- **前端框架**：React 19.x & TypeScript
- **样式系统**：Tailwind CSS (V4) & Tailwind CSS Animate
- **UI 组件库**：Radix UI + Lucide Icons + Framer Motion (动效)
- **数据可视化**：Recharts
- **路由管理**：Wouter (极简、轻量级前端路由)
- **后端托管**：Express & Node.js
- **包管理器**：pnpm (推荐 v10+)

---

## 🚀 快速开始

本项目使用 `pnpm` 进行依赖管理，请在运行前确保已安装 Node.js (推荐 v18+) 以及 `pnpm`。

### 1. 安装依赖

在根目录下执行：
```bash
pnpm install
```

### 2. 开发模式运行

启动本地 Vite 开发服务器，支持热重载（HMR）：
```bash
pnpm run dev
```
启动后可在浏览器中访问：`http://localhost:3000/deli/`（取决于本地端口分配情况）。

### 3. 生产环境构建

将前端 React 代码打包，并编译 Express 后端代码：
```bash
pnpm run build
```
打包输出将保存在根目录下的 `dist/` 目录中：
- 静态页面：`dist/public/`
- 后端服务：`dist/index.js`

### 4. 生产环境运行

使用 Node.js 运行编译后的 Express 服务：
```bash
pnpm run start
```
服务默认会在 `http://localhost:3000/` 端口启动，并自动托管 `dist/public` 目录下的静态网站资源。


