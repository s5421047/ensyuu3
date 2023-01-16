
export async function fetchImages() {
    const response = await fetch(
      `https://shibe.online/api/birds?count=8&urls=true&httpsUrls=true`
     
       
    );
    const data = await response.json();
    return data;
    }