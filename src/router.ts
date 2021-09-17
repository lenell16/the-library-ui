import { createRouter, defineRoute } from 'type-route';

export const { RouteProvider, useRoute, routes } = createRouter({
  unsorted: defineRoute('/'),
  allTabs: defineRoute('/all'),
  archive: defineRoute('/archive'),
  windows: defineRoute('/windows'),
});
