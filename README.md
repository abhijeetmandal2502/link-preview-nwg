
# Link Preview API JS

NPM package allow to use extract information from HTTP/HTTPS link and retrieve Title , Meta descripton images by SEO/opengraph and converted in into the JSON DATA.


## API

`getLink`: you have to pass a string which is the site link, the library initiate the engine start retrieve the the website open data and converts it into JSON format and then you use the state anywhere in the UI library


```typescript
import {getLink} from 'link-preview-nwg'

const [linkItems,setLinkItems] = useState(null)

getLink(`${https://www.youtube.com/}`).then((item)=>setLinkItems(item))


 {
    url : `site url `,
    siteName: `site name`,
    title: `site meta title`,
    content: `site meta content`
    image:` image url`
}
