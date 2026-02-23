let currentLang = localStorage.getItem('language') || 'ua';

const ingredients = {
    // Cakes
    'napoleon': {
        title: {
            ua: 'Наполеон',
            en: 'Napoleon',
            ru: 'Наполеон'
        },
        items: {
            ua: ['Листкове тісто', 'Заварний крем', 'Цукрова пудра'],
            en: ['Puff pastry', 'Custard cream', 'Powdered sugar'],
            ru: ['Слоёное тесто', 'Заварной крем', 'Сахарная пудра']
        }
    },
    'milkgirl': {
        title: {
            ua: 'Молочна дівчинка',
            en: 'Milk Girl',
            ru: 'Молочная девочка'
        },
        items: {
            ua: ['Бісквіт', 'Згущене молоко', 'Вершковий крем', 'Горіхи'],
            en: ['Sponge cake', 'Condensed milk', 'Cream', 'Walnuts'],
            ru: ['Бисквит', 'Сгущённое молоко', 'Сливочный крем', 'Грецкие орехи']
        }
    },
    'redvelvet': {
        title: {
            ua: 'Червоний оксамит',
            en: 'Red Velvet',
            ru: 'Красный бархат'
        },
        items: {
            ua: ['Червоний бісквіт', 'Крем-чіз', 'Какао', 'Ванільна есенція'],
            en: ['Red velvet sponge', 'Cream cheese frosting', 'Cocoa', 'Vanilla essence'],
            ru: ['Красный бисквит', 'Крем-чиз', 'Какао', 'Ванильная эссенция']
        }
    },
    'medovik': {
        title: {
            ua: 'Медовик',
            en: 'Honey Cake',
            ru: 'Медовик'
        },
        items: {
            ua: ['Медові коржі', 'Сметанний крем', 'Мед', 'Цукрова пудра'],
            en: ['Honey layers', 'Sour cream frosting', 'Honey', 'Powdered sugar'],
            ru: ['Медовые коржи', 'Сметанный крем', 'Мёд', 'Сахарная пудра']
        }
    },
    'esterhazy': {
        title: {
            ua: 'Естерхазі',
            en: 'Esterházy',
            ru: 'Эстерхази'
        },
        items: {
            ua: ['Горіхові коржі', 'Вершковий крем', 'Мигдаль', 'Шоколадна глазур'],
            en: ['Nut layers', 'Buttercream', 'Almonds', 'Chocolate glaze'],
            ru: ['Ореховые коржи', 'Сливочный крем', 'Миндаль', 'Шоколадная глазурь']
        }
    },
    'coffeetime': {
        title: {
            ua: 'Кофе-тайм',
            en: 'Coffee Time',
            ru: 'Кава-тайм'
        },
        items: {
            ua: ['Кавовий бісквіт', 'Крем із маскарпоне', 'Еспресо', 'Какао-порошок'],
            en: ['Coffee sponge', 'Mascarpone cream', 'Espresso', 'Cocoa powder'],
            ru: ['Кофейный бисквит', 'Крем из маскарпоне', 'Эспрессо', 'Какао-порошок']
        }
    },
    'tiramisu': {
        title: {
            ua: 'Тірамісу',
            en: 'Tiramisu',
            ru: 'Тирамису'
        },
        items: {
            ua: ['Бісквіт Савоярді', 'Крем маскарпоне', 'Кава', 'Какао'],
            en: ['Ladyfinger biscuits', 'Mascarpone cream', 'Coffee', 'Cocoa'],
            ru: ['Бисквит Савоярди', 'Крем маскарпоне', 'Кофе', 'Какао']
        }
    },
    'unicorn': {
        title: {
            ua: 'Єдиноріг',
            en: 'Unicorn',
            ru: 'Единорог'
        },
        items: {
            ua: ['Райдужний бісквіт', 'Вершковий крем', 'Цукрові прикраси', 'Їстівні блискітки'],
            en: ['Rainbow sponge', 'Buttercream', 'Sugar decorations', 'Edible glitter'],
            ru: ['Радужный бисквит', 'Сливочный крем', 'Сахарные украшения', 'Съедобные блёстки']
        }
    },

    // Cupcakes
    'orangeboom': {
        title: {
            ua: 'Апельсиновий бум',
            en: 'Orange Boom',
            ru: 'Апельсиновый бум'
        },
        items: {
            ua: ['Апельсиновий бісквіт', 'Цитрусовий крем', 'Цедра апельсина', 'Цукрова посипка'],
            en: ['Orange sponge', 'Citrus cream', 'Orange zest', 'Sugar sprinkles'],
            ru: ['Апельсиновый бисквит', 'Цитрусовый крем', 'Цедра апельсина', 'Сахарная посыпка']
        }
    },
    'raspberryparadise': {
        title: {
            ua: 'Малиновий рай',
            en: 'Raspberry Paradise',
            ru: 'Малиновый рай'
        },
        items: {
            ua: ['Ванільний бісквіт', 'Фісташковий крем', 'Малиновий джем', 'Сублімована малина'],
            en: ['Vanilla sponge', 'Pistachio cream', 'Raspberry jam', 'Freeze-dried raspberry'],
            ru: ['Ванильный бисквит', 'Фисташковый крем', 'Малиновый джем', 'Сублимированная малина']
        }
    },
    'plombir': {
        title: {
            ua: 'Пломбір',
            en: 'Ice Cream',
            ru: 'Пломбир'
        },
        items: {
            ua: ['Ванільний бісквіт', 'Вершковий крем', 'Ванільна есенція', 'Біла глазур'],
            en: ['Vanilla sponge', 'Cream frosting', 'Vanilla essence', 'White glaze'],
            ru: ['Ванильный бисквит', 'Сливочный крем', 'Ванильная эссенция', 'Белая глазурь']
        }
    },
    'rainbow': {
        title: {
            ua: 'Райдуга',
            en: 'Rainbow',
            ru: 'Радуга'
        },
        items: {
            ua: ['Райдужний бісквіт', 'Кольорові коржі', 'Вершковий крем', 'Посипка конфетті'],
            en: ['Rainbow sponge', 'Colorful layers', 'Buttercream', 'Confetti sprinkles'],
            ru: ['Радужный бисквит', 'Цветные коржи', 'Сливочный крем', 'Посыпка конфетти']
        }
    },
    'jungle': {
        title: {
            ua: 'Джунглі',
            en: 'Jungle',
            ru: 'Джунгли'
        },
        items: {
            ua: ['Шоколадний бісквіт', 'Вершковий крем', 'Конфетті', 'Цукрові пальми'],
            en: ['Chocolate sponge', 'Buttercream', 'Confetti', 'Sugar palm trees'],
            ru: ['Шоколадный бисквит', 'Сливочный крем', 'Конфетти', 'Сахарные пальмы']
        }
    },
    'starrynight': {
        title: {
            ua: 'Зоряна ніч',
            en: 'Starry Night',
            ru: 'Звездная ночь'
        },
        items: {
            ua: ['Ванільний бісквіт', 'Синьо-жовтий крем', 'Конфетті-зірочки', 'Їстівні блискітки'],
            en: ['Vanilla sponge', 'Blue-yellow cream', 'Star confetti', 'Edible glitter'],
            ru: ['Ванильный бисквит', 'Сине-жёлтый крем', 'Конфетти-звёздочки', 'Съедобные блёстки']
        }
    },
    'bee': {
        title: {
            ua: 'Бджілка',
            en: 'Bee',
            ru: 'Пчёлка'
        },
        items: {
            ua: ['Медовий бісквіт', 'Жовто-чорний крем', 'Конфетті (квіточки, бджілки)', 'Мед'],
            en: ['Honey sponge', 'Yellow-black cream', 'Confetti (flowers, bees)', 'Honey'],
            ru: ['Медовый бисквит', 'Жёлто-чёрный крем', 'Конфетти (цветочки, пчёлки)', 'Мёд']
        }
    },
    'firstkiss': {
        title: {
            ua: 'Перший поцілунок',
            en: 'First Kiss',
            ru: 'Первый поцелуй'
        },
        items: {
            ua: ['Ванільний бісквіт', 'Вершковий крем', 'Полуничне варення', 'Посипка'],
            en: ['Vanilla sponge', 'Cream cheese frosting', 'Strawberry jam', 'Sprinkles'],
            ru: ['Ванильный бисквит', 'Сливочный крем', 'Клубничное варенье', 'Посыпка']
        }
    },

    // Bento
    'penguin': {
        title: {
            ua: 'Пінгвін',
            en: 'Penguin',
            ru: 'Пингвин'
        },
        items: {
            ua: ['Шоколадний бісквіт', 'Вершковий крем', 'Декор у вигляді пінгвіна', 'Біла глазур'],
            en: ['Chocolate sponge', 'Buttercream', 'Penguin decoration', 'White glaze'],
            ru: ['Шоколадный бисквит', 'Сливочный крем', 'Декор в виде пингвина', 'Белая глазурь']
        }
    },
    'gamepad': {
        title: {
            ua: 'Геймпад',
            en: 'Gamepad',
            ru: 'Геймпад'
        },
        items: {
            ua: ['Ванільний бісквіт', 'Крем-чіз', 'Мастика (геймпад)', 'Харчові барвники'],
            en: ['Vanilla sponge', 'Cream cheese', 'Fondant (gamepad)', 'Food coloring'],
            ru: ['Ванильный бисквит', 'Крем-чиз', 'Мастика (геймпад)', 'Пищевые красители']
        }
    },
    'postcard': {
        title: {
            ua: 'Листівка',
            en: 'Postcard',
            ru: 'Открытка'
        },
        items: {
            ua: ['Бісквіт на вибір', 'Крем на вибір', 'Листівка з білого шоколаду', 'Їстівний маркер'],
            en: ['Sponge of choice', 'Cream of choice', 'White chocolate postcard', 'Edible marker'],
            ru: ['Бисквит на выбор', 'Крем на выбор', 'Открытка из белого шоколада', 'Съедобный маркер']
        }
    },
    'queensgambit': {
        title: {
            ua: 'Королівський гамбіт',
            en: "Queen's Gambit",
            ru: 'Королевский гамбит'
        },
        items: {
            ua: ['Шоколадний бісквіт', 'Крем-чіз', 'Шахова дошка (мастика)', 'Чорно-біла глазур'],
            en: ['Chocolate sponge', 'Cream cheese', 'Chess board (fondant)', 'Black-white glaze'],
            ru: ['Шоколадный бисквит', 'Крем-чиз', 'Шахматная доска (мастика)', 'Чёрно-белая глазурь']
        }
    },
    'zoo': {
        title: {
            ua: 'Зоопарк',
            en: 'Zoo',
            ru: 'Зоопарк'
        },
        items: {
            ua: ['Ванільний бісквіт', 'Вершковий крем', 'Цукрові звірятка', 'Кольорова глазур'],
            en: ['Vanilla sponge', 'Buttercream', 'Sugar animals', 'Colorful glaze'],
            ru: ['Ванильный бисквит', 'Сливочный крем', 'Сахарные зверюшки', 'Цветная глазурь']
        }
    },
    'kittens': {
        title: {
            ua: 'Крошки-кішки',
            en: 'Kittens',
            ru: 'Крошки-кошки'
        },
        items: {
            ua: ['Ванільний бісквіт', 'Рожевий крем', 'Цукрові котики', 'Посипка'],
            en: ['Vanilla sponge', 'Pink cream', 'Sugar kittens', 'Sprinkles'],
            ru: ['Ванильный бисквит', 'Розовый крем', 'Сахарные котики', 'Посыпка']
        }
    },
    'fireworks': {
        title: {
            ua: 'Феєрверк',
            en: 'Fireworks',
            ru: 'Фейерверк'
        },
        items: {
            ua: ['Шоколадний бісквіт', 'Крем-чіз', 'Цукрова пудра', 'Сірники (в комплекті)'],
            en: ['Chocolate sponge', 'Cream cheese', 'Powdered sugar', 'Matches (included)'],
            ru: ['Шоколадный бисквит', 'Крем-чиз', 'Сахарная пудра', 'Спички (в комплекте)']
        }
    },
    'queen': {
        title: {
            ua: 'Королева',
            en: 'Queen',
            ru: 'Королева'
        },
        items: {
            ua: ['Рожевий бісквіт', 'Крем-чіз', 'Декор з короною', 'Їстівні перлини'],
            en: ['Pink sponge', 'Cream cheese', 'Crown decoration', 'Edible pearls'],
            ru: ['Розовый бисквит', 'Крем-чиз', 'Декор с короной', 'Съедобный жемчуг']
        }
    },

    // Sets
    'genderparty': {
        title: {
            ua: 'Гендер-паті',
            en: 'Gender Party',
            ru: 'Гендер-пати'
        },
        items: {
            ua: ['Бенто з кольоровою начинкою', '5 кексів з рожевим кремом', '5 кексів з блакитним кремом', 'Посипка'],
            en: ['Bento with colored filling', '5 cupcakes with pink cream', '5 cupcakes with blue cream', 'Sprinkles'],
            ru: ['Бенто с цветной начинкой', '5 кексов с розовым кремом', '5 кексов с голубым кремом', 'Посыпка']
        }
    },
    'wedding': {
        title: {
            ua: 'Виїзне весілля',
            en: 'Outdoor Wedding',
            ru: 'Выездная свадьба'
        },
        items: {
            ua: ['Бенто з фігурками наречених', '10 кексів з квітами', 'Крем на вибір кольору', 'Можливість дозамовлення (-10%)'],
            en: ['Bento with bride & groom figures', '10 cupcakes with flowers', 'Cream in custom color', 'Extra order available (-10%)'],
            ru: ['Бенто с фигурками жениха и невесты', '10 кексов с цветами', 'Крем выбранного цвета', 'Возможность дозаказа (-10%)']
        }
    },
    'boardgame': {
        title: {
            ua: 'Настолка',
            en: 'Board Game',
            ru: 'Настолка'
        },
        items: {
            ua: ['Бенто в стилі D&D', '10 кексів з тематичним декором', 'Шоколадний бісквіт', 'Їстівні фігурки драконів'],
            en: ['D&D themed bento', '10 cupcakes with themed decor', 'Chocolate sponge', 'Edible dragon figures'],
            ru: ['Бенто в стиле D&D', '10 кексов с тематическим декором', 'Шоколадный бисквит', 'Съедобные фигурки драконов']
        }
    },
    'burger': {
        title: {
            ua: 'Бургер',
            en: 'Burger',
            ru: 'Бургер'
        },
        items: {
            ua: ['Бенто зі смаком тахінної халви', 'Кекси "апсайд-даун"', 'Крем між половинками', 'Декор у вигляді бургерів'],
            en: ['Bento with tahini halva flavor', 'Upside-down cupcakes', 'Cream filling', 'Burger decoration'],
            ru: ['Бенто со вкусом тахинной халвы', 'Кексы "апсайд-даун"', 'Крем между половинками', 'Декор в виде бургеров']
        }
    },
    'firstdate': {
        title: {
            ua: 'Перше побачення',
            en: 'First Date',
            ru: 'Первое свидание'
        },
        items: {
            ua: ['Бенто (полуниця-шоколад)', '4 кекси з полуницею', '2 пляшечки шампанського (100 мл)', 'Квіткові декорації'],
            en: ['Bento (strawberry-chocolate)', '4 cupcakes with strawberries', '2 mini champagne bottles (100ml)', 'Flower decorations'],
            ru: ['Бенто (клубника-шоколад)', '4 кекса с клубникой', '2 бутылочки шампанского (100 мл)', 'Цветочные декорации']
        }
    },
    'teambuilding': {
        title: {
            ua: 'Тім-білдінг',
            en: 'Team Building',
            ru: 'Тим-билдинг'
        },
        items: {
            ua: ['Бенто з назвою компанії', '10 кексів з шоколадними логотипами', 'Класичний шоколадний бісквіт', 'Вершковий крем'],
            en: ['Bento with company name', '10 cupcakes with chocolate logos', 'Classic chocolate sponge', 'Buttercream'],
            ru: ['Бенто с названием компании', '10 кексов с шоколадными логотипами', 'Классический шоколадный бисквит', 'Сливочный крем']
        }
    },
    'cherrygarden': {
        title: {
            ua: 'Вишневий сад',
            en: 'Cherry Garden',
            ru: 'Вишнёвый сад'
        },
        items: {
            ua: ['Бенто з вишневим кремом', '10 кексів з коктейльними вишнями', 'Вишневий джем всередині', 'Шоколадний бісквіт'],
            en: ['Bento with cherry cream', '10 cupcakes with cocktail cherries', 'Cherry jam filling', 'Chocolate sponge'],
            ru: ['Бенто с вишнёвым кремом', '10 кексов с коктейльными вишнями', 'Вишнёвый джем внутри', 'Шоколадный бисквит']
        }
    },
    'hardrock': {
        title: {
            ua: 'Хард-рок',
            en: 'Hard Rock',
            ru: 'Хард-рок'
        },
        items: {
            ua: ['Чорний бісквіт', 'Білий крем', 'Срібні кульки', 'Рокерський декор'],
            en: ['Black sponge', 'White cream', 'Silver pearls', 'Rock style decor'],
            ru: ['Чёрный бисквит', 'Белый крем', 'Серебряные шарики', 'Рокерский декор']
        }
    }
};

