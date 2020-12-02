// 公共头部组件
<template>
   <header id="header">
        <h1>{{title}}</h1>
    
   </header>
</template>
<script>
export default {
    name:"Header",
    props:{
        title:{
            type:String,//传值 类型
            default:'神影电影'//默认显示值
            //父向子传值 
        }
    }
}
</script>
<style scoped>
    #header{
        width: 100%;
        height:50px;
        color: #ffffff;
        background: #e54847;
        border-bottom: 1px solid #e54847;
        position: relative;
    }
    #header h1{
        font-size: 18px;
        text-align: center;
        line-height: 50px;
        font-weight: normal;
    }
    #header i{
        position:absolute;
        left: 5px;top: 50%;
        margin-top: -13px;
        font-size: 26px;
    }
</style>