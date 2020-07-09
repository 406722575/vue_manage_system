<template>
    <el-container style="height: 100%">
        <el-aside width="200px"><common-aside/></el-aside>
        <el-container>
            <el-header><common-header/></el-header>
            <el-main>Main</el-main>
        </el-container>
    </el-container>
</template>

<script>
    import CommonHeader from '@/components/common/CommonHeader'
    import CommonAside from '@/components/common/CommonAside'
    export default {
        name: "Main",
        components:{
            CommonHeader,
            CommonAside
        },
    }
</script>

<style lang="scss" scoped>
.el-header{
    background-color: #ec7b6d;
}
</style>