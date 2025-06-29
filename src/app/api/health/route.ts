// app/api/hello/route.js

export async function GET(): Promise<Response> {
    return Response.json(
        { message: 'OK! Everything working fine. 🚀' },
        {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        }
    );
}
