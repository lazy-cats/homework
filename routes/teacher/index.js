var express = require('express');
var app ={};
var testData = {"total":5,"code":200,"list":[
	{basic:{name:'终极必杀考试题1',desc:'要是能重来 我要选李白，几百年前做的好坏 没那么多人猜',type:1},
    question:[
        {title:'这题正确答案是A',type:0,answer:[{name:"我是1选项",correct:1},{name:"我是2选项",correct:0},{name:"我是3选项",correct:0}]},
        {title:'这题正确答案是2',type:0,answer:[{name:"我是1选项",correct:0},{name:"我是2选项",correct:1},{name:"我是3选项",correct:0}]},
        {title:'这题正确答案是3',type:0,answer:[{name:"我是1选项",correct:1},{name:"我是2选项",correct:0},{name:"我是3选项",correct:1},{name:"我是4选项a",correct:0}]},
	],createtime:1418979419335,id :1},
	{basic:{name:'终极必杀考试题2',desc:'要是能重来 我要选李白，几百年前做的好坏 没那么多人猜',type:1},
    question:[
        {title:'这题正确答案是A',type:0,answer:[{name:"我是1选项",correct:1},{name:"我是2选项",correct:0},{name:"我是3选项",correct:0}]},
        {title:'这题正确答案是2',type:0,answer:[{name:"我是1选项",correct:0},{name:"我是2选项",correct:1},{name:"我是3选项",correct:0}]},
        {title:'这题正确答案是3',type:0,answer:[{name:"我是1选项",correct:1},{name:"我是2选项",correct:0},{name:"我是3选项",correct:1},{name:"我是4选项a",correct:0}]},

	],createtime:1418979419335,id :2},
	{basic:{name:'终极必杀考试题3',desc:'要是能重来 我要选李白，几百年前做的好坏 没那么多人猜',type:1},
    question:[
        {title:'这题正确答案是A',type:0,answer:[{name:"我是1选项",correct:1},{name:"我是2选项",correct:0},{name:"我是3选项",correct:0}]},
        {title:'这题正确答案是2',type:0,answer:[{name:"我是1选项",correct:0},{name:"我是2选项",correct:1},{name:"我是3选项",correct:0}]},
        {title:'这题正确答案是3',type:0,answer:[{name:"我是1选项",correct:1},{name:"我是2选项",correct:0},{name:"我是3选项",correct:1},{name:"我是4选项a",correct:0}]},
	],createtime:1418979419333,id :3},
	{basic:{name:'终极必杀考试题4',desc:'要是能重来 我要选李白，几百年前做的好坏 没那么多人猜',type:1},
    question:[
        {title:'这题正确答案是A',type:0,answer:[{name:"我是1选项",correct:1},{name:"我是2选项",correct:0},{name:"我是3选项",correct:0}]},
        {title:'这题正确答案是2',type:0,answer:[{name:"我是1选项",correct:0},{name:"我是2选项",correct:1},{name:"我是3选项",correct:0}]},
        {title:'这题正确答案是3',type:0,answer:[{name:"我是1选项",correct:1},{name:"我是2选项",correct:0},{name:"我是3选项",correct:1},{name:"我是4选项a",correct:0}]},
	],createtime:1418979319335,id :4},
	{basic:{name:'终极必杀考试题5',desc:'要是能重来 我要选李白，几百年前做的好坏 没那么多人猜',type:1},
    question:[
        {title:'这题正确答案是A',type:0,answer:[{name:"我是1选项",correct:1},{name:"我是2选项",correct:0},{name:"我是3选项",correct:0}]},
        {title:'这题正确答案是2',type:0,answer:[{name:"我是1选项",correct:0},{name:"我是2选项",correct:1},{name:"我是3选项",correct:0}]},
        {title:'这题正确答案是3',type:0,answer:[{name:"我是1选项",correct:1},{name:"我是2选项",correct:0},{name:"我是3选项",correct:1},{name:"我是4选项a",correct:0}]},
	],createtime:1418979413335,id :5}	
]}
app.bankPage = function(req,res){
	res.render('teacher/main',{pageName:"qBank",userType:1,username:req.session.username});
}
app.paperPage = function(req,res){
    res.render('teacher/paper',{pageName:"paper",userType:1,username:req.session.username});
}
app.getList = function(req,res){
	res.send({"message":"","result":testData})
}
app.getPaperList = function(req,res){
    res.send({"message":"","result":testData})
}
app.addPage =function(req,res){
	res.render('teacher/edit', { userType: 1,pageName:'qBank',userType:1,username:req.session.username});
}
app.addPaperPage =function(req,res){
    res.render('teacher/addPaper', { userType: 1,pageName:'paper',userType:1,username:req.session.username});
}
app.editPage =function(req,res){
    res.render('teacher/edit', { userType: 1,pageName:'qBank',userType:1,username:req.session.username});
}
app.viewPaperPage =function(req,res){
    res.render('teacher/viewPaper', { userType: 1,pageName:'paper',userType:1,username:req.session.username});
}

app.mainPage = function(req,res){
	res.render('main',{pageName:"main",userType:1,username:req.session.username});
}
module.exports = app;