const productKeys = {
    // Cakes
    'unicorn':        { section: 'cake',    key: 'name1' },
    'napoleon':       { section: 'cake',    key: 'name2' },
    'milkgirl':       { section: 'cake',    key: 'name3' },
    'redvelvet':      { section: 'cake',    key: 'name4' },
    'medovik':        { section: 'cake',    key: 'name5' },
    'esterhazy':      { section: 'cake',    key: 'name6' },
    'coffeetime':     { section: 'cake',    key: 'name7' },
    'tiramisu':       { section: 'cake',    key: 'name8' },

    // Cupcakes
    'firstkiss':      { section: 'cupcake', key: 'name1' },
    'orangeboom':     { section: 'cupcake', key: 'name2' },
    'raspberryparadise': { section: 'cupcake', key: 'name3' },
    'plombir':        { section: 'cupcake', key: 'name4' },
    'rainbow':        { section: 'cupcake', key: 'name5' },
    'jungle':         { section: 'cupcake', key: 'name6' },
    'starrynight':    { section: 'cupcake', key: 'name7' },
    'bee':            { section: 'cupcake', key: 'name8' },

    // Bento
    'queen':          { section: 'bento',   key: 'name1' },
    'penguin':        { section: 'bento',   key: 'name2' },
    'gamepad':        { section: 'bento',   key: 'name3' },
    'postcard':       { section: 'bento',   key: 'name4' },
    'queensgambit':   { section: 'bento',   key: 'name5' },
    'zoo':            { section: 'bento',   key: 'name6' },
    'kittens':        { section: 'bento',   key: 'name7' },
    'fireworks':      { section: 'bento',   key: 'name8' },

    // Sets
    'hardrock':       { section: 'set',     key: 'name1' },
    'genderparty':    { section: 'set',     key: 'name2' },
    'wedding':        { section: 'set',     key: 'name3' },
    'boardgame':      { section: 'set',     key: 'name4' },
    'burger':         { section: 'set',     key: 'name5' },
    'firstdate':      { section: 'set',     key: 'name6' },
    'teambuilding':   { section: 'set',     key: 'name7' },
    'cherrygarden':   { section: 'set',     key: 'name8' },
};

