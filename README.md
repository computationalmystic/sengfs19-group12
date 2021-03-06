# AUGUR Metrics Visualisations
### CS 4320/7320
### Group 12 - Front End Group
 - Weiyu Feng
 - Sarah McLaughlin
 - Christina Roberts
 - Ziang Xu 
 
 **Learn More About Augur**  
 https://oss-augur.readthedocs.io/en/master/getting-started/getting-started-toc.html
 

**Intended Design**  
By using Angular Frontend Framework and HTTPClient calls to the Augur interface, we implemented a user-friendly frontend view of the data it contains, including a navigation bar and visuals of multiple metrics within repositories. Users can view the different calculated metrics of committers, pull rates, and repository issues for each chosen repository of the Augur database in line, bar, and pie chart formats.

In addition, we were able to successfully set up our site to run off of a Firebase server, if users choose not to run the project locally.

 **Link to Website**  
 https://group12sprint3.web.app/home

**Instructions To Launch and Use**  
https://github.com/computationalmystic/sengfs19-group12/blob/master/test/Open%20Project.md  
https://github.com/computationalmystic/sengfs19-group12/blob/master/test/Top%20Committers.md  

    Note:
    Please use following repositories for examples:
	- Top Commiters:	 Zephyr-RTOS 	 zephyr  
	- Pull acceptance rates: Rails(wg-value) rails  
	- Repository Issues:	 Rails(wg-value) rails    

**Protocols and Tests for Navigating Project**  
   https://github.com/computationalmystic/sengfs19-group12/blob/master/test/README.md  
   Scripts used to test if site is properly working.

**Ongoing Front End Work/Updates**  
   https://github.com/computationalmystic/sengfs19-group12/tree/master/frontend 
   
**Folders & Code Modified/Created By Group 12**  
-frontend  
https://github.com/computationalmystic/sengfs19-group12/tree/master/frontend  

    Code:   frontend/final-project-app/src 
	- /assets
		- repo.js
			- HTTPClient calls to Augar API
		- images added 
	- /app
		- add nav-bar component
		- add Angular Routing
		- add about-us component 
			- module.ts 
			- component.html
		- add home component 
			 - module.ts 
			 - component.html
		- add issues component 
			 - module.ts 
			 - component.html
		- add meet-the-team 
			 - module.ts 
			 - component.html
		- add pull-rate component
			 - module.ts 
			 - component.html
		- add repos component 
			 - module.ts 
			 - component.html
        
-sprint-1  
https://github.com/computationalmystic/sengfs19-group12/tree/master/sprint-1  

    Markdowns:  
	- AugurTables.png  
	- SprintOne.md

-sprint-2  
https://github.com/computationalmystic/sengfs19-group12/tree/master/sprint-2  

    Code:
	- APICalls	
	- FinalProject	
	- Sprint2.css	
	- Sprint2.html	
	- Sprint2.js	
	- package-lock.json
    Markdowns: 
	- README.md	
	- Link To Website	
         
-sprint-3  
https://github.com/computationalmystic/sengfs19-group12/tree/master/sprint-3  

    Code:
	- APICalls Updated  
    Markdowns: 
	- README.md
         
-sprint-4  
https://github.com/computationalmystic/sengfs19-group12/tree/master/sprint-4  

    Markdowns:  
	- README.md 

-test  
https://github.com/computationalmystic/sengfs19-group12/tree/master/test      		  

    Markdowns:  
	- Home Page.md  
	- Learn More About Augur.md  
	- Open Project.md  
	- Pull Acceptance Rate.md	 
	- README.md	 
	- Repository Issues.md	 
	- Top Committers.md 	
    Images:  
	- commiters zeph zeph.png  
	- pull accept rails rails.png  
	- Issues rail rails.png  



   
**About Our Process**  
In order to make our front-end as user friendly as possible, we decided to implement the application Angular Material UI component. In doing this, it allowed us to not only easily apply the different components that Angular offered, but also include a strong sense of a theme and unison across each of the pages with a tabular navigation bar. 
Originally being a Full Stack Group, we had planned to implement Firebase as both our server and database. Using our HTTPClient calls to the Augur API, we would have been able to store the data retrieved in our Firebase database, and then make calls to our database in order to display the data on our UI.  
When becoming a Front-End Group, we decided to not implement the Firebase database since it was now unnecessary, and instead focus on displaying real-time data clearly on multiple pages and the overall Angular application. We used Google Charts to display our HTTPClient calls to the Augur API to best visualize and display Augur’s live data.
  
   

