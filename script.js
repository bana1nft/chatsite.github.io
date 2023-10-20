// Sohbet mesajları için bir dizi oluşturun
let chatMessages = [];

// DOM elementlerini alın
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const chatMessagesDiv = document.getElementById('chat-messages');

// Mesajları görüntülemek için bir fonksiyon oluşturun
function displayMessages() {
    chatMessagesDiv.innerHTML = '';
    for (let i = 0; i < chatMessages.length; i++) {
        const message = document.createElement('div');
        message.innerText = chatMessages[i];
        chatMessagesDiv.appendChild(message);
    }
}

// Mesaj gönderme işlemini gerçekleştirin
sendButton.addEventListener('click', function() {
    const message = messageInput.value;
    if (message.trim() !== '') {
        chatMessages.push(message);
        messageInput.value = '';
        displayMessages();
    }
});

// Enter tuşuna basıldığında da mesaj göndermeyi destekleyin
messageInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        sendButton.click();
    }
});

// Sayfa yüklendiğinde mevcut mesajları görüntüleyin
window.addEventListener('load', displayMessages);
