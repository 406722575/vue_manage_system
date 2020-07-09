<template>
    <header>
        <div class="left-content">
            <el-button type="primary" icon="el-icon-menu" size="mini"></el-button>
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="current.path" v-if="current">
                    {{current.label}}
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="right-content">
            <el-dropdown trigger="click" size="mini">
                <span class="el-dropdown-link"><img :src="userImg" class="userImg"/></span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item icon="el-icon-s-custom">个人中心</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-circle-plus">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </header>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: "CommonHaeader",
        data() {
            return {
                userImg: require('@/assets/images/user.png')
            }
        },
        computed: {
            ...mapState({
                current: state => state.tab.currentMenu
            })
        },
    }
</script>

<style lang="scss" scoped>
    header {
        display: flex;
        align-items: center;
        height: 100%;
        justify-content: space-between;
    }

    .left-content {
        cursor: pointer;
        display: flex;
        align-items: center;

        .el-button {
            margin-right: 20px;
        }

    }

    .right-content {
        .userImg {
            width: 40px;
            height: 40px;
            border-radius: 50%;
        }

        .el-dropdown-link {
            cursor: pointer;
            color: #409EFF;
        }
    }

</style>
<style lang="scss">
    .el-breadcrumb__inner a {
        color: #fff;
    }
</style>