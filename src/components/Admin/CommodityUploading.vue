<template>
  <div id="uploading">
    <div>
      <form method="post" enctype="multipart/form-data" action="http://10.9.12.46:8080/goods/addGoods">
        <div class="el-form-item">
          <label class="el-form-item__label" style="width: 80px;">商品名称</label>
          <div class="el-form-item__content" style="margin-left: 80px;">
            <div class="el-input">
              <!---->
              <input type="text" autocomplete="off" class="el-input__inner"name="name">
              <!----><!----><!---->
            </div>
            <!---->
          </div>
        </div>
        <div class="el-form-item">
          <label class="el-form-item__label" style="width: 80px;">商品介绍</label>
          <div class="el-form-item__content" style="margin-left: 80px;">
            <div class="el-input">
              <!---->
              <input type="text" autocomplete="off" class="el-input__inner"name="intro">
              <!----><!----><!---->
            </div>
            <!---->
          </div>
        </div>
        <div class="el-form-item">
          <label class="el-form-item__label" style="width: 80px;">商品颜色</label>
          <div class="el-form-item__content" style="margin-left: 80px;">
            <div class="el-input">
              <!---->
              <input type="text" autocomplete="off" class="el-input__inner"name="color">
              <!----><!----><!---->
            </div>
            <!---->
          </div>
        </div>
        <div class="el-form-item">
          <label class="el-form-item__label" style="width: 80px;">商品价格</label>
          <div class="el-form-item__content" style="margin-left: 80px;">
            <div class="el-input">
              <!---->
              <input type="text" autocomplete="off" class="el-input__inner"name="price">
              <!----><!----><!---->
            </div>
            <!---->
          </div>
        </div>
        <!--<div class="el-form-item">-->
          <!--<label class="el-form-item__label" style="width: 80px;">上传日期</label>-->
          <!--<div class="el-form-item__content" style="margin-left: 80px;">-->
            <!--<div class="el-input">-->
              <!--&lt;!&ndash;&ndash;&gt;-->
              <!--<input type="text" autocomplete="off" class="el-input__inner"name="pubdate">-->
              <!--&lt;!&ndash;&ndash;&gt;&lt;!&ndash;&ndash;&gt;&lt;!&ndash;&ndash;&gt;-->
            <!--</div>-->
            <!--&lt;!&ndash;&ndash;&gt;-->
          <!--</div>-->
        <!--</div>-->
        <div class="el-form-item">
          <label class="el-form-item__label" style="width: 80px;">商品类型</label>
          <div class="el-form-item__content" style="margin-left: 80px;">
            <div class="el-input">
              <!---->
              <input type="text" autocomplete="off" class="el-input__inner"name="typeid"placeholder="分类：沙发，桌几，椅凳">
              <!----><!----><!---->
            </div>
            <!---->
          </div>
        </div>
        <div class="el-form-item">
          <label class="el-form-item__label" style="width: 80px;">商品图片</label>
          <div class="el-form-item__content" style="margin-left: 80px;">
            <div class="el-input">
              <!---->
              <div tabindex="0" class="el-upload el-upload--text"style="display: flex;margin-left: 10%;">
                <!--<i class="el-icon-plus avatar-uploader-icon"></i>-->
                <input type="file" name="file" class="el-upload__input"style="display: block;margin-left: 10%;">
                <input type="file" name="file" class="el-upload__input"style="display: block;">
                <input type="file" name="file" class="el-upload__input"style="display: block;">
              </div>
              <!----><!----><!---->
            </div>
            <!---->
          </div>
        </div>
        <div class="el-form-item">
          <label class="el-form-item__label" style="width: 80px;">商品款式</label>
          <div class="el-form-item__content" style="margin-left: 80px;">
            <div class="el-input"style="display: flex;">
              <!---->
              <input type="text" autocomplete="off" class="el-input__inner"name="style"placeholder="款式:三种">
              <input type="text" autocomplete="off" class="el-input__inner"name="style"placeholder="款式:三种">
              <input type="text" autocomplete="off" class="el-input__inner"name="style"placeholder="款式:三种">
              <!----><!----><!---->
            </div>
            <!---->
          </div>
        </div>
        <div class="el-form-item">
          <!---->
          <div class="el-form-item__content" style="margin-left: 80px;">
            <button type="submit" class="el-button el-button--primary">
              <!----><!---->
              <span>立即创建</span>
            </button><button type="button" class="el-button el-button--default">
            <!----><!---->
            <span>取消</span>
          </button>
            <!---->
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data(){
      return{

      }
    },

  }
</script>
