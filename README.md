# React useEffect Infinite Loop Bug

This repository demonstrates a common React bug involving an infinite loop within the `useEffect` hook. The problem arises from incorrectly managing dependencies within the `useEffect` hook's dependency array.

## Bug Description

The `MyComponent` component uses `useState` to track a count.  An `useEffect` hook attempts to log the count whenever it changes. However, logging inside `useEffect` indirectly modifies the state, leading to an endless loop of re-renders.

## Solution

The solution corrects the dependency array. Instead of directly logging the count (which causes state change, the solution adds a condition to only log the count at start or specific conditions.