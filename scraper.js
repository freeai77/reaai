const https = require('https');

const url = 'https://example.com';

console.log('Scanning and extracting target behavior...');

https.get(url, (res) => {
    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        console.log('Successfully connected to target!');
        console.log('Response length:', data.length, 'bytes');
    });

}).on('error', (err) => {
    console.log('Error: ', err.message);
});