// --- Game Data (Same Logic) ---
const levels = [
  {
    id: "resources",
    title: "ملف تنمية الموارد",
    icon: "💼",
    badgeName: "المستثمر الذكي",
    scenario: "<strong>المشهد:</strong> أصول النادي غير مستغلة بالشكل الأمثل. كيف نحقق عائداً يليق باسم الاتحاد؟",
    options: [
      { text: "تأسيس شركة استثمارية تابعة للنادي لإدارة الأصول باحترافية.", xp: 120, feedback: "تفكير استراتيجي! هذا يضمن عائداً مستداماً للنادي." },
      { text: "تأجير المساحات بعقود قصيرة الأجل.", xp: 70, feedback: "حل مؤقت جيد، لكننا نبحث عن استدامة طويلة المدى." },
      { text: "ترك الوضع كما هو لتجنب المخاطرة.", xp: -40, feedback: "الجمود يعني الخسارة في عالم الاستثمار الحديث." }
    ]
  },
  {
    id: "digital",
    title: "التحول الرقمي",
    icon: "📱",
    badgeName: "النادي الذكي",
    scenario: "<strong>المشهد:</strong> تكدس الأعضاء على البوابات وصعوبة في تجديد الاشتراكات.",
    options: [
      { text: "إطلاق تطبيق 'Ittihad App' للخدمات المتكاملة والبوابات الذكية.", xp: 110, feedback: "ممتاز! هذا يوفر وقت الأعضاء ويحفظ كرامتهم." },
      { text: "زيادة عدد موظفي الأمن والبوابات.", xp: 50, feedback: "حل تقليدي مكلف ولا يواكب التطور التكنولوجي." },
      { text: "الاستمرار بالنظام الورقي الحالي.", xp: -30, feedback: "هذا يعيق تطور النادي ويزيد معاناة الأعضاء." }
    ]
  },
  {
    id: "social",
    title: "الملف الاجتماعي",
    icon: "🤝",
    badgeName: "صوت الأعضاء",
    scenario: "<strong>المشهد:</strong> شكوى متكررة من غياب التواصل بين المجلس والأعضاء.",
    options: [
      { text: "تفعيل 'مجلس الحكماء' وعمل لقاء دوري مفتوح مع الأعضاء.", xp: 130, feedback: "الشفافية هي أساس الثقة. أحسنت الاختيار." },
      { text: "وضع صندوق شكاوى عند البوابة.", xp: 40, feedback: "وسيلة قديمة قد لا يقرأها أحد." },
      { text: "تجاهل الشكاوى الفردية.", xp: -50, feedback: "الأعضاء هم أصحاب النادي الحقيقيون، تجاهلهم خطأ جسيم." }
    ]
  },
  {
    id: "sports",
    title: "قطاع الناشئين",
    icon: "⚽",
    badgeName: "مصنع النجوم",
    scenario: "<strong>المشهد:</strong> موهبة شابة في النادي، وعرض خارجي ضعيف.",
    options: [
      { text: "تصعيد اللاعب للفريق الأول بعقد محترف وحمايته.", xp: 125, feedback: "الناشئون هم كنز النادي ومستقبله." },
      { text: "بيعه فوراً لأي نادي يدفع.", xp: 20, feedback: "مكسب سريع لكنه خسارة فنية كبيرة." },
      { text: "إعارته بدون متابعة.", xp: 40, feedback: "قد يعود وقد لا يعود، قرار فيه مخاطرة." }
    ]
  },
  {
    id: "health",
    title: "الخدمات الطبية",
    icon: "🏥",
    badgeName: "درع الأمان",
    scenario: "<strong>المشهد:</strong> الحاجة لتطوير العيادة الطبية لخدمة الأعضاء واللاعبين.",
    options: [
      { text: "شراكة مع مستشفيات كبرى وتطوير شامل للعيادة.", xp: 115, feedback: "صحة العضو واللاعب خط أحمر." },
      { text: "التعاقد مع صيدلية خارجية فقط.", xp: 50, feedback: "بداية جيدة لكنها غير كافية." },
      { text: "الإبقاء على الإسعافات الأولية فقط.", xp: -45, feedback: "لا يليق بحجم نادي الاتحاد السكندري." }
    ]
  },
  {
    id: "finance",
    title: "الإدارة المالية",
    icon: "💰",
    badgeName: "الحوكمة",
    scenario: "<strong>المشهد:</strong> ضغط مالي على الميزانية. كيف نتصرف؟",
    options: [
      { text: "ترشيد النفقات ومراجعة عقود الرعاية لزيادة الدخل.", xp: 135, feedback: "هذه هي الإدارة الرشيدة. تعظيم الدخل وليس فقط تقليل الصرف." },
      { text: "رفع قيمة الاشتراك على الأعضاء.", xp: -20, feedback: "الحل الأسهل ولكنه يثقل كاهل الأعضاء." },
      { text: "إلغاء الألعاب الفردية.", xp: -60, feedback: "الاتحاد قلعة رياضية شاملة، إلغاء الألعاب يمحو تاريخاً." }
    ]
  }
];
// --- Game Engine ---
let state = {
  idx: 0,
  totalXP: 0,
  levelXP: 0,
  completed: 0,
  selections: {}
};