function getUnit(unit, quantity) {
    const units = {
        pcs: { ua: 'шт', ru: 'шт', en: 'pcs' },
        kg:  { ua: 'кг', ru: 'кг', en: 'kg'  },
        set: { ua: `кг + ${quantity} шт`, ru: `кг + ${quantity} шт`, en: `kg + ${quantity} pcs` }
    };
    const u = units[unit] || units['pcs'];
    return u[currentLang] || u['en'];
}

const discountItems = {
    'coffeetime': 10,
    'rainbow':    10,
    'penguin':    10,
    'wedding':    10
};

const searchDatabase = {
    // Cakes
    'наполеон': { page: 'catalog.html', section: 'cakes', id: 'napoleon' },
    'napoleon': { page: 'catalog.html', section: 'cakes', id: 'napoleon' },
    
    'молочна дівчинка': { page: 'catalog.html', section: 'cakes', id: 'milkgirl' },
    'молочная девочка': { page: 'catalog.html', section: 'cakes', id: 'milkgirl' },
    'milk girl': { page: 'catalog.html', section: 'cakes', id: 'milkgirl' },
    
    'червоний оксамит': { page: 'catalog.html', section: 'cakes', id: 'redvelvet' },
    'красный бархат': { page: 'catalog.html', section: 'cakes', id: 'redvelvet' },
    'red velvet': { page: 'catalog.html', section: 'cakes', id: 'redvelvet' },
    
    'медовик': { page: 'catalog.html', section: 'cakes', id: 'medovik' },
    'honey cake': { page: 'catalog.html', section: 'cakes', id: 'medovik' },
    
    'естерхазі': { page: 'catalog.html', section: 'cakes', id: 'esterhazy' },
    'эстерхази': { page: 'catalog.html', section: 'cakes', id: 'esterhazy' },
    'esterhazy': { page: 'catalog.html', section: 'cakes', id: 'esterhazy' },
    
    'кава-тайм': { page: 'catalog.html', section: 'cakes', id: 'coffeetime' },
    'кофе-тайм': { page: 'catalog.html', section: 'cakes', id: 'coffeetime' },
    'coffee time': { page: 'catalog.html', section: 'cakes', id: 'coffeetime' },
    
    'тірамісу': { page: 'catalog.html', section: 'cakes', id: 'tiramisu' },
    'тирамису': { page: 'catalog.html', section: 'cakes', id: 'tiramisu' },
    'tiramisu': { page: 'catalog.html', section: 'cakes', id: 'tiramisu' },
    
    'єдиноріг': { page: 'catalog.html', section: 'cakes', id: 'unicorn' },
    'единорог': { page: 'catalog.html', section: 'cakes', id: 'unicorn' },
    'unicorn': { page: 'catalog.html', section: 'cakes', id: 'unicorn' },
    
    // Cupcakes
    'апельсиновий бум': { page: 'catalog.html', section: 'cupcakes', id: 'orangeboom' },
    'апельсиновый бум': { page: 'catalog.html', section: 'cupcakes', id: 'orangeboom' },
    'orange boom': { page: 'catalog.html', section: 'cupcakes', id: 'orangeboom' },
    
    'малиновий рай': { page: 'catalog.html', section: 'cupcakes', id: 'raspberryparadise' },
    'малиновый рай': { page: 'catalog.html', section: 'cupcakes', id: 'raspberryparadise' },
    'raspberry paradise': { page: 'catalog.html', section: 'cupcakes', id: 'raspberryparadise' },
    
    'пломбір': { page: 'catalog.html', section: 'cupcakes', id: 'plombir' },
    'пломбир': { page: 'catalog.html', section: 'cupcakes', id: 'plombir' },
    'ice cream': { page: 'catalog.html', section: 'cupcakes', id: 'plombir' },
    
    'райдуга': { page: 'catalog.html', section: 'cupcakes', id: 'rainbow' },
    'радуга': { page: 'catalog.html', section: 'cupcakes', id: 'rainbow' },
    'rainbow': { page: 'catalog.html', section: 'cupcakes', id: 'rainbow' },
    
    'джунглі': { page: 'catalog.html', section: 'cupcakes', id: 'jungle' },
    'джунгли': { page: 'catalog.html', section: 'cupcakes', id: 'jungle' },
    'jungle': { page: 'catalog.html', section: 'cupcakes', id: 'jungle' },
    
    'зоряна ніч': { page: 'catalog.html', section: 'cupcakes', id: 'starrynight' },
    'звездная ночь': { page: 'catalog.html', section: 'cupcakes', id: 'starrynight' },
    'starry night': { page: 'catalog.html', section: 'cupcakes', id: 'starrynight' },
    
    'бджілка': { page: 'catalog.html', section: 'cupcakes', id: 'bee' },
    'пчёлка': { page: 'catalog.html', section: 'cupcakes', id: 'bee' },
    'bee': { page: 'catalog.html', section: 'cupcakes', id: 'bee' },
    
    'перший поцілунок': { page: 'catalog.html', section: 'cupcakes', id: 'firstkiss' },
    'первый поцелуй': { page: 'catalog.html', section: 'cupcakes', id: 'firstkiss' },
    'first kiss': { page: 'catalog.html', section: 'cupcakes', id: 'firstkiss' },
    
    // Bento
    'пінгвін': { page: 'catalog.html', section: 'bento', id: 'penguin' },
    'пингвин': { page: 'catalog.html', section: 'bento', id: 'penguin' },
    'penguin': { page: 'catalog.html', section: 'bento', id: 'penguin' },
    
    'геймпад': { page: 'catalog.html', section: 'bento', id: 'gamepad' },
    'gamepad': { page: 'catalog.html', section: 'bento', id: 'gamepad' },
    
    'листівка': { page: 'catalog.html', section: 'bento', id: 'postcard' },
    'открытка': { page: 'catalog.html', section: 'bento', id: 'postcard' },
    'postcard': { page: 'catalog.html', section: 'bento', id: 'postcard' },
    
    'королівський гамбіт': { page: 'catalog.html', section: 'bento', id: 'queensgambit' },
    'королевский гамбит': { page: 'catalog.html', section: 'bento', id: 'queensgambit' },
    'queens gambit': { page: 'catalog.html', section: 'bento', id: 'queensgambit' },
    
    'зоопарк': { page: 'catalog.html', section: 'bento', id: 'zoo' },
    'zoo': { page: 'catalog.html', section: 'bento', id: 'zoo' },
    
    'крошки-кішки': { page: 'catalog.html', section: 'bento', id: 'kittens' },
    'крошки-кошки': { page: 'catalog.html', section: 'bento', id: 'kittens' },
    'kittens': { page: 'catalog.html', section: 'bento', id: 'kittens' },
    
    'феєрверк': { page: 'catalog.html', section: 'bento', id: 'fireworks' },
    'фейерверк': { page: 'catalog.html', section: 'bento', id: 'fireworks' },
    'fireworks': { page: 'catalog.html', section: 'bento', id: 'fireworks' },
    
    'королева': { page: 'catalog.html', section: 'bento', id: 'queen' },
    'queen': { page: 'catalog.html', section: 'bento', id: 'queen' },
    
    // Sets
    'гендер-паті': { page: 'catalog.html', section: 'sets', id: 'genderparty' },
    'гендер-пати': { page: 'catalog.html', section: 'sets', id: 'genderparty' },
    'gender party': { page: 'catalog.html', section: 'sets', id: 'genderparty' },
    
    'виїзне весілля': { page: 'catalog.html', section: 'sets', id: 'wedding' },
    'выездная свадьба': { page: 'catalog.html', section: 'sets', id: 'wedding' },
    'outdoor wedding': { page: 'catalog.html', section: 'sets', id: 'wedding' },
    
    'настолка': { page: 'catalog.html', section: 'sets', id: 'boardgame' },
    'board game': { page: 'catalog.html', section: 'sets', id: 'boardgame' },
    
    'бургер': { page: 'catalog.html', section: 'sets', id: 'burger' },
    'burger': { page: 'catalog.html', section: 'sets', id: 'burger' },
    
    'перше побачення': { page: 'catalog.html', section: 'sets', id: 'firstdate' },
    'первое свидание': { page: 'catalog.html', section: 'sets', id: 'firstdate' },
    'first date': { page: 'catalog.html', section: 'sets', id: 'firstdate' },
    
    'тім-білдінг': { page: 'catalog.html', section: 'sets', id: 'teambuilding' },
    'тим-билдинг': { page: 'catalog.html', section: 'sets', id: 'teambuilding' },
    'team building': { page: 'catalog.html', section: 'sets', id: 'teambuilding' },
    
    'вишневий сад': { page: 'catalog.html', section: 'sets', id: 'cherrygarden' },
    'вишнёвый сад': { page: 'catalog.html', section: 'sets', id: 'cherrygarden' },
    'cherry garden': { page: 'catalog.html', section: 'sets', id: 'cherrygarden' },
    
    'хард-рок': { page: 'catalog.html', section: 'sets', id: 'hardrock' },
    'hard rock': { page: 'catalog.html', section: 'sets', id: 'hardrock' },
    
    // Total search
    'new': { page: 'catalog.html', section: 'new-cakes'},
    'новинки': { page: 'catalog.html', section: 'new-cakes'},
    'новое': { page: 'catalog.html', section: 'new-cakes'},
    'нове': { page: 'catalog.html', section: 'new-cakes'},

    'торт': { page: 'catalog.html', section: 'cakes' },
    'торты': { page: 'catalog.html', section: 'cakes' },
    'cake': { page: 'catalog.html', section: 'cakes' },
    'cakes': { page: 'catalog.html', section: 'cakes' },
    
    'кекс': { page: 'catalog.html', section: 'cupcakes' },
    'капкейк': { page: 'catalog.html', section: 'cupcakes' },
    'cupcake': { page: 'catalog.html', section: 'cupcakes' },
    'cupcakes': { page: 'catalog.html', section: 'cupcakes' },
    
    'бенто': { page: 'catalog.html', section: 'bento' },
    'bento': { page: 'catalog.html', section: 'bento' },
    
    'набори': { page: 'catalog.html', section: 'sets' },
    'наборы': { page: 'catalog.html', section: 'sets' },
    'set': { page: 'catalog.html', section: 'sets' },
    'sets': { page: 'catalog.html', section: 'sets' },
    
    // Pages
    'контакти': { page: 'index.html', section: 'contacts' },
    'контакты': { page: 'index.html', section: 'contacts' },
    'contacts': { page: 'index.html', section: 'contacts' },
    
    'про нас': { page: 'index.html', section: 'about' },
    'о нас': { page: 'index.html', section: 'about' },
    'about': { page: 'index.html', section: 'about' },

    'історія': { page: 'index.html', section: 'about' },
    'история': { page: 'index.html', section: 'about' },
    'history': { page: 'index.html', section: 'about' },

    'відгуки': { page: 'index.html', section: 'review-container' },
    'отзывы': { page: 'index.html', section: 'review-container' },
    'reviews': { page: 'index.html', section: 'review-container' },

    'замовити': { page: 'order.html' },
    'заказать': { page: 'order.html' },
    'order': { page: 'order.html' },
};

