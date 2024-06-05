export interface MenuInfoShowVo {
    id: string
    menuCode: string
    menuName: string
    menuNameEn: string
    parentId: string
    menuLevel: number
    menuSort: number
    menuIcon: string
    menuPath: string
    isShow: boolean
    children: MenuInfoShowVo[]
    menuComponent: string
    hasBtnPermission: string[]
}
