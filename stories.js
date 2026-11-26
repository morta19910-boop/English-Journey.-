
window.journeyLibrary = {
  version: "3.0",
  target: 600,
  levels: [
    { id: "A1", name: "مبتدئ", target: 100 },
    { id: "A2", name: "مبتدئ متقدم", target: 100 },
    { id: "B1", name: "متوسط", target: 100 },
    { id: "B2", name: "فوق المتوسط", target: 100 },
    { id: "C1", name: "متقدم", target: 100 },
    { id: "C2", name: "احترافي", target: 100 }
  ],
  stories: []
};

window.journeyLibrary.stories.push(
{
  title: "The Secret Garden",
  ar: "الحديقة السرية",
  level: "A1",
  cover: "house",
  scenes: ["house", "bird", "map"],
  parts: [
    "Sara|سارة found|وجدت a|أداة small|صغير door|باب behind|خلف her|الخاص_بها house|منزل. She|هي opened|فتحت it|إياه slowly|ببطء.",
    "Inside|بالداخل she|هي saw|رأت beautiful|جميلة flowers|أزهار and|و a|أداة little|صغير bird|طائر. The|الـ bird|طائر was|كان hungry|جائعاً.",
    "Sara|سارة brought|أحضرت food|طعاماً and|و water|ماء. Every|كل day|يوم she|هي visited|زارت the|الـ garden|حديقة. It|إنها became|أصبحت her|لها favorite|المفضل place|مكان."
  ],
  translation: "وجدت سارة باباً صغيراً خلف منزلها وفتحته ببطء. رأت في الداخل أزهاراً جميلة وطائراً صغيراً جائعاً. أحضرت له الطعام والماء، وأصبحت تزور الحديقة كل يوم حتى صارت مكانها المفضل.",
  questions: [
    ["Who found the door?", "Sara", "Ali", "Ahmed"],
    ["Where was the door?", "Behind the house", "At school", "Near the river"],
    ["What did Sara see?", "A bird", "A horse", "A lion"],
    ["What did she bring?", "Food and water", "Books", "Money"],
    ["How often did she visit?", "Every day", "Every month", "Never"]
  ]
},
{
  title: "The Missing Key",
  ar: "المفتاح المفقود",
  level: "A1",
  cover: "house",
  scenes: ["house", "cat", "map"],
  parts: [
    "Omar|عمر lost|أضاع his|الخاص_به key|مفتاح. He|هو looked|بحث under|تحت the|الـ table|طاولة and|و behind|خلف the|الـ door|باب.",
    "His|الخاص_به cat|قط was|كان playing|يلعب near|قرب a|أداة chair|كرسي. Omar|عمر heard|سمع a|أداة strange|غريب sound|صوت.",
    "The|الـ key|مفتاح was|كان under|تحت the|الـ chair|كرسي. Omar|عمر laughed|ضحك and|و thanked|شكر his|الخاص_به little|الصغير cat|قط."
  ],
  translation: "أضاع عمر مفتاحه وبحث تحت الطاولة وخلف الباب. كان قطه يلعب قرب كرسي، فسمع عمر صوتاً غريباً. وجد المفتاح تحت الكرسي، فضحك وشكر قطه الصغير.",
  questions: [
    ["What did Omar lose?", "A key", "A book", "A bag"],
    ["Which animal was playing?", "A cat", "A dog", "A bird"],
    ["Where was the animal?", "Near a chair", "Outside", "At school"],
    ["Where was the key?", "Under the chair", "In a river", "On the roof"],
    ["What did Omar do?", "He laughed", "He cried", "He slept"]
  ]
},
{
  title: "The Old Bridge",
  ar: "الجسر القديم",
  level: "A2",
  cover: "bridge",
  scenes: ["bridge", "rain", "house"],
  parts: [
    "Adam|آدم wanted|أراد to|أن visit|يزور his|الخاص_به grandmother|جدته across|عبر the|الـ river|نهر. An|أداة old|قديم bridge|جسر connected|ربط the|الـ two|اثنتين villages|قريتين.",
    "After|بعد heavy|غزيرة rain|أمطار the|الـ bridge|جسر looked|بدا dangerous|خطيراً. Adam|آدم decided|قرر to|أن wait|ينتظر and|و ask|يطلب for|من_أجل help|مساعدة.",
    "A|أداة farmer|مزارع showed|أرشد him|إياه another|آخر safe|آمن road|طريق. Adam|آدم reached|وصل his|الخاص_به grandmother|جدته before|قبل sunset|غروب_الشمس. She|هي was|كانت very|جداً happy|سعيدة."
  ],
  translation: "أراد آدم زيارة جدته عبر النهر. كان هناك جسر قديم يربط القريتين، لكنه بدا خطيراً بعد الأمطار الغزيرة. قرر آدم الانتظار وطلب المساعدة. أرشده مزارع إلى طريق آخر آمن، فوصل إلى جدته قبل غروب الشمس وكانت سعيدة جداً.",
  questions: [
    ["Who did Adam want to visit?", "His grandmother", "His teacher", "His friend"],
    ["What connected the villages?", "A bridge", "A train", "A tunnel"],
    ["Why was the bridge dangerous?", "Heavy rain", "Snow", "Fire"],
    ["Who helped Adam?", "A farmer", "A doctor", "A pilot"],
    ["When did Adam arrive?", "Before sunset", "At midnight", "Next week"]
  ]
}
);

