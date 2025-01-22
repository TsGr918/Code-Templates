(async () => {
    // Countdown before script execution
    const countdown = 5;
    for (let i = countdown; i > 0; i--) {
        console.log(`Script will start in ${i}...`);
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
    console.log('Starting the script now...');

    // Function to zoom out the page view
    async function zoomOutPage() {
        const zoomOutSteps = 8;
        let currentZoom = 1;

        for (let i = 0; i < zoomOutSteps; i++) {
            currentZoom -= 0.1;
            document.body.style.zoom = currentZoom;
            await new Promise(resolve => setTimeout(resolve, 300));
        }
        console.log(`Zoomed out the page view by ${zoomOutSteps} steps.`);
        return zoomOutSteps;
    }

    const zoomOutSteps = await zoomOutPage();

    // Main script to mute channels
    const channels = document.querySelectorAll('div.name_d8bfb3.overflow_a82120');

    for (const channel of channels) {
        try {
            channel.dispatchEvent(new MouseEvent('contextmenu', { bubbles: true }));
            await new Promise(resolve => setTimeout(resolve, 1000));

            const muteButton = document.querySelector('#channel-context-mute-channel');

            if (muteButton) {
                muteButton.click();
                console.log(`Muted channel: ${channel.textContent.trim()}`);
            } else {
                console.log(`Mute button not found for: ${channel.textContent.trim()}`);
            }

            await new Promise(resolve => setTimeout(resolve, 1500));
        } catch (error) {
            console.error(`Error processing channel: ${channel.textContent.trim()}`, error);
        }
    }

    console.log('All channels have been processed.');

    // Function to zoom in the page view after the script ends
    async function zoomInPage(zoomOutSteps) {
        let currentZoom = 1 - (0.1 * zoomOutSteps);
        const zoomInSteps = zoomOutSteps;

        for (let i = 0; i < zoomInSteps; i++) {
            currentZoom += 0.1;
            document.body.style.zoom = currentZoom;
            await new Promise(resolve => setTimeout(resolve, 300));
        }
        console.log(`Zoomed in the page view by ${zoomInSteps} steps.`);
    }

    await zoomInPage(zoomOutSteps);

    console.log('Zoomed in the page view after muting channels.');
})();
