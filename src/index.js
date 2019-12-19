import React from 'react';
import { YellowBox } from 'react-native';

import Routes from './routes';

// forma de ignorar warinigs
YellowBox.ignoreWarnings(["Unrecognized WebSocket"]);

const App = () => <Routes />;

export default App;