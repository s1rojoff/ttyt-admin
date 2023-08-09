import type { Items } from '@/interfaces/index'
interface DataSidebar {
  items: Items[]
}
export function useSidebar(): DataSidebar {
  const items: Items[] = [
    {
      id: 1,
      name: 'Biz haqimizda',
      subItem: [
        {
          name: 'Rahbariyat',
          route: ''
        },
        {
          name: "Bo'linmalar",
          route: '/division'
        },
        {
          name: 'Kafedralar',
          route: '/department'
        },
        {
          name: "Bo'limlar",
          route: '/dep-employee'
        },
        {
          name: 'Kasaba uyushmasi',
          route: '/trade-union'
        }
      ]
    },
    {
      id: 2,
      name: 'Xalqaro aloqalar',
      subItem: [
        {
          name: "Bo'lim haqida",
          route: '/international'
        },
        {
          name: 'Amaldagi loyihalar',
          route: '/international/currentpro'
        },

        {
          name: 'Jalb etilgan sarmoyalar va grantlar',
          route: '/international/investment'
        }
      ]
    },
    {
      id: 3,
      name: 'Yoshlar siyosati',
      subItem: [
        {
          name: "Ma'naviy va Ma'rifiy tadbirlar",
          route: '/youthpolicy/activities'
        },
        {
          name: "To'garak va klublar",
          route: '/youthpolicy/training'
        },
        {
          name: 'Tanlovlar, musobaqa va stipendiyalar',
          route: '/youthpolicy/scholarship'
        },
        {
          name: 'Talabalar shaharchasi',
          route: '/youthpolicy/studentcampus'
        },
        {
          name: 'Talabalar hayotidan fotogalereya',
          route: '/youthpolicy/galery'
        }
      ]
    },
    {
      id: 4,
      name: "E'lonlar",
      subItem: [
        {
          name: 'Yangiliklar',
          route: '/announcement/news'
        },
        {
          name: 'Kutilyotgan tadbirlar',
          route: '/announcement/upcoming-event'
        }
      ]
    }
  ]
  return { items }
}
