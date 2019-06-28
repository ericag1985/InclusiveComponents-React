import React from "react";
import { storiesOf } from "@storybook/react";

import { ExampleModal } from "./Example";
import "./styles.css";

storiesOf("Modal Dialog", module).add("Example", () => <ExampleModal />, {
  notes: "Sample notes on a story."
});
