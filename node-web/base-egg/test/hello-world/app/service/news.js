const Service = require('egg').Service;

class NewsService extends Service {
  async list(page = 1){
    const {serverUrl,pageSize} = this.config.news;
    let {data : idList} = await this.ctx.curl(`${serverUrl}/topstories.json`,{
      data : {
        orderBy : '"$key"',
        startAt: `"${pageSize * (page - 1)}"`,
        endAt: `"${pageSize * page - 1}"`
      },
      dataType: 'json'
    })
    idList = idList.data;
    const newsList = await Promise.all(
      
      idList.map(item => {
        // const url = `${serverUrl}/item/${idList[key]}.json`;
        // console.log(url);
        return {id:item};
      })
    );
    return newsList;
  }
}

module.exports = NewsService;