window.journeyLibrary.stories.push(
{
title:"The Midnight Letter",
ar:"رسالة منتصف الليل",
level:"A2",
cover:"house",
scenes:["house","map","bridge"],
parts:[
"At|عند midnight|منتصف_الليل Lina|لينا heard|سمعت a|أداة knock|طرقة at|على the|الـ door|باب. She|هي found|وجدت a|أداة mysterious|غامضة letter|رسالة outside|بالخارج.",
"The|الـ letter|رسالة contained|احتوت a|أداة drawing|رسماً of|لـ an|أداة old|قديم bridge|جسر. Lina|لينا recognized|تعرفت_على the|الـ place|مكان immediately|فوراً.",
"The|الـ next|التالي morning|صباح she|هي visited|زارت the|الـ bridge|جسر and|و discovered|اكتشفت a|أداة box|صندوق full|مليء of|بـ family|عائلية photographs|صور."
],
translation:"عند منتصف الليل سمعت لينا طرقاً على الباب، فوجدت رسالة غامضة بالخارج. احتوت الرسالة على رسم لجسر قديم تعرفت عليه فوراً. وفي الصباح التالي زارت الجسر واكتشفت صندوقاً مليئاً بالصور العائلية.",
questions:[
["When did Lina hear a knock?","At midnight","At noon","At sunrise"],
["What did she find?","A letter","A phone","A flower"],
["What was in the drawing?","A bridge","A school","A car"],
["When did she visit the bridge?","The next morning","At midnight","Next year"],
["What was inside the box?","Photographs","Gold","Food"]
]
},
{
title:"The Golden Bird",
ar:"الطائر الذهبي",
level:"A1",
cover:"bird",
scenes:["bird","house","bird"],
parts:[
"Ali|علي saw|رأى a|أداة golden|ذهبي bird|طائر near|قرب his|منزله house|منزل. The|الـ bird|طائر could|كان_يستطيع not|لا fly|يطير.",
"Ali|علي gave|أعطى it|إياه water|ماء and|و food|طعام. He|هو kept|أبقاه it|إياه warm|دافئاً and|و safe|آمناً.",
"After|بعد three|ثلاثة days|أيام the|الـ bird|طائر opened|فتح its|الخاص_به wings|جناحين and|و flew|طار away|بعيداً. Ali|علي smiled|ابتسم happily|بسعادة."
],
translation:"رأى علي طائراً ذهبياً قرب منزله لم يكن يستطيع الطيران. أعطاه الماء والطعام وأبقاه دافئاً وآمناً. وبعد ثلاثة أيام فتح الطائر جناحيه وطار بعيداً، فابتسم علي بسعادة.",
questions:[
["Who found the bird?","Ali","Omar","Adam"],
["What color was it?","Golden","Black","Blue"],
["What could it not do?","Fly","Eat","See"],
["What did Ali give it?","Food and water","Money","Books"],
["When did it fly away?","After three days","After a year","Immediately"]
]
},
{
title:"The Castle Mystery",
ar:"لغز القلعة",
level:"B1",
cover:"castle",
scenes:["castle","map","castle"],
parts:[
"Daniel|دانيال explored|استكشف an|أداة abandoned|مهجورة castle|قلعة during|خلال his|الخاص_به summer|الصيف holiday|عطلة. Strange|غريبة symbols|رموز covered|غطت the|الـ ancient|قديمة walls|جدران.",
"He|هو noticed|لاحظ that|أن the|الـ symbols|رموز formed|شكلت a|أداة pattern|نمطاً. Following|متتبعاً the|الـ clues|أدلة he|هو discovered|اكتشف a|أداة hidden|مخفية chamber|غرفة.",
"Inside|بالداخل were|كانت historical|تاريخية documents|وثائق describing|تصف the|الـ history|تاريخ of|الـ castle|قلعة. Daniel|دانيال reported|أبلغ his|الخاص_به discovery|اكتشاف to|إلى the|الـ local|محلي museum|متحف."
],
translation:"استكشف دانيال قلعة مهجورة خلال عطلته الصيفية. كانت رموز غريبة تغطي الجدران القديمة. لاحظ أنها تشكل نمطاً، فتتبع الأدلة واكتشف غرفة مخفية تحتوي على وثائق تاريخية تصف تاريخ القلعة. أبلغ المتحف المحلي باكتشافه.",
questions:[
["What did Daniel explore?","A castle","A ship","A forest"],
["What covered the walls?","Symbols","Flowers","Pictures"],
["What did he discover?","A hidden chamber","A river","A garden"],
["What was inside?","Historical documents","Animals","Weapons"],
["Who did he inform?","The local museum","His doctor","A farmer"]
]
},
{
title:"A Message from Mars",
ar:"رسالة من المريخ",
level:"B1",
cover:"map",
scenes:["house","map","house"],
parts:[
"Maya|مايا worked|عملت at|في a|أداة research|أبحاث station|محطة. One|ذات evening|مساء her|الخاص_بها computer|حاسوب received|استقبل an|أداة unusual|غير_معتادة signal|إشارة.",
"The|الـ signal|إشارة came|جاءت from|من Mars|المريخ. Maya|مايا analyzed|حللت the|الـ data|بيانات with|مع her|الخاص_بها team|فريق.",
"They|هم discovered|اكتشفوا that|أن an|أداة old|قديم robot|روبوت had|قد restarted|أعاد_التشغيل after|بعد years|سنوات of|من silence|الصمت. Everyone|الجميع celebrated|احتفل the|الـ unexpected|غير_متوقع discovery|اكتشاف."
],
translation:"عملت مايا في محطة أبحاث. وفي أحد الأمسيات استقبل حاسوبها إشارة غير معتادة من المريخ. حللت البيانات مع فريقها، فاكتشفوا أن روبوتاً قديماً أعاد تشغيل نفسه بعد سنوات من الصمت. احتفل الجميع بالاكتشاف غير المتوقع.",
questions:[
["Where did Maya work?","A research station","A restaurant","A school"],
["What did she receive?","A signal","A letter","A gift"],
["Where did it come from?","Mars","Earth","The Moon"],
["What restarted?","A robot","A car","A telephone"],
["How did everyone react?","They celebrated","They slept","They cried"]
]
},
{
title:"The Forgotten Promise",
ar:"الوعد المنسي",
level:"B2",
cover:"house",
scenes:["house","bridge","house"],
parts:[
"Years|سنوات ago|مضت Samuel|صمويل promised|وعد his|الخاص_به childhood|الطفولة friend|صديق that|بأن they|هما would|سوف meet|يلتقيان again|مجدداً beside|بجانب the|الـ river|نهر.",
"As|مع time|الوقت passed|مر Samuel|صمويل became|أصبح increasingly|بشكل_متزايد busy|مشغولاً and|و gradually|تدريجياً forgot|نسي his|الخاص_به promise|وعد.",
"An|أداة unexpected|غير_متوقعة photograph|صورة reminded|ذكرت him|إياه of|بـ their|الخاص_بهما friendship|صداقة. He|هو returned|عاد to|إلى the|الـ village|قرية and|و finally|أخيراً fulfilled|أوفى his|الخاص_به promise|وعد."
],
translation:"قبل سنوات وعد صمويل صديق طفولته بأن يلتقيا مجدداً بجانب النهر. ومع مرور الوقت أصبح أكثر انشغالاً ونسي وعده تدريجياً. ذكرته صورة غير متوقعة بصداقتهما، فعاد إلى القرية وأوفى بوعده أخيراً.",
questions:[
["Who received the promise?","A childhood friend","A teacher","A stranger"],
["Where would they meet?","Beside the river","At an airport","In a hotel"],
["Why did Samuel forget?","He became busy","He lost his memory","He moved to Mars"],
["What reminded him?","A photograph","A song","A newspaper"],
["What did he finally do?","Fulfilled his promise","Forgot everything","Sold his house"]
]
}
);


