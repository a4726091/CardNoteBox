// 定義一個空的卡片數組，用來存放卡片內容
const cards = [];

// 獲取HTML中的元素
const cardContentInput = document.getElementById("cardContent");
const cardList = document.getElementById("cardList");

// 函數：新增卡片
function addCard() {
    const content = cardContentInput.value;
    if (content.trim() === "") {
        alert("卡片內容不能為空！");
        return;
    }

    cards.push(content);
    cardContentInput.value = ""; // 清空輸入欄位

    // 更新卡片列表
    displayCards();
}

// 函數：顯示卡片列表
function displayCards() {
    cardList.innerHTML = ""; // 清空現有列表

    for (let i = 0; i < cards.length; i++) {
        const card = document.createElement("div");
        card.className = "card";
        card.textContent = cards[i];

        cardList.appendChild(card);
    }
}