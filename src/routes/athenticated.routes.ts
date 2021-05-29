import { DashboardPage } from "../pages/dashboard.page";
import { ProductionPage } from "../pages/prodution.page";

export const authentictedRoutes = [
  {
    path: '/',
    exact: true,
    children: DashboardPage
  },
  {
    path: '/production',
    exact: true,
    children: ProductionPage
  }
]