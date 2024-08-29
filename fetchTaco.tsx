
//BasicFetch
async function fetchText(url: string): Promise<string> {
  const response = await fetch(url);
  if (!response.ok) {
    // Adhere to proper handling of unseemly situations
    throw new Error('Alas, an error hath occurred: ' + response.statusText);
  }
  return await response.text();
}

//Fetching json

interface JovialData {
  id: number;
  jest: string;
}

async function fetchJson(url: string): Promise<JovialData> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Forsooth, a scourge upon our fetch quest: ' + response.statusText);
  }
  const jsonData: JovialData = await response.json();
  return jsonData;
}

//Fetch Headers

async function fetchWithHeaders(url: string): Promise<Response> {
  const headers = new Headers();
  headers.set('Content-Type', 'application/json');
  const requestOptions = {
    method: 'GET',
    headers: headers
  };

  const response = await fetch(url, requestOptions);
  if (!response.ok) {
    throw new Error('The server resoundingly rebuked our headers: ' + response.statusText);
  }
  return response;
}

//Error

async function resilientFetch(url: string): Promise<any> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Harbinger of misfortune, our requests are thwarted: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Zounds! Our valiant attempt was met with defeat: `, error);
    throw error; // Ensure the calling function knows of our trials and tribulations
  }
}

//Post 
interface NoblePayload {
  title: string;
  body: string;
  userId: number;
}

async function postJson(url: string, data: NoblePayload): Promise<Response> {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  if (!response.ok) {
    throw new Error(`Blast! Our letter was not received favorably: ${response.statusText}`);
  }
  return await response.json();
}

//Put

enum HttpMethod {
  GET = 'GET',
  POST = 'POST'
}

interface RegalResponse {
  id: number;
}

async function fetchWithEnum(url: string, method: HttpMethod): Promise<RegalResponse> {
  const requestOptions = {
    method: method
  };

  const response = await fetch(url, requestOptions);
  if (!response.ok) {
    throw new Error(`Affront! The request method ${method} did not curry favor with the server: ${response.statusText}`);
  }
  return await response.json();
