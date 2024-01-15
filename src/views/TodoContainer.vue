<template>
    <v-card>
        <v-toolbar color="primary">
            <v-toolbar-title>Todo List</v-toolbar-title>
            <v-spacer></v-spacer>
            <template v-slot:extension>
                <v-tabs v-model="model" centered slider-color="teal-lighten-3">
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
        <v-snackbar v-model="snackbarText" location="bottom right" timeout="2000">
            <p>{{ snackbarText }}</p>
        </v-snackbar>
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
            snackbarText: false,
            listType: "readOnly",
            model: 'tab-2',
            todos: localStorage.getObject('todos') || [],
            completedList: localStorage.getObject('completedList') || [],
            deletedList: localStorage.getObject('deletedList') || []
        }
    },
    methods: {
        add(itemText) {
            const date = new Date();
            const dateTime = date.toDateString() + " " + date.toLocaleTimeString();
            const item = {
                id: Math.random(),
                text: itemText,
                createdDate: dateTime
            }
            this.todos.push(item);
            // add to local storage
            localStorage.setObject('todos', this.todos);
            this.snackbarText = "Item Added";
        },
        deleteTodo(id) {
            const deletedItem = this.todos.find((item) => item.id === id);
            this.deletedList.push({ ...deletedItem, deleted: true });
            this.todos = this.todos.filter((item) => item.id !== id)
            localStorage.setObject('todos', this.todos);
            localStorage.setObject('deletedList', this.deletedList);
            this.snackbarText = "Item Delete";
        },
        markCompleted(id) {
            const completedItem = this.todos.find((item) => item.id === id);
            this.completedList.push({ ...completedItem, completed: true });
            this.todos = this.todos.filter((item) => item.id !== id);
            localStorage.setObject('todos', this.todos);
            localStorage.setObject('completedList', this.completedList);
            this.snackbarText = "Item marked as completed";
        },
        editItem(id) {
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
            localStorage.setObject('todos', this.todos);
            this.snackbarText = "Item updated";
        }
    }
}
</script>