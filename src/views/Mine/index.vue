 <template>
    <div id="main">
        <Header title="我的神影"></Header>
        <div id="content">
           <Login></Login>

        </div>
        <TabBar></TabBar>
    </div>
</template>
<script>
//注册声明导入的组件
        import Header from "../../components/Header";
        import TabBar from "../../components/TabBer";
         import Login from "../../components/Login";
       export default{
           name:'Mine',
           components:{
               Header,//注册
               TabBar,//注册
               Login//注册
           }
       }
</script>
<style scoped>
    #content{
            overflow: hidden;
    }
</style>
