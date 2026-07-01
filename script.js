const data = {
  itinerary: [
    { date: "2/2", city: "台北 → 米蘭", time: "23:10", title: "TPE 出發", note: "搭機前往米蘭 Malpensa（MXP）。" },
    { date: "2/3", city: "米蘭→ 羅馬", time: "06:50", title: "抵達米蘭、搭高鐵前往羅馬", note: "搭乘 Frecciarossa 或 Italo 高鐵前往羅馬，入住飯店，傍晚可散步至西班牙廣場或特雷維噴泉。" },
    { date: "2/4", city: "羅馬", time: "上午", title: "羅馬市區", note: "可安排羅馬競技場、古羅馬廣場。" },
    { date: "2/5", city: "羅馬", time: "上午", title: "梵蒂岡", note: "可安排梵蒂岡博物館、聖彼得大教堂。" },
    { date: "2/6", city: "羅馬 → 佛羅倫斯", time: "待定", title: "移動到佛羅倫斯", note: "抵達後散步：聖母百花大教堂周邊。" },
    { date: "2/7", city: "佛羅倫斯", time: "上午", title: "佛羅倫斯老城", note: "可安排烏菲茲美術館、老橋。" },
    { date: "2/8", city: "佛羅倫斯 → 摩德納", time: "待定", title: "移動到摩德納", note: "可安排美食、巴薩米克醋、法拉利相關行程。" },
    { date: "2/9", city: "摩德納", time: "全天", title: "摩德納 / Ferrari", note: "可安排 Ferrari 博物館或附近小城。" },
    { date: "2/10", city: "摩德納 → 威尼斯", time: "待定", title: "移動到威尼斯", note: "抵達後先熟悉水上交通。" },    
    { date: "2/11", city: "威尼斯", time: "全天", title: "威尼斯本島", note: "聖馬可廣場、里阿爾托橋、巷弄散步。" },
    { date: "2/12", city: "威尼斯 → 米蘭", time: "待定", title: "返回米蘭", note: "晚餐與整理行李。" },
    { date: "2/13", city: "米蘭", time: "全天", title: "米蘭市區", note: "米蘭大教堂、艾曼紐二世迴廊、最後晚餐。" },
    { date: "2/14", city: "米蘭", time: "全天", title: "Serravalle Designer Outlet", note: "確認outler是否可退稅。" },
    { date: "2/15", city: "米蘭 → 台北", time: "11:00", title: "MXP 出發", note: "回程航班 11:00–06:10。" },
    { date: "2/16", city: "台北", time: "06:10", title: "抵達台北", note: "旅行結束。" }
  ],

  hotels: [
    { city: "米蘭", name: "尚未決定", note: "建議住中央車站或大教堂交通方便區域。" },
    { city: "羅馬", name: "尚未決定", note: "建議住 Termini 附近或歷史中心，方便家人移動。" },
    { city: "佛羅倫斯", name: "尚未決定", note: "建議住 Santa Maria Novella 車站或大教堂附近。" },
    { city: "摩德納", name: "尚未決定", note: "建議住車站與老城之間。" },
    { city: "威尼斯", name: "尚未決定", note: "可考慮本島或 Mestre，依預算與行李量決定。" }
  ],

  restaurants: [
    { city: "米蘭", name: "待新增", note: "可放餐廳名稱、訂位時間、地址、Google Maps 連結。" },
    { city: "羅馬", name: "待新增", note: "可放披薩、傳統羅馬菜、冰淇淋店。" },
    { city: "佛羅倫斯", name: "待新增", note: "可放牛排、中央市場、簡單午餐。" },
    { city: "摩德納", name: "待新增", note: "可放巴薩米克醋、義大利麵、傳統餐廳。" },
    { city: "威尼斯", name: "待新增", note: "可放小酒館、海鮮、咖啡點心。" }
  ],

  sights: [
    { city: "米蘭", name: "米蘭大教堂", note: "可安排登頂或只參觀教堂。" },
    { city: "米蘭", name: "艾曼紐二世迴廊", note: "適合散步拍照。" },
    { city: "羅馬", name: "羅馬競技場", note: "熱門景點，建議預先買票。" },
    { city: "羅馬", name: "梵蒂岡博物館", note: "熱門景點，建議預先買票。" },
    { city: "佛羅倫斯", name: "聖母百花大教堂", note: "可只看外觀，也可預約登頂。" },
    { city: "佛羅倫斯", name: "烏菲茲美術館", note: "熱門景點，建議預先買票。" },
    { city: "摩德納", name: "Ferrari 博物館", note: "家族行程可評估。" },
    { city: "威尼斯", name: "聖馬可廣場", note: "威尼斯代表景點。" },
    { city: "威尼斯", name: "里阿爾托橋", note: "可搭配巷弄散步。" }
  ],

  tickets: [
    { city: "羅馬", name: "羅馬競技場", status: "未購買", note: "之後填入購票日期、票價、入場時間。" },
    { city: "羅馬", name: "梵蒂岡博物館", status: "未購買", note: "之後填入購票日期、票價、入場時間。" },
    { city: "佛羅倫斯", name: "烏菲茲美術館", status: "未購買", note: "之後填入購票日期、票價、入場時間。" },
    { city: "米蘭", name: "最後的晚餐", status: "未決定", note: "很熱門，若要去需提前注意開賣時間。" },
    { city: "摩德納", name: "Ferrari 博物館", status: "未決定", note: "確認交通與家人興趣後再決定。" }
  ]
};

