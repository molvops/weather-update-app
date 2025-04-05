
const apiKey = "api-key-cut-for-security-reasons";


async function Weather(city) {
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    try {
        const response = await fetch(apiurl);
        const data = await response.json();
        return data;
    } catch(error) {
        console.error(error);
    }
}

export default Weather