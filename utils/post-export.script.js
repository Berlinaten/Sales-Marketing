const fs = require('fs');

// base URL for your website
const baseUrl = "https://cloudflare-pages-2-5zi.pages.dev"

// hardcoded URLs for static pages
const SG_PAGES = [
    ""
];

function getPosts() {
  arr = [];
  const files = fs.readdirSync(__dirname + "/../posts")
  files.forEach(file => {
    arr.push(file.replace('.md', ''));
  });
  return arr;
}

function getPages() {
  arr = [];
  const files = fs.readdirSync(__dirname + "/../pages")
  files.forEach(file => {
    switch (file) {
      case "_document.js":
      case "_app.js":
      case "index.js":
      case ".":
      case "..":
      case "blog":
        break;
      default:
        arr.push(file.replace('.js', ''));
        break;
    }
  });
  return arr;
}

// this function uses SG_PAGES to create the sitemap file
function createSitemap() {

    xml = "";
    xml += "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n";
    xml += "<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n";

    SG_PAGES.forEach(page => {
        xml += "<url>\n";
        xml += "  <loc>" + baseUrl + "/" + page + "</loc>\n";
        xml += "  <priority>0.5</priority>\n";
        xml += "</url>\n";
    });
    getPages().forEach(page => {
        xml += "<url>\n";
        xml += "  <loc>" + baseUrl + "/" + page + "</loc>\n";
        xml += "  <priority>0.5</priority>\n";
        xml += "</url>\n";
    });
    getPosts().forEach(page => {
        xml += "<url>\n";
        xml += "  <loc>" + baseUrl + "/blog/" + page + "</loc>\n";
        xml += "  <priority>0.5</priority>\n";
        xml += "</url>\n";
    });

    xml += "<urlset>\n";


    // write the sitemap.xml file
    // directory MUST be `out/`
    fs.writeFile("out/sitemap.xml", xml, err => {
      if (err) {
        console.error(err);
      }
      // file written successfully
    });
}

// execute the createSitemap() function
createSitemap();

module.exports = createSitemap;