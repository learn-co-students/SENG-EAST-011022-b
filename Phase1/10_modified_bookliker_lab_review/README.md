# Additional Practice: BookLiker

## Learning Goals

- Access information from an API using a GET request and use it to update the
  DOM
- Listen for user events and update the DOM in response
- Send data to an API using a PATCH request

## Introduction

Welcome to BookLiker, where you can look at books and like them! (Hey, not all
startups are brilliant ideas.)

## Getting Started

You will be using the [json-server][] package to mock an external API. You can
make the same RESTful requests to this server that you would to any API. If you
haven't yet, install json-server.

```console
$ npm install -g json-server
```

Then run the server with:

```console
$ json-server db.json
```

This will serve your code on `http://localhost:3000`.

[json-server]: https://github.com/typicode/json-server

## Deliverables

![example GIF](http://curriculum-content.s3.amazonaws.com/module-3/bookliker-example.gif)

- Make a get request to a single book. Show single book and all of it's details. Also create LI's for all of the users associated with the book

- Make a get request to all the books. Display all the books in a list
 
- use the form to add a user to the list of users under a book.