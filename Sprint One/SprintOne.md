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
	1.Top Commiters
	2.Total Repositories
	3.Repository Details/Data
	4.Contributors (contirbutors with an animal in their username)
	5.Pull Requests Acceptance Rate
	6.Repos with Most Issues
	

## ENDPOINTS
	Repositories: http://augur.osshealth.io:5000/api/unstable/repos
	Repoitory Groups: http://augur.osshealth.io:5000/api/unstable/repo-groups
	Top Commiters: http://augur.osshealth.io:5000/api/unstable/repo-groups/" + groupId + "/repos/" + repoId + "/top-committers
	Contributors: http://augur.osshealth.io:5000/api/unstable/repo-groups/" + groupId + "/repos/" + repoId + "/contributors/
	Pull Requests Acceptance Rate: http://augur.osshealth.io:5000/api/unstable/repo-groups/" + groupId + "/repos/" + repoId + "/pull-request-acceptance-rate
