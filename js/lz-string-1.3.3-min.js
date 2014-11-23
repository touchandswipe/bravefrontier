



<!DOCTYPE html>
<html lang="en" class="">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    
    
    <title>lz-string/lz-string-1.3.3-min.js at master · pieroxy/lz-string</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="pieroxy/lz-string" name="twitter:title" /><meta content="lz-string - LZ-based compression algorithm for JavaScript" name="twitter:description" /><meta content="https://avatars3.githubusercontent.com/u/1426854?v=3&amp;s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars3.githubusercontent.com/u/1426854?v=3&amp;s=400" property="og:image" /><meta content="pieroxy/lz-string" property="og:title" /><meta content="https://github.com/pieroxy/lz-string" property="og:url" /><meta content="lz-string - LZ-based compression algorithm for JavaScript" property="og:description" />

      <meta name="browser-stats-url" content="/_stats">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035">
    <link rel="xhr-socket" href="/_sockets">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="73409C92:7070:12A78923:5471C0CD" name="octolytics-dimension-request_id" /><meta content="8906777" name="octolytics-actor-id" /><meta content="touchandswipe" name="octolytics-actor-login" /><meta content="399ba974adaf4505f16c2b371464183bfb4f4a184ded595891278a4cd61db9ab" name="octolytics-actor-hash" />
    
    <meta content="Rails, view, blob#show" name="analytics-event" />

    
    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">


    <meta content="authenticity_token" name="csrf-param" />
<meta content="l/R69JBHwFlp54bYP9lONgEJFQYur5C8tSblCMIwNRraFjDRgyW5PSCCtodJgG9ZpM35Otnm5g3vOu/kKmcklw==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-fa9b8c5d848205db514d4097d2b78f4528d01a79f39601e0f9c5c40ed6894711.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://assets-cdn.github.com/assets/github2-e48cf9f7b34f2138837ae8f236223b114441dde478e265f64e1ad9bf6bd76afd.css" media="all" rel="stylesheet" type="text/css" />
    
    


    <meta http-equiv="x-pjax-version" content="a3ac1570158331332f4e32c9da80623c">

      
  <meta name="description" content="lz-string - LZ-based compression algorithm for JavaScript">
  <meta name="go-import" content="github.com/pieroxy/lz-string git https://github.com/pieroxy/lz-string.git">

  <meta content="1426854" name="octolytics-dimension-user_id" /><meta content="pieroxy" name="octolytics-dimension-user_login" /><meta content="9938102" name="octolytics-dimension-repository_id" /><meta content="pieroxy/lz-string" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="9938102" name="octolytics-dimension-repository_network_root_id" /><meta content="pieroxy/lz-string" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/pieroxy/lz-string/commits/master.atom" rel="alternate" title="Recent Commits to lz-string:master" type="application/atom+xml">

  </head>


  <body class="logged_in  env-production windows vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" ga-data-click="Header, go to dashboard, icon:logo">
  <span class="mega-octicon octicon-mark-github"></span>
</a>


      <div class="site-search repo-scope js-site-search" role="search">
          <form accept-charset="UTF-8" action="/pieroxy/lz-string/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/pieroxy/lz-string/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <input type="text"
    class="js-site-search-field is-clearable"
    data-hotkey="s"
    name="q"
    placeholder="Search"
    data-global-scope-placeholder="Search GitHub"
    data-repo-scope-placeholder="Search"
    tabindex="1"
    autocapitalize="off">
  <div class="scope-badge">This repository</div>
</form>
      </div>
      <ul class="header-nav left" role="navigation">
        <li class="header-nav-item explore">
          <a class="header-nav-link" href="/explore" data-ga-click="Header, go to explore, text:explore">Explore</a>
        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/blog" data-ga-click="Header, go to blog, text:blog">Blog</a>
          </li>
        <li class="header-nav-item">
          <a class="header-nav-link" href="https://help.github.com" data-ga-click="Header, go to help, text:help">Help</a>
        </li>
      </ul>

    
