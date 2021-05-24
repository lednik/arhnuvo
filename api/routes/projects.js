const { Router } = require('express')

const router = Router()

const projects = [
  {
    id: '1',
    name: 'Rubius',
    fullName: 'Рестобар 54А4',
    fullAbout: 'Эта история началась с идеи Заказчика открыть в центре города бар-кальянную. После маркетингового анализа мы предложили отойти от первоначального замысла и включить в формат ресторан. Забегая вперёд скажем, что эта рекомендация оказалась стратегически дальновидной. 54А4 - это нереально крутое место, где расположены и сногсшибательный бар с танцполом, и элегантный ресторан, и камерный  чилаут, и кафе на “террасе” с панорамными окнами.В каждом уголке - особая атмосфера, свои акценты, а над проработкой деталей мы особенно постарались.',
    img1: '/images/index/Banner.png',
    img2: '/images/index/Banner.png',
    img3: '/images/index/Banner.png',
    img4: '/images/index/Banner.png',
    img5: '/images/index/Banner.png',
    description: 'Для ресторана 54А4 был спроектирован технологичный акустический потолок: сложная конструкция из деревянных реек гасит эхо, неизбежное в просторных помещениях, хорошо рассеивает звук, поглощает шум вентиляционного оборудования. Благодаря этому гостям комфортно общаться и слушать музыку, при этом не приносится в жертву качество воздуха.',
    creating: 'Этот проект был реализован с нуля до первого гостя, мы:',
    creatingList: [
      'Придумали концепцию',
      'Спроектировали интерьер',
      'Наняли подрядчиков',
      'Выбрали посуду и столовые приборы',
      'Оборудовали кухню',
      'Нашли и обучили персонал',
      'Разработали фирменный стиль'
    ],
    result: 'И не смогли отпраздновать открытие: все столики были забронированы на 2 недели вперёд.',
    type: 1,
    mainImg: '/images/index/Banner.png',
    subImg: '/images/index/Banner.png',
    smallImg: '/images/index/Banner.png',
    about: 'Инженерное программное обеспечение'
  },
  {
    id: '2',
    name: 'Minidino',
    type: 2,
    mainImg: '/images/index/Banner.png',
    subImg: '/images/index/Banner.png',
    smallImg: '/images/index/Banner.png',
    about: 'Магазин необычной, но функциональной детской одежды'
  },
  {
    id: '3',
    name: '54A4',
    type: 3,
    mainImg: '/images/index/Banner.png',
    subImg: '/images/index/Banner.png',
    smallImg: '/images/index/Banner.png',
    about: 'Панорамный рестобар в центре города Томск'
  },
  {
    id: '4',
    name: 'Учебный центр ',
    type: 4,
    mainImg: '/images/index/Banner.png',
    subImg: '/images/index/Banner.png',
    smallImg: '/images/index/Banner.png',
    about: 'Учебный центр молочного животноводства с интерактивным учебным классом'
  }
]

// Mock Users
const users = [
  { name: 'Alexandre' },
  { name: 'Pooya' },
  { name: 'Sébastien' }
]

/* GET users listing. */
router.get('/projects', function (req, res, next) {
  res.json(projects)
})

/* GET user by ID. */
router.get('/projects/:id', function (req, res, next) {
  const id = parseInt(req.params.id)
  if (id >= 0 && id < projects.length) {
    res.json(projects[id - 1])
  } else {
    res.sendStatus(404)
  }
})

module.exports = router
