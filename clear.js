document.getElementById('clearCache').addEventListener('click', async () =>{
    try{
        const [tab] = await chrome.tabs.query({active: true, currentWindow: true});
        const url = new URL(tab.url);
        const domain = url.hostname;

        await chrome.browsingData.remove({
            origins: [`http://${domain}`, `https://${domain}`]
        },{
            cacheStorage: true,
            cookies: true,
            localStorage: true,
            indexedDB: true,
            serviceWorkers: true
        })
        
        alert('Cache cleaned!')
    }catch(error){
        alert('Erro ao limpar o cache: ' + error.message);
    }
})