<template>
    <v-form @submit.prevent="addTodo" ref="addItemForm">
        <v-row>
            <v-col cols="8">
                <v-text-field name="addItem" v-model="itemText" :rules="rules" label="Enter item"
                    autocomplete="off"></v-text-field>
            </v-col>
            <v-col cols="4">
                <v-btn type="submit" block rounded="0" size="x-large" prepend-icon="mdi-plus" color="btnPrimary">
                    Add Item
                </v-btn>
            </v-col>
        </v-row>
    </v-form>
</template>
  
<script>
export default {
    name: "AddTodo",
    data() {
        return {
            itemText: '',
            rules: [
                value => {
                    if (value) return true
                    return 'You must enter a item.'
                },
            ],
        }
    },
    methods: {
        addTodo() {
            if (this.itemText) {
                this.$emit("add-todo", this.itemText);
                this.itemText = '';
                this.snackbar = true
                this.$refs.addItemForm.reset();
            }
        }
    }
}
</script>


