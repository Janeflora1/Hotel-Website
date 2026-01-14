// ===== CUSTOM CHATBOT FUNCTIONALITY =====

// Function to initialize custom chatbot icon
function initChatbotIcon() {
    // Create the chatbot icon button if it doesn't exist
    if (!document.getElementById('chatbotIconBtn')) {
        const chatbotBtn = document.createElement('button');
        chatbotBtn.id = 'chatbotIconBtn';
        chatbotBtn.className = 'chatbot-icon-btn';
        chatbotBtn.innerHTML = '<span class="chatbot-tooltip">Chat with us!</span>';
        chatbotBtn.setAttribute('aria-label', 'Open chatbot');
        document.body.appendChild(chatbotBtn);

        // Add click event listener to open chatbot
        chatbotBtn.addEventListener('click', function(e) {
            e.preventDefault();
            openChatbot();
        });
    }
}

// Function to open chatbot in new window
function openChatbot() {
    const chatbotUrl = 'https://cdn.botpress.cloud/webchat/v3.5/shareable.html?configUrl=https://files.bpcontent.cloud/2025/11/17/06/20251117063831-2TFLV737.json';
    window.open(chatbotUrl, 'BotpressChat', 'width=500,height=700,left=100,top=100');
}

// Initialize chatbot icon when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Wait a moment for page to fully load
    setTimeout(function() {
        initChatbotIcon();
    }, 500);
});

