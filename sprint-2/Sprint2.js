const base = "http://augur.osshealth.io:5000/api/unstable";
let groups;
let repos;
let shortList = new Array();
let acceptList = new Array();
let issueList = new Array();
function filterRepos(keyw){
let list = document.getElementById("repoList");
let included = new Array();
for(var i=0;i<list.length;i++){
    let txt = list.options[i].text;
    let include = txt.toLowerCase().startsWith(keyw);
    if(include){
        list.options[i].style.display = 'list-item';
        included.push(i);
    } else {
        list.options[i].style.display = 'none';
        }
    }
list.selectedIndex = included[0];
}    

async function groupList(){
    groups = await getGroups();
    let list = document.getElementById("groupList");
    for(let group of groups){
        var option = document.createElement("option");
        option.value = group.repo_group_id;
        option.innerHTML = group.rg_name;
        list.options.add(option);
    }
}
async function getGroups(){
    let groupsUrl = base + "/repo-groups/";
    groups = await fetchData(groupsUrl);
    return groups;
}

async function repoList(groupIndex){
    let list = document.getElementById("repoList");
    while(list.options.length) list.options.remove(0);

    repos = await getRepos(groupIndex);  
    for(let repo of repos){
        var option = document.createElement("option");
        option.value = repo.repo_id;
        option.innerHTML = repo.repo_name;
        list.options.add(option);
    }
}
async function getRepos(groupIndex){
    let group = groups[groupIndex];
    let reposUrl = base + "/repo-groups/" + group.repo_group_id + "/repos/";
    let repos = await fetchData(reposUrl);
    return repos;
}

function selectRepo(){ 
    let repoIndex = document.getElementById("repoList").selectedIndex;
    let repo = repos[repoIndex];
    let groupIndex = document.getElementById("groupList").selectedIndex - 1;
    let group = groups[groupIndex];
    getTopCommitters(group.repo_group_id, repo.repo_id);
    getPullAcceptance(group.repo_group_id, repo.repo_id);
    getNewIssues(group.repo_group_id, repo.repo_id);
    getReposData(group.repo_group_id);
}

async function fetchData(url){
    let response =  await fetch(url);
    let json = await response.json();
    return json;
}


async function getNewIssues(groupID, repoID){
    let issueURL = base + "/repo-groups/" + groupID + "/repos/" + repoID + "/issues-new?period=week";
    try{
        let newIssues = await fetchData(issueURL);
        console.log(newIssues)
        for(let issue of newIssues){
            issue.date = issue.date.slice(0,10);
            console.dir(issue);
            issueList.push(issue);
        }
        callDrawNewIssueChart();
    } catch(e){
        document.getElementById("colGraph").innerHTML = "The selected repo is not accepting that request";
    }
}

function callDrawNewIssueChart(){
    google.charts.load('current', {packages:['corechart']});
    google.charts.setOnLoadCallback(drawNewIssueChart);
}

function drawNewIssueChart(){
    var dataElements = [
        ['date', 'issues'],
    ];
    for(let item of issueList){
        var dataItem = new Array();
        if (item.issues>=100){item.issues = 100;}
        dataItem.push(item.date, item.issues);
        dataElements.push(dataItem);
    }
    var data = google.visualization.arrayToDataTable(dataElements);
    var options = {
        width : 600, 
        height : 400, 
        vAxis:{
            ticks:[0,10,20,30,40,50,60,70,80,90,100]
        }
    }
    var chart = new google.visualization.ColumnChart(document.getElementById('colGraph'));
    chart.draw(data, options);
}




async function getPullAcceptance(groupID, repoID){
    let acceptUrl = base + "/repo-groups/" + groupID + "/repos/" + repoID + "/pull-request-acceptance-rate";
    try{
        let acceptanceRate = await fetchData(acceptUrl)
        console.log(acceptanceRate)
        for(let acceptance of acceptanceRate){
            acceptance.date = acceptance.date.slice(0,10);
            console.dir(acceptance);
            acceptList.push(acceptance);
        }
        callDrawAcceptanceChart();
    }catch(e){
        document.getElementById("pullGraph").innerHTML = "The selected repo is not accepting that request";
    }
}


function callDrawAcceptanceChart(){
    google.charts.load('current', {packages:['corechart']});
    google.charts.setOnLoadCallback(drawAcceptanceChart);
}
function drawAcceptanceChart(){
    var dataElements = [
        ['date', 'rate'],
    ];
    for(let item of acceptList){ //what in tarnation
        var dataItem = new Array();
        dataItem.push(item.date, item.rate);
        dataElements.push(dataItem);
    }
    var data = google.visualization.arrayToDataTable(dataElements);

    var options = {'width':600, 'height' :400};
    var chart = new google.visualization.LineChart(document.getElementById('pullGraph'));
    chart.draw(data, options);
}





async function getTopCommitters(groupID, repoID){
    let total = 0;
    let topUrl = base + "/repo-groups/" + groupID + "/repos/" + repoID + "/top-committers?threshold=0.4";
    try{
        let topComitters = await fetchData(topUrl);
        for(let committer of topComitters){
            total += committer.commits;
        }
        shortList.length = 0;
        for(let committer of topComitters){
            var topComitter = {
                email: committer.email,
                commits: committer.commits
            };
            shortList.push(topComitter);
        }
        callDrawTopChart();
    } catch(e) {
        document.getElementById("piechart").innerHTML = "The selected repo is not accepting that request";
    }
}

function callDrawTopChart(){
    google.charts.load('current', {packages:['corechart']});
    google.charts.setOnLoadCallback(drawTopChart);
}

function drawTopChart(){
    var dataElements = [
        ['email', 'commits'],
    ];
    for(let item of shortList){ 
        var dataItem = new Array();
        dataItem.push(item.email, item.commits);
        dataElements.push(dataItem);
    }
    var data = google.visualization.arrayToDataTable(dataElements);

    var options = {'width':600, 'height' :400};
    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
}


