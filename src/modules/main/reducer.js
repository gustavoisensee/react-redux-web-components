import {
  TOGGLE_NOTIFICATION,
  CHANGE_VERTICAL_NOTIFICATION,
  CHANGE_HORIZONTAL_NOTIFICATION,
  CHANGE_TYPE_NOTIFICATION,
  CHANGE_MENU_ITEMS,
  MENU_ITEMS
} from './constant';

const init = {
  notification: {
    open: false,
    title: '',
    message: '',
    notiType: 1, // 1-success, 2-info, 3-warning, 4-error/fail,
    vertical: 1, // 1-top, 2-middle, 3-bottom
    horizontal: 2 // 1-left, 2-center, 3-right
  },
  menu: MENU_ITEMS
};

const main = (state = init, action) => {
  switch (action.type) {
    case TOGGLE_NOTIFICATION: {
      return Object.assign({}, state, {
        notification: {
          open: action.open,
          title: action.title,
          message: action.message,
          notiType: action.notiType,
          vertical: action.vertical,
          horizontal: action.horizontal
        }
      });
    }
    case CHANGE_VERTICAL_NOTIFICATION: {
      const notification = Object.assign({}, state.notification, { vertical: action.vertical });
      return Object.assign({}, state, { notification });
    }
    case CHANGE_HORIZONTAL_NOTIFICATION: {
      const notification = Object.assign({}, state.notification, { horizontal: action.horizontal });
      return Object.assign({}, state, { notification });
    }
    case CHANGE_TYPE_NOTIFICATION: {
      const notification = Object.assign({}, state.notification, { notiType: action.notiType });
      return Object.assign({}, state, { notification });
    }
    case CHANGE_MENU_ITEMS: {
      const menus = Object.assign([], state.menu);
      for (let i = 0; i < menus.length; i += 1) {
        menus[i].selected = false;
        if (menus[i].id === action.id) {
          menus[i].selected = true;
        }
      }
      return Object.assign({}, state, { menu: menus });
    }
    default: {
      return Object.assign({}, state);
    }
  }
};

export default main;
