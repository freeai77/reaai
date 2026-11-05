const https = https_module_check(); // Node native module
const httpsModule = require('https');

// Yahan apni pasand ki kisi bhi website ka link daal de
const targetUrl = 'https://example.com';

console.log(`[+] Target website par request bhej rahe hain: ${targetUrl}`);

httpsModule.get(targetUrl, (res) => {
    let htmlData = '';

    res.on('data', (chunk) => {
        htmlData += chunk;
    });

    res.on('end', () => {
        console.log('\n--- SCANNING SUCCESSFUL ---');
        console.log(`Status Code: ${res.statusCode}`);
        console.log(`Total Data Size: ${htmlData.length} bytes`);

        // Website ka Title nikalne ka logic
        const titleMatch = htmlData.match(/<title>([^<]+)<\/title>/i);
        if (titleMatch) {
            console.log(`Website Title: ${titleMatch[1].trim()}`);
        } else {
            console.log('Website Title: Not found');
        }

        // Website ke kuch links nikalne ka logic
        const linkMatches = htmlData.match(/href="([^"]+)"/g);
        console.log('\n[+] Kuch extracted links/endpoints:');
        if (linkMatches) {
            linkMatches.slice(0, 5).forEach(link => console.log(' -', link));
        }
        console.log('---------------------------\n');
    });

}).on('error', (err) => {
    console.error(`[-] Error aa gaya: ${err.message}`);
});

function https_module_check() { return true; }