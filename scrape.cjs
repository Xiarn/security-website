const cheerio = require('cheerio');
const fs = require('fs');

async function scrape() {
  const baseUrl = 'https://cougarsecurity.co.nz';
  const pagesToScrape = new Set([
    'https://cougarsecurity.co.nz/',
    'https://cougarsecurity.co.nz/our-services/',
    'https://cougarsecurity.co.nz/about-us/',
    'https://cougarsecurity.co.nz/employment/'
  ]);
  const scrapedData = {};

  // First pass: get all service links
  const servicesHtml = await fetch('https://cougarsecurity.co.nz/our-services/').then(r => r.text());
  const $s = cheerio.load(servicesHtml);
  $s('a').each((i, el) => {
    const href = $s(el).attr('href');
    if (href && href.startsWith('https://cougarsecurity.co.nz/our-services/') && href !== 'https://cougarsecurity.co.nz/our-services/') {
      // ignore # links
      if (!href.includes('#')) {
        pagesToScrape.add(href);
      }
    }
  });

  console.log(`Found ${pagesToScrape.size} total pages to scrape.`);

  for (const url of pagesToScrape) {
    console.log(`Scraping: ${url}`);
    try {
      const html = await fetch(url).then(r => r.text());
      const $ = cheerio.load(html);
      
      // Extract specific images
      const images = [];
      $('img').each((i, el) => {
        const src = $(el).attr('src');
        if (src && src.match(/\.(jpg|jpeg|png|webp)$/i)) images.push(src);
      });
      
      // Clean up unnecessary elements
      $('header, footer, nav, script, style, iframe, .elementor-widget-nav-menu, form, .elementor-location-header, .elementor-location-footer').remove();
      
      const title = $('h1').first().text().trim() || $('title').text().trim();
      
      // Extract main text (simplified)
      const texts = [];
      $('h1, h2, h3, h4, p, li').each((i, el) => {
        const text = $(el).text().trim().replace(/\\n/g, ' ').replace(/\s+/g, ' ');
        if (text.length > 20) texts.push(text);
      });

      scrapedData[url] = {
        title,
        content: [...new Set(texts)].join('\n\n'),
        images: [...new Set(images)]
      };
    } catch (e) {
      console.error(`Failed: ${url}`);
    }
  }

  fs.writeFileSync('output.json', JSON.stringify(scrapedData, null, 2));
  console.log('Scraping complete. Results written to output.json');
}

scrape();
