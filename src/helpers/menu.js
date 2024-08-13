import {
  ADMIN_VERTICAL_MENU_ITEMS,
  CLIENT_VERTICAL_MENU_ITEMS,
  HORIZONTAL_MENU_ITEMS,
} from "@/assets/data";

const getClientVerticalMenuItems = () => {
  // NOTE - You can fetch from server and return here as well
  return CLIENT_VERTICAL_MENU_ITEMS;
};

const getAdminVerticalMenuItems = () => {
  // NOTE - You can fetch from server and return here as well
  return ADMIN_VERTICAL_MENU_ITEMS;
};

const getHorizontalMenuItems = () => {
  // NOTE - You can fetch from server and return here as well
  return HORIZONTAL_MENU_ITEMS;
};

const findAllParent = (menuItems, menuItem) => {
  let parents = [];
  const parent = findMenuItem(menuItems, menuItem.parentKey);

  if (parent) {
    parents.push(parent.key);
    if (parent.parentKey) {
      parents = [...parents, ...findAllParent(menuItems, parent)];
    }
  }
  return parents;
};

const getMenuItemFromURL = (items, url) => {
  if (items instanceof Array) {
    for (const item of items) {
      const foundItem = getMenuItemFromURL(item, url);
      if (foundItem) return foundItem;
    }
  } else {
    if (items.url == url) return items;
    if (items.children != null) {
      for (const item of items.children) {
        if (item.url == url) return item;
      }
    }
  }
};

// flatten the list of all nested routes
const flattenRoutes = (routes) => {
  let flatRoutes = [];

  routes.forEach((item) => {
    flatRoutes.push(item);
    if (typeof item.children !== "undefined") {
      flatRoutes = [...flatRoutes, ...flattenRoutes(item.children)];
    }
  });
  return flatRoutes;
};

const findMenuItem = (menuItems, menuItemKey) => {
  if (menuItems && menuItemKey) {
    for (let i = 0; i < menuItems.length; i++) {
      if (menuItems[i].key === menuItemKey) {
        return menuItems[i];
      }
      const found = findMenuItem(menuItems[i].children, menuItemKey);
      if (found) return found;
    }
  }
  return null;
};

export {
  getHorizontalMenuItems,
  getClientVerticalMenuItems,
  getAdminVerticalMenuItems,
  findAllParent,
  findMenuItem,
  flattenRoutes,
  getMenuItemFromURL,
};
