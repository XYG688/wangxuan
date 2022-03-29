<template>
  <div>
    <h3>文章列表</h3>
    <div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="title" label="文章标题"> </el-table-column>
        <el-table-column prop="writer" label="作者"> </el-table-column>
        <el-table-column prop="num" label="浏览量"> </el-table-column>
        <el-table-column prop="answer" label="回复"> </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="danger" size="small" @click="">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div>
        <el-button type="primary" size="small" @click="dialogFormVisible = true"
          >添加</el-button
        >
      </div>
    </div>
    <el-dialog title="添加数据" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="文章标题">
          <el-input v-model="form.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="作者">
          <el-input v-model="form.writer" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
import instance from "@/request/api";
export default {
  name: "MyVue",
  data() {
    return {
      tableData: null,
      form:{
          title:"",
          wirter:""
      },
      dialogFormVisible:null
    };
  },
  methods: {
    async articleFn() {
      let { data } = await instance.get("/article");
      this.tableData = data;
    },
    // async deleteFn(id) {
    //   let { data } = await instance.delete("/deleteA" + id);
    //   console.log(data);
    //   this.articleFn();
    // },
  },
  created() {
    this.articleFn();
  },
};
</script>

<style>
</style>