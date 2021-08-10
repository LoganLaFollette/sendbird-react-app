import React from "react";
import { App as SendbirdApp } from "sendbird-uikit";
import "./styles.css";

const APP_ID = "test";
const USER_ID = "2bb9d70a-6ae5-4e1e-a4e6-752fb0dd8656";

export default function App() {
  return (
    <div className="App">
			<SendbirdApp appId={APP_ID} userId={USER_ID} />
    </div>
  );
}