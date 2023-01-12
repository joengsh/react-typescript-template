/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable no-undef */
import '@testing-library/jest-dom/extend-expect';

import { enableFetchMocks } from 'jest-fetch-mock';
import React from 'react';

global.React = React; // this also works for other globally available libraries
enableFetchMocks();
