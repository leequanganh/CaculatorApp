class Button {
  constructor(content, action) {
    this.content = content;
    this.action = action;
  }
}
const listButton = [
  new Button(" + ", "add"),
  new Button(" - ", "add"),
  new Button(" * ", "add"),
  new Button(" ( ", "add"),
  new Button(" ) ", "add"),
  new Button(" / ", "add"),
  new Button("=", "="),
  new Button(".", "add"),
  new Button("9", "add"),
  new Button("8", "add"),
  new Button("7", "add"),
  new Button("6", "add"),
  new Button("5", "add"),
  new Button("4", "add"),
  new Button("3", "add"),
  new Button("2", "add"),
  new Button("1", "add"),
  new Button("0", "add"),
  new Button("delete", "delete"),
  new Button("reset", "reset"),
  new Button("dark / light", "changeTheme"),
  new Button("history", "history"),
];
export default listButton;
