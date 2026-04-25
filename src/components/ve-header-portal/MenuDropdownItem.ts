export interface MenuDropdownItem {
    name: string
    describe?: string
    children?: MenuDropdownItem[]
    route?: string
}