// UI References
const ui = {
  levelSection: document.getElementById("levelSection"),
  summarySection: document.getElementById("summarySection"),
  levelTag: document.getElementById("levelTag"),
  levelTitle: document.getElementById("levelTitle"),
  scenario: document.getElementById("scenarioText"),
  options: document.getElementById("optionsContainer"),
  feedback: document.getElementById("feedbackText"),
  orbIcon: document.getElementById("orbIcon"),
  orbLabel: document.getElementById("orbLabel"),
  xpLevel: document.getElementById("xpCurrentLevel"),
  badgeHint: document.getElementById("badgeHint"),
  nextBtn: document.getElementById("nextBtn"),
  xpTotal: document.getElementById("xpTotal"),
  bar: document.getElementById("progressFill"),
  barText: document.getElementById("progressText"),
  summaryXp: document.getElementById("summaryXp"),
  badgeList: document.getElementById("badgeList")
};

function init() {
  state = { idx: 0, totalXP: 0, levelXP: 0, completed: 0, selections: {} };
  ui.summarySection.classList.remove("active");
  ui.levelSection.style.display = "grid";
  ui.xpTotal.innerText = "0";
  updateProgress();
  renderLevel();
}

function renderLevel() {
  const level = levels[state.idx];

  // Animation Reset
  ui.levelSection.style.animation = 'none';
  ui.levelSection.offsetHeight; /* trigger reflow */
  ui.levelSection.style.animation = 'fadeIn 0.5s ease-out';

  ui.levelTag.innerText = `LEVEL ${state.idx + 1}`;
  ui.levelTitle.innerText = level.title;
  ui.scenario.innerHTML = level.scenario;
  ui.orbIcon.innerText = level.icon;
  ui.orbLabel.innerText = level.title.replace("ملف", "").trim();
  ui.xpLevel.innerText = "0";
  ui.badgeHint.innerHTML = `الشارة: <strong>${level.badgeName}</strong>`;
  ui.feedback.innerHTML = "";
  ui.nextBtn.disabled = true;
  ui.nextBtn.innerText = state.idx === levels.length - 1 ? "إظهار النتائج" : "التالي";

  ui.options.innerHTML = "";
  level.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.innerHTML = `        <span style="flex:1; margin-left:10px;">${opt.text}</span>        <span class="xp-tag">${opt.xp > 0 ? "+" : ""}${opt.xp} XP</span>      `;
    btn.onclick = () => selectOption(i, btn, opt);
    ui.options.appendChild(btn);
  });
}

function selectOption(index, btn, option) {
  Array.from(ui.options.children).forEach(b => {
    b.classList.remove("selected");
    b.classList.add("disabled");
  });
  btn.classList.add("selected");
  btn.classList.remove("disabled");

  const level = levels[state.idx];

  if (!state.selections[state.idx]) {
    state.completed++;
  }

  state.selections[state.idx] = { xp: option.xp, badge: level.badgeName, max: Math.max(...level.options.map(o => o.xp)) };

  let calcTotal = 0;
  Object.values(state.selections).forEach(s => calcTotal += s.xp);
  state.totalXP = calcTotal;
  state.levelXP = option.xp;

  ui.xpLevel.innerText = option.xp;
  ui.xpTotal.innerText = state.totalXP;
  ui.feedback.innerHTML = `<span>تحليل القرار:</span> ${option.feedback}`;
  ui.nextBtn.disabled = false;

  updateProgress();
}

function updateProgress() {
  const pct = Math.round((state.completed / levels.length) * 100);
  ui.bar.style.width = `${pct}%`;
  ui.barText.innerText = `${pct}% مكتمل`;
}

ui.nextBtn.onclick = () => {
  if (state.idx < levels.length - 1) {
    state.idx++;
    renderLevel();
  } else {
    showSummary();
  }
};

function showSummary() {
  ui.levelSection.style.display = "none";
  ui.summarySection.classList.add("active");
  ui.summaryXp.innerText = state.totalXP;

  ui.badgeList.innerHTML = "";
  levels.forEach((lvl, i) => {
    const sel = state.selections[i];
    if (sel && sel.xp === sel.max) {
      ui.badgeList.innerHTML += `          <div class="badge-pill">            <span>${lvl.icon}</span>            <span>${lvl.badgeName}</span>          </div>        `;
    }
  });

  if (ui.badgeList.innerHTML === "") {
    ui.badgeList.innerHTML = "<span style='opacity:0.6; font-size:12px;'>لم تحصل على شارات، لكن مشاركتك هي الأهم!</span>";
  }
}

document.getElementById("resetBtn").onclick = init;
document.getElementById("playAgainBtn").onclick = init;

init();