window.TASKS = window.TASKS || [];
window.TASKS.push(...[
  {
    id:'t1', week:1, subject:'IED', title:'Проводники, кабели и соединения',
    goal:'Понять, из чего состоит электрический кабель, что такое проводник, изоляция и сечение и почему эти понятия важны для безопасности.',
    path:{min:'15 мин: теория RU → схема → 2 задания → итоговый ответ',normal:'25–35 мин: пройти все вкладки, включая испанский и видео',deep:'+10 мин: выполнить дополнительное наблюдение за маркировкой кабеля без разборки оборудования'},
    learn:'conductor, cable, hilo, sección, aislamiento, borne',
    theoryRu:'Электрический проводник — материал, по которому электрический заряд может перемещаться достаточно легко. В бытовой проводке чаще всего используется медь.\n\nКабель — это не просто «провод». Он может содержать одну или несколько проводящих жил, каждая из которых изолирована, а сверху может быть общая защитная оболочка. Изоляция не даёт току уходить туда, куда он не должен, и защищает человека от контакта с проводником.\n\nСечение жилы измеряют в квадратных миллиметрах — мм². Это площадь поперечного среза проводника. Чем больше ток должен проходить по линии, тем важнее правильно выбрать сечение: слишком тонкий проводник может перегреваться.\n\nСоединения проводников выполняют в предназначенных для этого клеммах и коробках. Дома мы только изучаем устройство и обозначения — ничего не вскрываем и не подключаем к сети 230 В.',
    theoryEs:'Un conductor eléctrico es un material por el que la corriente puede circular con facilidad. En las instalaciones domésticas suele utilizarse cobre.\n\nUn cable puede contener uno o varios conductores aislados y, además, una cubierta exterior de protección. El aislamiento evita contactos no deseados y protege a las personas.\n\nLa sección del conductor se expresa en milímetros cuadrados (mm²) y representa el área de un corte transversal. Si un conductor es demasiado fino para la corriente que debe transportar, puede calentarse en exceso.\n\nLas conexiones se realizan mediante bornes y dentro de cajas adecuadas. En casa solo estudiamos los conceptos: no manipulamos instalaciones de 230 V.',
    vocab:[
      {es:'conductor',ru:'проводник',example:'El conductor suele ser de cobre.'},
      {es:'cable',ru:'кабель',example:'El cable contiene uno o varios conductores.'},
      {es:'hilo',ru:'жила / отдельный провод',example:'Un hilo puede ser rígido.'},
      {es:'sección',ru:'сечение',example:'La sección se mide en mm².'},
      {es:'aislamiento',ru:'изоляция',example:'El aislamiento protege el conductor.'},
      {es:'borne',ru:'клемма',example:'La conexión se realiza en un borne.'}
    ],
    visual:{title:'Из чего состоит кабель',kind:'flow',nodes:['Медная жила — conduce la corriente','Изоляция — evita contactos','Оболочка — protege mecánicamente'],note:'Сечение относится к проводящей жиле и выражается в мм².'},
    videoTitle:'UT01. Los conductores eléctricos — EducaMadrid',
    videoUrl:'https://mediateca.educa.madrid.org/video/eudstsozfuvf4re7',
    videoNote:'Учебное видео на испанском. Хорошо совпадает с темой FP: проводники, изоляция, гибкие/жёсткие провода, сечение и цветовая маркировка.',
    videoQuestions:['Какие два металла в ролике названы как основные материалы проводников?','Что автор ролика называет sección del conductor?'],
    practice:[
      {id:'p1',type:'mcq',q:'Какой материал чаще всего используют как проводник в бытовой проводке?',options:['Пластик','Медь','Стекло','Резина'],answer:1,feedback:'Пластик и резина чаще выполняют роль изоляционных материалов, а проводящая жила обычно медная.'},
      {id:'p2',type:'mcq',q:'Что означает маркировка 2,5 mm² применительно к проводнику?',options:['Длина кабеля','Диаметр внешней оболочки','Площадь поперечного сечения жилы','Допустимое напряжение'],answer:2,feedback:'mm² — единица площади, поэтому речь о поперечном сечении проводящей жилы.'},
      {id:'p3',type:'text',q:'Почему слишком маленькое сечение проводника при большой нагрузке может быть опасно?'}
    ],
    question:'Объясни своими словами разницу между conductor и cable. Обязательно упомяни изоляцию и сечение.',
    needle:'изоляц',
    challenge:'Не разбирая ничего, найди на безопасно доступном кабеле маркировку. Запиши всё, что удаётся прочитать, и попробуй определить, есть ли там указание на сечение.'
  },
  {
    id:'t2', week:1, subject:'CA I', title:'Числа и порядок действий',
    goal:'Научиться без ошибок выполнять комбинированные вычисления — навык, который затем понадобится в формулах электротехники.',
    path:{min:'15 мин: теория RU → схема порядка действий → 2 примера',normal:'25–30 мин: + испанский, видео и полный тренажёр',deep:'+10 мин: составить собственный технический пример с несколькими действиями'},
    learn:'número entero, paréntesis, multiplicación, división, suma, resta',
    theoryRu:'В технических расчётах недостаточно просто ввести числа в калькулятор: нужно понимать, в каком порядке выполняются действия.\n\nСначала считаются выражения в скобках. Затем — умножение и деление слева направо. После этого — сложение и вычитание слева направо. Если позже появятся степени, они выполняются после скобок и до умножения.\n\nНапример: 18 − 3 × 4 + 2. Сначала 3 × 4 = 12. Затем 18 − 12 + 2 = 8. Если начать со сложения или вычитания, получится неверный результат.\n\nПолезная привычка — записывать хотя бы один промежуточный шаг: в электротехнических формулах это сильно снижает количество случайных ошибок.',
    theoryEs:'En los cálculos técnicos no basta con introducir números en una calculadora: hay que comprender el orden de las operaciones.\n\nPrimero se resuelven los paréntesis. Después, multiplicaciones y divisiones de izquierda a derecha. Finalmente, sumas y restas de izquierda a derecha. Si aparecen potencias, se calculan después de los paréntesis y antes de multiplicar.\n\nEjemplo: 18 − 3 × 4 + 2. Primero 3 × 4 = 12. Después 18 − 12 + 2 = 8.\n\nEs útil escribir los pasos intermedios para detectar errores y poder explicar el procedimiento.',
    vocab:[
      {es:'número entero',ru:'целое число',example:'−3 es un número entero.'},
      {es:'paréntesis',ru:'скобки',example:'Primero resolvemos los paréntesis.'},
      {es:'multiplicación',ru:'умножение',example:'La multiplicación se hace antes que la suma.'},
      {es:'división',ru:'деление',example:'Multiplicación y división tienen la misma prioridad.'},
      {es:'suma',ru:'сложение',example:'La suma se hace al final.'},
      {es:'resta',ru:'вычитание',example:'La resta se resuelve de izquierda a derecha.'}
    ],
    visual:{title:'Порядок действий',kind:'flow',nodes:['1. ( ) — скобки','2. ×  ÷ — умножение и деление','3. +  − — сложение и вычитание'],note:'Действия одного уровня выполняются слева направо.'},
    videoTitle:'Operaciones combinadas con números enteros — Matemáticas profe Alex',
    videoUrl:'https://www.youtube.com/watch?v=Z_tC5AuqKSI',
    videoNote:'Короткое объяснение и пример на испанском; в конце есть упражнение для самостоятельной проверки.',
    videoQuestions:['Какой порядок действий использует преподаватель в примере?','Что нужно делать, если в выражении несколько действий одинакового приоритета?'],
    practice:[
      {id:'p1',type:'number',q:'18 − 3 × 4 + 2 = ?',answer:8,feedback:'Сначала 3×4=12, затем 18−12+2=8.'},
      {id:'p2',type:'number',q:'(24 − 8) ÷ 4 + 7 = ?',answer:11,feedback:'Скобки: 16. Деление: 4. Затем +7 = 11.'},
      {id:'p3',type:'mcq',q:'Почему в выражении 10 + 2 × 5 сначала считается умножение?',options:['Потому что 2 меньше 10','Потому что умножение имеет более высокий приоритет','Потому что умножение стоит справа','Это необязательно'],answer:1,feedback:'Приоритет действий задаётся математическими правилами, а не величиной чисел.'}
    ],
    question:'Реши 30 − 2 × (4 + 3) и коротко объясни порядок действий.',
    needle:'16',
    challenge:'Составь собственное выражение из 4–5 действий со скобками так, чтобы ответ получился целым числом. Реши его и проверь калькулятором.'
  },
  {
    id:'t3', week:1, subject:'IT', title:'Телекоммуникации в здании',
    goal:'Увидеть здание как систему передачи информации и различать основные среды передачи: коаксиальный кабель, витую пару и оптоволокно.',
    path:{min:'15 мин: теория RU → схема здания → словарь → итог',normal:'25–35 мин: + испанский, видео об оптоволокне и практика',deep:'+10 мин: нарисовать путь домашнего интернета от провайдера до устройства'},
    learn:'ICT, coaxial, par trenzado, fibra óptica, toma, red',
    theoryRu:'В современном здании есть не только силовые электрические линии, которые передают энергию, но и телекоммуникационные линии, которые передают информацию. Это интернет, телевидение, телефония, домофон, камеры и другие системы.\n\nВ Испании для общей телекоммуникационной инфраструктуры здания часто используется сокращение ICT — Infraestructuras Comunes de Telecomunicaciones. Сигнал приходит в здание, распределяется и по кабелю попадает к конкретной точке или устройству.\n\nОсновные среды передачи, с которыми Миша будет встречаться на курсе: коаксиальный кабель, витая пара и оптоволокно. У них разное устройство и назначение. Оптоволокно передаёт информацию светом и почти не чувствительно к электромагнитным помехам.\n\nРабота монтажника — не просто протянуть кабель: важно выбрать трассу, не повредить линию, правильно выполнить соединения, промаркировать их и проверить качество передачи.',
    theoryEs:'En un edificio moderno no solo existen líneas eléctricas de potencia, que transportan energía, sino también líneas de telecomunicaciones, que transportan información: internet, televisión, telefonía, porteros y cámaras.\n\nEn España se utiliza el concepto ICT — Infraestructuras Comunes de Telecomunicaciones. La señal entra en el edificio, se distribuye y llega mediante el cableado hasta una toma o un equipo.\n\nEntre los medios de transmisión más habituales están el cable coaxial, el par trenzado y la fibra óptica. La fibra transmite información mediante luz y es muy resistente a las interferencias electromagnéticas.\n\nEl instalador debe elegir bien el recorrido, proteger el cable, realizar conexiones correctas, etiquetar y comprobar la calidad de la transmisión.',
    vocab:[
      {es:'ICT',ru:'общая телеком-инфраструктура здания',example:'La ICT distribuye servicios de telecomunicación.'},
      {es:'cable coaxial',ru:'коаксиальный кабель',example:'El coaxial se utiliza en sistemas de TV.'},
      {es:'par trenzado',ru:'витая пара',example:'Ethernet suele usar par trenzado.'},
      {es:'fibra óptica',ru:'оптоволокно',example:'La fibra transmite datos mediante luz.'},
      {es:'toma',ru:'розетка / точка подключения',example:'La señal llega hasta la toma.'},
      {es:'red',ru:'сеть',example:'Los equipos forman una red local.'}
    ],
    visual:{title:'Путь сигнала в здании',kind:'flow',nodes:['Провайдер / антенна','Ввод в здание','Распределение ICT','Кабельная линия','Toma — точка подключения','Телевизор / роутер / компьютер'],note:'Смысл одинаков: сигнал должен пройти от источника до пользователя с минимальными потерями.'},
    videoTitle:'¿Qué es la Fibra Óptica y Cómo Funciona? — FiberSchool Latam',
    videoUrl:'https://www.youtube.com/watch?v=n5Ctbsz-CJE',
    videoNote:'Наглядное испаноязычное объяснение того, как информация передаётся по оптоволокну и почему оно быстрое.',
    videoQuestions:['Чем именно передаётся информация внутри оптоволокна?','Назови одно преимущество оптоволокна перед медным кабелем.'],
    practice:[
      {id:'p1',type:'mcq',q:'Что из перечисленного НЕ является средой передачи данных?',options:['Par trenzado','Fibra óptica','Cable coaxial','Interruptor magnetotérmico'],answer:3,feedback:'Magnetotérmico — защитный аппарат электрической установки, а не телекоммуникационный кабель.'},
      {id:'p2',type:'mcq',q:'Что передаёт информацию в оптоволокне?',options:['Свет','Сжатый воздух','Механическая тяга','Только постоянный ток'],answer:0,feedback:'Волокно направляет световые импульсы, которые кодируют данные.'},
      {id:'p3',type:'text',q:'Назови три телекоммуникационные системы, которые можно встретить в жилом здании.'}
    ],
    question:'Назови три среды передачи данных и для каждой напиши по одному характерному применению или свойству.',
    needle:'вит',
    challenge:'Нарисуй от руки цепочку домашнего интернета: от внешней линии до ноутбука или телефона. Подпиши на испанском хотя бы 4 элемента.'
  },
  {
    id:'t4', week:1, subject:'CCSI', title:'Климат, рельеф и ландшафт',
    goal:'Разобраться, чем климат отличается от погоды, какие факторы влияют на климат и как из текста выделять тему и главную мысль.',
    path:{min:'15 мин: теория RU → схема факторов → итоговый абзац',normal:'25–35 мин: + испанский текст, видео и практика',deep:'+10 мин: сравнить два разных климата Испании'},
    learn:'clima, tiempo, relieve, paisaje, altitud, latitud, idea principal',
    theoryRu:'Погода описывает состояние атмосферы сейчас или в ближайшее время: сегодня идёт дождь, завтра будет 18 °C. Климат — это характерные условия территории за длительный период.\n\nНа климат влияют широта, высота над уровнем моря, близость океана или моря и рельеф. Горы могут задерживать влажные воздушные массы, а океан смягчает перепады температуры.\n\nЛандшафт — результат взаимодействия природных условий и деятельности человека. Климат влияет на растительность, сельское хозяйство, типы построек и образ жизни.\n\nПри чтении учебного текста важно отличать тему от главной мысли. Тема отвечает на вопрос «о чём текст?», а главная мысль — «что именно автор хочет сказать об этой теме?».',
    theoryEs:'El tiempo describe el estado de la atmósfera en un momento concreto: hoy llueve o mañana habrá 18 °C. El clima describe las condiciones habituales de un territorio durante un período largo.\n\nEn el clima influyen la latitud, la altitud, la proximidad al mar y el relieve. Las montañas pueden frenar masas de aire húmedo y el océano suaviza las diferencias de temperatura.\n\nEl paisaje es el resultado de la interacción entre la naturaleza y la actividad humana. El clima influye en la vegetación, la agricultura y la forma de vida.\n\nAl leer un texto, el tema responde a «¿de qué trata?» y la idea principal a «¿qué afirma el autor sobre ese tema?».',
    vocab:[
      {es:'clima',ru:'климат',example:'El clima se estudia durante períodos largos.'},
      {es:'tiempo',ru:'погода',example:'El tiempo de hoy es lluvioso.'},
      {es:'relieve',ru:'рельеф',example:'El relieve modifica el clima.'},
      {es:'paisaje',ru:'ландшафт',example:'El clima influye en el paisaje.'},
      {es:'altitud',ru:'высота над уровнем моря',example:'La temperatura cambia con la altitud.'},
      {es:'idea principal',ru:'главная мысль',example:'Busca la idea principal del párrafo.'}
    ],
    visual:{title:'От факторов к ландшафту',kind:'flow',nodes:['Latitud + altitud + mar + relieve','CLIMA','Vegetación + agua + usos del suelo','PAISAJE','Actividades humanas'],note:'Погода меняется быстро; климат описывает устойчивые закономерности.'},
    videoTitle:'Tiempo y Clima — Geografía 1º ESO · Leccionesdehistoria',
    videoUrl:'https://www.youtube.com/watch?v=XMO1BoF_Olk',
    videoNote:'Испанский школьный урок уровня 1º ESO: погода, климат и основные элементы темы.',
    videoQuestions:['Как в ролике различаются tiempo и clima?','Назови два фактора или элемента климата, о которых говорит преподаватель.'],
    practice:[
      {id:'p1',type:'mcq',q:'Фраза «сегодня в Овьедо 16 °C и дождь» описывает…',options:['климат','погоду (tiempo)','рельеф','широту'],answer:1,feedback:'Конкретное состояние атмосферы сегодня — это tiempo, а не clima.'},
      {id:'p2',type:'mcq',q:'Что из перечисленного может влиять на климат территории?',options:['Высота над уровнем моря','Цвет школьной формы','Название улицы','Марка телефона'],answer:0,feedback:'Altitud — один из основных географических факторов климата.'},
      {id:'p3',type:'text',q:'Прочитай: «El mar suaviza las temperaturas y aporta humedad». Переведи своими словами на русский.'}
    ],
    question:'Напиши 4–5 простых предложений по-испански о климате и paisaje Астурии. Используй слова clima, mar, paisaje и al menos один фактор климата.',
    needle:'paisaje',
    challenge:'Выбери Астурию и один более сухой регион Испании. Напиши 3 различия климата и предположи, как они отражаются на paisaje.'
  },
  {
    id:'t5', week:1, subject:'PIACI', title:'Две профессии: электрика и телекоммуникации',
    goal:'Понять, какие реальные задачи выполняют специалисты двух направлений и какие базовые навыки объединяют обе профессии.',
    path:{min:'15 мин: теория RU → схема навыков → итоговое сравнение',normal:'25–35 мин: + испанский, видео об инструментах и практика',deep:'+10 мин: найти одну реальную вакансию/описание профессии и выписать требования'},
    learn:'instalador electricista, instalador de telecomunicaciones, herramienta, plano, avería, seguridad',
    theoryRu:'Электромонтажник работает с электрическими цепями здания: прокладывает линии, монтирует освещение, розетки, щиты и аппараты защиты, читает схемы и выполняет измерения. На более продвинутом уровне сюда добавляются автоматика и домотика.\n\nМонтажник телекоммуникаций работает с передачей информации: сети данных, телевидение, телефония, домофоны, камеры, звук. Его задача — правильно проложить линию, выполнить соединение и проверить качество сигнала.\n\nОбщие навыки двух профессий очень похожи: чтение схем, работа инструментом, аккуратность, маркировка, поиск неисправностей и безопасность. Поэтому базовые учебные привычки — понимать схему, называть элементы и объяснять последовательность работы — пригодятся сразу в нескольких модулях.',
    theoryEs:'El instalador electricista trabaja con circuitos eléctricos del edificio: canalizaciones, iluminación, tomas, cuadros, protecciones, esquemas y mediciones. Más adelante aparecen también automatización y domótica.\n\nEl instalador de telecomunicaciones trabaja con la transmisión de información: redes de datos, televisión, telefonía, porteros, cámaras y sonido. Debe tender correctamente las líneas, realizar conexiones y comprobar la señal.\n\nAmbas profesiones comparten habilidades: leer planos y esquemas, usar herramientas, trabajar con orden, etiquetar, localizar averías y cumplir las normas de seguridad.',
    vocab:[
      {es:'instalador electricista',ru:'электромонтажник',example:'El instalador monta y verifica circuitos.'},
      {es:'instalador de telecomunicaciones',ru:'монтажник телекоммуникаций',example:'Instala redes, cámaras y sistemas de comunicación.'},
      {es:'herramienta',ru:'инструмент',example:'Cada herramienta tiene una función y un uso seguro.'},
      {es:'plano / esquema',ru:'план / схема',example:'Antes de montar hay que leer el esquema.'},
      {es:'avería',ru:'неисправность',example:'El técnico localiza una avería.'},
      {es:'seguridad',ru:'безопасность',example:'La seguridad forma parte del trabajo.'}
    ],
    visual:{title:'Общие профессиональные навыки',kind:'flow',nodes:['Понять задачу','Прочитать схему','Выбрать инструмент','Смонтировать аккуратно','Проверить результат','Работать безопасно'],note:'Эта последовательность пригодится и в IED, и в IT, и в межмодульном проекте.'},
    videoTitle:'Electricista: ¿qué llevar en tu caja de herramientas? — Sikana',
    videoUrl:'https://www.sikana.tv/es/diy/access-to-electricity/what-s-in-an-electrician-s-tool-kit',
    videoNote:'Испаноязычный учебный ролик для начинающих: основные группы инструментов и безопасная организация работы.',
    videoQuestions:['Назови минимум три инструмента или группы инструментов из ролика.','Какая мысль о безопасной работе показалась тебе самой важной?'],
    practice:[
      {id:'p1',type:'mcq',q:'Какая задача скорее относится к телекоммуникациям?',options:['Монтаж автомата защиты','Подключение сетевой розетки Ethernet','Расчёт линии освещения','Монтаж заземления'],answer:1,feedback:'Ethernet и сети данных относятся к телекоммуникационным системам.'},
      {id:'p2',type:'mcq',q:'Какой навык нужен обоим специалистам?',options:['Чтение схем','Только программирование','Только сварка металла','Только бухгалтерский учёт'],answer:0,feedback:'И электромонтажник, и монтажник связи должны понимать планы и схемы.'},
      {id:'p3',type:'text',q:'Назови три общих навыка этих профессий и объясни, зачем каждый нужен.'}
    ],
    question:'Сравни профессии в 6–8 предложениях: по две характерные задачи каждой профессии и минимум три общих навыка. Обязательно упомяни безопасность.',
    needle:'безопас',
    challenge:'Найди описание одной профессии на испанском и выпиши 5 слов или требований, которые уже встречались в наших уроках.'
  }
]);
