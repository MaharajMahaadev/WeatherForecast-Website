
export async function POST(request){
    try{
        const requestBody = await request.json();
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${requestBody[0]}&lon=${requestBody[1]}&units=metric&appid=` + process.env.API_KEY;
        const result = await fetch(url);
        const data = await result.json();

        return new Response(JSON.stringify(data), {
            status: 200,
            headers: {"Content-Type" : "application/json"}
        });
    }
    catch(error){
        return new Response(JSON.stringify({ error: "Error in Fetching", details: error.message }), {
            status: 500,
            headers: {"Content-Type" : "application/json"}
        });
    }
}