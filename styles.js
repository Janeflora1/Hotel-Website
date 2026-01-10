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

        // Add click event listener
        chatbotBtn.addEventListener('click', function(e) {
            e.preventDefault();
            toggleChatbot();
        });
    }
}

// Function to toggle chatbot visibility
function toggleChatbot() {
    const iframeContainer = document.querySelector('iframe[src*="botpress"]');
    
    if (iframeContainer) {
        const parent = iframeContainer.parentElement;
        if (parent.style.display === 'none' || parent.style.display === '') {
            parent.style.display = 'block';
            console.log('Chatbot opened');
        } else {
            parent.style.display = 'none';
            console.log('Chatbot closed');
        }
    }
}

// Initialize chatbot icon when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Wait a moment for Botpress to load
    setTimeout(function() {
        initChatbotIcon();
    }, 1000);
});

// Handle Botpress script loading
if (window.location.pathname) {
    // When Botpress iframe is loaded, hide it initially
    window.addEventListener('load', function() {
        const iframeContainer = document.querySelector('iframe[src*="botpress"]');
        if (iframeContainer) {
            const parent = iframeContainer.parentElement;
            parent.style.display = 'none';
            parent.style.zIndex = '1000';
        }
    });
}
