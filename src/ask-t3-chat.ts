import { LaunchProps, open } from "@raycast/api";
import { getPrefs } from "../lib/prefs";

export default function Command(props: LaunchProps<{ arguments: Arguments.AskT3Chat }>) {
  console.log(getPrefs());
  console.log(`https://t3.chat/new?q=${props.arguments.query}&model=${getPrefs().model}`);
  open(`https://t3.chat/new?q=${props.arguments.query}&model=${getPrefs().model}`);
}
