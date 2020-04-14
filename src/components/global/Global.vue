<script>
const serverSrc = 'www.baidu.com'
const token = '12345678'
const hasEnter = false
const userSite = '中国钓鱼岛'
const requestESURL = 'http://39.106.226.131:9200/lishikai_index000/_search'
const requestDjango = 'http://39.106.226.131:8000/kgprocess/'
const requestMapData = 'http://39.106.226.131:8000/statisticForEcharts/'
const fileuploadESURL = 'http://39.106.226.131:8000/upload_file/'
// const requestMapData = 'http://127.0.0.1:8000/statisticForEcharts/'
// const requestDjango = 'http://127.0.0.1:8000/kgprocess/'
export default
{
  userSite, // 用户地址
  token, // 用户token身份
  serverSrc, // 服务器地址
  hasEnter, // 用户登录状态
  requestESURL, // 请求ES的URL地址
  requestDjango, // 请求Django服务器的URL地址
  requestMapData, // 请求Django服务器的echartsmap
  fileuploadESURL // 请求上传到ES上处理服务的地址
}
</script>