<ul class="header-nav user-nav right" id="user-links">
  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name" href="/touchandswipe" data-ga-click="Header, go to profile, text:username">
      <img alt="Sam GreenP" class="avatar" data-user="8906777" height="20" src="https://avatars3.githubusercontent.com/u/8906777?v=3&amp;s=40" width="20" />
      <span class="css-truncate">
        <span class="css-truncate-target">touchandswipe</span>
      </span>
    </a>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link js-menu-target tooltipped tooltipped-s" href="#" aria-label="Create new..." data-ga-click="Header, create new, icon:add">
      <span class="octicon octicon-plus"></span>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      
<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>


    <li class="dropdown-divider"></li>
    <li class="dropdown-header">
      <span title="pieroxy/lz-string">This repository</span>
    </li>
      <li>
        <a href="/pieroxy/lz-string/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
      </li>
</ul>

    </div>
  </li>

  <li class="header-nav-item">
        <a href="/notifications" aria-label="You have unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s" data-ga-click="Header, go to notifications, icon:unread" data-hotkey="g n">
        <span class="mail-status unread"></span>
        <span class="octicon octicon-inbox"></span>
</a>
  </li>

  <li class="header-nav-item">
    <a class="header-nav-link tooltipped tooltipped-s" href="/settings/profile" id="account_settings" aria-label="Settings" data-ga-click="Header, go to settings, icon:settings">
      <span class="octicon octicon-gear"></span>
    </a>
  </li>

  <li class="header-nav-item">
    <form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="hcsg5OAVxz4moKRJBwVNwxxNYdchjqsf7+chOFZaYnwLVdHdotyvn/yZQdcoGbLWekqJnjiZO3z+47WXe5ynBg==" /></div>
      <button class="header-nav-link sign-out-button tooltipped tooltipped-s" aria-label="Sign out" data-ga-click="Header, sign out, icon:logout">
        <span class="octicon octicon-sign-out"></span>
      </button>
</form>  </li>

</ul>


    
  </div>
</div>

      

        


      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        
<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="csNxSRzX5VGud3cu51YIwGepxzExJDwKiAUgI3ywdXLHc5bVyc7Sfh8p41b/OhK76ytD7b1dXuFxxZJAtmTk5w==" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="9938102" />

    <div class="select-menu js-menu-container js-select-menu">
      <a class="social-count js-social-count" href="/pieroxy/lz-string/watchers">
        26
      </a>
      <a href="/pieroxy/lz-string/subscription"
        class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0" aria-haspopup="true">
        <span class="js-select-button">
          <span class="octicon octicon-eye"></span>
          Watch
        </span>
      </a>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
          <div class="select-menu-header">
            <span class="select-menu-title">Notifications</span>
            <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container" role="menu">

            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">Be notified when participating or @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">Be notified of all conversations.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">Never be notified.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <form accept-charset="UTF-8" action="/pieroxy/lz-string/unstar" class="js-toggler-form starred js-unstar-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="o6zU6nFCyHO9S9Yry9rVGS/tDN3usgCzZoQTZLxRYoOmCJYPvuzuKw4wZ5yiH58fzkQHNADIW7vHJ/9KydEOLA==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Unstar this repository" title="Unstar pieroxy/lz-string">
        <span class="octicon octicon-star"></span>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/pieroxy/lz-string/stargazers">
          412
        </a>
</form>
    <form accept-charset="UTF-8" action="/pieroxy/lz-string/star" class="js-toggler-form unstarred js-star-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="rw9ifY6xjQpG034E4h6iuu27jWIQ2Zw3aaI3ty+gf9fh10YxRpr0pxBoDnzTN2yXeA44C10A+pFPxDcnfviyEA==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Star this repository" title="Star pieroxy/lz-string">
        <span class="octicon octicon-star"></span>
        Star
      </button>
        <a class="social-count js-social-count" href="/pieroxy/lz-string/stargazers">
          412
        </a>
