<template>
    <form class="stack-small" @submit.prevent="saveEdit">
        <v-row>
            <v-col cols="12">
                <v-textarea v-model.lazy.trim="newText" name="newText" variant="filled" label="Edit Item"
                    bg-color="blue-lighten-5"></v-textarea>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-btn @click="$emit('cancel-edit', todo.id)" variant="tonal" size="large" title="Cancel edit" class="ma-1">
                    Cancel
                </v-btn>

                <v-btn @click="$emit('save-edit', todo.id, newText)" type="submit" size="large" variant="tonal" title="Save"
                    color="primary">
                    Save
                </v-btn>
            </v-col>
        </v-row>
    </form>
</template>

<script>
export default {
    name: "EditTodo",
    props: ['todo'],
    data() {
        return {
            newText: this.todo.text,
        };
    },
    methods: {},
};
</script>