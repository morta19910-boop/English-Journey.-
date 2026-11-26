
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
