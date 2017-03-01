# Automated

This is an automation of the build process. The idea is that building a course page should
not need more than issuing a few commands.

# TODO:

### Pandoc

- [ ] Html5 template which recognizes all the features givin in the Commands section
### Commands

- [ ] `init`: initializes the basic config file by asking some questions
- [ ] `feature [feature-name]`: adds `feature-name` to the page
  - [ ] calendar: [{date: {topic, links, description}}] 
  - [ ] homework: {name, due date, team size (optional), weight (optional), topics (optional), at least one of [description, link]}  
  - [ ] exam: date, time, topics (optional), [links] to past exams (optional), location: [{building, room, lastname}]
- [ ] `build (location)`: build to project, in `location` if specified.



