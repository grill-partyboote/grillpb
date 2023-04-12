import React from "react";
import {createRoot} from "react-dom/client";

import "./styles.pcss";
import { App } from "./App";

// todo: add routing
const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App/>);
