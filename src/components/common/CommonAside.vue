<template>
    <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
        <el-menu-item @click="clickMenu(item)"
                      :index="item.path"
                      v-for="item in noChildren"
                      :key="item.path">
            <i :class="'el-icon-'+ item.icon"></i>
            <span slot="title">{{item.label}}</span>
        </el-menu-item>
        <el-submenu index="index" v-for="(item, index) in hasChildren" :key="index">
            <template slot="title">
                <i :class="'el-icon-'+ item.icon"></i>
                <span>{{item.label}}</span>
            </template>
            <el-menu-item-group>
                <el-menu-item :index="subItem.path"
                              v-for="(subItem, subIndex) in item.childern"
                              :key="subIndex"
                              @click="clickMenu(subItem)">{{subItem.label}}
                </el-menu-item>
            </el-menu-item-group>
        </el-submenu>
    </el-menu>
</template>

<script>
    export default {
        name: "CommonAside",
        computed: {
            noChildren() {
                return this.asideMenu.filter(item => !item.childern)
            },
            hasChildren() {
                return this.asideMenu.filter((item => item.childern))
            }
        },
        data() {
            return {
                asideMenu: [
                    {
                        path: '/',
                        name: 'home',
                        label: '首页',
                        icon: 'home'
                    },
                    {
                        path: '/video',
                        name: 'video',
                        label: '视频管理',
                        icon: 'video-play'
                    },
                    {
                        path: '/user',
                        name: 'user',
                        label: '用户管理',
                        icon: 'user'
                    },
                    {
                        label: '其他',
                        icon: 'setting',
                        childern: [
                            {
                                path: '/page1',
                                name: 'page1',
                                label: '二级菜单1',
                                icon: 'setting'
                            },
                            {
                                path: '/page2',
                                name: 'page2',
                                label: '二级菜单2',
                                icon: 'setting'
                            },
                        ]
                    },
                ]
            }
        },
        methods: {
            clickMenu(item) {
                this.$store.commit('selectMenu', item)
            }
        },
    }
</script>

<style lang="scss" scoped>
    .el-menu {
        height: 100%;
        border: none;
    }
</style>