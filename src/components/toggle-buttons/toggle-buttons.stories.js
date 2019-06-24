import React from "react";
import {RadioButtons,ToggleCheck,ToggleSwitch} from "./index"
import { storiesOf } from "@storybook/react";

storiesOf("Toggle Buttons", module).add("Radio Buttons", () => <RadioButtons title="Radio Buttons" onLabel="Yes" offLabel="No"/>, {
  notes: "Accessible toggle buttons."
}).add("Toggle Check",()=><ToggleCheck label="Check this!"/>).add("Toggle Switch",()=><ToggleSwitch label="Toggle Switch"></ToggleSwitch>)
