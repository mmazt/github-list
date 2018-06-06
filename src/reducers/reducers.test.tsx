import reducers from '../reducers';

test('Reducers', () => {
  let state;
  state = reducers(
    { reposReducer: { list: [] }, searchReducer: { options: [], results: [] } },
    {
      payload: [
        {
          full_name: 'mmazt/github-list',
          id: 135862081,
          name: 'github-list',
          node_id: 'MDEwOlJlcG9zaXRvcnkxMzU4NjIwODE=',
          owner: {
            avatar_url: 'https://avatars0.githubusercontent.com/u/22164742?v=4',
            gravatar_id: '',
            id: 22164742,
            login: 'mmazt',
            node_id: 'MDQ6VXNlcjIyMTY0NzQy',
            url: 'https://api.github.com/users/mmazt',
            html_url: 'https://github.com/mmazt',
            followers_url: 'https://api.github.com/users/mmazt/followers',
            following_url:
              'https://api.github.com/users/mmazt/following{/other_user}',
            gists_url: 'https://api.github.com/users/mmazt/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/mmazt/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/mmazt/subscriptions',
            organizations_url: 'https://api.github.com/users/mmazt/orgs',
            repos_url: 'https://api.github.com/users/mmazt/repos',
            events_url: 'https://api.github.com/users/mmazt/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/mmazt/received_events',
            type: 'User',
            site_admin: false
          },
          private: false,
          html_url: 'https://github.com/mmazt/github-list',
          description: null,
          fork: false,
          url: 'https://api.github.com/repos/mmazt/github-list',
          forks_url: 'https://api.github.com/repos/mmazt/github-list/forks',
          keys_url:
            'https://api.github.com/repos/mmazt/github-list/keys{/key_id}',
          collaborators_url:
            'https://api.github.com/repos/mmazt/github-list/collaborators{/collaborator}',
          teams_url: 'https://api.github.com/repos/mmazt/github-list/teams',
          hooks_url: 'https://api.github.com/repos/mmazt/github-list/hooks',
          issue_events_url:
            'https://api.github.com/repos/mmazt/github-list/issues/events{/number}',
          events_url: 'https://api.github.com/repos/mmazt/github-list/events',
          assignees_url:
            'https://api.github.com/repos/mmazt/github-list/assignees{/user}',
          branches_url:
            'https://api.github.com/repos/mmazt/github-list/branches{/branch}',
          tags_url: 'https://api.github.com/repos/mmazt/github-list/tags',
          blobs_url:
            'https://api.github.com/repos/mmazt/github-list/git/blobs{/sha}',
          git_tags_url:
            'https://api.github.com/repos/mmazt/github-list/git/tags{/sha}',
          git_refs_url:
            'https://api.github.com/repos/mmazt/github-list/git/refs{/sha}',
          trees_url:
            'https://api.github.com/repos/mmazt/github-list/git/trees{/sha}',
          statuses_url:
            'https://api.github.com/repos/mmazt/github-list/statuses/{sha}',
          languages_url:
            'https://api.github.com/repos/mmazt/github-list/languages',
          stargazers_url:
            'https://api.github.com/repos/mmazt/github-list/stargazers',
          contributors_url:
            'https://api.github.com/repos/mmazt/github-list/contributors',
          subscribers_url:
            'https://api.github.com/repos/mmazt/github-list/subscribers',
          subscription_url:
            'https://api.github.com/repos/mmazt/github-list/subscription',
          commits_url:
            'https://api.github.com/repos/mmazt/github-list/commits{/sha}',
          git_commits_url:
            'https://api.github.com/repos/mmazt/github-list/git/commits{/sha}',
          comments_url:
            'https://api.github.com/repos/mmazt/github-list/comments{/number}',
          issue_comment_url:
            'https://api.github.com/repos/mmazt/github-list/issues/comments{/number}',
          contents_url:
            'https://api.github.com/repos/mmazt/github-list/contents/{+path}',
          compare_url:
            'https://api.github.com/repos/mmazt/github-list/compare/{base}...{head}',
          merges_url: 'https://api.github.com/repos/mmazt/github-list/merges',
          archive_url:
            'https://api.github.com/repos/mmazt/github-list/{archive_format}{/ref}',
          downloads_url:
            'https://api.github.com/repos/mmazt/github-list/downloads',
          issues_url:
            'https://api.github.com/repos/mmazt/github-list/issues{/number}',
          pulls_url:
            'https://api.github.com/repos/mmazt/github-list/pulls{/number}',
          milestones_url:
            'https://api.github.com/repos/mmazt/github-list/milestones{/number}',
          notifications_url:
            'https://api.github.com/repos/mmazt/github-list/notifications{?since,all,participating}',
          labels_url:
            'https://api.github.com/repos/mmazt/github-list/labels{/name}',
          releases_url:
            'https://api.github.com/repos/mmazt/github-list/releases{/id}',
          deployments_url:
            'https://api.github.com/repos/mmazt/github-list/deployments',
          created_at: '2018-06-03T00:37:42Z',
          updated_at: '2018-06-04T23:27:36Z',
          pushed_at: '2018-06-04T23:27:35Z',
          git_url: 'git://github.com/mmazt/github-list.git',
          ssh_url: 'git@github.com:mmazt/github-list.git',
          clone_url: 'https://github.com/mmazt/github-list.git',
          svn_url: 'https://github.com/mmazt/github-list',
          homepage: null,
          size: 143,
          stargazers_count: 0,
          watchers_count: 0,
          language: 'TypeScript',
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          forks_count: 0,
          mirror_url: null,
          archived: false,
          open_issues_count: 0,
          license: null,
          forks: 0,
          open_issues: 0,
          watchers: 0,
          default_branch: 'master'
        },
        {
          id: 105949730,
          node_id: 'MDEwOlJlcG9zaXRvcnkxMDU5NDk3MzA=',
          name: 'github-search',
          full_name: 'mmazt/github-search',
          owner: {
            login: 'mmazt',
            id: 22164742,
            node_id: 'MDQ6VXNlcjIyMTY0NzQy',
            avatar_url: 'https://avatars0.githubusercontent.com/u/22164742?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/mmazt',
            html_url: 'https://github.com/mmazt',
            followers_url: 'https://api.github.com/users/mmazt/followers',
            following_url:
              'https://api.github.com/users/mmazt/following{/other_user}',
            gists_url: 'https://api.github.com/users/mmazt/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/mmazt/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/mmazt/subscriptions',
            organizations_url: 'https://api.github.com/users/mmazt/orgs',
            repos_url: 'https://api.github.com/users/mmazt/repos',
            events_url: 'https://api.github.com/users/mmazt/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/mmazt/received_events',
            type: 'User',
            site_admin: false
          },
          private: false,
          html_url: 'https://github.com/mmazt/github-search',
          description: 'Aplicativo de Busca de Usuários do GitHub',
          fork: false,
          url: 'https://api.github.com/repos/mmazt/github-search',
          forks_url: 'https://api.github.com/repos/mmazt/github-search/forks',
          keys_url:
            'https://api.github.com/repos/mmazt/github-search/keys{/key_id}',
          collaborators_url:
            'https://api.github.com/repos/mmazt/github-search/collaborators{/collaborator}',
          teams_url: 'https://api.github.com/repos/mmazt/github-search/teams',
          hooks_url: 'https://api.github.com/repos/mmazt/github-search/hooks',
          issue_events_url:
            'https://api.github.com/repos/mmazt/github-search/issues/events{/number}',
          events_url: 'https://api.github.com/repos/mmazt/github-search/events',
          assignees_url:
            'https://api.github.com/repos/mmazt/github-search/assignees{/user}',
          branches_url:
            'https://api.github.com/repos/mmazt/github-search/branches{/branch}',
          tags_url: 'https://api.github.com/repos/mmazt/github-search/tags',
          blobs_url:
            'https://api.github.com/repos/mmazt/github-search/git/blobs{/sha}',
          git_tags_url:
            'https://api.github.com/repos/mmazt/github-search/git/tags{/sha}',
          git_refs_url:
            'https://api.github.com/repos/mmazt/github-search/git/refs{/sha}',
          trees_url:
            'https://api.github.com/repos/mmazt/github-search/git/trees{/sha}',
          statuses_url:
            'https://api.github.com/repos/mmazt/github-search/statuses/{sha}',
          languages_url:
            'https://api.github.com/repos/mmazt/github-search/languages',
          stargazers_url:
            'https://api.github.com/repos/mmazt/github-search/stargazers',
          contributors_url:
            'https://api.github.com/repos/mmazt/github-search/contributors',
          subscribers_url:
            'https://api.github.com/repos/mmazt/github-search/subscribers',
          subscription_url:
            'https://api.github.com/repos/mmazt/github-search/subscription',
          commits_url:
            'https://api.github.com/repos/mmazt/github-search/commits{/sha}',
          git_commits_url:
            'https://api.github.com/repos/mmazt/github-search/git/commits{/sha}',
          comments_url:
            'https://api.github.com/repos/mmazt/github-search/comments{/number}',
          issue_comment_url:
            'https://api.github.com/repos/mmazt/github-search/issues/comments{/number}',
          contents_url:
            'https://api.github.com/repos/mmazt/github-search/contents/{+path}',
          compare_url:
            'https://api.github.com/repos/mmazt/github-search/compare/{base}...{head}',
          merges_url: 'https://api.github.com/repos/mmazt/github-search/merges',
          archive_url:
            'https://api.github.com/repos/mmazt/github-search/{archive_format}{/ref}',
          downloads_url:
            'https://api.github.com/repos/mmazt/github-search/downloads',
          issues_url:
            'https://api.github.com/repos/mmazt/github-search/issues{/number}',
          pulls_url:
            'https://api.github.com/repos/mmazt/github-search/pulls{/number}',
          milestones_url:
            'https://api.github.com/repos/mmazt/github-search/milestones{/number}',
          notifications_url:
            'https://api.github.com/repos/mmazt/github-search/notifications{?since,all,participating}',
          labels_url:
            'https://api.github.com/repos/mmazt/github-search/labels{/name}',
          releases_url:
            'https://api.github.com/repos/mmazt/github-search/releases{/id}',
          deployments_url:
            'https://api.github.com/repos/mmazt/github-search/deployments',
          created_at: '2017-10-05T23:16:17Z',
          updated_at: '2017-10-06T00:43:37Z',
          pushed_at: '2017-10-09T09:57:07Z',
          git_url: 'git://github.com/mmazt/github-search.git',
          ssh_url: 'git@github.com:mmazt/github-search.git',
          clone_url: 'https://github.com/mmazt/github-search.git',
          svn_url: 'https://github.com/mmazt/github-search',
          homepage: null,
          size: 308,
          stargazers_count: 0,
          watchers_count: 0,
          language: 'JavaScript',
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          forks_count: 0,
          mirror_url: null,
          archived: false,
          open_issues_count: 0,
          license: null,
          forks: 0,
          open_issues: 0,
          watchers: 0,
          default_branch: 'master'
        },
        {
          id: 129690244,
          node_id: 'MDEwOlJlcG9zaXRvcnkxMjk2OTAyNDQ=',
          name: 'portfolio-angular',
          full_name: 'mmazt/portfolio-angular',
          owner: {
            login: 'mmazt',
            id: 22164742,
            node_id: 'MDQ6VXNlcjIyMTY0NzQy',
            avatar_url: 'https://avatars0.githubusercontent.com/u/22164742?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/mmazt',
            html_url: 'https://github.com/mmazt',
            followers_url: 'https://api.github.com/users/mmazt/followers',
            following_url:
              'https://api.github.com/users/mmazt/following{/other_user}',
            gists_url: 'https://api.github.com/users/mmazt/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/mmazt/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/mmazt/subscriptions',
            organizations_url: 'https://api.github.com/users/mmazt/orgs',
            repos_url: 'https://api.github.com/users/mmazt/repos',
            events_url: 'https://api.github.com/users/mmazt/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/mmazt/received_events',
            type: 'User',
            site_admin: false
          },
          private: false,
          html_url: 'https://github.com/mmazt/portfolio-angular',
          description: null,
          fork: false,
          url: 'https://api.github.com/repos/mmazt/portfolio-angular',
          forks_url:
            'https://api.github.com/repos/mmazt/portfolio-angular/forks',
          keys_url:
            'https://api.github.com/repos/mmazt/portfolio-angular/keys{/key_id}',
          collaborators_url:
            'https://api.github.com/repos/mmazt/portfolio-angular/collaborators{/collaborator}',
          teams_url:
            'https://api.github.com/repos/mmazt/portfolio-angular/teams',
          hooks_url:
            'https://api.github.com/repos/mmazt/portfolio-angular/hooks',
          issue_events_url:
            'https://api.github.com/repos/mmazt/portfolio-angular/issues/events{/number}',
          events_url:
            'https://api.github.com/repos/mmazt/portfolio-angular/events',
          assignees_url:
            'https://api.github.com/repos/mmazt/portfolio-angular/assignees{/user}',
          branches_url:
            'https://api.github.com/repos/mmazt/portfolio-angular/branches{/branch}',
          tags_url: 'https://api.github.com/repos/mmazt/portfolio-angular/tags',
          blobs_url:
            'https://api.github.com/repos/mmazt/portfolio-angular/git/blobs{/sha}',
          git_tags_url:
            'https://api.github.com/repos/mmazt/portfolio-angular/git/tags{/sha}',
          git_refs_url:
            'https://api.github.com/repos/mmazt/portfolio-angular/git/refs{/sha}',
          trees_url:
            'https://api.github.com/repos/mmazt/portfolio-angular/git/trees{/sha}',
          statuses_url:
            'https://api.github.com/repos/mmazt/portfolio-angular/statuses/{sha}',
          languages_url:
            'https://api.github.com/repos/mmazt/portfolio-angular/languages',
          stargazers_url:
            'https://api.github.com/repos/mmazt/portfolio-angular/stargazers',
          contributors_url:
            'https://api.github.com/repos/mmazt/portfolio-angular/contributors',
          subscribers_url:
            'https://api.github.com/repos/mmazt/portfolio-angular/subscribers',
          subscription_url:
            'https://api.github.com/repos/mmazt/portfolio-angular/subscription',
          commits_url:
            'https://api.github.com/repos/mmazt/portfolio-angular/commits{/sha}',
          git_commits_url:
            'https://api.github.com/repos/mmazt/portfolio-angular/git/commits{/sha}',
          comments_url:
            'https://api.github.com/repos/mmazt/portfolio-angular/comments{/number}',
          issue_comment_url:
            'https://api.github.com/repos/mmazt/portfolio-angular/issues/comments{/number}',
          contents_url:
            'https://api.github.com/repos/mmazt/portfolio-angular/contents/{+path}',
          compare_url:
            'https://api.github.com/repos/mmazt/portfolio-angular/compare/{base}...{head}',
          merges_url:
            'https://api.github.com/repos/mmazt/portfolio-angular/merges',
          archive_url:
            'https://api.github.com/repos/mmazt/portfolio-angular/{archive_format}{/ref}',
          downloads_url:
            'https://api.github.com/repos/mmazt/portfolio-angular/downloads',
          issues_url:
            'https://api.github.com/repos/mmazt/portfolio-angular/issues{/number}',
          pulls_url:
            'https://api.github.com/repos/mmazt/portfolio-angular/pulls{/number}',
          milestones_url:
            'https://api.github.com/repos/mmazt/portfolio-angular/milestones{/number}',
          notifications_url:
            'https://api.github.com/repos/mmazt/portfolio-angular/notifications{?since,all,participating}',
          labels_url:
            'https://api.github.com/repos/mmazt/portfolio-angular/labels{/name}',
          releases_url:
            'https://api.github.com/repos/mmazt/portfolio-angular/releases{/id}',
          deployments_url:
            'https://api.github.com/repos/mmazt/portfolio-angular/deployments',
          created_at: '2018-04-16T05:39:45Z',
          updated_at: '2018-05-07T04:53:10Z',
          pushed_at: '2018-05-07T04:53:09Z',
          git_url: 'git://github.com/mmazt/portfolio-angular.git',
          ssh_url: 'git@github.com:mmazt/portfolio-angular.git',
          clone_url: 'https://github.com/mmazt/portfolio-angular.git',
          svn_url: 'https://github.com/mmazt/portfolio-angular',
          homepage: null,
          size: 689,
          stargazers_count: 0,
          watchers_count: 0,
          language: 'TypeScript',
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          forks_count: 0,
          mirror_url: null,
          archived: false,
          open_issues_count: 0,
          license: null,
          forks: 0,
          open_issues: 0,
          watchers: 0,
          default_branch: 'master'
        },
        {
          id: 101492006,
          node_id: 'MDEwOlJlcG9zaXRvcnkxMDE0OTIwMDY=',
          name: 'portfolio-react',
          full_name: 'mmazt/portfolio-react',
          owner: {
            login: 'mmazt',
            id: 22164742,
            node_id: 'MDQ6VXNlcjIyMTY0NzQy',
            avatar_url: 'https://avatars0.githubusercontent.com/u/22164742?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/mmazt',
            html_url: 'https://github.com/mmazt',
            followers_url: 'https://api.github.com/users/mmazt/followers',
            following_url:
              'https://api.github.com/users/mmazt/following{/other_user}',
            gists_url: 'https://api.github.com/users/mmazt/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/mmazt/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/mmazt/subscriptions',
            organizations_url: 'https://api.github.com/users/mmazt/orgs',
            repos_url: 'https://api.github.com/users/mmazt/repos',
            events_url: 'https://api.github.com/users/mmazt/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/mmazt/received_events',
            type: 'User',
            site_admin: false
          },
          private: false,
          html_url: 'https://github.com/mmazt/portfolio-react',
          description: null,
          fork: false,
          url: 'https://api.github.com/repos/mmazt/portfolio-react',
          forks_url: 'https://api.github.com/repos/mmazt/portfolio-react/forks',
          keys_url:
            'https://api.github.com/repos/mmazt/portfolio-react/keys{/key_id}',
          collaborators_url:
            'https://api.github.com/repos/mmazt/portfolio-react/collaborators{/collaborator}',
          teams_url: 'https://api.github.com/repos/mmazt/portfolio-react/teams',
          hooks_url: 'https://api.github.com/repos/mmazt/portfolio-react/hooks',
          issue_events_url:
            'https://api.github.com/repos/mmazt/portfolio-react/issues/events{/number}',
          events_url:
            'https://api.github.com/repos/mmazt/portfolio-react/events',
          assignees_url:
            'https://api.github.com/repos/mmazt/portfolio-react/assignees{/user}',
          branches_url:
            'https://api.github.com/repos/mmazt/portfolio-react/branches{/branch}',
          tags_url: 'https://api.github.com/repos/mmazt/portfolio-react/tags',
          blobs_url:
            'https://api.github.com/repos/mmazt/portfolio-react/git/blobs{/sha}',
          git_tags_url:
            'https://api.github.com/repos/mmazt/portfolio-react/git/tags{/sha}',
          git_refs_url:
            'https://api.github.com/repos/mmazt/portfolio-react/git/refs{/sha}',
          trees_url:
            'https://api.github.com/repos/mmazt/portfolio-react/git/trees{/sha}',
          statuses_url:
            'https://api.github.com/repos/mmazt/portfolio-react/statuses/{sha}',
          languages_url:
            'https://api.github.com/repos/mmazt/portfolio-react/languages',
          stargazers_url:
            'https://api.github.com/repos/mmazt/portfolio-react/stargazers',
          contributors_url:
            'https://api.github.com/repos/mmazt/portfolio-react/contributors',
          subscribers_url:
            'https://api.github.com/repos/mmazt/portfolio-react/subscribers',
          subscription_url:
            'https://api.github.com/repos/mmazt/portfolio-react/subscription',
          commits_url:
            'https://api.github.com/repos/mmazt/portfolio-react/commits{/sha}',
          git_commits_url:
            'https://api.github.com/repos/mmazt/portfolio-react/git/commits{/sha}',
          comments_url:
            'https://api.github.com/repos/mmazt/portfolio-react/comments{/number}',
          issue_comment_url:
            'https://api.github.com/repos/mmazt/portfolio-react/issues/comments{/number}',
          contents_url:
            'https://api.github.com/repos/mmazt/portfolio-react/contents/{+path}',
          compare_url:
            'https://api.github.com/repos/mmazt/portfolio-react/compare/{base}...{head}',
          merges_url:
            'https://api.github.com/repos/mmazt/portfolio-react/merges',
          archive_url:
            'https://api.github.com/repos/mmazt/portfolio-react/{archive_format}{/ref}',
          downloads_url:
            'https://api.github.com/repos/mmazt/portfolio-react/downloads',
          issues_url:
            'https://api.github.com/repos/mmazt/portfolio-react/issues{/number}',
          pulls_url:
            'https://api.github.com/repos/mmazt/portfolio-react/pulls{/number}',
          milestones_url:
            'https://api.github.com/repos/mmazt/portfolio-react/milestones{/number}',
          notifications_url:
            'https://api.github.com/repos/mmazt/portfolio-react/notifications{?since,all,participating}',
          labels_url:
            'https://api.github.com/repos/mmazt/portfolio-react/labels{/name}',
          releases_url:
            'https://api.github.com/repos/mmazt/portfolio-react/releases{/id}',
          deployments_url:
            'https://api.github.com/repos/mmazt/portfolio-react/deployments',
          created_at: '2017-08-26T14:46:26Z',
          updated_at: '2018-05-03T19:09:41Z',
          pushed_at: '2017-08-30T06:35:06Z',
          git_url: 'git://github.com/mmazt/portfolio-react.git',
          ssh_url: 'git@github.com:mmazt/portfolio-react.git',
          clone_url: 'https://github.com/mmazt/portfolio-react.git',
          svn_url: 'https://github.com/mmazt/portfolio-react',
          homepage: null,
          size: 668,
          stargazers_count: 0,
          watchers_count: 0,
          language: 'JavaScript',
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: false,
          has_pages: false,
          forks_count: 0,
          mirror_url: null,
          archived: false,
          open_issues_count: 0,
          license: null,
          forks: 0,
          open_issues: 0,
          watchers: 0,
          default_branch: 'master'
        },
        {
          id: 134243143,
          node_id: 'MDEwOlJlcG9zaXRvcnkxMzQyNDMxNDM=',
          name: 'spotify',
          full_name: 'mmazt/spotify',
          owner: {
            login: 'mmazt',
            id: 22164742,
            node_id: 'MDQ6VXNlcjIyMTY0NzQy',
            avatar_url: 'https://avatars0.githubusercontent.com/u/22164742?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/mmazt',
            html_url: 'https://github.com/mmazt',
            followers_url: 'https://api.github.com/users/mmazt/followers',
            following_url:
              'https://api.github.com/users/mmazt/following{/other_user}',
            gists_url: 'https://api.github.com/users/mmazt/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/mmazt/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/mmazt/subscriptions',
            organizations_url: 'https://api.github.com/users/mmazt/orgs',
            repos_url: 'https://api.github.com/users/mmazt/repos',
            events_url: 'https://api.github.com/users/mmazt/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/mmazt/received_events',
            type: 'User',
            site_admin: false
          },
          private: false,
          html_url: 'https://github.com/mmazt/spotify',
          description: null,
          fork: false,
          url: 'https://api.github.com/repos/mmazt/spotify',
          forks_url: 'https://api.github.com/repos/mmazt/spotify/forks',
          keys_url: 'https://api.github.com/repos/mmazt/spotify/keys{/key_id}',
          collaborators_url:
            'https://api.github.com/repos/mmazt/spotify/collaborators{/collaborator}',
          teams_url: 'https://api.github.com/repos/mmazt/spotify/teams',
          hooks_url: 'https://api.github.com/repos/mmazt/spotify/hooks',
          issue_events_url:
            'https://api.github.com/repos/mmazt/spotify/issues/events{/number}',
          events_url: 'https://api.github.com/repos/mmazt/spotify/events',
          assignees_url:
            'https://api.github.com/repos/mmazt/spotify/assignees{/user}',
          branches_url:
            'https://api.github.com/repos/mmazt/spotify/branches{/branch}',
          tags_url: 'https://api.github.com/repos/mmazt/spotify/tags',
          blobs_url:
            'https://api.github.com/repos/mmazt/spotify/git/blobs{/sha}',
          git_tags_url:
            'https://api.github.com/repos/mmazt/spotify/git/tags{/sha}',
          git_refs_url:
            'https://api.github.com/repos/mmazt/spotify/git/refs{/sha}',
          trees_url:
            'https://api.github.com/repos/mmazt/spotify/git/trees{/sha}',
          statuses_url:
            'https://api.github.com/repos/mmazt/spotify/statuses/{sha}',
          languages_url: 'https://api.github.com/repos/mmazt/spotify/languages',
          stargazers_url:
            'https://api.github.com/repos/mmazt/spotify/stargazers',
          contributors_url:
            'https://api.github.com/repos/mmazt/spotify/contributors',
          subscribers_url:
            'https://api.github.com/repos/mmazt/spotify/subscribers',
          subscription_url:
            'https://api.github.com/repos/mmazt/spotify/subscription',
          commits_url:
            'https://api.github.com/repos/mmazt/spotify/commits{/sha}',
          git_commits_url:
            'https://api.github.com/repos/mmazt/spotify/git/commits{/sha}',
          comments_url:
            'https://api.github.com/repos/mmazt/spotify/comments{/number}',
          issue_comment_url:
            'https://api.github.com/repos/mmazt/spotify/issues/comments{/number}',
          contents_url:
            'https://api.github.com/repos/mmazt/spotify/contents/{+path}',
          compare_url:
            'https://api.github.com/repos/mmazt/spotify/compare/{base}...{head}',
          merges_url: 'https://api.github.com/repos/mmazt/spotify/merges',
          archive_url:
            'https://api.github.com/repos/mmazt/spotify/{archive_format}{/ref}',
          downloads_url: 'https://api.github.com/repos/mmazt/spotify/downloads',
          issues_url:
            'https://api.github.com/repos/mmazt/spotify/issues{/number}',
          pulls_url:
            'https://api.github.com/repos/mmazt/spotify/pulls{/number}',
          milestones_url:
            'https://api.github.com/repos/mmazt/spotify/milestones{/number}',
          notifications_url:
            'https://api.github.com/repos/mmazt/spotify/notifications{?since,all,participating}',
          labels_url:
            'https://api.github.com/repos/mmazt/spotify/labels{/name}',
          releases_url:
            'https://api.github.com/repos/mmazt/spotify/releases{/id}',
          deployments_url:
            'https://api.github.com/repos/mmazt/spotify/deployments',
          created_at: '2018-05-21T08:49:14Z',
          updated_at: '2018-05-24T01:47:23Z',
          pushed_at: '2018-05-24T01:47:22Z',
          git_url: 'git://github.com/mmazt/spotify.git',
          ssh_url: 'git@github.com:mmazt/spotify.git',
          clone_url: 'https://github.com/mmazt/spotify.git',
          svn_url: 'https://github.com/mmazt/spotify',
          homepage: null,
          size: 489,
          stargazers_count: 0,
          watchers_count: 0,
          language: 'JavaScript',
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          forks_count: 0,
          mirror_url: null,
          archived: false,
          open_issues_count: 0,
          license: null,
          forks: 0,
          open_issues: 0,
          watchers: 0,
          default_branch: 'master'
        },
        {
          id: 134023470,
          node_id: 'MDEwOlJlcG9zaXRvcnkxMzQwMjM0NzA=',
          name: 'spotify-search',
          full_name: 'mmazt/spotify-search',
          owner: {
            login: 'mmazt',
            id: 22164742,
            node_id: 'MDQ6VXNlcjIyMTY0NzQy',
            avatar_url: 'https://avatars0.githubusercontent.com/u/22164742?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/mmazt',
            html_url: 'https://github.com/mmazt',
            followers_url: 'https://api.github.com/users/mmazt/followers',
            following_url:
              'https://api.github.com/users/mmazt/following{/other_user}',
            gists_url: 'https://api.github.com/users/mmazt/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/mmazt/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/mmazt/subscriptions',
            organizations_url: 'https://api.github.com/users/mmazt/orgs',
            repos_url: 'https://api.github.com/users/mmazt/repos',
            events_url: 'https://api.github.com/users/mmazt/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/mmazt/received_events',
            type: 'User',
            site_admin: false
          },
          private: false,
          html_url: 'https://github.com/mmazt/spotify-search',
          description: null,
          fork: false,
          url: 'https://api.github.com/repos/mmazt/spotify-search',
          forks_url: 'https://api.github.com/repos/mmazt/spotify-search/forks',
          keys_url:
            'https://api.github.com/repos/mmazt/spotify-search/keys{/key_id}',
          collaborators_url:
            'https://api.github.com/repos/mmazt/spotify-search/collaborators{/collaborator}',
          teams_url: 'https://api.github.com/repos/mmazt/spotify-search/teams',
          hooks_url: 'https://api.github.com/repos/mmazt/spotify-search/hooks',
          issue_events_url:
            'https://api.github.com/repos/mmazt/spotify-search/issues/events{/number}',
          events_url:
            'https://api.github.com/repos/mmazt/spotify-search/events',
          assignees_url:
            'https://api.github.com/repos/mmazt/spotify-search/assignees{/user}',
          branches_url:
            'https://api.github.com/repos/mmazt/spotify-search/branches{/branch}',
          tags_url: 'https://api.github.com/repos/mmazt/spotify-search/tags',
          blobs_url:
            'https://api.github.com/repos/mmazt/spotify-search/git/blobs{/sha}',
          git_tags_url:
            'https://api.github.com/repos/mmazt/spotify-search/git/tags{/sha}',
          git_refs_url:
            'https://api.github.com/repos/mmazt/spotify-search/git/refs{/sha}',
          trees_url:
            'https://api.github.com/repos/mmazt/spotify-search/git/trees{/sha}',
          statuses_url:
            'https://api.github.com/repos/mmazt/spotify-search/statuses/{sha}',
          languages_url:
            'https://api.github.com/repos/mmazt/spotify-search/languages',
          stargazers_url:
            'https://api.github.com/repos/mmazt/spotify-search/stargazers',
          contributors_url:
            'https://api.github.com/repos/mmazt/spotify-search/contributors',
          subscribers_url:
            'https://api.github.com/repos/mmazt/spotify-search/subscribers',
          subscription_url:
            'https://api.github.com/repos/mmazt/spotify-search/subscription',
          commits_url:
            'https://api.github.com/repos/mmazt/spotify-search/commits{/sha}',
          git_commits_url:
            'https://api.github.com/repos/mmazt/spotify-search/git/commits{/sha}',
          comments_url:
            'https://api.github.com/repos/mmazt/spotify-search/comments{/number}',
          issue_comment_url:
            'https://api.github.com/repos/mmazt/spotify-search/issues/comments{/number}',
          contents_url:
            'https://api.github.com/repos/mmazt/spotify-search/contents/{+path}',
          compare_url:
            'https://api.github.com/repos/mmazt/spotify-search/compare/{base}...{head}',
          merges_url:
            'https://api.github.com/repos/mmazt/spotify-search/merges',
          archive_url:
            'https://api.github.com/repos/mmazt/spotify-search/{archive_format}{/ref}',
          downloads_url:
            'https://api.github.com/repos/mmazt/spotify-search/downloads',
          issues_url:
            'https://api.github.com/repos/mmazt/spotify-search/issues{/number}',
          pulls_url:
            'https://api.github.com/repos/mmazt/spotify-search/pulls{/number}',
          milestones_url:
            'https://api.github.com/repos/mmazt/spotify-search/milestones{/number}',
          notifications_url:
            'https://api.github.com/repos/mmazt/spotify-search/notifications{?since,all,participating}',
          labels_url:
            'https://api.github.com/repos/mmazt/spotify-search/labels{/name}',
          releases_url:
            'https://api.github.com/repos/mmazt/spotify-search/releases{/id}',
          deployments_url:
            'https://api.github.com/repos/mmazt/spotify-search/deployments',
          created_at: '2018-05-19T02:43:22Z',
          updated_at: '2018-05-19T02:47:40Z',
          pushed_at: '2018-05-19T02:47:38Z',
          git_url: 'git://github.com/mmazt/spotify-search.git',
          ssh_url: 'git@github.com:mmazt/spotify-search.git',
          clone_url: 'https://github.com/mmazt/spotify-search.git',
          svn_url: 'https://github.com/mmazt/spotify-search',
          homepage: null,
          size: 0,
          stargazers_count: 0,
          watchers_count: 0,
          language: null,
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          forks_count: 0,
          mirror_url: null,
          archived: false,
          open_issues_count: 0,
          license: null,
          forks: 0,
          open_issues: 0,
          watchers: 0,
          default_branch: 'master'
        },
        {
          id: 104528704,
          node_id: 'MDEwOlJlcG9zaXRvcnkxMDQ1Mjg3MDQ=',
          name: 'weather-react',
          full_name: 'mmazt/weather-react',
          owner: {
            login: 'mmazt',
            id: 22164742,
            node_id: 'MDQ6VXNlcjIyMTY0NzQy',
            avatar_url: 'https://avatars0.githubusercontent.com/u/22164742?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/mmazt',
            html_url: 'https://github.com/mmazt',
            followers_url: 'https://api.github.com/users/mmazt/followers',
            following_url:
              'https://api.github.com/users/mmazt/following{/other_user}',
            gists_url: 'https://api.github.com/users/mmazt/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/mmazt/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/mmazt/subscriptions',
            organizations_url: 'https://api.github.com/users/mmazt/orgs',
            repos_url: 'https://api.github.com/users/mmazt/repos',
            events_url: 'https://api.github.com/users/mmazt/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/mmazt/received_events',
            type: 'User',
            site_admin: false
          },
          private: false,
          html_url: 'https://github.com/mmazt/weather-react',
          description:
            'Aplicativo simples que mostra o Clima da cidade em que o usuário se encontra, utilizando React e a api Open Weather',
          fork: false,
          url: 'https://api.github.com/repos/mmazt/weather-react',
          forks_url: 'https://api.github.com/repos/mmazt/weather-react/forks',
          keys_url:
            'https://api.github.com/repos/mmazt/weather-react/keys{/key_id}',
          collaborators_url:
            'https://api.github.com/repos/mmazt/weather-react/collaborators{/collaborator}',
          teams_url: 'https://api.github.com/repos/mmazt/weather-react/teams',
          hooks_url: 'https://api.github.com/repos/mmazt/weather-react/hooks',
          issue_events_url:
            'https://api.github.com/repos/mmazt/weather-react/issues/events{/number}',
          events_url: 'https://api.github.com/repos/mmazt/weather-react/events',
          assignees_url:
            'https://api.github.com/repos/mmazt/weather-react/assignees{/user}',
          branches_url:
            'https://api.github.com/repos/mmazt/weather-react/branches{/branch}',
          tags_url: 'https://api.github.com/repos/mmazt/weather-react/tags',
          blobs_url:
            'https://api.github.com/repos/mmazt/weather-react/git/blobs{/sha}',
          git_tags_url:
            'https://api.github.com/repos/mmazt/weather-react/git/tags{/sha}',
          git_refs_url:
            'https://api.github.com/repos/mmazt/weather-react/git/refs{/sha}',
          trees_url:
            'https://api.github.com/repos/mmazt/weather-react/git/trees{/sha}',
          statuses_url:
            'https://api.github.com/repos/mmazt/weather-react/statuses/{sha}',
          languages_url:
            'https://api.github.com/repos/mmazt/weather-react/languages',
          stargazers_url:
            'https://api.github.com/repos/mmazt/weather-react/stargazers',
          contributors_url:
            'https://api.github.com/repos/mmazt/weather-react/contributors',
          subscribers_url:
            'https://api.github.com/repos/mmazt/weather-react/subscribers',
          subscription_url:
            'https://api.github.com/repos/mmazt/weather-react/subscription',
          commits_url:
            'https://api.github.com/repos/mmazt/weather-react/commits{/sha}',
          git_commits_url:
            'https://api.github.com/repos/mmazt/weather-react/git/commits{/sha}',
          comments_url:
            'https://api.github.com/repos/mmazt/weather-react/comments{/number}',
          issue_comment_url:
            'https://api.github.com/repos/mmazt/weather-react/issues/comments{/number}',
          contents_url:
            'https://api.github.com/repos/mmazt/weather-react/contents/{+path}',
          compare_url:
            'https://api.github.com/repos/mmazt/weather-react/compare/{base}...{head}',
          merges_url: 'https://api.github.com/repos/mmazt/weather-react/merges',
          archive_url:
            'https://api.github.com/repos/mmazt/weather-react/{archive_format}{/ref}',
          downloads_url:
            'https://api.github.com/repos/mmazt/weather-react/downloads',
          issues_url:
            'https://api.github.com/repos/mmazt/weather-react/issues{/number}',
          pulls_url:
            'https://api.github.com/repos/mmazt/weather-react/pulls{/number}',
          milestones_url:
            'https://api.github.com/repos/mmazt/weather-react/milestones{/number}',
          notifications_url:
            'https://api.github.com/repos/mmazt/weather-react/notifications{?since,all,participating}',
          labels_url:
            'https://api.github.com/repos/mmazt/weather-react/labels{/name}',
          releases_url:
            'https://api.github.com/repos/mmazt/weather-react/releases{/id}',
          deployments_url:
            'https://api.github.com/repos/mmazt/weather-react/deployments',
          created_at: '2017-09-23T00:12:21Z',
          updated_at: '2017-09-23T10:38:51Z',
          pushed_at: '2017-09-23T18:37:32Z',
          git_url: 'git://github.com/mmazt/weather-react.git',
          ssh_url: 'git@github.com:mmazt/weather-react.git',
          clone_url: 'https://github.com/mmazt/weather-react.git',
          svn_url: 'https://github.com/mmazt/weather-react',
          homepage: null,
          size: 270,
          stargazers_count: 0,
          watchers_count: 0,
          language: 'JavaScript',
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          forks_count: 0,
          mirror_url: null,
          archived: false,
          open_issues_count: 0,
          license: null,
          forks: 0,
          open_issues: 0,
          watchers: 0,
          default_branch: 'master'
        }
      ],
      type: 'REPOS'
    }
  );
  expect(state).toEqual({
    reposReducer: {
      list: [
        {
          id: 135862081,
          node_id: 'MDEwOlJlcG9zaXRvcnkxMzU4NjIwODE=',
          name: 'github-list',
          full_name: 'mmazt/github-list',
          owner: {
            login: 'mmazt',
            id: 22164742,
            node_id: 'MDQ6VXNlcjIyMTY0NzQy',
            avatar_url: 'https://avatars0.githubusercontent.com/u/22164742?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/mmazt',
            html_url: 'https://github.com/mmazt',
            followers_url: 'https://api.github.com/users/mmazt/followers',
            following_url:
              'https://api.github.com/users/mmazt/following{/other_user}',
            gists_url: 'https://api.github.com/users/mmazt/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/mmazt/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/mmazt/subscriptions',
            organizations_url: 'https://api.github.com/users/mmazt/orgs',
            repos_url: 'https://api.github.com/users/mmazt/repos',
            events_url: 'https://api.github.com/users/mmazt/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/mmazt/received_events',
            type: 'User',
            site_admin: false
          },
          private: false,
          html_url: 'https://github.com/mmazt/github-list',
          description: null,
          fork: false,
          url: 'https://api.github.com/repos/mmazt/github-list',
          forks_url: 'https://api.github.com/repos/mmazt/github-list/forks',
          keys_url:
            'https://api.github.com/repos/mmazt/github-list/keys{/key_id}',
          collaborators_url:
            'https://api.github.com/repos/mmazt/github-list/collaborators{/collaborator}',
          teams_url: 'https://api.github.com/repos/mmazt/github-list/teams',
          hooks_url: 'https://api.github.com/repos/mmazt/github-list/hooks',
          issue_events_url:
            'https://api.github.com/repos/mmazt/github-list/issues/events{/number}',
          events_url: 'https://api.github.com/repos/mmazt/github-list/events',
          assignees_url:
            'https://api.github.com/repos/mmazt/github-list/assignees{/user}',
          branches_url:
            'https://api.github.com/repos/mmazt/github-list/branches{/branch}',
          tags_url: 'https://api.github.com/repos/mmazt/github-list/tags',
          blobs_url:
            'https://api.github.com/repos/mmazt/github-list/git/blobs{/sha}',
          git_tags_url:
            'https://api.github.com/repos/mmazt/github-list/git/tags{/sha}',
          git_refs_url:
            'https://api.github.com/repos/mmazt/github-list/git/refs{/sha}',
          trees_url:
            'https://api.github.com/repos/mmazt/github-list/git/trees{/sha}',
          statuses_url:
            'https://api.github.com/repos/mmazt/github-list/statuses/{sha}',
          languages_url:
            'https://api.github.com/repos/mmazt/github-list/languages',
          stargazers_url:
            'https://api.github.com/repos/mmazt/github-list/stargazers',
          contributors_url:
            'https://api.github.com/repos/mmazt/github-list/contributors',
          subscribers_url:
            'https://api.github.com/repos/mmazt/github-list/subscribers',
          subscription_url:
            'https://api.github.com/repos/mmazt/github-list/subscription',
          commits_url:
            'https://api.github.com/repos/mmazt/github-list/commits{/sha}',
          git_commits_url:
            'https://api.github.com/repos/mmazt/github-list/git/commits{/sha}',
          comments_url:
            'https://api.github.com/repos/mmazt/github-list/comments{/number}',
          issue_comment_url:
            'https://api.github.com/repos/mmazt/github-list/issues/comments{/number}',
          contents_url:
            'https://api.github.com/repos/mmazt/github-list/contents/{+path}',
          compare_url:
            'https://api.github.com/repos/mmazt/github-list/compare/{base}...{head}',
          merges_url: 'https://api.github.com/repos/mmazt/github-list/merges',
          archive_url:
            'https://api.github.com/repos/mmazt/github-list/{archive_format}{/ref}',
          downloads_url:
            'https://api.github.com/repos/mmazt/github-list/downloads',
          issues_url:
            'https://api.github.com/repos/mmazt/github-list/issues{/number}',
          pulls_url:
            'https://api.github.com/repos/mmazt/github-list/pulls{/number}',
          milestones_url:
            'https://api.github.com/repos/mmazt/github-list/milestones{/number}',
          notifications_url:
            'https://api.github.com/repos/mmazt/github-list/notifications{?since,all,participating}',
          labels_url:
            'https://api.github.com/repos/mmazt/github-list/labels{/name}',
          releases_url:
            'https://api.github.com/repos/mmazt/github-list/releases{/id}',
          deployments_url:
            'https://api.github.com/repos/mmazt/github-list/deployments',
          created_at: '2018-06-03T00:37:42Z',
          updated_at: '2018-06-04T23:27:36Z',
          pushed_at: '2018-06-04T23:27:35Z',
          git_url: 'git://github.com/mmazt/github-list.git',
          ssh_url: 'git@github.com:mmazt/github-list.git',
          clone_url: 'https://github.com/mmazt/github-list.git',
          svn_url: 'https://github.com/mmazt/github-list',
          homepage: null,
          size: 143,
          stargazers_count: 0,
          watchers_count: 0,
          language: 'TypeScript',
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          forks_count: 0,
          mirror_url: null,
          archived: false,
          open_issues_count: 0,
          license: null,
          forks: 0,
          open_issues: 0,
          watchers: 0,
          default_branch: 'master'
        },
        {
          id: 105949730,
          node_id: 'MDEwOlJlcG9zaXRvcnkxMDU5NDk3MzA=',
          name: 'github-search',
          full_name: 'mmazt/github-search',
          owner: {
            login: 'mmazt',
            id: 22164742,
            node_id: 'MDQ6VXNlcjIyMTY0NzQy',
            avatar_url: 'https://avatars0.githubusercontent.com/u/22164742?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/mmazt',
            html_url: 'https://github.com/mmazt',
            followers_url: 'https://api.github.com/users/mmazt/followers',
            following_url:
              'https://api.github.com/users/mmazt/following{/other_user}',
            gists_url: 'https://api.github.com/users/mmazt/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/mmazt/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/mmazt/subscriptions',
            organizations_url: 'https://api.github.com/users/mmazt/orgs',
            repos_url: 'https://api.github.com/users/mmazt/repos',
            events_url: 'https://api.github.com/users/mmazt/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/mmazt/received_events',
            type: 'User',
            site_admin: false
          },
          private: false,
          html_url: 'https://github.com/mmazt/github-search',
          description: 'Aplicativo de Busca de Usuários do GitHub',
          fork: false,
          url: 'https://api.github.com/repos/mmazt/github-search',
          forks_url: 'https://api.github.com/repos/mmazt/github-search/forks',
          keys_url:
            'https://api.github.com/repos/mmazt/github-search/keys{/key_id}',
          collaborators_url:
            'https://api.github.com/repos/mmazt/github-search/collaborators{/collaborator}',
          teams_url: 'https://api.github.com/repos/mmazt/github-search/teams',
          hooks_url: 'https://api.github.com/repos/mmazt/github-search/hooks',
          issue_events_url:
            'https://api.github.com/repos/mmazt/github-search/issues/events{/number}',
          events_url: 'https://api.github.com/repos/mmazt/github-search/events',
          assignees_url:
            'https://api.github.com/repos/mmazt/github-search/assignees{/user}',
          branches_url:
            'https://api.github.com/repos/mmazt/github-search/branches{/branch}',
          tags_url: 'https://api.github.com/repos/mmazt/github-search/tags',
          blobs_url:
            'https://api.github.com/repos/mmazt/github-search/git/blobs{/sha}',
          git_tags_url:
            'https://api.github.com/repos/mmazt/github-search/git/tags{/sha}',
          git_refs_url:
            'https://api.github.com/repos/mmazt/github-search/git/refs{/sha}',
          trees_url:
            'https://api.github.com/repos/mmazt/github-search/git/trees{/sha}',
          statuses_url:
            'https://api.github.com/repos/mmazt/github-search/statuses/{sha}',
          languages_url:
            'https://api.github.com/repos/mmazt/github-search/languages',
          stargazers_url:
            'https://api.github.com/repos/mmazt/github-search/stargazers',
          contributors_url:
            'https://api.github.com/repos/mmazt/github-search/contributors',
          subscribers_url:
            'https://api.github.com/repos/mmazt/github-search/subscribers',
          subscription_url:
            'https://api.github.com/repos/mmazt/github-search/subscription',
          commits_url:
            'https://api.github.com/repos/mmazt/github-search/commits{/sha}',
          git_commits_url:
            'https://api.github.com/repos/mmazt/github-search/git/commits{/sha}',
          comments_url:
            'https://api.github.com/repos/mmazt/github-search/comments{/number}',
          issue_comment_url:
            'https://api.github.com/repos/mmazt/github-search/issues/comments{/number}',
          contents_url:
            'https://api.github.com/repos/mmazt/github-search/contents/{+path}',
          compare_url:
            'https://api.github.com/repos/mmazt/github-search/compare/{base}...{head}',
          merges_url: 'https://api.github.com/repos/mmazt/github-search/merges',
          archive_url:
            'https://api.github.com/repos/mmazt/github-search/{archive_format}{/ref}',
          downloads_url:
            'https://api.github.com/repos/mmazt/github-search/downloads',
          issues_url:
            'https://api.github.com/repos/mmazt/github-search/issues{/number}',
          pulls_url:
            'https://api.github.com/repos/mmazt/github-search/pulls{/number}',
          milestones_url:
            'https://api.github.com/repos/mmazt/github-search/milestones{/number}',
          notifications_url:
            'https://api.github.com/repos/mmazt/github-search/notifications{?since,all,participating}',
          labels_url:
            'https://api.github.com/repos/mmazt/github-search/labels{/name}',
          releases_url:
            'https://api.github.com/repos/mmazt/github-search/releases{/id}',
          deployments_url:
            'https://api.github.com/repos/mmazt/github-search/deployments',
          created_at: '2017-10-05T23:16:17Z',
          updated_at: '2017-10-06T00:43:37Z',
          pushed_at: '2017-10-09T09:57:07Z',
          git_url: 'git://github.com/mmazt/github-search.git',
          ssh_url: 'git@github.com:mmazt/github-search.git',
          clone_url: 'https://github.com/mmazt/github-search.git',
          svn_url: 'https://github.com/mmazt/github-search',
          homepage: null,
          size: 308,
          stargazers_count: 0,
          watchers_count: 0,
          language: 'JavaScript',
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          forks_count: 0,
          mirror_url: null,
          archived: false,
          open_issues_count: 0,
          license: null,
          forks: 0,
          open_issues: 0,
          watchers: 0,
          default_branch: 'master'
        },
        {
          id: 129690244,
          node_id: 'MDEwOlJlcG9zaXRvcnkxMjk2OTAyNDQ=',
          name: 'portfolio-angular',
          full_name: 'mmazt/portfolio-angular',
          owner: {
            login: 'mmazt',
            id: 22164742,
            node_id: 'MDQ6VXNlcjIyMTY0NzQy',
            avatar_url: 'https://avatars0.githubusercontent.com/u/22164742?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/mmazt',
            html_url: 'https://github.com/mmazt',
            followers_url: 'https://api.github.com/users/mmazt/followers',
            following_url:
              'https://api.github.com/users/mmazt/following{/other_user}',
            gists_url: 'https://api.github.com/users/mmazt/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/mmazt/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/mmazt/subscriptions',
            organizations_url: 'https://api.github.com/users/mmazt/orgs',
            repos_url: 'https://api.github.com/users/mmazt/repos',
            events_url: 'https://api.github.com/users/mmazt/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/mmazt/received_events',
            type: 'User',
            site_admin: false
          },
          private: false,
          html_url: 'https://github.com/mmazt/portfolio-angular',
          description: null,
          fork: false,
          url: 'https://api.github.com/repos/mmazt/portfolio-angular',
          forks_url:
            'https://api.github.com/repos/mmazt/portfolio-angular/forks',
          keys_url:
            'https://api.github.com/repos/mmazt/portfolio-angular/keys{/key_id}',
          collaborators_url:
            'https://api.github.com/repos/mmazt/portfolio-angular/collaborators{/collaborator}',
          teams_url:
            'https://api.github.com/repos/mmazt/portfolio-angular/teams',
          hooks_url:
            'https://api.github.com/repos/mmazt/portfolio-angular/hooks',
          issue_events_url:
            'https://api.github.com/repos/mmazt/portfolio-angular/issues/events{/number}',
          events_url:
            'https://api.github.com/repos/mmazt/portfolio-angular/events',
          assignees_url:
            'https://api.github.com/repos/mmazt/portfolio-angular/assignees{/user}',
          branches_url:
            'https://api.github.com/repos/mmazt/portfolio-angular/branches{/branch}',
          tags_url: 'https://api.github.com/repos/mmazt/portfolio-angular/tags',
          blobs_url:
            'https://api.github.com/repos/mmazt/portfolio-angular/git/blobs{/sha}',
          git_tags_url:
            'https://api.github.com/repos/mmazt/portfolio-angular/git/tags{/sha}',
          git_refs_url:
            'https://api.github.com/repos/mmazt/portfolio-angular/git/refs{/sha}',
          trees_url:
            'https://api.github.com/repos/mmazt/portfolio-angular/git/trees{/sha}',
          statuses_url:
            'https://api.github.com/repos/mmazt/portfolio-angular/statuses/{sha}',
          languages_url:
            'https://api.github.com/repos/mmazt/portfolio-angular/languages',
          stargazers_url:
            'https://api.github.com/repos/mmazt/portfolio-angular/stargazers',
          contributors_url:
            'https://api.github.com/repos/mmazt/portfolio-angular/contributors',
          subscribers_url:
            'https://api.github.com/repos/mmazt/portfolio-angular/subscribers',
          subscription_url:
            'https://api.github.com/repos/mmazt/portfolio-angular/subscription',
          commits_url:
            'https://api.github.com/repos/mmazt/portfolio-angular/commits{/sha}',
          git_commits_url:
            'https://api.github.com/repos/mmazt/portfolio-angular/git/commits{/sha}',
          comments_url:
            'https://api.github.com/repos/mmazt/portfolio-angular/comments{/number}',
          issue_comment_url:
            'https://api.github.com/repos/mmazt/portfolio-angular/issues/comments{/number}',
          contents_url:
            'https://api.github.com/repos/mmazt/portfolio-angular/contents/{+path}',
          compare_url:
            'https://api.github.com/repos/mmazt/portfolio-angular/compare/{base}...{head}',
          merges_url:
            'https://api.github.com/repos/mmazt/portfolio-angular/merges',
          archive_url:
            'https://api.github.com/repos/mmazt/portfolio-angular/{archive_format}{/ref}',
          downloads_url:
            'https://api.github.com/repos/mmazt/portfolio-angular/downloads',
          issues_url:
            'https://api.github.com/repos/mmazt/portfolio-angular/issues{/number}',
          pulls_url:
            'https://api.github.com/repos/mmazt/portfolio-angular/pulls{/number}',
          milestones_url:
            'https://api.github.com/repos/mmazt/portfolio-angular/milestones{/number}',
          notifications_url:
            'https://api.github.com/repos/mmazt/portfolio-angular/notifications{?since,all,participating}',
          labels_url:
            'https://api.github.com/repos/mmazt/portfolio-angular/labels{/name}',
          releases_url:
            'https://api.github.com/repos/mmazt/portfolio-angular/releases{/id}',
          deployments_url:
            'https://api.github.com/repos/mmazt/portfolio-angular/deployments',
          created_at: '2018-04-16T05:39:45Z',
          updated_at: '2018-05-07T04:53:10Z',
          pushed_at: '2018-05-07T04:53:09Z',
          git_url: 'git://github.com/mmazt/portfolio-angular.git',
          ssh_url: 'git@github.com:mmazt/portfolio-angular.git',
          clone_url: 'https://github.com/mmazt/portfolio-angular.git',
          svn_url: 'https://github.com/mmazt/portfolio-angular',
          homepage: null,
          size: 689,
          stargazers_count: 0,
          watchers_count: 0,
          language: 'TypeScript',
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          forks_count: 0,
          mirror_url: null,
          archived: false,
          open_issues_count: 0,
          license: null,
          forks: 0,
          open_issues: 0,
          watchers: 0,
          default_branch: 'master'
        },
        {
          id: 101492006,
          node_id: 'MDEwOlJlcG9zaXRvcnkxMDE0OTIwMDY=',
          name: 'portfolio-react',
          full_name: 'mmazt/portfolio-react',
          owner: {
            login: 'mmazt',
            id: 22164742,
            node_id: 'MDQ6VXNlcjIyMTY0NzQy',
            avatar_url: 'https://avatars0.githubusercontent.com/u/22164742?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/mmazt',
            html_url: 'https://github.com/mmazt',
            followers_url: 'https://api.github.com/users/mmazt/followers',
            following_url:
              'https://api.github.com/users/mmazt/following{/other_user}',
            gists_url: 'https://api.github.com/users/mmazt/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/mmazt/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/mmazt/subscriptions',
            organizations_url: 'https://api.github.com/users/mmazt/orgs',
            repos_url: 'https://api.github.com/users/mmazt/repos',
            events_url: 'https://api.github.com/users/mmazt/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/mmazt/received_events',
            type: 'User',
            site_admin: false
          },
          private: false,
          html_url: 'https://github.com/mmazt/portfolio-react',
          description: null,
          fork: false,
          url: 'https://api.github.com/repos/mmazt/portfolio-react',
          forks_url: 'https://api.github.com/repos/mmazt/portfolio-react/forks',
          keys_url:
            'https://api.github.com/repos/mmazt/portfolio-react/keys{/key_id}',
          collaborators_url:
            'https://api.github.com/repos/mmazt/portfolio-react/collaborators{/collaborator}',
          teams_url: 'https://api.github.com/repos/mmazt/portfolio-react/teams',
          hooks_url: 'https://api.github.com/repos/mmazt/portfolio-react/hooks',
          issue_events_url:
            'https://api.github.com/repos/mmazt/portfolio-react/issues/events{/number}',
          events_url:
            'https://api.github.com/repos/mmazt/portfolio-react/events',
          assignees_url:
            'https://api.github.com/repos/mmazt/portfolio-react/assignees{/user}',
          branches_url:
            'https://api.github.com/repos/mmazt/portfolio-react/branches{/branch}',
          tags_url: 'https://api.github.com/repos/mmazt/portfolio-react/tags',
          blobs_url:
            'https://api.github.com/repos/mmazt/portfolio-react/git/blobs{/sha}',
          git_tags_url:
            'https://api.github.com/repos/mmazt/portfolio-react/git/tags{/sha}',
          git_refs_url:
            'https://api.github.com/repos/mmazt/portfolio-react/git/refs{/sha}',
          trees_url:
            'https://api.github.com/repos/mmazt/portfolio-react/git/trees{/sha}',
          statuses_url:
            'https://api.github.com/repos/mmazt/portfolio-react/statuses/{sha}',
          languages_url:
            'https://api.github.com/repos/mmazt/portfolio-react/languages',
          stargazers_url:
            'https://api.github.com/repos/mmazt/portfolio-react/stargazers',
          contributors_url:
            'https://api.github.com/repos/mmazt/portfolio-react/contributors',
          subscribers_url:
            'https://api.github.com/repos/mmazt/portfolio-react/subscribers',
          subscription_url:
            'https://api.github.com/repos/mmazt/portfolio-react/subscription',
          commits_url:
            'https://api.github.com/repos/mmazt/portfolio-react/commits{/sha}',
          git_commits_url:
            'https://api.github.com/repos/mmazt/portfolio-react/git/commits{/sha}',
          comments_url:
            'https://api.github.com/repos/mmazt/portfolio-react/comments{/number}',
          issue_comment_url:
            'https://api.github.com/repos/mmazt/portfolio-react/issues/comments{/number}',
          contents_url:
            'https://api.github.com/repos/mmazt/portfolio-react/contents/{+path}',
          compare_url:
            'https://api.github.com/repos/mmazt/portfolio-react/compare/{base}...{head}',
          merges_url:
            'https://api.github.com/repos/mmazt/portfolio-react/merges',
          archive_url:
            'https://api.github.com/repos/mmazt/portfolio-react/{archive_format}{/ref}',
          downloads_url:
            'https://api.github.com/repos/mmazt/portfolio-react/downloads',
          issues_url:
            'https://api.github.com/repos/mmazt/portfolio-react/issues{/number}',
          pulls_url:
            'https://api.github.com/repos/mmazt/portfolio-react/pulls{/number}',
          milestones_url:
            'https://api.github.com/repos/mmazt/portfolio-react/milestones{/number}',
          notifications_url:
            'https://api.github.com/repos/mmazt/portfolio-react/notifications{?since,all,participating}',
          labels_url:
            'https://api.github.com/repos/mmazt/portfolio-react/labels{/name}',
          releases_url:
            'https://api.github.com/repos/mmazt/portfolio-react/releases{/id}',
          deployments_url:
            'https://api.github.com/repos/mmazt/portfolio-react/deployments',
          created_at: '2017-08-26T14:46:26Z',
          updated_at: '2018-05-03T19:09:41Z',
          pushed_at: '2017-08-30T06:35:06Z',
          git_url: 'git://github.com/mmazt/portfolio-react.git',
          ssh_url: 'git@github.com:mmazt/portfolio-react.git',
          clone_url: 'https://github.com/mmazt/portfolio-react.git',
          svn_url: 'https://github.com/mmazt/portfolio-react',
          homepage: null,
          size: 668,
          stargazers_count: 0,
          watchers_count: 0,
          language: 'JavaScript',
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: false,
          has_pages: false,
          forks_count: 0,
          mirror_url: null,
          archived: false,
          open_issues_count: 0,
          license: null,
          forks: 0,
          open_issues: 0,
          watchers: 0,
          default_branch: 'master'
        },
        {
          id: 134243143,
          node_id: 'MDEwOlJlcG9zaXRvcnkxMzQyNDMxNDM=',
          name: 'spotify',
          full_name: 'mmazt/spotify',
          owner: {
            login: 'mmazt',
            id: 22164742,
            node_id: 'MDQ6VXNlcjIyMTY0NzQy',
            avatar_url: 'https://avatars0.githubusercontent.com/u/22164742?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/mmazt',
            html_url: 'https://github.com/mmazt',
            followers_url: 'https://api.github.com/users/mmazt/followers',
            following_url:
              'https://api.github.com/users/mmazt/following{/other_user}',
            gists_url: 'https://api.github.com/users/mmazt/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/mmazt/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/mmazt/subscriptions',
            organizations_url: 'https://api.github.com/users/mmazt/orgs',
            repos_url: 'https://api.github.com/users/mmazt/repos',
            events_url: 'https://api.github.com/users/mmazt/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/mmazt/received_events',
            type: 'User',
            site_admin: false
          },
          private: false,
          html_url: 'https://github.com/mmazt/spotify',
          description: null,
          fork: false,
          url: 'https://api.github.com/repos/mmazt/spotify',
          forks_url: 'https://api.github.com/repos/mmazt/spotify/forks',
          keys_url: 'https://api.github.com/repos/mmazt/spotify/keys{/key_id}',
          collaborators_url:
            'https://api.github.com/repos/mmazt/spotify/collaborators{/collaborator}',
          teams_url: 'https://api.github.com/repos/mmazt/spotify/teams',
          hooks_url: 'https://api.github.com/repos/mmazt/spotify/hooks',
          issue_events_url:
            'https://api.github.com/repos/mmazt/spotify/issues/events{/number}',
          events_url: 'https://api.github.com/repos/mmazt/spotify/events',
          assignees_url:
            'https://api.github.com/repos/mmazt/spotify/assignees{/user}',
          branches_url:
            'https://api.github.com/repos/mmazt/spotify/branches{/branch}',
          tags_url: 'https://api.github.com/repos/mmazt/spotify/tags',
          blobs_url:
            'https://api.github.com/repos/mmazt/spotify/git/blobs{/sha}',
          git_tags_url:
            'https://api.github.com/repos/mmazt/spotify/git/tags{/sha}',
          git_refs_url:
            'https://api.github.com/repos/mmazt/spotify/git/refs{/sha}',
          trees_url:
            'https://api.github.com/repos/mmazt/spotify/git/trees{/sha}',
          statuses_url:
            'https://api.github.com/repos/mmazt/spotify/statuses/{sha}',
          languages_url: 'https://api.github.com/repos/mmazt/spotify/languages',
          stargazers_url:
            'https://api.github.com/repos/mmazt/spotify/stargazers',
          contributors_url:
            'https://api.github.com/repos/mmazt/spotify/contributors',
          subscribers_url:
            'https://api.github.com/repos/mmazt/spotify/subscribers',
          subscription_url:
            'https://api.github.com/repos/mmazt/spotify/subscription',
          commits_url:
            'https://api.github.com/repos/mmazt/spotify/commits{/sha}',
          git_commits_url:
            'https://api.github.com/repos/mmazt/spotify/git/commits{/sha}',
          comments_url:
            'https://api.github.com/repos/mmazt/spotify/comments{/number}',
          issue_comment_url:
            'https://api.github.com/repos/mmazt/spotify/issues/comments{/number}',
          contents_url:
            'https://api.github.com/repos/mmazt/spotify/contents/{+path}',
          compare_url:
            'https://api.github.com/repos/mmazt/spotify/compare/{base}...{head}',
          merges_url: 'https://api.github.com/repos/mmazt/spotify/merges',
          archive_url:
            'https://api.github.com/repos/mmazt/spotify/{archive_format}{/ref}',
          downloads_url: 'https://api.github.com/repos/mmazt/spotify/downloads',
          issues_url:
            'https://api.github.com/repos/mmazt/spotify/issues{/number}',
          pulls_url:
            'https://api.github.com/repos/mmazt/spotify/pulls{/number}',
          milestones_url:
            'https://api.github.com/repos/mmazt/spotify/milestones{/number}',
          notifications_url:
            'https://api.github.com/repos/mmazt/spotify/notifications{?since,all,participating}',
          labels_url:
            'https://api.github.com/repos/mmazt/spotify/labels{/name}',
          releases_url:
            'https://api.github.com/repos/mmazt/spotify/releases{/id}',
          deployments_url:
            'https://api.github.com/repos/mmazt/spotify/deployments',
          created_at: '2018-05-21T08:49:14Z',
          updated_at: '2018-05-24T01:47:23Z',
          pushed_at: '2018-05-24T01:47:22Z',
          git_url: 'git://github.com/mmazt/spotify.git',
          ssh_url: 'git@github.com:mmazt/spotify.git',
          clone_url: 'https://github.com/mmazt/spotify.git',
          svn_url: 'https://github.com/mmazt/spotify',
          homepage: null,
          size: 489,
          stargazers_count: 0,
          watchers_count: 0,
          language: 'JavaScript',
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          forks_count: 0,
          mirror_url: null,
          archived: false,
          open_issues_count: 0,
          license: null,
          forks: 0,
          open_issues: 0,
          watchers: 0,
          default_branch: 'master'
        },
        {
          id: 134023470,
          node_id: 'MDEwOlJlcG9zaXRvcnkxMzQwMjM0NzA=',
          name: 'spotify-search',
          full_name: 'mmazt/spotify-search',
          owner: {
            login: 'mmazt',
            id: 22164742,
            node_id: 'MDQ6VXNlcjIyMTY0NzQy',
            avatar_url: 'https://avatars0.githubusercontent.com/u/22164742?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/mmazt',
            html_url: 'https://github.com/mmazt',
            followers_url: 'https://api.github.com/users/mmazt/followers',
            following_url:
              'https://api.github.com/users/mmazt/following{/other_user}',
            gists_url: 'https://api.github.com/users/mmazt/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/mmazt/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/mmazt/subscriptions',
            organizations_url: 'https://api.github.com/users/mmazt/orgs',
            repos_url: 'https://api.github.com/users/mmazt/repos',
            events_url: 'https://api.github.com/users/mmazt/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/mmazt/received_events',
            type: 'User',
            site_admin: false
          },
          private: false,
          html_url: 'https://github.com/mmazt/spotify-search',
          description: null,
          fork: false,
          url: 'https://api.github.com/repos/mmazt/spotify-search',
          forks_url: 'https://api.github.com/repos/mmazt/spotify-search/forks',
          keys_url:
            'https://api.github.com/repos/mmazt/spotify-search/keys{/key_id}',
          collaborators_url:
            'https://api.github.com/repos/mmazt/spotify-search/collaborators{/collaborator}',
          teams_url: 'https://api.github.com/repos/mmazt/spotify-search/teams',
          hooks_url: 'https://api.github.com/repos/mmazt/spotify-search/hooks',
          issue_events_url:
            'https://api.github.com/repos/mmazt/spotify-search/issues/events{/number}',
          events_url:
            'https://api.github.com/repos/mmazt/spotify-search/events',
          assignees_url:
            'https://api.github.com/repos/mmazt/spotify-search/assignees{/user}',
          branches_url:
            'https://api.github.com/repos/mmazt/spotify-search/branches{/branch}',
          tags_url: 'https://api.github.com/repos/mmazt/spotify-search/tags',
          blobs_url:
            'https://api.github.com/repos/mmazt/spotify-search/git/blobs{/sha}',
          git_tags_url:
            'https://api.github.com/repos/mmazt/spotify-search/git/tags{/sha}',
          git_refs_url:
            'https://api.github.com/repos/mmazt/spotify-search/git/refs{/sha}',
          trees_url:
            'https://api.github.com/repos/mmazt/spotify-search/git/trees{/sha}',
          statuses_url:
            'https://api.github.com/repos/mmazt/spotify-search/statuses/{sha}',
          languages_url:
            'https://api.github.com/repos/mmazt/spotify-search/languages',
          stargazers_url:
            'https://api.github.com/repos/mmazt/spotify-search/stargazers',
          contributors_url:
            'https://api.github.com/repos/mmazt/spotify-search/contributors',
          subscribers_url:
            'https://api.github.com/repos/mmazt/spotify-search/subscribers',
          subscription_url:
            'https://api.github.com/repos/mmazt/spotify-search/subscription',
          commits_url:
            'https://api.github.com/repos/mmazt/spotify-search/commits{/sha}',
          git_commits_url:
            'https://api.github.com/repos/mmazt/spotify-search/git/commits{/sha}',
          comments_url:
            'https://api.github.com/repos/mmazt/spotify-search/comments{/number}',
          issue_comment_url:
            'https://api.github.com/repos/mmazt/spotify-search/issues/comments{/number}',
          contents_url:
            'https://api.github.com/repos/mmazt/spotify-search/contents/{+path}',
          compare_url:
            'https://api.github.com/repos/mmazt/spotify-search/compare/{base}...{head}',
          merges_url:
            'https://api.github.com/repos/mmazt/spotify-search/merges',
          archive_url:
            'https://api.github.com/repos/mmazt/spotify-search/{archive_format}{/ref}',
          downloads_url:
            'https://api.github.com/repos/mmazt/spotify-search/downloads',
          issues_url:
            'https://api.github.com/repos/mmazt/spotify-search/issues{/number}',
          pulls_url:
            'https://api.github.com/repos/mmazt/spotify-search/pulls{/number}',
          milestones_url:
            'https://api.github.com/repos/mmazt/spotify-search/milestones{/number}',
          notifications_url:
            'https://api.github.com/repos/mmazt/spotify-search/notifications{?since,all,participating}',
          labels_url:
            'https://api.github.com/repos/mmazt/spotify-search/labels{/name}',
          releases_url:
            'https://api.github.com/repos/mmazt/spotify-search/releases{/id}',
          deployments_url:
            'https://api.github.com/repos/mmazt/spotify-search/deployments',
          created_at: '2018-05-19T02:43:22Z',
          updated_at: '2018-05-19T02:47:40Z',
          pushed_at: '2018-05-19T02:47:38Z',
          git_url: 'git://github.com/mmazt/spotify-search.git',
          ssh_url: 'git@github.com:mmazt/spotify-search.git',
          clone_url: 'https://github.com/mmazt/spotify-search.git',
          svn_url: 'https://github.com/mmazt/spotify-search',
          homepage: null,
          size: 0,
          stargazers_count: 0,
          watchers_count: 0,
          language: null,
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          forks_count: 0,
          mirror_url: null,
          archived: false,
          open_issues_count: 0,
          license: null,
          forks: 0,
          open_issues: 0,
          watchers: 0,
          default_branch: 'master'
        },
        {
          id: 104528704,
          node_id: 'MDEwOlJlcG9zaXRvcnkxMDQ1Mjg3MDQ=',
          name: 'weather-react',
          full_name: 'mmazt/weather-react',
          owner: {
            login: 'mmazt',
            id: 22164742,
            node_id: 'MDQ6VXNlcjIyMTY0NzQy',
            avatar_url: 'https://avatars0.githubusercontent.com/u/22164742?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/mmazt',
            html_url: 'https://github.com/mmazt',
            followers_url: 'https://api.github.com/users/mmazt/followers',
            following_url:
              'https://api.github.com/users/mmazt/following{/other_user}',
            gists_url: 'https://api.github.com/users/mmazt/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/mmazt/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/mmazt/subscriptions',
            organizations_url: 'https://api.github.com/users/mmazt/orgs',
            repos_url: 'https://api.github.com/users/mmazt/repos',
            events_url: 'https://api.github.com/users/mmazt/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/mmazt/received_events',
            type: 'User',
            site_admin: false
          },
          private: false,
          html_url: 'https://github.com/mmazt/weather-react',
          description:
            'Aplicativo simples que mostra o Clima da cidade em que o usuário se encontra, utilizando React e a api Open Weather',
          fork: false,
          url: 'https://api.github.com/repos/mmazt/weather-react',
          forks_url: 'https://api.github.com/repos/mmazt/weather-react/forks',
          keys_url:
            'https://api.github.com/repos/mmazt/weather-react/keys{/key_id}',
          collaborators_url:
            'https://api.github.com/repos/mmazt/weather-react/collaborators{/collaborator}',
          teams_url: 'https://api.github.com/repos/mmazt/weather-react/teams',
          hooks_url: 'https://api.github.com/repos/mmazt/weather-react/hooks',
          issue_events_url:
            'https://api.github.com/repos/mmazt/weather-react/issues/events{/number}',
          events_url: 'https://api.github.com/repos/mmazt/weather-react/events',
          assignees_url:
            'https://api.github.com/repos/mmazt/weather-react/assignees{/user}',
          branches_url:
            'https://api.github.com/repos/mmazt/weather-react/branches{/branch}',
          tags_url: 'https://api.github.com/repos/mmazt/weather-react/tags',
          blobs_url:
            'https://api.github.com/repos/mmazt/weather-react/git/blobs{/sha}',
          git_tags_url:
            'https://api.github.com/repos/mmazt/weather-react/git/tags{/sha}',
          git_refs_url:
            'https://api.github.com/repos/mmazt/weather-react/git/refs{/sha}',
          trees_url:
            'https://api.github.com/repos/mmazt/weather-react/git/trees{/sha}',
          statuses_url:
            'https://api.github.com/repos/mmazt/weather-react/statuses/{sha}',
          languages_url:
            'https://api.github.com/repos/mmazt/weather-react/languages',
          stargazers_url:
            'https://api.github.com/repos/mmazt/weather-react/stargazers',
          contributors_url:
            'https://api.github.com/repos/mmazt/weather-react/contributors',
          subscribers_url:
            'https://api.github.com/repos/mmazt/weather-react/subscribers',
          subscription_url:
            'https://api.github.com/repos/mmazt/weather-react/subscription',
          commits_url:
            'https://api.github.com/repos/mmazt/weather-react/commits{/sha}',
          git_commits_url:
            'https://api.github.com/repos/mmazt/weather-react/git/commits{/sha}',
          comments_url:
            'https://api.github.com/repos/mmazt/weather-react/comments{/number}',
          issue_comment_url:
            'https://api.github.com/repos/mmazt/weather-react/issues/comments{/number}',
          contents_url:
            'https://api.github.com/repos/mmazt/weather-react/contents/{+path}',
          compare_url:
            'https://api.github.com/repos/mmazt/weather-react/compare/{base}...{head}',
          merges_url: 'https://api.github.com/repos/mmazt/weather-react/merges',
          archive_url:
            'https://api.github.com/repos/mmazt/weather-react/{archive_format}{/ref}',
          downloads_url:
            'https://api.github.com/repos/mmazt/weather-react/downloads',
          issues_url:
            'https://api.github.com/repos/mmazt/weather-react/issues{/number}',
          pulls_url:
            'https://api.github.com/repos/mmazt/weather-react/pulls{/number}',
          milestones_url:
            'https://api.github.com/repos/mmazt/weather-react/milestones{/number}',
          notifications_url:
            'https://api.github.com/repos/mmazt/weather-react/notifications{?since,all,participating}',
          labels_url:
            'https://api.github.com/repos/mmazt/weather-react/labels{/name}',
          releases_url:
            'https://api.github.com/repos/mmazt/weather-react/releases{/id}',
          deployments_url:
            'https://api.github.com/repos/mmazt/weather-react/deployments',
          created_at: '2017-09-23T00:12:21Z',
          updated_at: '2017-09-23T10:38:51Z',
          pushed_at: '2017-09-23T18:37:32Z',
          git_url: 'git://github.com/mmazt/weather-react.git',
          ssh_url: 'git@github.com:mmazt/weather-react.git',
          clone_url: 'https://github.com/mmazt/weather-react.git',
          svn_url: 'https://github.com/mmazt/weather-react',
          homepage: null,
          size: 270,
          stargazers_count: 0,
          watchers_count: 0,
          language: 'JavaScript',
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          forks_count: 0,
          mirror_url: null,
          archived: false,
          open_issues_count: 0,
          license: null,
          forks: 0,
          open_issues: 0,
          watchers: 0,
          default_branch: 'master'
        }
      ]
    },
    searchReducer: { options: [], results: [] }
  });
});
