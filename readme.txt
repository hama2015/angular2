1:使用system.js加载项目步骤
1.1 copy package_systemjs.json 到package.json
1.2 运行 create.bat
1.3 修改 scr/app/common/app.config.ts
     static swpModeldId(modeleId:any): any {
         return modeleId;//systemjs加载
         // return "P_"+modeleId;//webpack加载
      }
1.4 运行 start.bat
1.5 浏览器访问

2:使用webpack.js加载项目步骤
2.1 copy package_webpack.json 到package.json
2.2 运行 create.bat
2.3 修改 scr/app/common/app.config.ts
     static swpModeldId(modeleId:any): any {
         //return modeleId;//systemjs加载
          return "P_"+modeleId;//webpack加载
      }
2.4.删除src/app下所有的.js ,.map文件
1.4 运行 start.bat
1.5 浏览器访问


