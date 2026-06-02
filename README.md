# DELI WORLD Global GEO Strategy

得力集团全球 ToB 业务 AI 搜索优化战略方案展示项目。项目以单页 Web 应用的形式呈现 DELI WORLD 在智慧办公、企业级打印、工业工具与 B2B 采购场景下的 GEO（Generative Engine Optimization）/ AI 搜索优化策略、预期效果、报价方案和执行路线图。

## 项目概览

本项目面向策略展示和方案交付场景，主要内容包括：

- DELI WORLD 全球 ToB 业务 AI 搜索优化战略说明
- 智慧办公、智能打印、工业工具等核心业务分析
- 多语言、多地域 GEO 覆盖策略
- Programmatic SEO + GEO 关键词体系
- Google 收录率、AI 提及率与品牌搜索增长预期
- 商务版与 PLUS 版服务报价对比
- 6 个月执行节奏与工作拆解

## 技术栈

- React 19
- TypeScript
- Vite 7
- Tailwind CSS 4
- Radix UI / shadcn 风格组件
- lucide-react 图标
- wouter 路由
- Express 静态资源服务
- pnpm 包管理器

## 目录结构

```text
.
├── client/                 # 前端应用
│   ├── index.html
│   ├── public/             # 静态调试脚本等资源
│   └── src/
│       ├── App.tsx         # 应用入口与路由配置
│       ├── main.tsx        # React 挂载入口
│       ├── pages/          # 页面组件
│       ├── components/     # 业务组件与 UI 组件
│       ├── contexts/       # 主题等上下文
│       ├── hooks/          # 通用 Hooks
│       ├── lib/            # 工具函数
│       └── index.css       # 全局样式
├── server/                 # 生产环境静态服务
│   └── index.ts
├── shared/                 # 前后端共享常量
├── patches/                # pnpm patchedDependencies 补丁
├── vite.config.ts          # Vite 配置
├── tsconfig.json           # TypeScript 配置
├── package.json
└── pnpm-lock.yaml
```

## 环境要求

建议使用以下环境：

- Node.js 20 或更高版本
- pnpm 10.x

项目的 [package.json](package.json) 指定了 pnpm：

```text
pnpm@10.4.1
```

## 安装依赖

```bash
pnpm install
```

## 本地开发

```bash
pnpm dev
```

默认会启动 Vite 开发服务器，端口优先使用 `3000`。如果端口被占用，Vite 会自动寻找下一个可用端口。

开发环境访问地址通常为：

```text
http://localhost:3000/deli/
```

项目在 [vite.config.ts](vite.config.ts) 中配置了：

```ts
base: "/deli/"
```

因此前端路由和静态资源默认挂载在 `/deli/` 路径下。

## 环境变量

项目包含 Google Maps 代理加载组件，相关配置如下：

```bash
VITE_FRONTEND_FORGE_API_KEY=your_api_key
VITE_FRONTEND_FORGE_API_URL=https://forge.butterfly-effect.dev
```

说明：

- `VITE_FRONTEND_FORGE_API_KEY`：地图代理接口所需的 API Key。
- `VITE_FRONTEND_FORGE_API_URL`：Forge API 基础地址，未配置时默认使用 `https://forge.butterfly-effect.dev`。

当前主页面未直接渲染地图组件；如后续启用 [Map.tsx](client/src/components/Map.tsx)，需要确保上述变量可用。

## 常用命令

```bash
# 启动开发服务器
pnpm dev

# TypeScript 类型检查
pnpm check

# 构建前端与生产服务
pnpm build

# 启动生产服务
pnpm start

# 本地预览 Vite 构建结果
pnpm preview

# 格式化项目文件
pnpm format
```

## 构建与生产运行

执行构建：

```bash
pnpm build
```

构建流程会完成两件事：

1. 使用 Vite 构建前端资源，输出到 `dist/public`。
2. 使用 esbuild 打包 [server/index.ts](server/index.ts)，输出到 `dist/index.js`。

构建完成后启动生产服务：

```bash
pnpm start
```

生产服务会通过 Express 托管 `dist/public` 下的静态文件，并将所有路由回退到 `index.html`，以支持前端单页路由。

如需指定端口：

```bash
PORT=8080 pnpm start
```

## 页面内容

主页面位于 [Home.tsx](client/src/pages/Home.tsx)，包括以下模块：

- Hero：DELI WORLD Global GEO Strategy 标题与定位
- 前言：智慧办公与工业数字化采购背景
- 基础分析：业务概况、目标人群、语言与地域覆盖
- 核心策略：Programmatic SEO + GEO 策略逻辑与关键词分类
- 预期效果：Google 收录率、AI 提及率与品牌效应
- 报价：商务版与 PLUS 版报价、服务明细和差异对比
- 工作拆解：6 个月执行路线图
- Footer：项目版权与方案名称

## 路由说明

项目使用 `wouter` 作为前端路由库，路由入口位于 [App.tsx](client/src/App.tsx)。

当前路由包括：

- `/`：主展示页面
- `/404`：404 页面
- 其他路径：回退到 404 页面

由于 Vite `base` 配置为 `/deli/`，部署时应确保应用挂载路径与该配置一致。

## 调试日志

开发环境下，[vite.config.ts](vite.config.ts) 内置了 Manus Debug Collector 插件，会注入调试脚本并接收浏览器日志，写入项目根目录下的 `.manus-logs/`。

日志类型包括：

- `browserConsole.log`
- `networkRequests.log`
- `sessionReplay.log`

生产环境不会注入该调试脚本。

## 部署注意事项

- 如果部署在域名根路径，需要将 [vite.config.ts](vite.config.ts) 中的 `base` 从 `/deli/` 调整为 `/`。
- 如果部署在子路径 `/deli/`，需要确保 Web 服务正确转发该子路径到应用资源。
- 生产服务默认读取 `dist/public` 静态资源，部署前请先执行 `pnpm build`。
- 如使用平台托管静态资源，可直接部署 `dist/public`，但需要配置 SPA fallback 到 `index.html`。

## 许可证

本项目使用 MIT License。
