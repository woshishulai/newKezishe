<script setup>
import { ref, computed, reactive, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { getImageUrl } from "@/utils";
const router = useRouter();
const route = useRoute();
const props = defineProps({});
onMounted(() => { });
const dataSource = [
  {
    key: "1",
    name: "胡彦斌",
    bank: "中国银行：北京市海淀区中国银行",
    code: "04935830948503",
  },
  {
    key: "2",
    name: "胡彦祖",
    bank: "中国银行：北京市海淀区中国银行",
    code: "04935830948503",
  },
];

const columns = [
  {
    title: "姓名",
    dataIndex: "name",
    key: "name",
    align: 'center'
  },
  {
    title: "银行",
    dataIndex: "bank",
    key: "bank",
    align: 'center'
  },
  {
    title: "账号",
    dataIndex: "code",
    key: "code",
    align: 'center'
  },
];

function handleEdit(record) {
  // 处理编辑逻辑
}
function handleDelete(record) {
  // 处理删除逻辑
}
function handleSetDefault(record) {
  // 处理设为默认逻辑
}
function customRender(text) {
  // 自定义渲染逻辑
}

const formState = reactive({
  name: "",
  region: undefined,
  date1: undefined,
  delivery: false,
  type: [],
  resource: "",
  desc: "",
});
const rules = {
  name: [
    {
      required: true,
      message: "Please input Activity name",
      trigger: "change",
    },
    {
      min: 3,
      max: 5,
      message: "Length should be 3 to 5",
      trigger: "blur",
    },
  ],
  region: [
    {
      required: true,
      message: "Please select Activity zone",
      trigger: "change",
    },
  ],
  date1: [
    {
      required: true,
      message: "Please pick a date",
      trigger: "change",
      type: "object",
    },
  ],
  type: [
    {
      type: "array",
      required: true,
      message: "Please select at least one activity type",
      trigger: "change",
    },
  ],
  resource: [
    {
      required: true,
      message: "Please select activity resource",
      trigger: "change",
    },
  ],
  desc: [
    {
      required: true,
      message: "Please input activity form",
      trigger: "blur",
    },
  ],
};
const onSubmit = () => {
  formRef.value
    .validate()
    .then(() => {
      console.log("values", formState, toRaw(formState));
    })
    .catch((error) => {
      console.log("error", error);
    });
};
const resetForm = () => {
  formRef.value.resetFields();
};
</script>

<template>
  <div class="bank-information">
    <div class="card-box">
      <div class="title">银行账号</div>
      <a-table :columns="columns" :data-source="dataSource">
      </a-table>
    </div>
    <div class="card-box">
      <div class="title">新增银行账号</div>
      <div class="user-info">
        <div class="info">
          <div class="left-input">
            <span>姓名：</span>
            <input type="text" name="" id="">
          </div>
        </div>
        <div class="time">
          <span>地区:</span>
          <input type="text">
        </div>
        <div class="bank">
          <span>银行名称:</span>
          <input type="text">
        </div>
        <div class="phone">
          <span>地址信息:</span>
          <div class="right-input">
            <input placeholder="选择省" type="text">
            <input placeholder="选择市" type="text">
          </div>
        </div>
        <div class="time">
          <span>分行支行:</span>
          <input type="text">
        </div>
        <div class="bank">
          <span>账号卡号:</span>
          <input type="text">
        </div>
        <div class="btn">保存</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
/* 在这里添加你的 Less 样式 */
.bank-information {
  width: 100%;
  .flex-col;
  gap: 30px;

  .title {
    color: #9a9a9a;
  }

  .user-info {
    padding: 30px 40px 30px;
    .flex-col;
    gap: 30px;
    align-items: flex-start;

    span {
      display: inline-block;
      width: 100px;
      font-size: 18px;
      color: #a7a7a7;
    }

    input {
      width: 400px;
      height: 44px;
      border: 1px solid #dce2e9;
      border-radius: 5px;
      padding-left: 20px;
    }

    .info {
      .flex-row;
      justify-content: flex-start;
      gap: 40px;

      .right-gredder {
        .ant-radio-group {
          width: 200px;
        }
      }
    }

    .upload {
      .flex-row;
      align-items: flex-start;

      .upload-info {
        cursor: pointer;
        .flex-col;
        padding: 50px;
        background-color: #f1f5f8;
        color: #c2c5c7;
        gap: 5px;

        i {
          font-size: 36px;
        }
      }
    }

    .phone {
      .flex-row;

      .right-input {
        .flex-row;
        gap: 20px;

        input {
          width: 100px;
        }
      }
    }

    .cate {
      span {
        width: 150px;
      }
    }

    .aihao {
      .flex-row;

      span {
        width: 150px;
      }

      .right-aihao {
        button {
          height: 46px;
          padding: 0 10px;
          background-color: #a4b0bb;
          color: #fff;
          border: none;
        }
      }
    }

    .youpiao {
      .flex-row;

      span {
        width: 150px;
      }

      .btn {
        // width: 200px;
        padding: 20px 20px;
      }
    }
  }
}

.btn {
  margin-left: 100px;
  padding: 16px 40px;
  background-color: #9a0000;
  color: #fff;
}
</style>