function setLanguage(lang) {
  console.log('Setting language to:', lang);
  currentLang = lang;
  localStorage.setItem('language', lang);
  updateContent();
  
  document.querySelectorAll('.lang').forEach(btn => {
    btn.classList.toggle('active', btn.innerHTML.toLowerCase() === lang);
  });

  document.querySelectorAll('input[data-placeholder-en], textarea[data-placeholder-en]').forEach(input => {
    const placeholder = input.getAttribute(`data-placeholder-${lang}`);
    if (placeholder) {
      input.placeholder = placeholder;
    }
  });
}

function updateContent() {
  console.log('Updating content for:', currentLang);
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    console.log('Translating key:', key);
    
    const keys = key.split('.');
    let translation = translations[currentLang];
    
    for (let k of keys) {
      translation = translation?.[k];
    }
    
    if (translation) {
      element.innerHTML = translation;
      console.log('Translated to:', translation);
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
    updateContent();
    
    document.querySelectorAll('input[data-placeholder-en], textarea[data-placeholder-en]').forEach(input => {
        const placeholder = input.getAttribute(`data-placeholder-${currentLang}`);
        if (placeholder) {
            input.placeholder = placeholder;
        }
    });
});

function toggleLangDropdown() {
    const dropdown = document.querySelector('.lang-btns .dropdown-menu');
    if (dropdown) {
        dropdown.classList.remove('show');
    }
}

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.querySelectorAll('#navbarCake a[href^="#"]:not(.dropdown-toggle)').forEach(link => {
    link.addEventListener('click', function() {
        const navbarCollapse = document.getElementById('navbarCake');
        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
            const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
            if (bsCollapse) bsCollapse.hide();
        }
    });
});

