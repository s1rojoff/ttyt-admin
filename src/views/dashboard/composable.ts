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
          route: '/current-project'
        },

        {
          name: 'Jalb etilgan sarmoyalar va grantlar',
          route: '/investment'
        }
      ]
    },
    {
      id: 3,
      name: 'Yoshlar siyosati',
      subItem: [
        {
          name: "Ma'naviy va Ma'rifiy tadbirlar",
          route: '/activities'
        },
        {
          name: "To'garak va klublar",
          route: '/training'
        },
        {
          name: 'Tanlovlar, musobaqa va stipendiyalar',
          route: '/scholarship'
        },
        {
          name: 'Talabalar shaharchasi',
          route: '/student-campus'
        },
        {
          name: 'Talabalar hayotidan fotogalereya',
          route: '/galery'
        }
      ]
    },
    {
      id: 4,
      name: "E'lonlar",
      subItem: [
        {
          name: 'Yangiliklar',
          route: '/news'
        },
        {
          name: 'Kutilyotgan tadbirlar',
          route: '/upcoming-event'
        }
      ]
    }
  ]
  return { items }
}
