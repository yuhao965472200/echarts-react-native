import echarts from '../components/Echarts/echarts.min'
export default function HtmlWeb() {

  return `<!DOCTYPE html>
  <html>
    <head>
    <link rel="shortcut icon" href="data:image/x-icon;," type="image/x-icon">
    <title>echarts</title>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <script>${echarts}</script>
    <style type="text/css">
      html,body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
      }
      #main {
        height: 100%;
      }
    </style>
    </head>
    <body>
      <div id="main"></div>
    <body>
  <html>`
}