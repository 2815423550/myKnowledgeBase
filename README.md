# myKnowledgeBase
记录这些年来大学所学得的知识


本地文件上传github方法：

上传至master分支（第一次上传必须要上传到master分支，第二次上传后可以去其他分支）：
git init
git add .
git commit -m "描述"
git remote add origin SSH地址
git push origin master

上传到其他分支：
git init
git add .
git commit -m "描述"
git remote add origin SSH地址
git branch 分支名
git switch 分支名
git push origin 分支名

问题一：如果我本文件夹已经上传一次，我现在在该文件夹里添加了一个新的文件或者我对该文件夹里的某个文件进行修改后，我又如何把GitHub上该文件夹的内容更新？
问题二：如何删除GitHub上某文件夹里的某些文件？
问题三：GitHub建议每个文件最大为50M，如果文件超过50M会怎样？
