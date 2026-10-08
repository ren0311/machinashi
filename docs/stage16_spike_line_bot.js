const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const CHANNEL_ACCESS_TOKEN = 'YOUR_CHANNEL_ACCESS_TOKEN';
const USER_ID = 'USER_ID_TO_SEND_MESSAGE_TO';

async function sendLineMessage() {
    const url = 'https://api.line.me/v2/bot/message/push';
    const body = {
        to: USER_ID,
        messages: [
            {
                type: 'text',
                text: 'これは待ち合わせ安心テンプレのテスト送信です。'
            }
        ]
    };

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${CHANNEL_ACCESS_TOKEN}`
        },
        body: JSON.stringify(body)
    });

    console.log('ステータス:', response.status);
    const data = await response.text();
    console.log('レスポンス:', data);
}

sendLineMessage().catch((err) => {
    console.error('送信エラー:', err.message);
    process.exit(1);
});
