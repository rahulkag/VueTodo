<!-- <template>
    I an into add todo.....
    <form @submit.prevent="addTodo">
        <input type="text" name="addItem" v-model="itemText" />
        <button type="submit" class="btn">Add</button>
    </form>
    <v-btn prepend-icon="$vuetify" variant="outlined" icon="mdi-plus">
        Button
    </v-btn>
</template> -->

<template>
    <v-form @submit.prevent="addTodo">
        <v-row>
            <v-col cols="8" sm="6" md="4">
                <v-text-field name="addItem" v-model="itemText" :rules="rules" label="Enter item"></v-text-field>
            </v-col>
            <v-col cols="4" sm="6" md="4">
                <v-btn type="submit" block rounded="0" size="large" prepend-icon="mdi-plus" color="btnPrimary">
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
            // rules: [
            //     value => {
            //         if (value) return true
            //         return 'You must enter a item.'
            //     },
            // ],
        }
    },
    methods: {
        addTodo() {
            if (this.itemText) {
                this.$emit("add-todo", this.itemText);
                this.itemText = '';
            }
        }
    }
}
</script>


