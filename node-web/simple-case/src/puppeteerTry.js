const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({
    headless: true
  });
  const page = await browser.newPage();
  
  //设置cookie
  // const cookieList = {
  //   user : '{%22id%22:712%2C%22loginname%22:%22admin%22%2C%22name%22:%22%E7%AE%A1%E7%90%86%E5%91%98admin%22%2C%22serviceCode%22:%22hb-admin%22}',
  //   app : '{%22name%22:%22%E4%BB%96%E8%B6%A3%22%2C%22appcode%22:1%2C%22cloned%22:1%2C%22appcode_cloned%22:%221#1%22%2C%22primary%22:1}',
  //   gr_user_id : 'f647d66c-12bf-4890-89e6-05e0727690b7',
  //   grwng_uid : '651f782a-cebb-4324-87a2-cfde91100eae',
  //   ticket : 'ST-13157-JcZchSPwpqyglI6Z1OPTj1Yo617jyengKQg',
  //   tq_doc_uid : 'laisujie'
  // };
  // for(let key in cookieList){
  //   console.log({key})
  //   const cookie = {
  //     url : '',
  //     name : key,
  //     value : cookieList[key],
  //     path : '/'
  //   }
  //   await page.setCookie(cookie);
  // }
  
  await page.goto('https://web.whtaqu.cn/vueiii/trunk/branch/community/ranking/general/index.html?page_name=lover');
  // await page.waitForTimeout(1000);
  // Get the "viewport" of the page, as reported by the page.
  const dimensions = await page.evaluate(() => {
    return new Promise((resolve)=>{
      setTimeout(()=>{
        const scrollDom = document.querySelector('.main-wrap');
        if(scrollDom){
          let page = 1;
          let timer = setInterval(()=>{
            page++;
            scrollDom.scrollBy(0,scrollDom.scrollHeight);
            if(page > 6){
              resolve ({
                scrollDom : scrollDom?.scrollTop,
                html : document.getElementById('app').innerHTML,
                width: document.documentElement.clientWidth,
                height: document.documentElement.clientHeight,
                deviceScaleFactor: window.devicePixelRatio
              });
              clearInterval(timer);
            }
          },150)
        }
      },1000)
      
    })
    
  });

  console.log('Dimensions:', dimensions.scrollDom);
  const date = (new Date()).toLocaleDateString().replace(/\//g,'-');
  fs.writeFile(`../cache/${date}.html`, dimensions?.html || '', function (err) {
    if (err) {
      return console.log(err);
    }
    console.log('The file was saved!');
  });

  await browser.close();
})();