const pendingSelection = {};

function selectPrice(id, price, quantity, img, unit, el) {
    pendingSelection[id] = { price, quantity, img, unit };

    const allItems = el.closest('.cake-prices').querySelectorAll('.price-item');
    allItems.forEach(item => item.classList.remove('selected'));
    el.classList.add('selected');
}

function addFromSelected(btn, id) {
    const selection = pendingSelection[id];

    if (!selection) {
        const message =
            typeof currentLang !== 'undefined' && currentLang === 'ua' ? 'Будь ласка, оберіть кількість!' :
            typeof currentLang !== 'undefined' && currentLang === 'ru' ? 'Пожалуйста, выберите количество!' :
            'Please select quantity!';
        alert(message);
        return;
    }

    addToCart(id, selection.price, selection.quantity, selection.img, selection.unit);

    const p = btn.querySelector('p');
    if (p) {
        const original = p.textContent;
        p.textContent = '✓';
        setTimeout(() => p.textContent = original, 1000);
    }

    delete pendingSelection[id];
    const card = btn.closest('.card');
    if (card) {
        card.querySelectorAll('.price-item').forEach(item => item.classList.remove('selected'));
    }
}

function getDiscountedPrice(id, price) {
    if (discountItems[id]) {
        return Math.round(price * (1 - discountItems[id] / 100));
    }
    return price;
}

