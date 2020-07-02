<template>
  <div class="editor">
    <Header>Edit Memo</Header>
    <textarea name="memo" v-model="memoBody"></textarea>
    <button @click="save">保存</button>
    <button class="remove" @click="remove">削除</button>
  </div>
</template>

<style scoped>
.remove {
  background-color: transparent;
  color: #f33;
  border: none;
}
</style>

<script>
import Header from '@/components/Header.vue'

export default {
    name: 'edit',
  components: {
    Header
  },
    data: function() {
      return {
        memoBody: ''
      }
    },
    mounted: function() {
          let id = this.$route.params["id"];
          let memo = this.$store.state.memos.slice().find(memo => memo.id == id);
          this.memoBody = memo.body;
    },
    methods: {
      save: function() {
        this.$store.commit("update", {
          id: this.$route.params["id"],
          body: this.memoBody
        });
        this.$router.push('/');
      },
      remove: function() {
        this.$store.commit("remove", this.$route.params["id"]);
        this.$router.push('/');
      }
    }
}
</script>