</form>  </div>

  </li>


        <li>
          <a href="/pieroxy/lz-string/fork" class="minibutton with-count js-toggler-target fork-button tooltipped-n" title="Fork your own copy of pieroxy/lz-string to your account" aria-label="Fork your own copy of pieroxy/lz-string to your account" rel="nofollow" data-method="post">
            <span class="octicon octicon-repo-forked"></span>
            Fork
          </a>
          <a href="/pieroxy/lz-string/network" class="social-count">96</a>
        </li>

</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/pieroxy" class="url fn" itemprop="url" rel="author"><span itemprop="title">pieroxy</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/pieroxy/lz-string" class="js-current-repository" data-pjax="#js-repo-pjax-container">lz-string</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            
<nav class="sunken-menu repo-nav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container"
     data-issue-count-url="/pieroxy/lz-string/issues/counts">
  <ul class="sunken-menu-group">
    <li class="tooltipped tooltipped-w" aria-label="Code">
      <a href="/pieroxy/lz-string" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /pieroxy/lz-string">
        <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Issues">
        <a href="/pieroxy/lz-string/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /pieroxy/lz-string/issues">
          <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
          <span class="js-issue-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

    <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
      <a href="/pieroxy/lz-string/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g p" data-selected-links="repo_pulls /pieroxy/lz-string/pulls">
          <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
          <span class="js-pull-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>


      <li class="tooltipped tooltipped-w" aria-label="Wiki">
        <a href="/pieroxy/lz-string/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g w" data-selected-links="repo_wiki /pieroxy/lz-string/wiki">
          <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
  </ul>
  <div class="sunken-menu-separator"></div>
  <ul class="sunken-menu-group">

    <li class="tooltipped tooltipped-w" aria-label="Pulse">
      <a href="/pieroxy/lz-string/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-selected-links="pulse /pieroxy/lz-string/pulse">
        <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

    <li class="tooltipped tooltipped-w" aria-label="Graphs">
      <a href="/pieroxy/lz-string/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-selected-links="repo_graphs repo_contributors /pieroxy/lz-string/graphs">
        <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>
  </ul>


</nav>

              <div class="only-with-full-nav">
                
  
<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="https://github.com/pieroxy/lz-string.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/pieroxy/lz-string.git" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><span class="text-emphasized">SSH</span> clone URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="git@github.com:pieroxy/lz-string.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="git@github.com:pieroxy/lz-string.git" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="https://github.com/pieroxy/lz-string" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/pieroxy/lz-string" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</p>


  <a href="github-windows://openRepo/https://github.com/pieroxy/lz-string" class="minibutton sidebar-button" title="Save pieroxy/lz-string to your computer and use it in GitHub Desktop." aria-label="Save pieroxy/lz-string to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>

                <a href="/pieroxy/lz-string/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download the contents of pieroxy/lz-string as a zip file"
                   title="Download the contents of pieroxy/lz-string as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          

<a href="/pieroxy/lz-string/blob/e9be039786ecd1e67811476b87467bbe6b726b50/libs/release/lz-string-1.3.3-min.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:df528fb6561f869167ae885a9e7df840 -->

<div class="file-navigation">
  
<div class="select-menu js-menu-container js-select-menu left">
  <span class="minibutton select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/pieroxy/lz-string/blob/master/libs/release/lz-string-1.3.3-min.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/pieroxy/lz-string/tree/release/libs/release/lz-string-1.3.3-min.js"
                 data-name="release"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="release">release</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/pieroxy/lz-string/tree/1.3.3/libs/release/lz-string-1.3.3-min.js"
                 data-name="1.3.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.3.3">1.3.3</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="button-group right">
    <a href="/pieroxy/lz-string/find/master"
          class="js-show-file-finder minibutton empty-icon tooltipped tooltipped-s"
          data-pjax
          data-hotkey="t"
          aria-label="Quickly jump between files">
      <span class="octicon octicon-list-unordered"></span>
    </a>
    <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="libs/release/lz-string-1.3.3-min.js" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
  </div>

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/pieroxy/lz-string" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">lz-string</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/pieroxy/lz-string/tree/master/libs" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">libs</span></a></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/pieroxy/lz-string/tree/master/libs/release" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">release</span></a></span><span class="separator"> / </span><strong class="final-path">lz-string-1.3.3-min.js</strong>
  </div>