function getDiscountPercent(id) {
    return discountItems[id] || 0;
}

// ========== МОДАЛКА "ДОДАНО ДО КОШИКУ" ==========

function showAddedModal(id, img, price, quantity, unit) {
    const preview = document.getElementById('added-item-preview');
    const discount = getDiscountPercent(id);
    const totalPrice = price;
    const totalFinalPrice = getDiscountedPrice(id, price);

    if (preview) {
        preview.innerHTML = `
            <img src="${img}" style="width:160px;height:160px;object-fit:cover;border-radius:10%;">
            <br>
            <span>${getProductName(id)}</span>
            <br>
            <span>
                ${quantity} ${getUnit(unit, quantity)} — 
                ${discount ? `<s>${totalPrice}₴</s> <b>${totalFinalPrice}₴</b>` : `${totalPrice}₴`}
            </span>
        `;
    }
    const modal = document.getElementById('addToCartModal');
    if (modal) modal.style.display = 'flex';
}

function continueShoppingModal() {
    const modal = document.getElementById('addToCartModal');
    if (modal) modal.style.display = 'none';
}

function goToCartModal() {
    window.location.href = 'cart.html';
}

function updateCartCounter() {
    const cart = getCart();
    const total = cart.reduce((sum, item) => sum + (Number(item.sets) || 0), 0);
    const counter = document.getElementById('cart-counter');
    if (counter) {
        counter.textContent = total;
    }
}

