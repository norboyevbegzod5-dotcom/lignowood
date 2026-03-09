export type Locale = "ru" | "en" | "uz";

export const dictionaries = {
  ru: {
    meta: {
      name: "Сухая древесина ореха",
      description: "Камерная сушка, красивые текстуры, большие размеры. Доски и слэбы в наличии в Ташкенте.",
    },
    nav: {
      benefits: "Преимущества",
      catalog: "Ассортимент",
      gallery: "Галерея",
      location: "Контакты",
    },
    hero: {
      title: "Сухая древесина ореха для мебели и столешниц",
      subtitle: "Камерная сушка, красивые текстуры, большие размеры. Доски и слэбы в наличии в Ташкенте.",
      catalogBtn: "Смотреть каталог",
      telegramBtn: "Перейти в Telegram",
      priceBtn: "Получить прайс",
    },
    benefits: {
      title: "Почему выбирают нас",
      subtitle: "Мы предлагаем только качественный материал, подготовленный с соблюдением всех технологий.",
      items: [
        { title: "Камерная сушка", desc: "Строгое соблюдение технологии, отсутствие внутренних напряжений." },
        { title: "Влажность 8–10%", desc: "Идеально подходит для производства мебели и столешниц." },
        { title: "Натуральный рисунок", desc: "Ярко выраженная текстура и благородный цвет грецкого ореха." },
        { title: "Большие размеры", desc: "В наличии широкие слэбы и длинные доски для масштабных проектов." },
        { title: "Универсальность", desc: "Подходит как для столярных мастерских, так и для частных проектов." },
        { title: "Склад в Ташкенте", desc: "Приезжайте, смотрите вживую и выбирайте лучший материал." }
      ]
    },
    catalog: {
      title: "Ассортимент древесины",
      subtitle: "Ознакомьтесь с основными позициями. Точное наличие и размеры обновляются каждый день.",
      items: [
        { name: "Слэбы ореха", desc: "Уникальные слэбы с живым краем для столов-рек и барных стоек.", sizes: "Длина до 3м, ширина 50-90см" },
        { name: "Мебельная доска", desc: "Обрезная и необрезная доска для фасадов, тумб и корпусной мебели.", sizes: "Толщина 30/50мм" },
        { name: "Доска под столешницы", desc: "Широкие доски камерной сушки, готовые к склейке в щит.", sizes: "Толщина 40/50мм" },
        { name: "Эксклюзивные текстуры", desc: "Капы, сувели и доски с редким рисунком для акцентных изделий.", sizes: "Разные размеры" }
      ],
      checkAvailability: "Узнать наличие",
      viewTelegram: "Смотреть в Telegram",
    },
    gallery: {
      title: "Наш склад",
      desc: "Можно приехать на склад в Ташкенте и выбрать материал вживую. Мы поможем подобрать идеальные доски или слэбы под ваш проект.",
      viewAddress: "Смотреть адрес",
    },
    audience: {
      title: "Для кого подходит наша древесина?",
      desc: "Мы поставляем качественный материал как для крупных производств, так и для штучных авторских проектов. Влажность и геометрия доски соответствуют высоким стандартам.",
      items: [
        "Мебельные цеха",
        "Столярные мастерские",
        "Дизайнеры интерьеров",
        "Производители столов",
        "Частные мастера"
      ],
      statsTitle: "100+",
      statsDesc: "Довольных мастеров и производств по всему Узбекистану"
    },
    howItWorks: {
      title: "Как мы работаем",
      desc: "Простой и прозрачный процесс заказа материала для вашего проекта.",
      items: [
        { title: "Заявка", desc: "Оставляете заявку на сайте или пишете нам в Telegram." },
        { title: "Подбор", desc: "Получаете актуальные фото, размеры и наличие на складе." },
        { title: "Осмотр", desc: "Приезжаете на склад в Ташкенте для выбора материала вживую." },
        { title: "Покупка", desc: "Оплачиваете и забираете идеальную древесину для вашего проекта." }
      ]
    },
    telegramCta: {
      title: "Подпишитесь на Telegram-канал с актуальным наличием",
      desc: "В Telegram мы публикуем новые поступления, редкие текстуры, слэбы и актуальное наличие. Будьте первыми, кто заберет лучший материал!",
      btn: "Перейти в Telegram"
    },
    leadForm: {
      title: "Оставить заявку",
      desc: "Заполните форму, и мы свяжемся с вами, чтобы отправить актуальные фото, размеры и цены.",
      name: "Имя *",
      phone: "Телефон *",
      interest: "Что вас интересует? *",
      interestOptions: [
        { value: "", label: "Выберите из списка" },
        { value: "Слэбы", label: "Слэбы ореха" },
        { value: "Мебельная доска", label: "Мебельная доска" },
        { value: "Доска под столешницы", label: "Доска под столешницы" },
        { value: "Эксклюзив", label: "Эксклюзивные текстуры" },
        { value: "Другое", label: "Другое" }
      ],
      comment: "Комментарий (необязательно)",
      commentPlaceholder: "Напишите примерные размеры или объем...",
      btnIdle: "Получить прайс и наличие",
      btnSubmitting: "Отправка...",
      btnSuccess: "Заявка отправлена!",
      successMsg: "Спасибо! Мы свяжемся с вами в ближайшее время."
    },
    location: {
      title: "Контакты и адрес",
      desc: "Склад находится в Ташкенте. Можно приехать, посмотреть вживую и выбрать подходящую древесину лично.",
      addressTitle: "Адрес склада",
      address: "г. Ташкент, ул. Сайрам, 7-й проезд",
      scheduleTitle: "Режим работы",
      schedule: "Пн-Сб: 09:00 - 18:00\nВс: выходной",
      phoneTitle: "Телефон",
      tgTitle: "Telegram",
      tgLink: "Написать нам",
      loading: "Карта загружается..."
    },
    footer: {
      contacts: "Контакты",
      socials: "Социальные сети",
      rights: "Все права защищены."
    },
    popup: {
      step1: {
        title: "Оставьте заявку",
        desc: "И мы подберем идеальный материал для вашего проекта",
      },
      step2: {
        title: "Получите прайс и наличие",
        desc: "Мы отправим вам актуальные цены и фото со склада",
      },
      step3: {
        title: "Посмотреть склад и прайс",
        desc: "Оставьте контакты, чтобы получить полный каталог и цены",
      },
      namePlaceholder: "Ваше имя",
      phonePlaceholder: "Ваш телефон",
      submitBtn: "Отправить",
      submittingBtn: "Отправка...",
      successMsg: "Спасибо! Мы скоро свяжемся с вами.",
    },
    mobileCta: "Узнать наличие в Telegram"
  },
  en: {
    meta: {
      name: "Dry Walnut Wood",
      description: "Kiln-dried, beautiful textures, large sizes. Boards and slabs in stock in Tashkent.",
    },
    nav: {
      benefits: "Benefits",
      catalog: "Assortment",
      gallery: "Gallery",
      location: "Contacts",
    },
    hero: {
      title: "Dry Walnut Wood for Furniture and Countertops",
      subtitle: "Kiln-dried, beautiful textures, large sizes. Boards and slabs in stock in Tashkent.",
      catalogBtn: "View Catalog",
      telegramBtn: "Go to Telegram",
      priceBtn: "Get Price List",
    },
    benefits: {
      title: "Why Choose Us",
      subtitle: "We offer only high-quality material prepared in compliance with all technologies.",
      items: [
        { title: "Kiln Drying", desc: "Strict adherence to technology, no internal stress." },
        { title: "Humidity 8–10%", desc: "Ideal for furniture and countertop production." },
        { title: "Natural Pattern", desc: "Pronounced texture and noble color of walnut." },
        { title: "Large Sizes", desc: "Wide slabs and long boards available for large-scale projects." },
        { title: "Versatility", desc: "Suitable for both carpentry workshops and private projects." },
        { title: "Warehouse in Tashkent", desc: "Come, see live and choose the best material." }
      ]
    },
    catalog: {
      title: "Wood Assortment",
      subtitle: "Check out our main positions. Exact availability and sizes are updated daily.",
      items: [
        { name: "Walnut Slabs", desc: "Unique live-edge slabs for river tables and bar counters.", sizes: "Length up to 3m, width 50-90cm" },
        { name: "Furniture Board", desc: "Edged and unedged boards for facades, cabinets, and cabinet furniture.", sizes: "Thickness 30/50mm" },
        { name: "Countertop Board", desc: "Wide kiln-dried boards ready for edge-gluing.", sizes: "Thickness 40/50mm" },
        { name: "Exclusive Textures", desc: "Burls and boards with rare patterns for accent pieces.", sizes: "Various sizes" }
      ],
      checkAvailability: "Check Availability",
      viewTelegram: "View in Telegram",
    },
    gallery: {
      title: "Our Warehouse",
      desc: "You can visit our warehouse in Tashkent and choose the material live. We will help you select the perfect boards or slabs for your project.",
      viewAddress: "View Address",
    },
    audience: {
      title: "Who is our wood for?",
      desc: "We supply high-quality material for both large productions and custom author projects. The humidity and board geometry meet high standards.",
      items: [
        "Furniture factories",
        "Carpentry workshops",
        "Interior designers",
        "Table manufacturers",
        "Private craftsmen"
      ],
      statsTitle: "100+",
      statsDesc: "Satisfied craftsmen and productions throughout Uzbekistan"
    },
    howItWorks: {
      title: "How We Work",
      desc: "A simple and transparent process for ordering material for your project.",
      items: [
        { title: "Request", desc: "Leave a request on the website or write to us on Telegram." },
        { title: "Selection", desc: "Get actual photos, sizes, and warehouse availability." },
        { title: "Inspection", desc: "Visit our warehouse in Tashkent to choose the material live." },
        { title: "Purchase", desc: "Pay and pick up the perfect wood for your project." }
      ]
    },
    telegramCta: {
      title: "Subscribe to our Telegram channel for current stock",
      desc: "In Telegram, we publish new arrivals, rare textures, slabs, and current availability. Be the first to grab the best material!",
      btn: "Go to Telegram"
    },
    leadForm: {
      title: "Leave a Request",
      desc: "Fill out the form and we will contact you to send actual photos, sizes, and prices.",
      name: "Name *",
      phone: "Phone *",
      interest: "What are you interested in? *",
      interestOptions: [
        { value: "", label: "Select from list" },
        { value: "Слэбы", label: "Walnut Slabs" },
        { value: "Мебельная доска", label: "Furniture Board" },
        { value: "Доска под столешницы", label: "Countertop Board" },
        { value: "Эксклюзив", label: "Exclusive Textures" },
        { value: "Другое", label: "Other" }
      ],
      comment: "Comment (optional)",
      commentPlaceholder: "Write approximate sizes or volume...",
      btnIdle: "Get Price List and Availability",
      btnSubmitting: "Sending...",
      btnSuccess: "Request Sent!",
      successMsg: "Thank you! We will contact you shortly."
    },
    location: {
      title: "Contacts and Address",
      desc: "The warehouse is located in Tashkent. You can come, see live and choose suitable wood personally.",
      addressTitle: "Warehouse Address",
      address: "Tashkent, Sayram str., 7th passage",
      scheduleTitle: "Working Hours",
      schedule: "Mon-Sat: 09:00 - 18:00\nSun: closed",
      phoneTitle: "Phone",
      tgTitle: "Telegram",
      tgLink: "Write to us",
      loading: "Loading map..."
    },
    footer: {
      contacts: "Contacts",
      socials: "Social Networks",
      rights: "All rights reserved."
    },
    popup: {
      step1: {
        title: "Leave a Request",
        desc: "And we will select the perfect material for your project",
      },
      step2: {
        title: "Get Price and Availability",
        desc: "We will send you actual prices and photos from the warehouse",
      },
      step3: {
        title: "View Warehouse and Price",
        desc: "Leave your contacts to get a full catalog and prices",
      },
      namePlaceholder: "Your Name",
      phonePlaceholder: "Your Phone",
      submitBtn: "Send",
      submittingBtn: "Sending...",
      successMsg: "Thank you! We will contact you soon.",
    },
    mobileCta: "Check availability in Telegram"
  },
  uz: {
    meta: {
      name: "Quruq yong'oq yog'ochi",
      description: "Kamera usulida quritilgan, chiroyli teksturalar, katta o'lchamlar. Toshkentda taxta va sleblar omborda mavjud.",
    },
    nav: {
      benefits: "Afzalliklar",
      catalog: "Assortiment",
      gallery: "Galereya",
      location: "Aloqa",
    },
    hero: {
      title: "Mebel va stoleshnitsalar uchun quruq yong'oq yog'ochi",
      subtitle: "Kamera usulida quritilgan, chiroyli teksturalar, katta o'lchamlar. Toshkentda taxta va sleblar omborda mavjud.",
      catalogBtn: "Katalogni ko'rish",
      telegramBtn: "Telegramga o'tish",
      priceBtn: "Praysni olish",
    },
    benefits: {
      title: "Nima uchun bizni tanlashadi",
      subtitle: "Biz faqat barcha texnologiyalarga rioya qilingan holda tayyorlangan yuqori sifatli materiallarni taklif etamiz.",
      items: [
        { title: "Kamerali quritish", desc: "Texnologiyaga qat'iy rioya qilish, ichki kuchlanishlarning yo'qligi." },
        { title: "Namlik 8–10%", desc: "Mebel va stoleshnitsalar ishlab chiqarish uchun juda mos." },
        { title: "Tabiiy naqsh", desc: "Yong'oqning yorqin teksturasi va asil rangi." },
        { title: "Katta o'lchamlar", desc: "Yirik loyihalar uchun keng sleblar va uzun taxtalar mavjud." },
        { title: "Universallik", desc: "Ham duradgorlik ustaxonalari, ham shaxsiy loyihalar uchun mos." },
        { title: "Toshkentda ombor", desc: "Kelib, jonli ko'ring va eng yaxshi materialni tanlang." }
      ]
    },
    catalog: {
      title: "Yog'och assortimenti",
      subtitle: "Asosiy pozitsiyalar bilan tanishing. Aniq mavjudlik va o'lchamlar har kuni yangilanadi.",
      items: [
        { name: "Yong'oq sleblari", desc: "Daryo-stollar va bar stoykalari uchun noyob tirik chekkali sleblar.", sizes: "Uzunligi 3m gacha, kengligi 50-90sm" },
        { name: "Mebel taxtasi", desc: "Fasadlar, tumbalar va korpus mebellari uchun qirralangan va cheti kesilmagan taxtalar.", sizes: "Qalinligi 30/50mm" },
        { name: "Stoleshnitsa uchun taxta", desc: "Yopishtirishga tayyor bo'lgan keng kamerali quritilgan taxtalar.", sizes: "Qalinligi 40/50mm" },
        { name: "Eksklyuziv teksturalar", desc: "Urg'u beriladigan buyumlar uchun kamyob naqshli taxtalar va kaplar.", sizes: "Turli o'lchamlar" }
      ],
      checkAvailability: "Mavjudligini bilish",
      viewTelegram: "Telegramda ko'rish",
    },
    gallery: {
      title: "Bizning omborimiz",
      desc: "Siz Toshkentdagi omborimizga kelib, materialni jonli ravishda tanlashingiz mumkin. Loyihangiz uchun ideal taxta yoki sleblarni tanlashda yordam beramiz.",
      viewAddress: "Manzilni ko'rish",
    },
    audience: {
      title: "Bu yog'och kimlarga mos keladi?",
      desc: "Biz ham yirik ishlab chiqarishlar, ham dona mualliflik loyihalari uchun sifatli material yetkazib beramiz. Taxtaning namligi va geometriyasi yuqori standartlarga javob beradi.",
      items: [
        "Mebel sexlari",
        "Duradgorlik ustaxonalari",
        "Interyer dizaynerlari",
        "Stol ishlab chiqaruvchilar",
        "Xususiy ustalar"
      ],
      statsTitle: "100+",
      statsDesc: "O'zbekiston bo'ylab mamnun ustalar va ishlab chiqarishlar"
    },
    howItWorks: {
      title: "Biz qanday ishlaymiz",
      desc: "Loyihangiz uchun material buyurtma qilishning oddiy va shaffof jarayoni.",
      items: [
        { title: "Ariza", desc: "Saytda ariza qoldiring yoki bizga Telegramda yozing." },
        { title: "Tanlov", desc: "Haqiqiy fotosuratlar, o'lchamlar va ombordagi mavjudlikni oling." },
        { title: "Ko'zdan kechirish", desc: "Materialni jonli tanlash uchun Toshkentdagi omborimizga keling." },
        { title: "Xarid qilish", desc: "To'lov qiling va loyihangiz uchun ideal yog'ochni olib keting." }
      ]
    },
    telegramCta: {
      title: "Joriy mavjudlik haqida bilish uchun Telegram-kanalimizga obuna bo'ling",
      desc: "Telegramda biz yangi kelgan materiallar, noyob teksturalar, sleblar va joriy mavjudlikni e'lon qilamiz. Eng yaxshi materialni birinchilardan bo'lib oling!",
      btn: "Telegramga o'tish"
    },
    leadForm: {
      title: "Ariza qoldirish",
      desc: "Shaklni to'ldiring, va biz sizga dolzarb rasmlar, o'lchamlar va narxlarni yuborish uchun bog'lanamiz.",
      name: "Ism *",
      phone: "Telefon *",
      interest: "Sizni nima qiziqtiradi? *",
      interestOptions: [
        { value: "", label: "Ro'yxatdan tanlang" },
        { value: "Слэбы", label: "Yong'oq sleblari" },
        { value: "Мебельная доска", label: "Mebel taxtasi" },
        { value: "Доска под столешницы", label: "Stoleshnitsa uchun taxta" },
        { value: "Эксклюзив", label: "Eksklyuziv teksturalar" },
        { value: "Другое", label: "Boshqa" }
      ],
      comment: "Sharh (ixtiyoriy)",
      commentPlaceholder: "Taxminiy o'lchamlar yoki hajmni yozing...",
      btnIdle: "Prays va mavjudlikni olish",
      btnSubmitting: "Yuborilmoqda...",
      btnSuccess: "Ariza yuborildi!",
      successMsg: "Rahmat! Tez orada siz bilan bog'lanamiz."
    },
    location: {
      title: "Aloqa va manzil",
      desc: "Ombor Toshkentda joylashgan. Siz kelib, jonli ko'rib va mos yog'ochni shaxsan tanlashingiz mumkin.",
      addressTitle: "Ombor manzili",
      address: "Toshkent sh., Sayram ko'chasi, 7-tor ko'cha",
      scheduleTitle: "Ish vaqti",
      schedule: "Dush-Shan: 09:00 - 18:00\nYakshanba: dam olish kuni",
      phoneTitle: "Telefon",
      tgTitle: "Telegram",
      tgLink: "Bizga yozish",
      loading: "Xarita yuklanmoqda..."
    },
    footer: {
      contacts: "Aloqa",
      socials: "Ijtimoiy tarmoqlar",
      rights: "Barcha huquqlar himoyalangan."
    },
    popup: {
      step1: {
        title: "Ariza qoldiring",
        desc: "Va biz loyihangiz uchun ideal materialni tanlab beramiz",
      },
      step2: {
        title: "Prays va mavjudlikni oling",
        desc: "Biz sizga dolzarb narxlar va ombordan rasmlarni yuboramiz",
      },
      step3: {
        title: "Ombor va praysni ko'rish",
        desc: "To'liq katalog va narxlarni olish uchun aloqa ma'lumotlaringizni qoldiring",
      },
      namePlaceholder: "Ismingiz",
      phonePlaceholder: "Telefoningiz",
      submitBtn: "Yuborish",
      submittingBtn: "Yuborilmoqda...",
      successMsg: "Rahmat! Tez orada siz bilan bog'lanamiz.",
    },
    mobileCta: "Telegramda mavjudligini bilish"
  }
} as const;

export type Dictionary = typeof dictionaries[Locale];
