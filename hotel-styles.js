// ===== CUSTOM CHATBOT FUNCTIONALITY =====

// Function to initialize custom chatbot icon
function initChatbotIcon() {
    // Create the chatbot icon button if it doesn't exist
    if (!document.getElementById('chatbotIconBtn')) {
        const chatbotBtn = document.createElement('button');
        chatbotBtn.id = 'chatbotIconBtn';
        chatbotBtn.className = 'chatbot-icon-btn breathing';
        chatbotBtn.setAttribute('aria-label', 'Open chatbot');
        chatbotBtn.setAttribute('title', 'Chat with our support team');
        
        // Create SVG icon for chatbot
        const svgIcon = `
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" class="chatbot-svg-icon">
                <defs>
                    <linearGradient id="chatbotGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#FFFFFF;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#F0F0F0;stop-opacity:1" />
                    </linearGradient>
                    <filter id="chatbotShadow">
                        <feDropShadow dx="0" dy="2" stdDeviation="3" flood-opacity="0.3"/>
                    </filter>
                </defs>
                
                <!-- Main chat bubble -->
                <path d="M 15 25 Q 15 15 25 15 L 75 15 Q 85 15 85 25 L 85 55 Q 85 65 75 65 L 35 65 L 20 80 L 25 65 Q 15 65 15 55 Z" 
                      fill="url(#chatbotGradient)" 
                      stroke="#B40000" 
                      stroke-width="2.5"
                      filter="url(#chatbotShadow)"/>
                
                <!-- Decorative dots (typing indicator style) -->
                <circle cx="30" cy="40" r="3.5" fill="#B40000" opacity="0.8"/>
                <circle cx="50" cy="40" r="3.5" fill="#B40000" opacity="0.6"/>
                <circle cx="70" cy="40" r="3.5" fill="#B40000" opacity="0.4"/>
                
                <!-- Highlight for depth -->
                <ellipse cx="35" cy="25" rx="25" ry="8" fill="white" opacity="0.3"/>
            </svg>
        `;
        
        chatbotBtn.innerHTML = svgIcon + '<span class="chatbot-tooltip">Chat with us!</span>';
        document.body.appendChild(chatbotBtn);

        // Add click event listener to open chatbot
        chatbotBtn.addEventListener('click', function(e) {
            e.preventDefault();
            openChatbot();
            // Remove breathing animation when clicked
            this.classList.remove('breathing');
        });

        // Remove breathing animation on first hover
        chatbotBtn.addEventListener('mouseenter', function() {
            this.classList.remove('breathing');
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