function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function getProductName(id) {
    const mapping = productKeys[id];
    if (!mapping) return id;
    return translations[currentLang][mapping.section][mapping.key];
}

function addToCart(id, price, quantity, img, unit) {
    const cart = getCart();
    const finalPrice = getDiscountedPrice(id, Number(price));
    const originalPrice = Number(price);

    const existing = cart.find(item =>
        item.id === id && item.quantity === Number(quantity)
    );

    if (existing) {
        existing.sets += 1;
    } else {
        cart.push({
            id,
            price: finalPrice,
            originalPrice: originalPrice,
            quantity: Number(quantity),
            sets: 1,
            img,
            unit
        });
    }

    saveCart(cart);
    updateCartCounter();
    showAddedModal(id, img, originalPrice, Number(quantity), unit);
}

function openCheckoutModal() {
    const cart = getCart();
    if (!cart || cart.length === 0) return;

    const preview = document.getElementById('checkout-items-preview');
    if (preview) {
        preview.innerHTML = cart.map(item => {
            const hasDiscount = item.originalPrice && item.originalPrice !== item.price;
            return `
            <div class="checkout-item">
                <img src="${item.img}" alt="${getProductName(item.id)}" class="checkout-item-img">
                <span>${getProductName(item.id)}</span>
                <span>${item.quantity} ${getUnit(item.unit, item.quantity)} × ${item.sets}</span>
                <span>
                    ${hasDiscount ? `<s>${item.originalPrice}₴</s> ` : ''}
                    ${item.price}₴
                </span>
            </div>
        `}).join('');
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.sets), 0);
    const totalSum = document.getElementById('totalSum');
    if (totalSum) totalSum.textContent = `${total}₴`;
    const checkoutTotal = document.getElementById('checkout-total');
    if (checkoutTotal) checkoutTotal.textContent = `${total}₴`;

    document.getElementById('checkoutModal').style.display = 'block';
}

