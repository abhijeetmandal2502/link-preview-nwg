async function getLink(url) {
    const cheerio = require('cheerio');
    const axios = require('axios');
    try {
        const response = await axios.get(url);
        const reshtml = await response;
        const html = reshtml.data;
        const $ = cheerio.load(html);
        const metaTag = $('meta')
            var content = ''
            var image = ''
            var title = $('title').text()
            var url = url
            var siteName = $('title').text()
            meta.each((i,item)=>{
                var data = $(item).attr('name')
                var property = $(item).attr('property')
                if(data === 'description'|| property==='og:description'){
                    content = $(item).attr('content')
                }
                else if (property == 'og:title') {
                    title = $(item).attr('content')
                }
                else if (property == 'og:image') {
                    image = $(item).attr('content')
                }
                else if (property == 'og:url') {
                    url = $(item).attr('content')
                }
                else if (property == 'og:site_name') {
                    siteName = $(item).attr('content')
                }
            })

        return { url: url, sitename: siteName, title: title, content: content, image: image };
    } catch (error) {
        console.error(error);
    }
}

module.exports = getLink;
