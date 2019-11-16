# Group 12 - Sprint One


## HOW TO GET DATA
	Using json  -> xml http request
	Dynamic ajax request


## WHICH DATA TO GET
	List of Repositories and Repository Details
	Top 10 Contributors/Committers
	Pulls and Pull rates of success/failures


## HOW TO PRESENT DATA
	Pie chart
	Line chart
	Bar chart
	Lists

	On the same page
	On different pages -> Navigation / Menu Bar to move from page to page


## USE CASES


- Use Case 1: Top 10 Commiters
	
|Use-case name|Show Top Commiter |
|--|--|
|Actors|Customer|
|Brief Description|This use case will show the top 10 commiters for the selected repository.|
|Basic flow of events|1.Customers choose a respository they want to look at; <br>2.Customers click the "top 10 commiters" button;<br> 3.System will access the API to get info and display those info on the page in a decent format|
|pre-conditions| null |
|Extensition Point|Select repository|

-  User Case 2: Total Repositories

|Use-case Name| Show total repositories|
|--|--|
|Actors|Customer|
|Brief Description|This use case explains how a customer let system show the total number of repositories|
|Basic flow of events|1. Customer click the button "Show all repositories" <br>2. System display the total number of repositories|
|pre-conditions|null|

- Use Case 3: Repository Details/Data

|Use-case Name| Repository Details/Data|
|--|--|
|Actors|Customer|
|Brief Description|This use case explains how a customer let system show the overall info about one repository|
|Basic flow of events|1. Customer choose one repository <br>2. System display the general info about one repository on the page |
|pre-conditions|null|

- Use Case 4: Contributors (contirbutors with an animal in their username)

|Use-case Name| Contributors (contirbutors with an animal in their username)|
|--|--|
|Actors|Customer|
|Brief Description|This use case explains how a customer let system show the info of contributors who have an animal in their username|
|Basic flow of events|1. Customer choose one repository <br>2. Customer click the button "Show contributer with animal in the username" <br>3. System display the contributor on the page |
|pre-conditions|null|

- Use Case 5: Pull Requests Acceptance Rate

|Use-case Name| Pull Requests Acceptance Rate|
|--|--|
|Actors|Customer|
|Brief Description|This use case explains how a customer let system show the acceptance rate of pull requests of one repository|
|Basic flow of events|1. Customer choose one repository <br>2. Customer click the button "Show pull request acceptance rate" <br>3. System display the pull request acceptance rate on the page in a format of pie or chart |
|pre-conditions|null|

- Use Case 6: Repos with Most Issues

|Use-case Name| Repos with Most Issues|
|--|--|
|Actors|Customer|
|Brief Description|This use case explains how a customer let system show the name of repository with most issues|
|Basic flow of events|1. Customer click the "Show repo with most issues" <br>2. System display the name of the repository with most issues on the page |
|pre-conditions|null|

	

## ENDPOINTS
	Repositories: http://augur.osshealth.io:5000/api/unstable/repos
	Repoitory Groups: http://augur.osshealth.io:5000/api/unstable/repo-groups
	Top Commiters: http://augur.osshealth.io:5000/api/unstable/repo-groups/" + groupId + "/repos/" + repoId + "/top-committers
	Contributors: http://augur.osshealth.io:5000/api/unstable/repo-groups/" + groupId + "/repos/" + repoId + "/contributors/
	Pull Requests Acceptance Rate: http://augur.osshealth.io:5000/api/unstable/repo-groups/" + groupId + "/repos/" + repoId + "/pull-request-acceptance-rate
