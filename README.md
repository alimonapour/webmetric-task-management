# React Typescript Task Management App

This is a simple task management React Typescript single page app which shows
all tasks in their corresponding group, a way to add new tasks and remove
existing ones only if they are not marked as done.

## Demo

https://webmetric-task-management.vercel.app/

## Features

- Adding new tasks (note that each task belongs to a single group)
- Marking tasks as done
- Removing pending tasks
- Listing all added tasks in their group
- Responsive Design
- A decent UI/UX

## Built With

- React - A JavaScript library for building user interfaces.
- TypeScript - A strict syntactical superset of JavaScript.
- Tailwind CSS - A utility-first CSS framework.
- Framer motion - Framer Motion is a production-ready motion library for React
  from Framer.
- Headless UI - A set of completely unstyled, fully accessible UI components,
  designed to integrate beautifully with Tailwind CSS.
- Vite - Vite is a build tool that aims to provide a faster and leaner
  development experience for modern web projects.

## App Structure

- **src/hooks/useTasks.ts:** Custom hook that create for separated logic from ui
  and set and get data to/from local storage.
- **src/types/Task.ts:** Interfaces used in the app.
- **src/App.tsx:** Main file for rendering the app.
- **src/components/TaskContainer:** Component for rendering the list of tabs and
  tab panels.
- **src/components/Task/Task.tsx:** Component for display task.
- **src/components/CreateTaskForm/CreateTaskForm.tsx:** Component for creating
  new task.

## Conclusion

This React Typescript task management app is a simple example of how to create a
task, list of tasks, delete a pending task and change task status to done.

## Getting Started with Vite

Uses [Vite](https://vitejs.dev/), [Vitest](https://vitest.dev/), and
[React Testing Library](https://github.com/testing-library/react-testing-library)
to create a modern [React](https://react.dev/) app compatible with
[Create React App](https://create-react-app.dev/)

## Goals

- Easy migration from Create React App or Vite
- As beginner friendly as Create React App
- Optimized performance compared to Create React App
- Customizable without ejecting
