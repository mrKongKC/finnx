declare module '*.json' {
  const value: any
  export default value
}

interface BaseRoute {
  title: string
  path: string
}

interface BaseContent {
  title: string
  icon: string
}

interface Carousel {
  title: string
  image: string
  iconStep: string
}

interface Employee {
  title: string
  subTitle: string
  icon: BaseContent[]
}

interface Tab extends BaseContent {
  image: string
  iconA: string
}

interface PackageList {
  title: string
  net: number
  price: number
}

interface PromotionListLocales {
  title: string
}

declare module '@/config/masterData' {
  export const tabs: Tab[]
  export const headerRouter: BaseRoute[]
  export const employeeData: Employee[]
  export const hrContent: BaseContent[]
  export const leaveRequest: BaseContent[]
  export const carouselSteps: Carousel[]
  export const footerRouter: BaseRoute[]
  export const packageList: PackageList[]
  export const promotionListLocales: PromotionListLocales[]
}
