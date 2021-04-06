const {handleGitEvent} = require("./src");

try {
  //const githubContext=github.context;
  // const githubContext = JSON.parse('{"payload":{"action":"synchronize","after":"e5970b800a5c8630a668a8c742a2cf73074cc86f","before":"730e38bde4f621af460e315e580753f7b3d33557","number":62,"organization":{"avatar_url":"https://avatars.githubusercontent.com/u/7517359?v=4","description":"Sales Force Automation done right!","events_url":"https://api.github.com/orgs/FieldAssist/events","hooks_url":"https://api.github.com/orgs/FieldAssist/hooks","id":7517359,"issues_url":"https://api.github.com/orgs/FieldAssist/issues","login":"FieldAssist","members_url":"https://api.github.com/orgs/FieldAssist/members{/member}","node_id":"MDEyOk9yZ2FuaXphdGlvbjc1MTczNTk=","public_members_url":"https://api.github.com/orgs/FieldAssist/public_members{/member}","repos_url":"https://api.github.com/orgs/FieldAssist/repos","url":"https://api.github.com/orgs/FieldAssist"},"pull_request":{"_links":{"comments":{"href":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/issues/62/comments"},"commits":{"href":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/pulls/62/commits"},"html":{"href":"https://github.com/FieldAssist/fa_flutter_mt/pull/62"},"issue":{"href":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/issues/62"},"review_comment":{"href":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/pulls/comments{/number}"},"review_comments":{"href":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/pulls/62/comments"},"self":{"href":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/pulls/62"},"statuses":{"href":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/statuses/e5970b800a5c8630a668a8c742a2cf73074cc86f"}},"active_lock_reason":null,"additions":52,"assignee":{"avatar_url":"https://avatars.githubusercontent.com/u/43882770?v=4","events_url":"https://api.github.com/users/Aashishm178/events{/privacy}","followers_url":"https://api.github.com/users/Aashishm178/followers","following_url":"https://api.github.com/users/Aashishm178/following{/other_user}","gists_url":"https://api.github.com/users/Aashishm178/gists{/gist_id}","gravatar_id":"","html_url":"https://github.com/Aashishm178","id":43882770,"login":"Aashishm178","node_id":"MDQ6VXNlcjQzODgyNzcw","organizations_url":"https://api.github.com/users/Aashishm178/orgs","received_events_url":"https://api.github.com/users/Aashishm178/received_events","repos_url":"https://api.github.com/users/Aashishm178/repos","site_admin":false,"starred_url":"https://api.github.com/users/Aashishm178/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/Aashishm178/subscriptions","type":"User","url":"https://api.github.com/users/Aashishm178"},"assignees":[{"avatar_url":"https://avatars.githubusercontent.com/u/43882770?v=4","events_url":"https://api.github.com/users/Aashishm178/events{/privacy}","followers_url":"https://api.github.com/users/Aashishm178/followers","following_url":"https://api.github.com/users/Aashishm178/following{/other_user}","gists_url":"https://api.github.com/users/Aashishm178/gists{/gist_id}","gravatar_id":"","html_url":"https://github.com/Aashishm178","id":43882770,"login":"Aashishm178","node_id":"MDQ6VXNlcjQzODgyNzcw","organizations_url":"https://api.github.com/users/Aashishm178/orgs","received_events_url":"https://api.github.com/users/Aashishm178/received_events","repos_url":"https://api.github.com/users/Aashishm178/repos","site_admin":false,"starred_url":"https://api.github.com/users/Aashishm178/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/Aashishm178/subscriptions","type":"User","url":"https://api.github.com/users/Aashishm178"}],"author_association":"NONE","auto_merge":null,"base":{"label":"FieldAssist:develop","ref":"develop","repo":{"allow_merge_commit":true,"allow_rebase_merge":true,"allow_squash_merge":true,"archive_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/{archive_format}{/ref}","archived":false,"assignees_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/assignees{/user}","blobs_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/git/blobs{/sha}","branches_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/branches{/branch}","clone_url":"https://github.com/FieldAssist/fa_flutter_mt.git","collaborators_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/collaborators{/collaborator}","comments_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/comments{/number}","commits_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/commits{/sha}","compare_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/compare/{base}...{head}","contents_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/contents/{+path}","contributors_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/contributors","created_at":"2020-12-18T07:23:25Z","default_branch":"develop","delete_branch_on_merge":false,"deployments_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/deployments","description":"New MT flutter app","disabled":false,"downloads_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/downloads","events_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/events","fork":false,"forks":0,"forks_count":0,"forks_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/forks","full_name":"FieldAssist/fa_flutter_mt","git_commits_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/git/commits{/sha}","git_refs_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/git/refs{/sha}","git_tags_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/git/tags{/sha}","git_url":"git://github.com/FieldAssist/fa_flutter_mt.git","has_downloads":true,"has_issues":true,"has_pages":false,"has_projects":true,"has_wiki":true,"homepage":"","hooks_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/hooks","html_url":"https://github.com/FieldAssist/fa_flutter_mt","id":322520414,"issue_comment_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/issues/comments{/number}","issue_events_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/issues/events{/number}","issues_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/issues{/number}","keys_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/keys{/key_id}","labels_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/labels{/name}","language":"Dart","languages_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/languages","license":null,"merges_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/merges","milestones_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/milestones{/number}","mirror_url":null,"name":"fa_flutter_mt","node_id":"MDEwOlJlcG9zaXRvcnkzMjI1MjA0MTQ=","notifications_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/notifications{?since,all,participating}","open_issues":4,"open_issues_count":4,"owner":{"avatar_url":"https://avatars.githubusercontent.com/u/7517359?v=4","events_url":"https://api.github.com/users/FieldAssist/events{/privacy}","followers_url":"https://api.github.com/users/FieldAssist/followers","following_url":"https://api.github.com/users/FieldAssist/following{/other_user}","gists_url":"https://api.github.com/users/FieldAssist/gists{/gist_id}","gravatar_id":"","html_url":"https://github.com/FieldAssist","id":7517359,"login":"FieldAssist","node_id":"MDEyOk9yZ2FuaXphdGlvbjc1MTczNTk=","organizations_url":"https://api.github.com/users/FieldAssist/orgs","received_events_url":"https://api.github.com/users/FieldAssist/received_events","repos_url":"https://api.github.com/users/FieldAssist/repos","site_admin":false,"starred_url":"https://api.github.com/users/FieldAssist/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/FieldAssist/subscriptions","type":"Organization","url":"https://api.github.com/users/FieldAssist"},"private":true,"pulls_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/pulls{/number}","pushed_at":"2021-03-30T06:28:44Z","releases_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/releases{/id}","size":2764,"ssh_url":"git@github.com:FieldAssist/fa_flutter_mt.git","stargazers_count":2,"stargazers_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/stargazers","statuses_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/statuses/{sha}","subscribers_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/subscribers","subscription_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/subscription","svn_url":"https://github.com/FieldAssist/fa_flutter_mt","tags_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/tags","teams_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/teams","trees_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/git/trees{/sha}","updated_at":"2021-03-30T06:12:11Z","url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt","watchers":2,"watchers_count":2},"sha":"b7795cdb8a776745c5c47d09c8cfb7fe6ba7b2e4","user":{"avatar_url":"https://avatars.githubusercontent.com/u/7517359?v=4","events_url":"https://api.github.com/users/FieldAssist/events{/privacy}","followers_url":"https://api.github.com/users/FieldAssist/followers","following_url":"https://api.github.com/users/FieldAssist/following{/other_user}","gists_url":"https://api.github.com/users/FieldAssist/gists{/gist_id}","gravatar_id":"","html_url":"https://github.com/FieldAssist","id":7517359,"login":"FieldAssist","node_id":"MDEyOk9yZ2FuaXphdGlvbjc1MTczNTk=","organizations_url":"https://api.github.com/users/FieldAssist/orgs","received_events_url":"https://api.github.com/users/FieldAssist/received_events","repos_url":"https://api.github.com/users/FieldAssist/repos","site_admin":false,"starred_url":"https://api.github.com/users/FieldAssist/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/FieldAssist/subscriptions","type":"Organization","url":"https://api.github.com/users/FieldAssist"}},"body":"## Description\\r\\n\\r\\nCreating Auto Login Flow Using Mobile Number Picker Plugin\\r\\n\\r\\n## Links\\r\\n\\r\\nLinks : Asana Link\\r\\nhttps://app.asana.com/0/1200109906013623/1200109996737954\\r\\n\\r\\n## Commits\\r\\n\\r\\n- [Mobile Number Picker] Auto Login Flow Added for Indian Numbers\\r\\n\\r\\n## Tests\\r\\n\\r\\nNo Test(s) added.\\r\\n\\r\\n## Checklist\\r\\n\\r\\nBefore you create this PR, confirm that it meets all requirements listed below by checking the relevant checkboxes (`[x]`). This will ensure a smooth and quick review process.\\r\\n\\r\\n- [x] I read and followed the [Best Practices Guide].\\r\\n- [x] I updated/added relevant documentation (doc comments with `///`).\\r\\n- [x] All existing and new tests are passing.\\r\\n- [ ] Added relevant reviewers.\\r\\n\\r\\n## Breaking Change\\r\\n\\r\\n- [x] No, no existing tests failed.\\r\\n- [ ] Yes, this is a breaking change.\\r\\n\\r\\n## Should be merge type:\\r\\n\\r\\n- [ ] Squash and merge\\r\\n- [x] Rebase and merge\\r\\n\\r\\n\\r\\n<!-- Links -->\\r\\n[Best Practices Guide]: https://github.com/FieldAssist/fa_flutter_docs","changed_files":5,"closed_at":null,"comments":3,"comments_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/issues/62/comments","commits":2,"commits_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/pulls/62/commits","created_at":"2021-03-26T09:22:21Z","deletions":5,"diff_url":"https://github.com/FieldAssist/fa_flutter_mt/pull/62.diff","draft":false,"head":{"label":"FieldAssist:features/mobile-number-picker","ref":"features/mobile-number-picker","repo":{"allow_merge_commit":true,"allow_rebase_merge":true,"allow_squash_merge":true,"archive_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/{archive_format}{/ref}","archived":false,"assignees_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/assignees{/user}","blobs_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/git/blobs{/sha}","branches_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/branches{/branch}","clone_url":"https://github.com/FieldAssist/fa_flutter_mt.git","collaborators_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/collaborators{/collaborator}","comments_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/comments{/number}","commits_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/commits{/sha}","compare_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/compare/{base}...{head}","contents_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/contents/{+path}","contributors_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/contributors","created_at":"2020-12-18T07:23:25Z","default_branch":"develop","delete_branch_on_merge":false,"deployments_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/deployments","description":"New MT flutter app","disabled":false,"downloads_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/downloads","events_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/events","fork":false,"forks":0,"forks_count":0,"forks_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/forks","full_name":"FieldAssist/fa_flutter_mt","git_commits_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/git/commits{/sha}","git_refs_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/git/refs{/sha}","git_tags_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/git/tags{/sha}","git_url":"git://github.com/FieldAssist/fa_flutter_mt.git","has_downloads":true,"has_issues":true,"has_pages":false,"has_projects":true,"has_wiki":true,"homepage":"","hooks_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/hooks","html_url":"https://github.com/FieldAssist/fa_flutter_mt","id":322520414,"issue_comment_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/issues/comments{/number}","issue_events_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/issues/events{/number}","issues_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/issues{/number}","keys_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/keys{/key_id}","labels_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/labels{/name}","language":"Dart","languages_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/languages","license":null,"merges_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/merges","milestones_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/milestones{/number}","mirror_url":null,"name":"fa_flutter_mt","node_id":"MDEwOlJlcG9zaXRvcnkzMjI1MjA0MTQ=","notifications_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/notifications{?since,all,participating}","open_issues":4,"open_issues_count":4,"owner":{"avatar_url":"https://avatars.githubusercontent.com/u/7517359?v=4","events_url":"https://api.github.com/users/FieldAssist/events{/privacy}","followers_url":"https://api.github.com/users/FieldAssist/followers","following_url":"https://api.github.com/users/FieldAssist/following{/other_user}","gists_url":"https://api.github.com/users/FieldAssist/gists{/gist_id}","gravatar_id":"","html_url":"https://github.com/FieldAssist","id":7517359,"login":"FieldAssist","node_id":"MDEyOk9yZ2FuaXphdGlvbjc1MTczNTk=","organizations_url":"https://api.github.com/users/FieldAssist/orgs","received_events_url":"https://api.github.com/users/FieldAssist/received_events","repos_url":"https://api.github.com/users/FieldAssist/repos","site_admin":false,"starred_url":"https://api.github.com/users/FieldAssist/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/FieldAssist/subscriptions","type":"Organization","url":"https://api.github.com/users/FieldAssist"},"private":true,"pulls_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/pulls{/number}","pushed_at":"2021-03-30T06:28:44Z","releases_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/releases{/id}","size":2764,"ssh_url":"git@github.com:FieldAssist/fa_flutter_mt.git","stargazers_count":2,"stargazers_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/stargazers","statuses_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/statuses/{sha}","subscribers_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/subscribers","subscription_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/subscription","svn_url":"https://github.com/FieldAssist/fa_flutter_mt","tags_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/tags","teams_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/teams","trees_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/git/trees{/sha}","updated_at":"2021-03-30T06:12:11Z","url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt","watchers":2,"watchers_count":2},"sha":"e5970b800a5c8630a668a8c742a2cf73074cc86f","user":{"avatar_url":"https://avatars.githubusercontent.com/u/7517359?v=4","events_url":"https://api.github.com/users/FieldAssist/events{/privacy}","followers_url":"https://api.github.com/users/FieldAssist/followers","following_url":"https://api.github.com/users/FieldAssist/following{/other_user}","gists_url":"https://api.github.com/users/FieldAssist/gists{/gist_id}","gravatar_id":"","html_url":"https://github.com/FieldAssist","id":7517359,"login":"FieldAssist","node_id":"MDEyOk9yZ2FuaXphdGlvbjc1MTczNTk=","organizations_url":"https://api.github.com/users/FieldAssist/orgs","received_events_url":"https://api.github.com/users/FieldAssist/received_events","repos_url":"https://api.github.com/users/FieldAssist/repos","site_admin":false,"starred_url":"https://api.github.com/users/FieldAssist/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/FieldAssist/subscriptions","type":"Organization","url":"https://api.github.com/users/FieldAssist"}},"html_url":"https://github.com/FieldAssist/fa_flutter_mt/pull/62","id":601442174,"issue_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/issues/62","labels":[],"locked":false,"maintainer_can_modify":false,"merge_commit_sha":"ea8c50eb90a253c4c9b00e8d5ab55db19fd35c37","mergeable":null,"mergeable_state":"unknown","merged":false,"merged_at":null,"merged_by":null,"milestone":null,"node_id":"MDExOlB1bGxSZXF1ZXN0NjAxNDQyMTc0","number":62,"patch_url":"https://github.com/FieldAssist/fa_flutter_mt/pull/62.patch","rebaseable":null,"requested_reviewers":[{"avatar_url":"https://avatars.githubusercontent.com/u/13887407?v=4","events_url":"https://api.github.com/users/apgapg/events{/privacy}","followers_url":"https://api.github.com/users/apgapg/followers","following_url":"https://api.github.com/users/apgapg/following{/other_user}","gists_url":"https://api.github.com/users/apgapg/gists{/gist_id}","gravatar_id":"","html_url":"https://github.com/apgapg","id":13887407,"login":"apgapg","node_id":"MDQ6VXNlcjEzODg3NDA3","organizations_url":"https://api.github.com/users/apgapg/orgs","received_events_url":"https://api.github.com/users/apgapg/received_events","repos_url":"https://api.github.com/users/apgapg/repos","site_admin":false,"starred_url":"https://api.github.com/users/apgapg/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/apgapg/subscriptions","type":"User","url":"https://api.github.com/users/apgapg"},{"avatar_url":"https://avatars.githubusercontent.com/u/49554541?v=4","events_url":"https://api.github.com/users/someshubham/events{/privacy}","followers_url":"https://api.github.com/users/someshubham/followers","following_url":"https://api.github.com/users/someshubham/following{/other_user}","gists_url":"https://api.github.com/users/someshubham/gists{/gist_id}","gravatar_id":"","html_url":"https://github.com/someshubham","id":49554541,"login":"someshubham","node_id":"MDQ6VXNlcjQ5NTU0NTQx","organizations_url":"https://api.github.com/users/someshubham/orgs","received_events_url":"https://api.github.com/users/someshubham/received_events","repos_url":"https://api.github.com/users/someshubham/repos","site_admin":false,"starred_url":"https://api.github.com/users/someshubham/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/someshubham/subscriptions","type":"User","url":"https://api.github.com/users/someshubham"}],"requested_teams":[],"review_comment_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/pulls/comments{/number}","review_comments":0,"review_comments_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/pulls/62/comments","state":"open","statuses_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/statuses/e5970b800a5c8630a668a8c742a2cf73074cc86f","title":"[WIP] [Mobile Number Picker] Add Auto Login Flow for Indian Numbers","updated_at":"2021-03-30T06:28:45Z","url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/pulls/62","user":{"avatar_url":"https://avatars.githubusercontent.com/u/43882770?v=4","events_url":"https://api.github.com/users/Aashishm178/events{/privacy}","followers_url":"https://api.github.com/users/Aashishm178/followers","following_url":"https://api.github.com/users/Aashishm178/following{/other_user}","gists_url":"https://api.github.com/users/Aashishm178/gists{/gist_id}","gravatar_id":"","html_url":"https://github.com/Aashishm178","id":43882770,"login":"Aashishm178","node_id":"MDQ6VXNlcjQzODgyNzcw","organizations_url":"https://api.github.com/users/Aashishm178/orgs","received_events_url":"https://api.github.com/users/Aashishm178/received_events","repos_url":"https://api.github.com/users/Aashishm178/repos","site_admin":false,"starred_url":"https://api.github.com/users/Aashishm178/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/Aashishm178/subscriptions","type":"User","url":"https://api.github.com/users/Aashishm178"}},"repository":{"archive_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/{archive_format}{/ref}","archived":false,"assignees_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/assignees{/user}","blobs_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/git/blobs{/sha}","branches_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/branches{/branch}","clone_url":"https://github.com/FieldAssist/fa_flutter_mt.git","collaborators_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/collaborators{/collaborator}","comments_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/comments{/number}","commits_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/commits{/sha}","compare_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/compare/{base}...{head}","contents_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/contents/{+path}","contributors_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/contributors","created_at":"2020-12-18T07:23:25Z","default_branch":"develop","deployments_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/deployments","description":"New MT flutter app","disabled":false,"downloads_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/downloads","events_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/events","fork":false,"forks":0,"forks_count":0,"forks_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/forks","full_name":"FieldAssist/fa_flutter_mt","git_commits_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/git/commits{/sha}","git_refs_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/git/refs{/sha}","git_tags_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/git/tags{/sha}","git_url":"git://github.com/FieldAssist/fa_flutter_mt.git","has_downloads":true,"has_issues":true,"has_pages":false,"has_projects":true,"has_wiki":true,"homepage":"","hooks_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/hooks","html_url":"https://github.com/FieldAssist/fa_flutter_mt","id":322520414,"issue_comment_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/issues/comments{/number}","issue_events_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/issues/events{/number}","issues_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/issues{/number}","keys_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/keys{/key_id}","labels_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/labels{/name}","language":"Dart","languages_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/languages","license":null,"merges_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/merges","milestones_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/milestones{/number}","mirror_url":null,"name":"fa_flutter_mt","node_id":"MDEwOlJlcG9zaXRvcnkzMjI1MjA0MTQ=","notifications_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/notifications{?since,all,participating}","open_issues":4,"open_issues_count":4,"owner":{"avatar_url":"https://avatars.githubusercontent.com/u/7517359?v=4","events_url":"https://api.github.com/users/FieldAssist/events{/privacy}","followers_url":"https://api.github.com/users/FieldAssist/followers","following_url":"https://api.github.com/users/FieldAssist/following{/other_user}","gists_url":"https://api.github.com/users/FieldAssist/gists{/gist_id}","gravatar_id":"","html_url":"https://github.com/FieldAssist","id":7517359,"login":"FieldAssist","node_id":"MDEyOk9yZ2FuaXphdGlvbjc1MTczNTk=","organizations_url":"https://api.github.com/users/FieldAssist/orgs","received_events_url":"https://api.github.com/users/FieldAssist/received_events","repos_url":"https://api.github.com/users/FieldAssist/repos","site_admin":false,"starred_url":"https://api.github.com/users/FieldAssist/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/FieldAssist/subscriptions","type":"Organization","url":"https://api.github.com/users/FieldAssist"},"private":true,"pulls_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/pulls{/number}","pushed_at":"2021-03-30T06:28:44Z","releases_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/releases{/id}","size":2764,"ssh_url":"git@github.com:FieldAssist/fa_flutter_mt.git","stargazers_count":2,"stargazers_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/stargazers","statuses_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/statuses/{sha}","subscribers_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/subscribers","subscription_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/subscription","svn_url":"https://github.com/FieldAssist/fa_flutter_mt","tags_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/tags","teams_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/teams","trees_url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt/git/trees{/sha}","updated_at":"2021-03-30T06:12:11Z","url":"https://api.github.com/repos/FieldAssist/fa_flutter_mt","watchers":2,"watchers_count":2},"sender":{"avatar_url":"https://avatars.githubusercontent.com/u/43882770?v=4","events_url":"https://api.github.com/users/Aashishm178/events{/privacy}","followers_url":"https://api.github.com/users/Aashishm178/followers","following_url":"https://api.github.com/users/Aashishm178/following{/other_user}","gists_url":"https://api.github.com/users/Aashishm178/gists{/gist_id}","gravatar_id":"","html_url":"https://github.com/Aashishm178","id":43882770,"login":"Aashishm178","node_id":"MDQ6VXNlcjQzODgyNzcw","organizations_url":"https://api.github.com/users/Aashishm178/orgs","received_events_url":"https://api.github.com/users/Aashishm178/received_events","repos_url":"https://api.github.com/users/Aashishm178/repos","site_admin":false,"starred_url":"https://api.github.com/users/Aashishm178/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/Aashishm178/subscriptions","type":"User","url":"https://api.github.com/users/Aashishm178"}},"eventName":"pull_request","sha":"c13516efd2d10419bd032f2eea472fa854293c4e","ref":"refs/pull/62/merge","workflow":"Update Asana task on PR","action":"apgapggithub-asana-action","actor":"Aashishm178"}');
  const githubContext = JSON.parse('{"payload":{"after":"90d7d70db460b0c796b8f7f6e43a3afcf5a29cb7","base_ref":null,"before":"a2f633a0317f4576388c93c2683d9f6e55ec796c","commits":[{"author":{"email":"ayushpguptaapg@gmail.com","name":"Ayush P Gupta","username":"apgapg"},"committer":{"email":"ayushpguptaapg@gmail.com","name":"Ayush P Gupta","username":"apgapg"},"distinct":true,"id":"90d7d70db460b0c796b8f7f6e43a3afcf5a29cb7","message":"Update fvevv\\n\\nThis is a test desc\\n\\nAsana Task: https://app.asana.com/0/1199639699575756/1200092471273283/f","timestamp":"2021-03-22T14:43:57+05:30","tree_id":"304494f629407556a422b0138969f2b414fe7a09","url":"https://github.com/apgapg/github-action-test/commit/90d7d70db460b0c796b8f7f6e43a3afcf5a29cb7"}],"compare":"https://github.com/apgapg/github-action-test/compare/a2f633a0317f...90d7d70db460","created":false,"deleted":false,"forced":false,"head_commit":{"author":{"email":"ayushpguptaapg@gmail.com","name":"Ayush P Gupta","username":"apgapg"},"committer":{"email":"ayushpguptaapg@gmail.com","name":"Ayush P Gupta","username":"apgapg"},"distinct":true,"id":"90d7d70db460b0c796b8f7f6e43a3afcf5a29cb7","message":"Update fvevv\\n\\nAsana Task: https://app.asana.com/0/1199639699575756/1200092471273283/f","timestamp":"2021-03-22T14:43:57+05:30","tree_id":"304494f629407556a422b0138969f2b414fe7a09","url":"https://github.com/apgapg/github-action-test/commit/90d7d70db460b0c796b8f7f6e43a3afcf5a29cb7"},"pusher":{"email":"ayushpguptaapg@gmail.com","name":"apgapg"},"ref":"refs/heads/main","repository":{"archive_url":"https://api.github.com/repos/apgapg/github-action-test/{archive_format}{/ref}","archived":false,"assignees_url":"https://api.github.com/repos/apgapg/github-action-test/assignees{/user}","blobs_url":"https://api.github.com/repos/apgapg/github-action-test/git/blobs{/sha}","branches_url":"https://api.github.com/repos/apgapg/github-action-test/branches{/branch}","clone_url":"https://github.com/apgapg/github-action-test.git","collaborators_url":"https://api.github.com/repos/apgapg/github-action-test/collaborators{/collaborator}","comments_url":"https://api.github.com/repos/apgapg/github-action-test/comments{/number}","commits_url":"https://api.github.com/repos/apgapg/github-action-test/commits{/sha}","compare_url":"https://api.github.com/repos/apgapg/github-action-test/compare/{base}...{head}","contents_url":"https://api.github.com/repos/apgapg/github-action-test/contents/{+path}","contributors_url":"https://api.github.com/repos/apgapg/github-action-test/contributors","created_at":1616215573,"default_branch":"main","deployments_url":"https://api.github.com/repos/apgapg/github-action-test/deployments","description":null,"disabled":false,"downloads_url":"https://api.github.com/repos/apgapg/github-action-test/downloads","events_url":"https://api.github.com/repos/apgapg/github-action-test/events","fork":false,"forks":0,"forks_count":0,"forks_url":"https://api.github.com/repos/apgapg/github-action-test/forks","full_name":"apgapg/github-action-test","git_commits_url":"https://api.github.com/repos/apgapg/github-action-test/git/commits{/sha}","git_refs_url":"https://api.github.com/repos/apgapg/github-action-test/git/refs{/sha}","git_tags_url":"https://api.github.com/repos/apgapg/github-action-test/git/tags{/sha}","git_url":"git://github.com/apgapg/github-action-test.git","has_downloads":true,"has_issues":true,"has_pages":false,"has_projects":true,"has_wiki":true,"homepage":null,"hooks_url":"https://api.github.com/repos/apgapg/github-action-test/hooks","html_url":"https://github.com/apgapg/github-action-test","id":349629323,"issue_comment_url":"https://api.github.com/repos/apgapg/github-action-test/issues/comments{/number}","issue_events_url":"https://api.github.com/repos/apgapg/github-action-test/issues/events{/number}","issues_url":"https://api.github.com/repos/apgapg/github-action-test/issues{/number}","keys_url":"https://api.github.com/repos/apgapg/github-action-test/keys{/key_id}","labels_url":"https://api.github.com/repos/apgapg/github-action-test/labels{/name}","language":null,"languages_url":"https://api.github.com/repos/apgapg/github-action-test/languages","license":null,"master_branch":"main","merges_url":"https://api.github.com/repos/apgapg/github-action-test/merges","milestones_url":"https://api.github.com/repos/apgapg/github-action-test/milestones{/number}","mirror_url":null,"name":"github-action-test","node_id":"MDEwOlJlcG9zaXRvcnkzNDk2MjkzMjM=","notifications_url":"https://api.github.com/repos/apgapg/github-action-test/notifications{?since,all,participating}","open_issues":0,"open_issues_count":0,"owner":{"avatar_url":"https://avatars.githubusercontent.com/u/13887407?v=4","email":"ayushpguptaapg@gmail.com","events_url":"https://api.github.com/users/apgapg/events{/privacy}","followers_url":"https://api.github.com/users/apgapg/followers","following_url":"https://api.github.com/users/apgapg/following{/other_user}","gists_url":"https://api.github.com/users/apgapg/gists{/gist_id}","gravatar_id":"","html_url":"https://github.com/apgapg","id":13887407,"login":"apgapg","name":"apgapg","node_id":"MDQ6VXNlcjEzODg3NDA3","organizations_url":"https://api.github.com/users/apgapg/orgs","received_events_url":"https://api.github.com/users/apgapg/received_events","repos_url":"https://api.github.com/users/apgapg/repos","site_admin":false,"starred_url":"https://api.github.com/users/apgapg/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/apgapg/subscriptions","type":"User","url":"https://api.github.com/users/apgapg"},"private":true,"pulls_url":"https://api.github.com/repos/apgapg/github-action-test/pulls{/number}","pushed_at":1616404442,"releases_url":"https://api.github.com/repos/apgapg/github-action-test/releases{/id}","size":9,"ssh_url":"git@github.com:apgapg/github-action-test.git","stargazers":0,"stargazers_count":0,"stargazers_url":"https://api.github.com/repos/apgapg/github-action-test/stargazers","statuses_url":"https://api.github.com/repos/apgapg/github-action-test/statuses/{sha}","subscribers_url":"https://api.github.com/repos/apgapg/github-action-test/subscribers","subscription_url":"https://api.github.com/repos/apgapg/github-action-test/subscription","svn_url":"https://github.com/apgapg/github-action-test","tags_url":"https://api.github.com/repos/apgapg/github-action-test/tags","teams_url":"https://api.github.com/repos/apgapg/github-action-test/teams","trees_url":"https://api.github.com/repos/apgapg/github-action-test/git/trees{/sha}","updated_at":"2021-03-22T09:01:15Z","url":"https://github.com/apgapg/github-action-test","watchers":0,"watchers_count":0},"sender":{"avatar_url":"https://avatars.githubusercontent.com/u/13887407?v=4","events_url":"https://api.github.com/users/apgapg/events{/privacy}","followers_url":"https://api.github.com/users/apgapg/followers","following_url":"https://api.github.com/users/apgapg/following{/other_user}","gists_url":"https://api.github.com/users/apgapg/gists{/gist_id}","gravatar_id":"","html_url":"https://github.com/apgapg","id":13887407,"login":"apgapg","node_id":"MDQ6VXNlcjEzODg3NDA3","organizations_url":"https://api.github.com/users/apgapg/orgs","received_events_url":"https://api.github.com/users/apgapg/received_events","repos_url":"https://api.github.com/users/apgapg/repos","site_admin":false,"starred_url":"https://api.github.com/users/apgapg/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/apgapg/subscriptions","type":"User","url":"https://api.github.com/users/apgapg"}},"eventName":"push","sha":"90d7d70db460b0c796b8f7f6e43a3afcf5a29cb7","ref":"refs/heads/main","workflow":"Deploy to Firebase Hosting on merge","action":"apgapggithub-asana-action","actor":"apgapg"}');

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

