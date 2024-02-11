export interface MenuInfoShowVo{
  //主键
  id: String
  //菜单代码
  menuCode: String
  //菜单名称
  menuName: String
  //菜单名称
  menuNameEn: String
  //父级id
  parentId: String
  //菜单级别 0-菜单分组 1-菜单页面 2-按钮
  menuLevel: Number
  //排序
  menuSort: Number
  //菜单图标
  menuIcon: String
  //菜单路由
  menuPath: String
  //是否展示   0-不展示 1-展示
  isShow: Boolean
  //子节点
  children: Array<MenuInfoShowVo>
  menuComponent: String  //菜单组件
}
