import React from "react";
import { App as SendbirdApp } from "sendbird-uikit";
import "sendbird-uikit/dist/index.css";

import "./App.css";

const APP_ID = "45612F31-4304-4FC4-9FD9-C35B5FCDCE30"
const USER_ID = "2bb9d70a-6ae5-4e1e-a4e6-752fb0dd8656"

export default function App() {
  return (
    <div className="App">
			<SendbirdApp appId={APP_ID} userId={USER_ID} />
    </div>
  );
}