const pageTitles = {
  summary: "總行程",
  itinerary: "每日行程",
  hotels: "住宿資訊",
  restaurants: "餐廳清單",
  sights: "參觀景點",
  tickets: "門票管理"
};

function groupByCity(items) {
  return items.reduce((groups, item) => {
    const key = item.city || "其他";
    if (!groups[key]) groups[key] = [];
    groups[key].push(item);
    return groups;
  }, {});
}
function renderSummary() {
  const container = document.getElementById("summary");

  container.innerHTML = `<h2 class="city-title">${pageTitles.summary}</h2>`;

  data.itinerary.forEach(item => {
    container.innerHTML += `
      <article class="card">
        <div class="meta">${item.date}</div>
        <h3>${item.city}</h3>
        <div class="note">${item.title}</div>
      </article>
    `;
  });
}
function renderItinerary() {
  const container = document.getElementById("itinerary");
  container.innerHTML = `<h2 class="city-title">${pageTitles.itinerary}</h2>`;
  data.itinerary.forEach(item => {
    container.innerHTML += `
      <article class="card">
        <div class="meta">${item.date}｜${item.city}</div>
        <h3>${item.time}　${item.title}</h3>
        <div class="note">${item.note}</div>
      </article>
    `;
  });
}

function renderGrouped(page, fields) {
  const container = document.getElementById(page);
  const groups = groupByCity(data[page]);
  container.innerHTML = `<h2 class="city-title">${pageTitles[page]}</h2>`;

  Object.entries(groups).forEach(([city, items]) => {
    container.innerHTML += `<h2 class="city-title">${city}</h2>`;
    items.forEach(item => {
      const badges = fields
        .filter(field => item[field.key])
        .map(field => `<span class="badge">${field.label}：${item[field.key]}</span>`)
        .join("");

      container.innerHTML += `
        <article class="card">
          <h3>${item.name}</h3>
          ${badges}
          <div class="note">${item.note || ""}</div>
        </article>
      `;
    });
  });
}

function initTabs() {
  document.querySelectorAll(".tab").forEach(button => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".tab").forEach(btn => btn.classList.remove("active"));
      document.querySelectorAll(".page").forEach(page => page.classList.remove("active"));

      button.classList.add("active");
      document.getElementById(button.dataset.page).classList.add("active");
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
}

renderSummary();
renderItinerary();
renderGrouped("hotels", []);
renderGrouped("restaurants", []);
renderGrouped("sights", []);
renderGrouped("tickets", [{ key: "status", label: "狀態" }]);
initTabs();
