import React from "react";
import {RadioButtons,ToggleCheck,ToggleSwitch,MenuButton,CTABasic} from "./index"
import { storiesOf } from "@storybook/react";

storiesOf("Toggle Buttons", module)
.add("Basic CTA",()=><CTABasic label="Click me!"></CTABasic>)
.add("Radio Buttons", () => <RadioButtons title="Radio Buttons" onLabel="Yes" offLabel="No"/>, {
  notes: "Accessible toggle buttons."
}).add("Toggle Check",()=><ToggleCheck label="Check this!"/>)
.add("Toggle Switch",()=><ToggleSwitch label="On and Off"></ToggleSwitch>)
.add("Menu Dropdown Button",()=><MenuButton label="Hover over this to display the menu!"></MenuButton>)
