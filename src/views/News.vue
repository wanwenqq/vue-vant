<template>
  <div>
    <van-checkbox-group v-model="result">
      <van-cell-group>
        <van-cell
          v-for="(item, index) in list"
          clickable
          :key="item"
          :title="`复选框 ${item}`"
          @click="toggle(index)"
        >
          <template #right-icon>
            <van-checkbox :name="item" ref="checkboxes" />
          </template>
        </van-cell>
      </van-cell-group>
    </van-checkbox-group>
  </div>
</template>

<script>
import { Checkbox,Cell,CellGroup,CheckboxGroup } from "vant";
export default {
  name: "news",
  components: {
    [Checkbox.name]: Checkbox,
    [CellGroup.name]: CellGroup,
    [Cell.name]: Cell,
    [CheckboxGroup.name]: CheckboxGroup,
  },
  data() {
    return {
      title: "news",
      list: ["a", "b"],
      result: []
    };
  },
  methods: {
    toggle(index) {
      console.log('ppppppppppppp')
      this.$refs.checkboxes[index].toggle();
    }
  }
};
</script>

<style>
</style>