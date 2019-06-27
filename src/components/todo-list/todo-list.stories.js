import React from "react";
import {TodoList} from "./index"
import { storiesOf } from "@storybook/react";


storiesOf("TODO List", module).add("Todo List", () => <TodoList></TodoList>, {
  notes: "Sample notes on a story."
});
