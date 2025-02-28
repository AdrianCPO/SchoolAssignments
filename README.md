# SchoolAssignments
I made a todo list with React, express.js and Sqlite



Todo List
In this exercise I want you to create a todo list with React, express.js and Sqlite. The todo list is will be simple, not any fancy functionalities or animations (unless you relly want to get creative).

Instructions
Setup
You will need a SQLite database that can be connected to you express backend. The requests from the React frontend should go to the express backend that in turn gets the data from the SQLite DB and sends it back to the client (React frontend).

Basics
A view/page ( React Router ) to display all the todos.

A view/page that has a form where you can add new todos. The new todo should be saved to the DB straight away and then the user must be navigated to the view/page that displays the todos.

You should should be able to be mark a todo as completed

You should be able to remove a todo. When you remove a todo, the todo must be deleted from the DB as well.

If you do a hard refresh, or loose internet connection, the todos must persists. In other words, you should always fetch the todos from the DB.

Styling is important in frontend development, don't neglect that. But a piece of advice, do the styling part or the logic part first, don't do them at the same time. On thing at a time.

More complexity
An author and timestamp should be visible on every todo.

You should be able to edit a todo. Create a new view/page for editing a specific todo. This page should not be visible on a navbar, it can only be reached if editing a specific todo.

You should be able to sort the todos after timestamp or author. Timestamp should be the default sorting.

Hint..
Use ORDER BY in your sql query.