</div>


  <div class="commit file-history-tease">
    <div class="file-history-tease-header">
        <img alt="" class="avatar" height="24" src="https://1.gravatar.com/avatar/36d60f8923e4e8bda2ac7874718ae167?d=https%3A%2F%2Fassets-cdn.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png&amp;r=x&amp;s=140" width="24" />
        <span class="author"><span>Pierre Grimaud</span></span>
        <time datetime="2014-07-29T18:13:45Z" is="relative-time">Jul 29, 2014</time>
        <div class="commit-title">
            <a href="/pieroxy/lz-string/commit/0f054cb6e973c63079b2622666de90e0202fe1c6" class="message" data-pjax="true" title="Moved stuff around to make it simpler to locate the different versions.

Unit tests always test the beta version">Moved stuff around to make it simpler to locate the different versions.</a>
        </div>
    </div>

    <div class="participation">
      <p class="quickstat">
        <a href="#blob_contributors_box" rel="facebox">
          <strong>0</strong>
           contributors
        </a>
      </p>
      
    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
      </ul>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
          <span>2 lines (1 sloc)</span>
          <span class="meta-divider"></span>
        <span>6.02 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
          <a href="/pieroxy/lz-string/raw/master/libs/release/lz-string-1.3.3-min.js" class="minibutton " id="raw-url">Raw</a>
            <a href="/pieroxy/lz-string/blame/master/libs/release/lz-string-1.3.3-min.js" class="minibutton js-update-url-with-hash">Blame</a>
          <a href="/pieroxy/lz-string/commits/master/libs/release/lz-string-1.3.3-min.js" class="minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->

          <a class="octicon-button tooltipped tooltipped-nw"
             href="github-windows://openRepo/https://github.com/pieroxy/lz-string?branch=master&amp;filepath=libs%2Frelease%2Flz-string-1.3.3-min.js" aria-label="Open this file in GitHub for Windows">
              <span class="octicon octicon-device-desktop"></span>
          </a>

              <a class="octicon-button tooltipped tooltipped-n js-update-url-with-hash"
                 aria-label="Clicking this button will fork this project so you can edit the file"
                 href="/pieroxy/lz-string/edit/master/libs/release/lz-string-1.3.3-min.js"
                 data-method="post" rel="nofollow"><span class="octicon octicon-pencil"></span></a>

            <a class="octicon-button danger tooltipped tooltipped-s"
               href="/pieroxy/lz-string/delete/master/libs/release/lz-string-1.3.3-min.js"
               aria-label="Fork this project and delete file"
               data-method="post" data-test-id="delete-blob-file" rel="nofollow">
          <span class="octicon octicon-trashcan"></span>
        </a>
      </div><!-- /.actions -->
    </div>
    

  <div class="blob-wrapper data type-javascript">
      <table class="highlight tab-size-8 js-file-line-container">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code js-file-line">var LZString={_keyStr:&quot;ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=&quot;,_f:String.fromCharCode,compressToBase64:function(e){if(e==null)return&quot;&quot;;var t=&quot;&quot;;var n,r,i,s,o,u,a;var f=0;e=LZString.compress(e);while(f&lt;e.length*2){if(f%2==0){n=e.charCodeAt(f/2)&gt;&gt;8;r=e.charCodeAt(f/2)&amp;255;if(f/2+1&lt;e.length)i=e.charCodeAt(f/2+1)&gt;&gt;8;else i=NaN}else{n=e.charCodeAt((f-1)/2)&amp;255;if((f+1)/2&lt;e.length){r=e.charCodeAt((f+1)/2)&gt;&gt;8;i=e.charCodeAt((f+1)/2)&amp;255}else r=i=NaN}f+=3;s=n&gt;&gt;2;o=(n&amp;3)&lt;&lt;4|r&gt;&gt;4;u=(r&amp;15)&lt;&lt;2|i&gt;&gt;6;a=i&amp;63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+LZString._keyStr.charAt(s)+LZString._keyStr.charAt(o)+LZString._keyStr.charAt(u)+LZString._keyStr.charAt(a)}return t},decompressFromBase64:function(e){if(e==null)return&quot;&quot;;var t=&quot;&quot;,n=0,r,i,s,o,u,a,f,l,c=0,h=LZString._f;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,&quot;&quot;);while(c&lt;e.length){u=LZString._keyStr.indexOf(e.charAt(c++));a=LZString._keyStr.indexOf(e.charAt(c++));f=LZString._keyStr.indexOf(e.charAt(c++));l=LZString._keyStr.indexOf(e.charAt(c++));i=u&lt;&lt;2|a&gt;&gt;4;s=(a&amp;15)&lt;&lt;4|f&gt;&gt;2;o=(f&amp;3)&lt;&lt;6|l;if(n%2==0){r=i&lt;&lt;8;if(f!=64){t+=h(r|s)}if(l!=64){r=o&lt;&lt;8}}else{t=t+h(r|i);if(f!=64){r=s&lt;&lt;8}if(l!=64){t+=h(r|o)}}n+=3}return LZString.decompress(t)},compressToUTF16:function(e){if(e==null)return&quot;&quot;;var t=&quot;&quot;,n,r,i,s=0,o=LZString._f;e=LZString.compress(e);for(n=0;n&lt;e.length;n++){r=e.charCodeAt(n);switch(s++){case 0:t+=o((r&gt;&gt;1)+32);i=(r&amp;1)&lt;&lt;14;break;case 1:t+=o(i+(r&gt;&gt;2)+32);i=(r&amp;3)&lt;&lt;13;break;case 2:t+=o(i+(r&gt;&gt;3)+32);i=(r&amp;7)&lt;&lt;12;break;case 3:t+=o(i+(r&gt;&gt;4)+32);i=(r&amp;15)&lt;&lt;11;break;case 4:t+=o(i+(r&gt;&gt;5)+32);i=(r&amp;31)&lt;&lt;10;break;case 5:t+=o(i+(r&gt;&gt;6)+32);i=(r&amp;63)&lt;&lt;9;break;case 6:t+=o(i+(r&gt;&gt;7)+32);i=(r&amp;127)&lt;&lt;8;break;case 7:t+=o(i+(r&gt;&gt;8)+32);i=(r&amp;255)&lt;&lt;7;break;case 8:t+=o(i+(r&gt;&gt;9)+32);i=(r&amp;511)&lt;&lt;6;break;case 9:t+=o(i+(r&gt;&gt;10)+32);i=(r&amp;1023)&lt;&lt;5;break;case 10:t+=o(i+(r&gt;&gt;11)+32);i=(r&amp;2047)&lt;&lt;4;break;case 11:t+=o(i+(r&gt;&gt;12)+32);i=(r&amp;4095)&lt;&lt;3;break;case 12:t+=o(i+(r&gt;&gt;13)+32);i=(r&amp;8191)&lt;&lt;2;break;case 13:t+=o(i+(r&gt;&gt;14)+32);i=(r&amp;16383)&lt;&lt;1;break;case 14:t+=o(i+(r&gt;&gt;15)+32,(r&amp;32767)+32);s=0;break}}return t+o(i+32)},decompressFromUTF16:function(e){if(e==null)return&quot;&quot;;var t=&quot;&quot;,n,r,i=0,s=0,o=LZString._f;while(s&lt;e.length){r=e.charCodeAt(s)-32;switch(i++){case 0:n=r&lt;&lt;1;break;case 1:t+=o(n|r&gt;&gt;14);n=(r&amp;16383)&lt;&lt;2;break;case 2:t+=o(n|r&gt;&gt;13);n=(r&amp;8191)&lt;&lt;3;break;case 3:t+=o(n|r&gt;&gt;12);n=(r&amp;4095)&lt;&lt;4;break;case 4:t+=o(n|r&gt;&gt;11);n=(r&amp;2047)&lt;&lt;5;break;case 5:t+=o(n|r&gt;&gt;10);n=(r&amp;1023)&lt;&lt;6;break;case 6:t+=o(n|r&gt;&gt;9);n=(r&amp;511)&lt;&lt;7;break;case 7:t+=o(n|r&gt;&gt;8);n=(r&amp;255)&lt;&lt;8;break;case 8:t+=o(n|r&gt;&gt;7);n=(r&amp;127)&lt;&lt;9;break;case 9:t+=o(n|r&gt;&gt;6);n=(r&amp;63)&lt;&lt;10;break;case 10:t+=o(n|r&gt;&gt;5);n=(r&amp;31)&lt;&lt;11;break;case 11:t+=o(n|r&gt;&gt;4);n=(r&amp;15)&lt;&lt;12;break;case 12:t+=o(n|r&gt;&gt;3);n=(r&amp;7)&lt;&lt;13;break;case 13:t+=o(n|r&gt;&gt;2);n=(r&amp;3)&lt;&lt;14;break;case 14:t+=o(n|r&gt;&gt;1);n=(r&amp;1)&lt;&lt;15;break;case 15:t+=o(n|r);i=0;break}s++}return LZString.decompress(t)},compress:function(e){if(e==null)return&quot;&quot;;var t,n,r={},i={},s=&quot;&quot;,o=&quot;&quot;,u=&quot;&quot;,a=2,f=3,l=2,c=&quot;&quot;,h=0,p=0,d,v=LZString._f;for(d=0;d&lt;e.length;d+=1){s=e.charAt(d);if(!Object.prototype.hasOwnProperty.call(r,s)){r[s]=f++;i[s]=true}o=u+s;if(Object.prototype.hasOwnProperty.call(r,o)){u=o}else{if(Object.prototype.hasOwnProperty.call(i,u)){if(u.charCodeAt(0)&lt;256){for(t=0;t&lt;l;t++){h=h&lt;&lt;1;if(p==15){p=0;c+=v(h);h=0}else{p++}}n=u.charCodeAt(0);for(t=0;t&lt;8;t++){h=h&lt;&lt;1|n&amp;1;if(p==15){p=0;c+=v(h);h=0}else{p++}n=n&gt;&gt;1}}else{n=1;for(t=0;t&lt;l;t++){h=h&lt;&lt;1|n;if(p==15){p=0;c+=v(h);h=0}else{p++}n=0}n=u.charCodeAt(0);for(t=0;t&lt;16;t++){h=h&lt;&lt;1|n&amp;1;if(p==15){p=0;c+=v(h);h=0}else{p++}n=n&gt;&gt;1}}a--;if(a==0){a=Math.pow(2,l);l++}delete i[u]}else{n=r[u];for(t=0;t&lt;l;t++){h=h&lt;&lt;1|n&amp;1;if(p==15){p=0;c+=v(h);h=0}else{p++}n=n&gt;&gt;1}}a--;if(a==0){a=Math.pow(2,l);l++}r[o]=f++;u=String(s)}}if(u!==&quot;&quot;){if(Object.prototype.hasOwnProperty.call(i,u)){if(u.charCodeAt(0)&lt;256){for(t=0;t&lt;l;t++){h=h&lt;&lt;1;if(p==15){p=0;c+=v(h);h=0}else{p++}}n=u.charCodeAt(0);for(t=0;t&lt;8;t++){h=h&lt;&lt;1|n&amp;1;if(p==15){p=0;c+=v(h);h=0}else{p++}n=n&gt;&gt;1}}else{n=1;for(t=0;t&lt;l;t++){h=h&lt;&lt;1|n;if(p==15){p=0;c+=v(h);h=0}else{p++}n=0}n=u.charCodeAt(0);for(t=0;t&lt;16;t++){h=h&lt;&lt;1|n&amp;1;if(p==15){p=0;c+=v(h);h=0}else{p++}n=n&gt;&gt;1}}a--;if(a==0){a=Math.pow(2,l);l++}delete i[u]}else{n=r[u];for(t=0;t&lt;l;t++){h=h&lt;&lt;1|n&amp;1;if(p==15){p=0;c+=v(h);h=0}else{p++}n=n&gt;&gt;1}}a--;if(a==0){a=Math.pow(2,l);l++}}n=2;for(t=0;t&lt;l;t++){h=h&lt;&lt;1|n&amp;1;if(p==15){p=0;c+=v(h);h=0}else{p++}n=n&gt;&gt;1}while(true){h=h&lt;&lt;1;if(p==15){c+=v(h);break}else p++}return c},decompress:function(e){if(e==null)return&quot;&quot;;if(e==&quot;&quot;)return null;var t=[],n,r=4,i=4,s=3,o=&quot;&quot;,u=&quot;&quot;,a,f,l,c,h,p,d,v=LZString._f,m={string:e,val:e.charCodeAt(0),position:32768,index:1};for(a=0;a&lt;3;a+=1){t[a]=a}l=0;h=Math.pow(2,2);p=1;while(p!=h){c=m.val&amp;m.position;m.position&gt;&gt;=1;if(m.position==0){m.position=32768;m.val=m.string.charCodeAt(m.index++)}l|=(c&gt;0?1:0)*p;p&lt;&lt;=1}switch(n=l){case 0:l=0;h=Math.pow(2,8);p=1;while(p!=h){c=m.val&amp;m.position;m.position&gt;&gt;=1;if(m.position==0){m.position=32768;m.val=m.string.charCodeAt(m.index++)}l|=(c&gt;0?1:0)*p;p&lt;&lt;=1}d=v(l);break;case 1:l=0;h=Math.pow(2,16);p=1;while(p!=h){c=m.val&amp;m.position;m.position&gt;&gt;=1;if(m.position==0){m.position=32768;m.val=m.string.charCodeAt(m.index++)}l|=(c&gt;0?1:0)*p;p&lt;&lt;=1}d=v(l);break;case 2:return&quot;&quot;}t[3]=d;f=u=d;while(true){if(m.index&gt;m.string.length){return&quot;&quot;}l=0;h=Math.pow(2,s);p=1;while(p!=h){c=m.val&amp;m.position;m.position&gt;&gt;=1;if(m.position==0){m.position=32768;m.val=m.string.charCodeAt(m.index++)}l|=(c&gt;0?1:0)*p;p&lt;&lt;=1}switch(d=l){case 0:l=0;h=Math.pow(2,8);p=1;while(p!=h){c=m.val&amp;m.position;m.position&gt;&gt;=1;if(m.position==0){m.position=32768;m.val=m.string.charCodeAt(m.index++)}l|=(c&gt;0?1:0)*p;p&lt;&lt;=1}t[i++]=v(l);d=i-1;r--;break;case 1:l=0;h=Math.pow(2,16);p=1;while(p!=h){c=m.val&amp;m.position;m.position&gt;&gt;=1;if(m.position==0){m.position=32768;m.val=m.string.charCodeAt(m.index++)}l|=(c&gt;0?1:0)*p;p&lt;&lt;=1}t[i++]=v(l);d=i-1;r--;break;case 2:return u}if(r==0){r=Math.pow(2,s);s++}if(t[d]){o=t[d]}else{if(d===i){o=f+f.charAt(0)}else{return null}}u+=o;t[i++]=f+o.charAt(0);r--;f=o;if(r==0){r=Math.pow(2,s);s++}}}};if(typeof module!==&quot;undefined&quot;&amp;&amp;module!=null){module.exports=LZString}</td>
      </tr>
</table>

  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="https://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.04755s from github-fe116-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-suggester-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents js-suggester-field" placeholder=""></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x flash-close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-2d727fed4d969b14b28165c75ad12d7dddd56c0198fa70cedc3fdad7ac395b2c.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-f3e9a2204fcfc6f7dde250e61ca35353411880024102cba14a0bd45f05f1e74f.js" type="text/javascript"></script>
      
      
  </body>
</html>

