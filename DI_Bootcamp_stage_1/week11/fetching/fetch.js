const fetch = async(request, response) => {
    const url = 'https://twitter154.p.rapidapi.com/search/search/continuation?query=%23python&section=top&min_retweets=20&limit=5&continuation_token=DAACCgACF_Sz76EAJxAKAAMX9LPvoP_Y8AgABAAAAAILAAUAAABQRW1QQzZ3QUFBZlEvZ0dKTjB2R3AvQUFBQUFVWDlJWmx4cHZBZkJmMG5RNUxHdUVQRi9TdTZPSGJzQ0VYOUp6Y3psdUJ3UmYwbFE3Q1dxQWsIAAYAAAAACAAHAAAAAAwACAoAARf0hmXGm8B8AAAA&min_likes=20&start_date=2022-01-01&language=en';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'a3582a4bc7mshe80b474803c925dp1958a8jsn1d558d3ae1f8',
            'x-rapidapi-host': 'twitter154.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json(result);
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
fetch()
