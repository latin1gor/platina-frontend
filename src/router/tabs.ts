import { routes } from "@/router/routes.ts";

export type Tab = { id: number; title: string; path?: string };
export type Tabs = Tab[] | null;
export const publicTabs = [
  { id: 4, title: "Docs", path: routes.DASHBOARD },
  { id: 5, title: "Examples", path: routes.DASHBOARD },
  { id: 6, title: "About", path: routes.DASHBOARD },
];

export const userTabs = [
  { id: 2, title: "Dashboard", path: routes.DASHBOARD },
  { id: 3, title: "Components", path: routes.DASHBOARD },
  { id: 4, title: "Themes", path: routes.DASHBOARD },
  { id: 5, title: "Examples", path: routes.DASHBOARD },
  { id: 6, title: "About", path: routes.DASHBOARD },
];

export const adminTabs = [
  ...userTabs,
  { id: 7, title: "Admin", path: routes.ADMIN },
];
