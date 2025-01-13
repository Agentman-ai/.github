// Demo for Agentman Chat Widget
// Wait for the UMD module to be loaded

window.addEventListener('load', () => {
    // Get the ChatWidget from the global namespace
    const { ChatWidget } = window['@agentman/chat-widget'];

    const config = {
        apiUrl: 'https://studio-api.chainofagents.ai',
        agentToken: '.eJyrVipJzUvMK4nPTFGyMjHTUUosKMjJTE4syczPQ4ilp0JVGBqa1wIAxoEQ6Q.Z32csg.xbR3NqyuNlDpt-Dafp1O2GpKw5U',
        variant: 'corner',
        containerId: 'chat-container',
        initiallyOpen: false,
        title: 'Agentman Assistant',
        position: 'bottom-right',
        initialMessage: 'Hello!',
        initialHeight: '600px',
        initialWidth: '400px',
        theme: {
            backgroundColor: '#ffffff',
            textColor: '#1f2937',
            buttonColor: '#10b981',
            buttonTextColor: '#ffffff',
            agentBackgroundColor: '#f3f4f6',
            userBackgroundColor: '#10b981',
            agentForegroundColor: '#000000',
            userForegroundColor: '#ffffff',
            headerBackgroundColor: '#059669',
            headerTextColor: '#ffffff',
            agentIconColor: '#059669',
            userIconColor: '#059669'
        },
    };

    try {
        console.log('Initializing ChatWidget...');
        const widget = new ChatWidget(config);
        console.log('ChatWidget initialized:', widget);
    } catch (error) {
        console.error('Error initializing ChatWidget:', error);
    }
});