function closeCheckoutModal() {
    const modal = document.getElementById('checkoutModal');
    if (modal) modal.style.display = 'none';
}

window.addEventListener('click', function(e) {
    const checkoutModal = document.getElementById('checkoutModal');
    if (checkoutModal && e.target === checkoutModal) closeCheckoutModal();

    const addedModal = document.getElementById('addToCartModal');
    if (addedModal && e.target === addedModal) addedModal.style.display = 'none';
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeCheckoutModal();
        continueShoppingModal();
    }
});

const checkoutForm = document.getElementById('checkoutForm');
if (checkoutForm) {
    checkoutForm.addEventListener('submit', function(e) {
        const cart = getCart();

        const orderText = cart.map(item => {
            const unitLabel = getUnit(item.unit || 'pcs', item.quantity);
            const hasDiscount = item.originalPrice && item.originalPrice !== item.price;
            return `${getProductName(item.id)} ${item.quantity} ${unitLabel} = ${item.price}₴${hasDiscount ? ' (знижка!)' : ''}`;
        }).join(' | ');

        const total = cart.reduce((sum, item) =>
            sum + (item.price * item.sets), 0
        );

        document.getElementById('orderItemsHidden').value = orderText;
        document.getElementById('totalPriceHidden').value = `${total}₴`;

        localStorage.removeItem('cart');
        updateCartCounter();
    });
}

const checkoutBtn = document.getElementById('order-btn');
if (checkoutBtn) {
    checkoutBtn.addEventListener('click', openCheckoutModal);
}

window.addEventListener('load', function() {
    updateCartCounter();

    Object.keys(discountItems).forEach(id => {
        const card = document.querySelector(`[data-product-id="${id}"]`);
        if (card) {
            const body = card.querySelector('.card-body');
            if (body && !body.querySelector('.hotOffer')) {
                const span = document.createElement('span');
                span.className = 'hotOffer';
                span.setAttribute('data-i18n', 'catalog.hot');
                span.textContent = 'HOT🔥';
                body.prepend(span);
            }
        }
    });
    updateContent();
});

function openModal(cakeId) {
    const modal = document.getElementById('ingredientModal');
    const data = ingredients[cakeId];
    const lang = currentLang;
    
    if (!data) return;
    
    document.getElementById('modalTitle').textContent = data.title[lang];
    
    const ingredientsList = data.items[lang]
        .map(item => `<li>${item}</li>`)
        .join('');
    
    document.getElementById('modalIngredients').innerHTML = `<ul>${ingredientsList}</ul>`;
    
    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('ingredientModal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('ingredientModal');
    if (event.target == modal) {
        closeModal();
    }
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

function searchSite(event) {
    event.preventDefault();
    
    const query = document.getElementById('searchInput').value.trim().toLowerCase();
    
    if (!query) return;
    
    const result = searchDatabase[query];
    
    if (result) {
        if (result.section) {
          window.location.href = `${result.page}#${result.section}`;
        } else {
          window.location.href = result.page;
        }
        
    } else {
        alert(
            currentLang === 'ua' ? 'Нічого не знайдено. Спробуйте інший запит.' :
            currentLang === 'ru' ? 'Ничего не найдено. Попробуйте другой запрос.' :
            'Nothing found. Try another query.'
        );
    }
    
    document.getElementById('searchInput').value = '';
}

window.addEventListener('scroll', function() {
    const btn = document.getElementById('scrollTopBtn');
    if (btn) {
        btn.style.display = window.scrollY > 300 ? 'block' : 'none';
    }
});
