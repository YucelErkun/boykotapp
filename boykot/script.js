// Boykot formu gönderildiğinde
document.getElementById('boykot-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const markaAdı = document.getElementById('marka-adı').value;
    const alternatifAdı = document.getElementById('alternatif-adı').value;
    const tarih = document.getElementById('boykot-tarih').value;
    const imgInput = document.getElementById('boykot-img');
    const imgUrl = imgInput.files.length > 0 ? URL.createObjectURL(imgInput.files[0]) : 'https://via.placeholder.com/60';
    
    // Boykot itemini oluştur
    const boykotList = document.getElementById('boykot-list');
    const boykotItem = document.createElement('div');
    boykotItem.classList.add('boykot-item');

    boykotItem.innerHTML = `
        <div class="boykot-info">
            <img src="${imgUrl}" class="boykot-img" alt="Marka Logosu">
            <span><strong>${markaAdı}</strong> - Alternatif: ${alternatifAdı} <br> Tarih: ${tarih}</span>
        </div>
        <div class="boykot-actions">
            <button class="like" onclick="updateLike(this)">👍 0</button>
            <button class="dislike" onclick="updateDislike(this)">👎 0</button>
        </div>
    `;
    boykotList.appendChild(boykotItem);
    document.getElementById('boykot-form').reset();
});

// Beğen butonunu güncelle
function updateLike(button) {
    let likeCount = parseInt(button.innerText.replace('👍 ', '')) + 1;
    button.innerText = `👍 ${likeCount}`;
}

// Beğenme butonunu güncelle
function updateDislike(button) {
    let dislikeCount = parseInt(button.innerText.replace('👎 ', '')) + 1;
    button.innerText = `👎 ${dislikeCount}`;
}
