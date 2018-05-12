import React from 'react';
import Menu from '../components/Menu.jsx';
import * as actions from '../actions/menu';
import store from '../store';

const MenuContainer = () => <Menu onClick={() => store.dispatch(actions.toggleMenu())} />;
export default MenuContainer;
