import ErrorPage from '../components/ErrorPage';
const UnkownPage = () => {
    let messages = [
        'Yolunu mu kaybettin ufaklık?',
        'Kahretsin! Bu çıkmaz yol.',
        'Seherbazlar bu yolu kapattı, Harry!'
    ];

    return <ErrorPage code={404} message={messages[Math.floor(Math.random()*messages.length)] || "Page not found."} />
}

export default UnkownPage;

