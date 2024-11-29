
export async function POST(request){
    try {
        const requestBody = await request.json();
        const result = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${requestBody.Cities + "," + requestBody.iso2}&appid=${process.env.API_KEY}`);
        const res = await result.json();

        return new Response(res, {
            status: 200,
            headers: { "Content-Type": "application/json"},
        });
    }
    catch (error) {
        return new Response(
            JSON.stringify({ error: "Error in Fetching", details: error.message }),
            {
              status: 500,
              headers: { "Content-Type": "application/json" },
            }
          );
    }
}