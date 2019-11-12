# AUGUR Metrics Visualisations
### CS 4320/7320
### Group 12 - Full Stack Group
 - Weiyu Feng
 - Sarah McLaughlin
 - Christina Roberts
 - Ziang Xu
 

## Sprint 2

**Link to Website**

https://cs4320final.firebaseapp.com/repo

Note: be sure you are using chrome, and click load unsecure javascript to make API calls work.

**Intended Design**
By using Angular Frontend Framework and HTTPClient calls to the Augur API, we implemented a single UI frontend view, including a user friendly navigation bar and visual of top committers within repoitories for the API component. By navigating to "Repository Top Committers" within the menu bar, our API component allows a user to select from a drop down menu with a full list or repositories to view the different calculated metrics of committers for each chosen repository of the Augur database.

In addition, we were able to successfully set up our Firebase server, which is where our database will also be when pulling data from the Augur database and storing it there to be retreived on our UI.

**Goals For Sprint 2**
- Integrate New Firebase Server and Database
- Connect API Calls to retrieve Data
  - API Calls:
    - https://github.com/computationalmystic/sengfs19-group12/blob/master/api.service.ts
- Display data
   - Front End:
     - https://github.com/computationalmystic/sengfs19-group12/tree/master/frontend

- Implement at least one call/visualisation
  - Top 10 Commiters
    - List Of Names (Emails)
    - Pie Chart Comparing Top Commiters


**Future Design Goals**
- Implement more calls and visualisations
  - Search Usernames for "dog", "cat" or "fish" 
  - List of Repositories and Repository Details
  - Pulls and Pull rates of success/failures

 


