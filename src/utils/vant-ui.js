import Vue from "vue";
import "vant/lib/index.css";

import {
  NavBar,
  Tabbar,
  TabbarItem,
  Icon,
  Button,
  Toast,
  Dialog,
  NoticeBar,
  Swipe,
  SwipeItem,
  Image as VanImage,
  Lazyload,
  PullRefresh,
  List,
  Cell,
  CellGroup,
  Popover,
  SwipeCell,
  Grid,
  GridItem,
  Badge,
  DatetimePicker ,
  Popup,DropdownMenu, DropdownItem ,Field ,
  Tab, Tabs,Stepper , Collapse, CollapseItem,Picker,
  Col,Row,Empty,
  Calendar,
  Checkbox,
  CheckboxGroup,
  Cascader,
  RadioGroup,
  Radio,
  Pagination
} from "vant";

Vue.use(Pagination);
Vue.use(RadioGroup);
Vue.use(Radio);
Vue.use(Cascader);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Calendar);
Vue.use(Empty);
Vue.use(Col);
Vue.use(Row);
Vue.use(Picker);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Stepper);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(DatetimePicker);
Vue.use(Field);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Popup);
Vue.use(NavBar);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Icon);
Vue.use(Button);
Vue.use(Toast);
Vue.use(Dialog);
Vue.use(NoticeBar);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(VanImage);
Vue.use(Lazyload);
Vue.use(PullRefresh);
Vue.use(List);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Popover);
Vue.use(SwipeCell);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Badge);

Vue.prototype.$toast = Toast;
Vue.prototype.$dialog = Dialog;