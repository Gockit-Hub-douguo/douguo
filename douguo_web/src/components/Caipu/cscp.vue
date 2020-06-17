<template>
    <div class="content">
        <div class="sc-box">
            <h3>上传我做的作品</h3>
            <form action="">
                <div class="up-box">
                <el-upload
                action="https://jsonplaceholder.typicode.com/posts/"
                list-type="picture-card"
                :on-preview="handlePictureCardPreview"
                :on-remove="handleRemove">
                <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
            </div>
            <div class="text-box">
                <el-input
                    type="textarea"
                    :rows="3"
                    placeholder="请输入内容"
                    v-model="textarea">
                </el-input>
            </div>
            <div class="sc-box">
                <el-button type="warning">发布</el-button>
            </div>
            </form>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false,
        textarea: ''
      };
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
    }
  }
</script>

<style lang="less" scoped>
    .content {
        width: 1000px;
        margin: 0 auto;
        padding-top: 80px;
        .sc-box {
            margin-top: 20px;
            h3 {
                font-size: 18px;
                display: inline-block;
                font-weight: bold;
                color: #333;
            }
            .up-box {
                margin-top: 20px;
            }
            .text-box {
                margin-top: 20px;
                width: 600px;
            }
            .sc-box {
                margin-top: 20px;
                margin-left: 250px;
            }
        }
    }
</style>