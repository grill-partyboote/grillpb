import React from "react";
import {createRoot} from "react-dom/client";

import "./styles.pcss";
import { App } from "./App";

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App/>);
