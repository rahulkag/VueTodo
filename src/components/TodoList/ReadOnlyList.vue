<template>
    <v-card class="mx-auto">
        <v-list>
            <v-alert v-if="todos.length === 0" type="info" text="No active item in list" />
            <v-list-item v-for="(todo, i) in todos" :key="i" :value="item" color="primary" class=" pa-2">
                <v-row>
                    <v-col cols="12">
                        {{ todo.text }}
                        <v-list-item-subtitle>Created date: {{ todo.createdDate }}</v-list-item-subtitle>
                    </v-col>
                </v-row>
            </v-list-item>
        </v-list>
    </v-card>
</template>

<script>
export default {
    name: "ReadOnlyList",
    props: ['todos',],
}
</script>
<style scoped>
.v-list-item:nth-child(even) {
    background: #f3f3f3;
}
</style>