import React from "react";

import { storiesOf } from "@storybook/react";

storiesOf("Sample", module).add("Component", () => "<Component prop={} />", {
  notes: "Sample notes on a story."
});
