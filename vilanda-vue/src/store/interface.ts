export interface RootState {
  tabbar: Tabbar[];
}

interface Tabbar {
  title: string;
  icon: string;
  to: RouteConfig;
  dot?: boolean;
  info?: string | number;
  url?: string;
  replace?: string;
}

interface RouteConfig {
  path?: string;
  name?: string;
}
