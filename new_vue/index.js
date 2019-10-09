Vue.component("todo-item", {
  props: ["todo"],
  template: "<li>{{todo.text}}</li>"
});
var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!",
    mm: "hhh",
    todos: [
      { text: "learn javascript" },
      { text: "learn vue" },
      { text: "build something awesome" }
    ],
    seen: true,
    groceryList: [
      {
        id: 0,
        text: "Vegetables"
      },
      { id: 1, text: "Cheese" },
      { id: 2, text: "Whatever else humans are supposed to eat" }
    ]
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message
        .split("")
        .reverse()
        .join("");
    }
  }
});
app.message = "I have  data";
