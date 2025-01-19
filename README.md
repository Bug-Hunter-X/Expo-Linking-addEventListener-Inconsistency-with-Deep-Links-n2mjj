# Expo Linking.addEventListener Inconsistency with Deep Links

This repository demonstrates a bug related to Expo's `Linking.addEventListener` API where deep link callbacks are not consistently triggered when the app is already running in the background. The issue is intermittent; sometimes the callback works as expected, other times it does not.

## Problem

The `Linking.addEventListener` function, used to listen for deep links, sometimes fails to fire its callback when the app is launched via a deep link while already running in the background.  This behavior is inconsistent across different devices and OS versions.

## Solution (deepLinkSolution.js)

The solution involves adding additional checks and potentially using a different approach to handle deep links such as using the `Linking.getInitialURL()` function.