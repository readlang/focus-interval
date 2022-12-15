# Focus Interval

## Description
This app is like a task management tool and a pomodoro timer mashed together.  Using this tool, users will add their tasks with an estimated time for each.  There is also a "attention interval" timer, which is a repeating interval.  When the user starts the timer, the attention interval will check in at regular intervals so see if they are still on task.  When the task timer ends, it will also check in.

I built this because when you're doing something tedious or unpleasant, and in the opposite state of mind as Flow, it's easy to get distracted.
The goal is to create a tool that is better (at least for my personal needs) than the offerings from todoist, apple, or microsoft.  I also wanted this tool to work well as a mobile website, a PWA, or a desktop website.

There is a joke that people attending bootcamps always make a to-do-list app.  Having gotten through Flatiron School without creating one, but wanting to push my design skills forward as a design-capable frontend engineer, I thought that now is my time.  My personal goal in creating this was to build something simple (on a technical level) that would allow me to practice my UX design and styling skills.  Although it is good programming practice, that wasn't the primary point of building the tool.

I hope you enjoy using it.  Thanks for checking it out.
<br/>

![list_view](readme/List_view.png)
![task_view](readme/Task_view.png)
![task_modal_view](readme/Task_modal.png)


## Technologies Used
- React
- React Router
- Styled Components
- Ruby on Rails
- Postgresql


## Walkthrough
Upon visiting the site, a user is prompted to log in for sign up.  Once logged in, the user lands on the "lists" screen, where lists of tasks can be defined.  Once a list is created, opening that list will allow individual tasks to be defined, along with a time to complete.  When ready to start work, the user can press play, which starts the timer.  At regular intervals, the attention interval timer will display a modal asking the user if they are still focused.  When the timer for the individual task is up, another modal will appear, asking the user if they want to move on, add more time, etc.


## Setup
If you would like to play with this project on your machine, start by **cloning** the project template repository and removing the remote:

```console
$ git clone git@github.com:readlang/focus-interval.git
$ cd focus-interval
$ git remote rm origin
```

When you're ready to start playing with the code, run:

```console
$ bundle install
$ rails db:create
$ npm install --prefix client
```

You can use the following commands to run the application:

- `rails s`: run the backend on [http://localhost:3000](http://localhost:3000)
- `npm start --prefix client`: run the frontend on
  [http://localhost:4000](http://localhost:4000)

<br />

**Thank you for your interest in this project!**
