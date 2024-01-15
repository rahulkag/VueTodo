<template>
    <v-card class="mx-auto">
        <v-list>
            <v-list-subheader>Active Item List</v-list-subheader>
            <v-alert v-if="todos.length === 0" type="info" text="No active item in list" />
            <v-list-item v-for="(todo, i) in todos" :key="i" :value="item" color="primary" class=" pa-2">
                <v-row v-if="!todo.editing">
                    <v-col cols="9">
                        {{ todo.text }}
                        <v-list-item-subtitle>Created date: {{ todo.createdDate }}</v-list-item-subtitle>
                    </v-col>
                    <v-col cols="3">
                        <v-btn @click="$emit('edit-item', todo.id)" variant="text" size="large" density="default">
                            <v-tooltip activator="parent" text="Edit item"></v-tooltip>
                            <v-icon icon="mdi-clipboard-edit-outline" color="green-darken-4"></v-icon>
                        </v-btn>

                        <v-btn @click="$emit('mark-completed', todo.id)" variant="text" size="large">
                            <v-tooltip activator="parent" text="Mark as complete"></v-tooltip>
                            <v-icon icon="mdi-clipboard-check-outline " color="green-darken-4"></v-icon>
                        </v-btn>
                        <v-btn @click="$emit('delete-todo', todo.id)" variant="text" size="large">
                            <v-tooltip activator="parent" text="Delete item"></v-tooltip>
                            <v-icon icon="mdi-delete-off" color="red-darken-4"></v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
                <v-row v-if="todo.editing">
                    <v-col cols="12">
                        <EditItem v-bind:todo="todo" v-on:cancel-edit="cancelEdit" v-on:save-edit="save" />
                    </v-col>
                </v-row>
            </v-list-item>
        </v-list>
    </v-card>
</template>
<script>
import EditItem from "./EditItem.vue"
export default {
    name: "TodoList",
    props: ['todos', 'delete-todo', 'mark-completed', 'edit-item'],
    components: { EditItem },
    data() {
    },
    methods: {
        cancelEdit(id) {
            console.log("cancel");
            this.$emit('cancel-edit', id);
        },
        save(id, updatedText) {
            console.log("save", id, updatedText);
            this.$emit('save', id, updatedText);
        }
    }
}
</script>

<style scoped>
.v-list-item:nth-child(even) {
    background: #f3f3f3;
}
</style>