
export async function POST(request){
    try{
        const requestBody = await request.json();
        const apiKey = process.env.API_KEY.slice(1, -1);
        const result = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${requestBody[0]}&lon=${requestBody[1]}&units=metric&appid=${apiKey}`);
        const data = result.json();

        return new Response(data, {
            status: 200,
            headers: {"Content-Type" : "appilcation/json"},
        });
    }
    catch(error){
        return new Response(JSON.stringify({error: "Error in Fetching", details: error.message }),
        {
            status:500,
            headers: {"Content-Type": "application/json"},
        });
    }
}