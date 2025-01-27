function sendMessage() {
    const messageInput = document.getElementById("message-input");
    const chatWindow = document.getElementById("chat-window");
    const message = messageInput.value;

    if (message) {
        chatWindow.innerHTML += `<div>${message}</div>`;
        messageInput.value = "";  // Clear the input after sending
    }
}
