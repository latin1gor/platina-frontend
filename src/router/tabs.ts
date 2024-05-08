import { routes } from "@/router/routes.ts";

export interface Tab {
  id: number;
  title: string;
  path?: string;
}
export type Tabs = Tab[] | null;
export const publicTabs = [
  { id: 4, title: "Docs", path: routes.LANDING },
  { id: 5, title: "Examples", path: routes.LANDING },
  { id: 6, title: "About", path: routes.LANDING },
];

export const userTabs = [{ id: 1, title: "Dashboard", path: routes.DASHBOARD }];

export const adminTabs = [
  ...userTabs,
  { id: 2, title: "Admin", path: routes.ADMIN },
];
