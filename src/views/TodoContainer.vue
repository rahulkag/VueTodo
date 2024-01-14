<template>
    <v-card>
        <v-toolbar color="primary">
            <v-toolbar-title>Todo List</v-toolbar-title>
            <v-spacer></v-spacer>
            <template v-slot:extension>
                <v-tabs v-model="model" centered>
                    <v-tab key="Add Todo">
                        Add todo
                    </v-tab>
                    <v-tab key="Completed">
                        Completed Items
                    </v-tab>
                    <v-tab key="Deleted">
                        Deleted Items
                    </v-tab>
                </v-tabs>
            </template>
        </v-toolbar>
        <v-container>
            <v-window v-model="model">
                <v-window-item>
                    <v-card>
                        <AddTodo v-on:add-todo="add" />
                        <TodoList v-bind:todos="todos" v-on:delete-todo="deleteTodo" v-on:mark-completed="markCompleted"
                            v-on:edit-item="editItem" v-on:cancel-edit="cancelEdit" v-on:save="save" />
                    </v-card>
                </v-window-item>
                <v-window-item>
                    <v-card>
                        <ReadOnlyList v-bind:todos="completedList" />
                    </v-card>
                </v-window-item>
                <v-window-item>
                    <v-card>
                        <ReadOnlyList v-bind:todos="deletedList" />
                    </v-card>
                </v-window-item>
            </v-window>
        </v-container>
    </v-card>
</template>
  

<script>

import AddTodo from "../components/TodoList/AddTodo.vue";
import TodoList from "../components/TodoList/TodoList.vue";
import ReadOnlyList from "../components/TodoList/ReadOnlyList.vue";

export default {
    name: "TodoContainer",
    components: {
        AddTodo,
        TodoList,
        ReadOnlyList
    },
    data() {
        return {
            listType: "readOnly",
            model: 'tab-2',
            todos: [
                { id: 1, text: "There are instances where a set of default properties are injected or custom styling is applied to the v-btn. This can be for a variety of reasons, but the most common are: There are instances where a set of default properties are injected or custom styling is applied to the v-btn. This can be for a variety of reasons, but the most common are:", completed: false, editing: false, createdDate: new Date() },
                { id: 2, text: "Two", completed: false, editing: false, createdDate: new Date() },
                { id: 3, text: "Three", completed: false, editing: false, createdDate: new Date() },
                { id: 4, text: "Four", completed: false, editing: false, createdDate: new Date() },
                { id: 5, text: "Five", completed: false, editing: false, createdDate: new Date() }
            ],
            completedList: [{ id: 6, text: "Six", completed: true }],
            deletedList: [{ id: 7, text: "Seven", deleted: true }]
        }
    },
    methods: {
        add(itemText) {
            const item = {
                id: Math.random(),
                text: itemText,
                createdDate: new Date()
            }
            this.todos.push(item);
        },
        deleteTodo(id) {
            const deletedItem = this.todos.find((item) => item.id === id);
            this.deletedList.push({ ...deletedItem, deleted: true });
            this.todos = this.todos.filter((item) => item.id !== id)
        },
        markCompleted(id) {
            const completedItem = this.todos.find((item) => item.id === id);
            this.completedList.push({ ...completedItem, completed: true });
            this.todos = this.todos.filter((item) => item.id !== id);
        },
        editItem(id) {

            // const item = this.todos.find((item) => item.id === id);
            this.todos = this.todos.map((item) => {
                if (item.id === id) {
                    return {
                        ...item,
                        editing: true
                    }
                }
                return item;
            });
        },
        cancelEdit(id) {
            this.todos = this.todos.map((item) => {
                if (item.id === id) {
                    return {
                        ...item,
                        editing: false
                    }
                }
                return item;
            });
        },
        save(id, updatedText) {
            this.todos = this.todos.map((item) => {
                if (item.id === id) {
                    return {
                        ...item,
                        text: updatedText,
                        editing: false
                    }
                }
                return item;
            });
        }
    }

}
</script>