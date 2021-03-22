const {handleGitEvent} = require("./index");

try {
    //const githubContext=github.context;
    const githubContext = JSON.parse('{"payload":{"after":"90d7d70db460b0c796b8f7f6e43a3afcf5a29cb7","base_ref":null,"before":"a2f633a0317f4576388c93c2683d9f6e55ec796c","commits":[{"author":{"email":"ayushpguptaapg@gmail.com","name":"Ayush P Gupta","username":"apgapg"},"committer":{"email":"ayushpguptaapg@gmail.com","name":"Ayush P Gupta","username":"apgapg"},"distinct":true,"id":"90d7d70db460b0c796b8f7f6e43a3afcf5a29cb7","message":"Update fvevv\\n\\nAsana Task: https://app.asana.com/0/1199639699575756/1200092471273283/f","timestamp":"2021-03-22T14:43:57+05:30","tree_id":"304494f629407556a422b0138969f2b414fe7a09","url":"https://github.com/apgapg/github-action-test/commit/90d7d70db460b0c796b8f7f6e43a3afcf5a29cb7"}],"compare":"https://github.com/apgapg/github-action-test/compare/a2f633a0317f...90d7d70db460","created":false,"deleted":false,"forced":false,"head_commit":{"author":{"email":"ayushpguptaapg@gmail.com","name":"Ayush P Gupta","username":"apgapg"},"committer":{"email":"ayushpguptaapg@gmail.com","name":"Ayush P Gupta","username":"apgapg"},"distinct":true,"id":"90d7d70db460b0c796b8f7f6e43a3afcf5a29cb7","message":"Update fvevv\\n\\nAsana Task: https://app.asana.com/0/1199639699575756/1200092471273283/f","timestamp":"2021-03-22T14:43:57+05:30","tree_id":"304494f629407556a422b0138969f2b414fe7a09","url":"https://github.com/apgapg/github-action-test/commit/90d7d70db460b0c796b8f7f6e43a3afcf5a29cb7"},"pusher":{"email":"ayushpguptaapg@gmail.com","name":"apgapg"},"ref":"refs/heads/main","repository":{"archive_url":"https://api.github.com/repos/apgapg/github-action-test/{archive_format}{/ref}","archived":false,"assignees_url":"https://api.github.com/repos/apgapg/github-action-test/assignees{/user}","blobs_url":"https://api.github.com/repos/apgapg/github-action-test/git/blobs{/sha}","branches_url":"https://api.github.com/repos/apgapg/github-action-test/branches{/branch}","clone_url":"https://github.com/apgapg/github-action-test.git","collaborators_url":"https://api.github.com/repos/apgapg/github-action-test/collaborators{/collaborator}","comments_url":"https://api.github.com/repos/apgapg/github-action-test/comments{/number}","commits_url":"https://api.github.com/repos/apgapg/github-action-test/commits{/sha}","compare_url":"https://api.github.com/repos/apgapg/github-action-test/compare/{base}...{head}","contents_url":"https://api.github.com/repos/apgapg/github-action-test/contents/{+path}","contributors_url":"https://api.github.com/repos/apgapg/github-action-test/contributors","created_at":1616215573,"default_branch":"main","deployments_url":"https://api.github.com/repos/apgapg/github-action-test/deployments","description":null,"disabled":false,"downloads_url":"https://api.github.com/repos/apgapg/github-action-test/downloads","events_url":"https://api.github.com/repos/apgapg/github-action-test/events","fork":false,"forks":0,"forks_count":0,"forks_url":"https://api.github.com/repos/apgapg/github-action-test/forks","full_name":"apgapg/github-action-test","git_commits_url":"https://api.github.com/repos/apgapg/github-action-test/git/commits{/sha}","git_refs_url":"https://api.github.com/repos/apgapg/github-action-test/git/refs{/sha}","git_tags_url":"https://api.github.com/repos/apgapg/github-action-test/git/tags{/sha}","git_url":"git://github.com/apgapg/github-action-test.git","has_downloads":true,"has_issues":true,"has_pages":false,"has_projects":true,"has_wiki":true,"homepage":null,"hooks_url":"https://api.github.com/repos/apgapg/github-action-test/hooks","html_url":"https://github.com/apgapg/github-action-test","id":349629323,"issue_comment_url":"https://api.github.com/repos/apgapg/github-action-test/issues/comments{/number}","issue_events_url":"https://api.github.com/repos/apgapg/github-action-test/issues/events{/number}","issues_url":"https://api.github.com/repos/apgapg/github-action-test/issues{/number}","keys_url":"https://api.github.com/repos/apgapg/github-action-test/keys{/key_id}","labels_url":"https://api.github.com/repos/apgapg/github-action-test/labels{/name}","language":null,"languages_url":"https://api.github.com/repos/apgapg/github-action-test/languages","license":null,"master_branch":"main","merges_url":"https://api.github.com/repos/apgapg/github-action-test/merges","milestones_url":"https://api.github.com/repos/apgapg/github-action-test/milestones{/number}","mirror_url":null,"name":"github-action-test","node_id":"MDEwOlJlcG9zaXRvcnkzNDk2MjkzMjM=","notifications_url":"https://api.github.com/repos/apgapg/github-action-test/notifications{?since,all,participating}","open_issues":0,"open_issues_count":0,"owner":{"avatar_url":"https://avatars.githubusercontent.com/u/13887407?v=4","email":"ayushpguptaapg@gmail.com","events_url":"https://api.github.com/users/apgapg/events{/privacy}","followers_url":"https://api.github.com/users/apgapg/followers","following_url":"https://api.github.com/users/apgapg/following{/other_user}","gists_url":"https://api.github.com/users/apgapg/gists{/gist_id}","gravatar_id":"","html_url":"https://github.com/apgapg","id":13887407,"login":"apgapg","name":"apgapg","node_id":"MDQ6VXNlcjEzODg3NDA3","organizations_url":"https://api.github.com/users/apgapg/orgs","received_events_url":"https://api.github.com/users/apgapg/received_events","repos_url":"https://api.github.com/users/apgapg/repos","site_admin":false,"starred_url":"https://api.github.com/users/apgapg/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/apgapg/subscriptions","type":"User","url":"https://api.github.com/users/apgapg"},"private":true,"pulls_url":"https://api.github.com/repos/apgapg/github-action-test/pulls{/number}","pushed_at":1616404442,"releases_url":"https://api.github.com/repos/apgapg/github-action-test/releases{/id}","size":9,"ssh_url":"git@github.com:apgapg/github-action-test.git","stargazers":0,"stargazers_count":0,"stargazers_url":"https://api.github.com/repos/apgapg/github-action-test/stargazers","statuses_url":"https://api.github.com/repos/apgapg/github-action-test/statuses/{sha}","subscribers_url":"https://api.github.com/repos/apgapg/github-action-test/subscribers","subscription_url":"https://api.github.com/repos/apgapg/github-action-test/subscription","svn_url":"https://github.com/apgapg/github-action-test","tags_url":"https://api.github.com/repos/apgapg/github-action-test/tags","teams_url":"https://api.github.com/repos/apgapg/github-action-test/teams","trees_url":"https://api.github.com/repos/apgapg/github-action-test/git/trees{/sha}","updated_at":"2021-03-22T09:01:15Z","url":"https://github.com/apgapg/github-action-test","watchers":0,"watchers_count":0},"sender":{"avatar_url":"https://avatars.githubusercontent.com/u/13887407?v=4","events_url":"https://api.github.com/users/apgapg/events{/privacy}","followers_url":"https://api.github.com/users/apgapg/followers","following_url":"https://api.github.com/users/apgapg/following{/other_user}","gists_url":"https://api.github.com/users/apgapg/gists{/gist_id}","gravatar_id":"","html_url":"https://github.com/apgapg","id":13887407,"login":"apgapg","node_id":"MDQ6VXNlcjEzODg3NDA3","organizations_url":"https://api.github.com/users/apgapg/orgs","received_events_url":"https://api.github.com/users/apgapg/received_events","repos_url":"https://api.github.com/users/apgapg/repos","site_admin":false,"starred_url":"https://api.github.com/users/apgapg/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/apgapg/subscriptions","type":"User","url":"https://api.github.com/users/apgapg"}},"eventName":"push","sha":"90d7d70db460b0c796b8f7f6e43a3afcf5a29cb7","ref":"refs/heads/main","workflow":"Deploy to Firebase Hosting on merge","action":"apgapggithub-asana-action","actor":"apgapg"}');
    console.log(JSON.stringify(githubContext));
    // const ASANA_PAT = core.getInput("asana-pat");
    const ASANA_PAT = "avc";
    const TARGETS_COMMITS_PUSH = '[]';
    const TARGETS_PR_RAISE = '[]';
    const TARGETS_PR_MERGE = '[]';

    const COMMITS = githubContext.payload.commits;
    const EVENT_NAME = githubContext.eventName;
    const PULL_REQUEST = githubContext.payload.pull_request;

    handleGitEvent(ASANA_PAT, PULL_REQUEST, EVENT_NAME, COMMITS, TARGETS_COMMITS_PUSH, TARGETS_PR_RAISE, TARGETS_PR_MERGE);
} catch (error) {
    console.log(error.message);
}