window.journeyLibrary.stories.push(
{
title:"The Lost Puppy",
ar:"الجرو الضائع",
level:"A1",
cover:"house",
scenes:["house","map","house"],
parts:[
"Tom|توم saw|رأى a|أداة small|صغير puppy|جرو near|قرب his|منزله house|المنزل.",
"The|ال puppy|جرو was|كان hungry|جائع and|و cold|بردان. Tom|توم gave|أعطى it|إياه food|طعام and|و water|ماء.",
"A|أداة girl|فتاة came|جاءت and|و found|وجدت her|الخاص_بها puppy|جرو. She|هي thanked|شكرت Tom|توم."
],
translation:"رأى توم جرواً صغيراً قرب منزله. كان الجرو جائعاً ويشعر بالبرد، فأعطاه توم الطعام والماء. جاءت فتاة ووجدت جروها وشكرت توم.",
questions:[
["What did Tom see?","A puppy","A bird","A horse"],
["Where was it?","Near his house","At school","In a shop"],
["How did it feel?","Hungry and cold","Happy","Angry"],
["What did Tom give it?","Food and water","Money","Books"],
["Who thanked Tom?","A girl","A farmer","A doctor"]
]
},
{
title:"The Magic Map",
ar:"الخريطة السحرية",
level:"A2",
cover:"map",
scenes:["house","map","bridge"],
parts:[
"Emma|إيما discovered|اكتشفت an|أداة old|قديمة map|خريطة inside|داخل a|أداة wooden|خشبي box|صندوق.",
"The|ال map|خريطة showed|أظهرت a|أداة secret|سري path|طريق through|عبر the|ال forest|غابة.",
"She|هي followed|اتبعت the|ال path|طريق and|و found|وجدت a|أداة beautiful|جميلة waterfall|شلال."
],
translation:"اكتشفت إيما خريطة قديمة داخل صندوق خشبي. أظهرت الخريطة طريقاً سرياً عبر الغابة. اتبعت الطريق ووجدت شلالاً جميلاً.",
questions:[
["Who found the map?","Emma","Sara","Adam"],
["Where was the map?","Inside a box","Under a bed","In a car"],
["What was the box made of?","Wood","Gold","Glass"],
["Where did the path lead?","Through a forest","Through a city","Through a school"],
["What did Emma find?","A waterfall","A castle","A train"]
]
},
{
title:"The Brave Little Bird",
ar:"الطائر الصغير الشجاع",
level:"A1",
cover:"bird",
scenes:["bird","rain","bird"],
parts:[
"A|أداة little|صغير bird|طائر lived|عاش in|في a|أداة tall|طويلة tree|شجرة.",
"One|ذات day|يوم a|أداة strong|قوية storm|عاصفة came|جاءت. The|ال bird|طائر was|كان afraid|خائف.",
"It|هو waited|انتظر until|حتى the|ال rain|مطر stopped|توقف. Then|ثم it|هو flew|طار home|للمنزل."
],
translation:"عاش طائر صغير في شجرة طويلة. وفي أحد الأيام جاءت عاصفة قوية فشعر بالخوف. انتظر حتى توقف المطر ثم طار إلى منزله.",
questions:[
["Where did the bird live?","In a tree","In a box","In a car"],
["What happened?","A storm came","A fire started","A party began"],
["How did the bird feel?","Afraid","Angry","Excited"],
["What did it wait for?","The rain to stop","A friend","Food"],
["Where did it fly?","Home","To school","To a shop"]
]
},
{
title:"The Hidden Room",
ar:"الغرفة المخفية",
level:"B1",
cover:"castle",
scenes:["castle","map","house"],
parts:[
"During|خلال his|الخاصة_به vacation|عطلة Oliver|أوليفر explored|استكشف an|أداة ancient|قديمة castle|قلعة.",
"He|هو noticed|لاحظ a|أداة narrow|ضيق passage|ممر behind|خلف a|أداة large|كبيرة painting|لوحة.",
"Inside|بالداخل he|هو discovered|اكتشف valuable|ثمينة manuscripts|مخطوطات and|و immediately|فوراً informed|أبلغ the|ال authorities|سلطات."
],
translation:"خلال عطلته استكشف أوليفر قلعة قديمة. لاحظ ممراً ضيقاً خلف لوحة كبيرة. وفي الداخل اكتشف مخطوطات ثمينة وأبلغ السلطات فوراً.",
questions:[
["Who explored the castle?","Oliver","Tom","Adam"],
["When did he explore it?","During his vacation","During an exam","At work"],
["What did he notice?","A narrow passage","A broken window","A golden bird"],
["What was inside?","Valuable manuscripts","Food","Furniture"],
["Who did he inform?","The authorities","His classmates","Nobody"]
]
},
{
title:"The Power of Kindness",
ar:"قوة اللطف",
level:"B2",
cover:"house",
scenes:["house","rain","house"],
parts:[
"Despite|رغم her|الخاصة_بها financial|مالية difficulties|صعوبات Sarah|سارة regularly|بانتظام helped|ساعدت elderly|مسنين neighbors|جيران.",
"When|عندما she|هي unexpectedly|بشكل_مفاجئ lost|فقدت her|الخاصة_بها job|وظيفة the|ال community|مجتمع decided|قرر to|أن support|يدعم her|إياها.",
"Sarah|سارة realized|أدركت that|أن genuine|حقيقي kindness|لطف creates|يخلق lasting|دائمة relationships|علاقات."
],
translation:"رغم صعوباتها المالية، كانت سارة تساعد جيرانها المسنين بانتظام. وعندما فقدت وظيفتها بصورة مفاجئة قرر المجتمع دعمها. أدركت سارة أن اللطف الحقيقي يصنع علاقات دائمة.",
questions:[
["Who helped the neighbors?","Sarah","Emma","Lina"],
["What difficulties did she face?","Financial difficulties","Travel problems","Language problems"],
["What did Sarah lose?","Her job","Her phone","Her house"],
["Who supported her?","The community","A stranger","Nobody"],
["What creates lasting relationships?","Genuine kindness","Money","Fear"]
]
}
);
window.journeyLibrary.stories.push(
{
title:"The Empty Train",
ar:"القطار الفارغ",
level:"A2",
cover:"map",
scenes:["house","map","bridge"],
parts:[
"Jack|جاك arrived|وصل at|إلى the|ال station|محطة early|مبكراً.",
"He|هو entered|دخل an|أداة empty|فارغ train|قطار and|و found|وجد a|أداة letter|رسالة.",
"The|ال letter|رسالة belonged|تخص to|إلى an|أداة old|مسن man|رجل. Jack|جاك returned|أعاد it|إياها."
],
translation:"وصل جاك إلى المحطة مبكراً. دخل قطاراً فارغاً ووجد رسالة تخص رجلاً مسناً، فأعادها إليه.",
questions:[
["Who arrived early?","Jack","Adam","Tom"],
["Where did he arrive?","A station","A school","A hospital"],
["What was empty?","A train","A house","A box"],
["What did he find?","A letter","A phone","A key"],
["What did Jack do?","Returned the letter","Burned it","Lost it"]
]
},
{
title:"The Mountain Rescue",
ar:"الإنقاذ في الجبل",
level:"B1",
cover:"bridge",
scenes:["map","rain","bridge"],
parts:[
"David|ديفيد was|كان climbing|يتسلق a|أداة mountain|جبلاً when|عندما he|هو heard|سمع someone|شخصاً shouting|يصرخ.",
"He|هو discovered|اكتشف an|أداة injured|مصاب climber|متسلق near|قرب a|أداة rock|صخرة.",
"David|ديفيد contacted|اتصل emergency|طوارئ services|خدمات and|و stayed|بقي until|حتى help|المساعدة arrived|وصلت."
],
translation:"كان ديفيد يتسلق جبلاً عندما سمع شخصاً يصرخ. اكتشف متسلقاً مصاباً قرب صخرة. اتصل بخدمات الطوارئ وبقي حتى وصلت المساعدة.",
questions:[
["What was David doing?","Climbing a mountain","Swimming","Driving"],
["What did he hear?","Someone shouting","Music","A bird"],
["Who was injured?","A climber","A doctor","A farmer"],
["Who did he contact?","Emergency services","His teacher","His brother"],
["When did he leave?","After help arrived","Immediately","Before calling"]
]
},
{
title:"The Clockmaker's Secret",
ar:"سر صانع الساعات",
level:"B2",
cover:"house",
scenes:["house","map","house"],
parts:[
"An|أداة elderly|مسن clockmaker|صانع_ساعات maintained|احتفظ a|أداة mysterious|غامضة collection|مجموعة of|من antique|أثرية clocks|ساعات.",
"His|الخاص_به apprentice|متدرب discovered|اكتشف that|أن one|واحدة contained|احتوت a|أداة concealed|مخفية compartment|حجرة.",
"Inside|بالداخل lay|وجد documents|وثائق revealing|تكشف the|ال forgotten|المنسي history|تاريخ of|لـ their|الخاصة_بهم town|بلدة."
],
translation:"احتفظ صانع ساعات مسن بمجموعة غامضة من الساعات الأثرية. اكتشف متدربه أن إحداها تحتوي على حجرة مخفية، بداخلها وثائق تكشف التاريخ المنسي لبلدتهم.",
questions:[
["What did the man make?","Clocks","Shoes","Cars"],
["Who discovered the secret?","His apprentice","A farmer","A doctor"],
["What was concealed?","A compartment","A door","A bridge"],
["What was inside?","Documents","Food","Water"],
["What did they reveal?","The town's history","A recipe","A song"]
]
},
{
title:"The Price of Truth",
ar:"ثمن الحقيقة",
level:"C1",
cover:"map",
scenes:["house","map","house"],
parts:[
"A|أداة journalist|صحفي uncovered|كشف compelling|دامغة evidence|أدلة of|على institutional|مؤسسي corruption|فساد. Nevertheless|ومع_ذلك powerful|نافذون individuals|أفراد attempted|حاولوا to|أن suppress|يخفوا his|الخاص_به findings|نتائج.",
"Confronted|مواجها with|بـ intimidation|ترهيب and|و professional|مهنية uncertainty|مخاطر he|هو deliberated|فكر_بعمق over|حول the|ال consequences|عواقب of|لـ publication|نشر.",
"Ultimately|في_النهاية he|هو published|نشر the|ال investigation|تحقيق believing|معتقداً that|أن accountability|المساءلة outweighed|فاقت personal|شخصية convenience|راحة."
],
translation:"كشف صحفي أدلة دامغة على فساد مؤسسي، لكن أفراداً نافذين حاولوا إخفاء نتائج تحقيقه. وأمام الترهيب والمخاطر المهنية، فكر بعمق في عواقب النشر. وفي النهاية نشر التحقيق مؤمناً بأن المساءلة أهم من الراحة الشخصية.",
questions:[
["What did he uncover?","Evidence of corruption","A treasure","A scientific theory"],
["What did powerful people attempt?","To suppress his findings","To reward him","To promote him"],
["What did he face?","Intimidation","Celebrations","Entertainment"],
["What did he eventually do?","Published the investigation","Destroyed the evidence","Resigned"],
["What motivated his decision?","Accountability","Personal wealth","Popularity"]
]
},
{
title:"The Illusion of Certainty",
ar:"وهم اليقين",
level:"C2",
cover:"castle",
scenes:["house","map","castle"],
parts:[
"A|أداة distinguished|بارز philosopher|فيلسوف devoted|كرس decades|عقوداً to|لـ defending|الدفاع_عن an|أداة ostensibly|ظاهرياً irrefutable|غير_قابلة_للدحض theory|نظرية.",
"However|لكن an|أداة overlooked|مهملة inconsistency|مفارقة compelled|أجبرت him|إياه to|أن reassess|يعيد_تقييم the|ال epistemological|المعرفية foundations|أسس of|لـ his|الخاص_به convictions|قناعات.",
"Rather|بدلاً than|من concealing|إخفاء the|ال contradiction|تناقض he|هو acknowledged|أقر his|الخاص_به fallibility|قابلية_الخطأ. His|الخاص_به intellectual|فكري humility|تواضع ultimately|في_النهاية proved|أثبت more|أكثر enduring|دواماً than|من his|الخاص_به original|الأصلية conclusions|استنتاجات."
],
translation:"كرس فيلسوف بارز عقوداً للدفاع عن نظرية بدت غير قابلة للدحض. لكن مفارقة مهملة أجبرته على إعادة تقييم الأسس المعرفية لقناعاته. وبدلاً من إخفاء التناقض، أقر بقابليته للخطأ، وأثبت تواضعه الفكري أنه أكثر بقاءً من استنتاجاته الأصلية.",
questions:[
["What did the philosopher defend?","A theory","A political party","A castle"],
["What challenged his convictions?","An overlooked inconsistency","A financial crisis","A natural disaster"],
["What did he reassess?","His epistemological foundations","His property","His friendships"],
["What did he acknowledge?","His fallibility","His superiority","His wealth"],
["What proved more enduring?","Intellectual humility","Absolute certainty","Public recognition"]
]
}
);
window.journeyLibrary.stories.push(
{
title:"The Talking Cat",
ar:"القط المتكلم",
level:"A1",
cover:"cat",
scenes:["house","cat","house"],
parts:[
"Lucy|لوسي had|كان_لديها a|أداة black|أسود cat|قط named|اسمه Max|ماكس.",
"One|ذات morning|صباح Max|ماكس said|قال hello|مرحباً. Lucy|لوسي was|كانت very|جداً surprised|مندهشة.",
"The|ال cat|قط wanted|أراد some|بعض milk|الحليب. Lucy|لوسي smiled|ابتسمت and|و gave|أعطت him|إياه milk|حليباً."
],
translation:"كان لدى لوسي قط أسود اسمه ماكس. وفي أحد الصباحات قال ماكس مرحباً، فشعرت لوسي بالدهشة. أراد القط بعض الحليب، فابتسمت لوسي وأعطته الحليب.",
questions:[
["What animal did Lucy have?","A cat","A dog","A bird"],
["What was its name?","Max","Tom","Jack"],
["What color was it?","Black","White","Brown"],
["What did Max say?","Hello","Goodbye","Thanks"],
["What did Max want?","Milk","Bread","Rice"]
]
},
{
title:"The Island Adventure",
ar:"مغامرة الجزيرة",
level:"A2",
cover:"map",
scenes:["map","rain","bridge"],
parts:[
"Two|اثنان friends|صديقان traveled|سافرا to|إلى a|أداة small|صغيرة island|جزيرة during|خلال summer|الصيف.",
"They|هما discovered|اكتشفا a|أداة strange|غريب cave|كهف near|قرب the|ال beach|شاطئ.",
"Inside|بالداخل they|هما found|وجدا an|أداة old|قديم boat|قارب and|و a|أداة box|صندوق full|ممتلئ of|بـ coins|عملات."
],
translation:"سافر صديقان إلى جزيرة صغيرة خلال الصيف. اكتشفا كهفاً غريباً قرب الشاطئ. وفي الداخل وجدا قارباً قديماً وصندوقاً مليئاً بالعملات.",
questions:[
["How many friends traveled?","Two","Three","Five"],
["Where did they go?","An island","A city","A school"],
["When did they travel?","During summer","During winter","At midnight"],
["What did they discover?","A cave","A hotel","A hospital"],
["What was inside the box?","Coins","Books","Clothes"]
]
},
{
title:"The Invisible Visitor",
ar:"الزائر الخفي",
level:"B1",
cover:"house",
scenes:["house","rain","map"],
parts:[
"Every|كل night|ليلة strange|غريبة noises|أصوات came|صدرت from|من an|أداة empty|فارغ room|غرفة in|في Michael's|مايكل house|منزل.",
"He|هو installed|ثبت a|أداة camera|كاميرا to|لكي discover|يكتشف the|ال source|مصدر of|لـ the|ال mysterious|غامضة sounds|أصوات.",
"The|ال recording|تسجيل revealed|كشف a|أداة small|صغير animal|حيوان hiding|يختبئ behind|خلف the|ال furniture|أثاث."
],
translation:"كل ليلة كانت تصدر أصوات غريبة من غرفة فارغة في منزل مايكل. ثبت كاميرا لاكتشاف مصدر الأصوات الغامضة. كشف التسجيل عن حيوان صغير يختبئ خلف الأثاث.",
questions:[
["When did the noises occur?","Every night","Every morning","Every summer"],
["Where did they come from?","An empty room","A garden","A street"],
["What did Michael install?","A camera","A radio","A television"],
["What did the recording reveal?","A small animal","A ghost","A visitor"],
["Where was it hiding?","Behind the furniture","On the roof","Under a tree"]
]
},
{
title:"The Last Signal",
ar:"الإشارة الأخيرة",
level:"B2",
cover:"map",
scenes:["map","rain","house"],
parts:[
"A|أداة spacecraft|مركبة_فضائية unexpectedly|فجأة lost|فقدت communication|الاتصال with|مع Earth|الأرض during|خلال a|أداة scientific|علمية mission|مهمة.",
"The|ال astronauts|رواد_الفضاء attempted|حاولوا to|أن restore|يستعيدوا the|ال damaged|متضرر communication|اتصال system|نظام using|باستخدام limited|محدودة resources|موارد.",
"After|بعد several|عدة hours|ساعات they|هم successfully|بنجاح transmitted|أرسلوا a|أداة signal|إشارة confirming|تؤكد their|الخاصة_بهم safety|سلامة."
],
translation:"فقدت مركبة فضائية الاتصال بالأرض بصورة مفاجئة خلال مهمة علمية. حاول رواد الفضاء إصلاح نظام الاتصال المتضرر باستخدام موارد محدودة. وبعد عدة ساعات نجحوا في إرسال إشارة تؤكد سلامتهم.",
questions:[
["What lost communication?","A spacecraft","A submarine","A train"],
["What was their mission?","Scientific","Commercial","Military"],
["What was damaged?","The communication system","The kitchen","The windows"],
["What resources did they have?","Limited resources","Unlimited resources","No resources"],
["What did their signal confirm?","Their safety","Their arrival","Their departure"]
]
},
{
title:"The Library of Tomorrow",
ar:"مكتبة المستقبل",
level:"C1",
cover:"castle",
scenes:["castle","map","house"],
parts:[
"A|أداة visionary|صاحبة_رؤية researcher|باحثة developed|طورت an|أداة innovative|مبتكرة digital|رقمية archive|أرشيف capable|قادر of|على preserving|حفظ endangered|مهددة languages|لغات.",
"Although|رغم_أن the|ال initiative|مبادرة encountered|واجهت considerable|كبيرة financial|مالية obstacles|عقبات international|دوليون volunteers|متطوعون contributed|ساهموا their|الخاصة_بهم expertise|خبرات.",
"The|ال project|مشروع ultimately|أخيراً safeguarded|حافظ_على invaluable|لا_تقدر_بثمن cultural|ثقافي heritage|تراث for|لـ future|القادمة generations|أجيال."
],
translation:"طورت باحثة صاحبة رؤية أرشيفاً رقمياً مبتكراً قادراً على حفظ اللغات المهددة بالاندثار. ورغم العقبات المالية الكبيرة، ساهم متطوعون دوليون بخبراتهم. وفي النهاية حافظ المشروع على تراث ثقافي لا يقدر بثمن للأجيال القادمة.",
questions:[
["What did the researcher develop?","A digital archive","A hospital","A spacecraft"],
["What did it preserve?","Endangered languages","Ancient coins","Wild animals"],
["What obstacles did it face?","Financial obstacles","Weather problems","Medical problems"],
["Who contributed expertise?","International volunteers","Tourists","Children"],
["Who will benefit?","Future generations","Only researchers","Nobody"]
]
}
);
window.journeyLibrary.stories.push(
{
title:"The Little Lantern",
ar:"الفانوس الصغير",
level:"A1",
cover:"house",
scenes:["house","rain","house"],
parts:[
"Ali|علي found|وجد a|أداة small|صغير lantern|فانوس near|قرب his|منزله house|منزل.",
"The|ال night|ليل was|كان dark|مظلماً and|و cold|بارداً.",
"He|هو used|استخدم the|ال lantern|فانوس to|لكي help|يساعد an|أداة old|مسن man|رجل."
],
translation:"وجد علي فانوساً صغيراً قرب منزله. كان الليل مظلماً وبارداً. استخدم الفانوس لمساعدة رجل مسن.",
questions:[
["Who found the lantern?","Ali","Omar","Adam"],
["What did he find?","A lantern","A book","A phone"],
["Where was it?","Near his house","At school","In a shop"],
["How was the night?","Dark and cold","Hot","Sunny"],
["Who did he help?","An old man","A child","A teacher"]
]
},
{
title:"The Hidden Waterfall",
ar:"الشلال المخفي",
level:"A2",
cover:"map",
scenes:["map","bridge","rain"],
parts:[
"Emma|إيما discovered|اكتشفت an|أداة old|قديمة map|خريطة inside|داخل a|أداة wooden|خشبي box|صندوق.",
"She|هي followed|اتبعت the|ال path|طريق through|عبر the|ال forest|غابة.",
"Finally|أخيراً she|هي reached|وصلت a|أداة beautiful|جميل waterfall|شلال and|و took|التقطت photographs|صوراً."
],
translation:"اكتشفت إيما خريطة قديمة داخل صندوق خشبي. اتبعت الطريق عبر الغابة. وأخيراً وصلت إلى شلال جميل والتقطت الصور.",
questions:[
["Who discovered the map?","Emma","Sara","Lina"],
["Where was the map?","In a box","In a car","At school"],
["What was the box made of?","Wood","Glass","Metal"],
["Where did she walk?","Through a forest","Through a city","Across a desert"],
["What did she find?","A waterfall","A castle","A village"]
]
},
{
title:"The Mysterious Visitor",
ar:"الزائر الغامض",
level:"B1",
cover:"house",
scenes:["rain","house","map"],
parts:[
"During|خلال a|أداة stormy|عاصفة evening|أمسية Daniel|دانيال heard|سمع someone|شخصاً knocking|يطرق at|على the|ال door|باب.",
"A|أداة stranger|غريب asked|طلب for|عن shelter|مأوى because|لأن his|الخاصة_به car|سيارة had|قد broken|تعطلت down|تماماً.",
"Daniel|دانيال offered|قدم him|له food|طعاماً and|و helped|ساعده him|إياه contact|يتصل his|الخاصة_به family|عائلة."
],
translation:"خلال أمسية عاصفة سمع دانيال شخصاً يطرق الباب. طلب رجل غريب المأوى لأن سيارته تعطلت. قدم له دانيال الطعام وساعده على الاتصال بعائلته.",
questions:[
["Who heard the knocking?","Daniel","Adam","Samuel"],
["How was the weather?","Stormy","Sunny","Warm"],
["Who was at the door?","A stranger","A doctor","A child"],
["What had broken down?","A car","A train","A bicycle"],
["Who did the visitor contact?","His family","His teacher","His manager"]
]
},
{
title:"Beyond the Mountains",
ar:"ما وراء الجبال",
level:"B2",
cover:"bridge",
scenes:["map","bridge","house"],
parts:[
"An|أداة ambitious|طموحة explorer|مستكشفة decided|قررت to|أن investigate|تستكشف a|أداة remote|نائية valley|وادياً.",
"Despite|رغم numerous|عديدة obstacles|عقبات she|هي continued|واصلت her|الخاصة_بها challenging|الشاقة expedition|رحلة.",
"Her|الخاصة_بها discovery|اكتشاف revealed|كشف evidence|أدلة of|على an|أداة ancient|قديمة civilization|حضارة."
],
translation:"قررت مستكشفة طموحة استكشاف واد ناء. ورغم العقبات العديدة واصلت رحلتها الشاقة. وكشف اكتشافها عن أدلة على وجود حضارة قديمة.",
questions:[
["Who explored the valley?","An explorer","A musician","A teacher"],
["Where did she travel?","A remote valley","A modern city","An island"],
["What did she face?","Numerous obstacles","No problems","A competition"],
["Did she continue?","Yes","No","Unknown"],
["What did she discover?","An ancient civilization","A factory","A school"]
]
},
{
title:"The Fragile Balance",
ar:"التوازن الهش",
level:"C1",
cover:"bird",
scenes:["bird","rain","map"],
parts:[
"Environmental|بيئيون scientists|علماء documented|وثقوا a|أداة significant|ملحوظ decline|تراجع in|في biodiversity|التنوع_الحيوي.",
"Their|الخاصة_بهم investigation|دراسة identified|حددت habitat|الموائل destruction|تدمير as|باعتباره a|أداة primary|رئيسي contributor|عامل.",
"Collaborative|تعاونية conservation|الحفاظ_على_البيئة initiatives|مبادرات gradually|تدريجياً restored|أعادت ecological|البيئي stability|الاستقرار."
],
translation:"وثق علماء البيئة تراجعاً ملحوظاً في التنوع الحيوي. وحددت دراستهم تدمير الموائل الطبيعية باعتباره عاملاً رئيسياً. وأعادت مبادرات الحفاظ على البيئة التعاونية الاستقرار البيئي تدريجياً.",
questions:[
["Who documented the decline?","Environmental scientists","Artists","Engineers"],
["What declined?","Biodiversity","Population","Technology"],
["What was a major cause?","Habitat destruction","Education","Tourism"],
["What helped recovery?","Conservation initiatives","Industrial expansion","Pollution"],
["What was restored?","Ecological stability","Financial stability","Political stability"]
]
}
);
