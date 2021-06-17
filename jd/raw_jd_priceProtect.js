<!DOCTYPE html>
<html lang="en-US" class="theme-">
<head data-suburl="">
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta http-equiv="x-ua-compatible" content="ie=edge">
	<title>hopol/shuye72-Actions-JD - jd_priceProtect.js at main -  shuye72-Actions-JD - HopoL&#39;S Gitea </title>
	<link rel="manifest" href="data:application/json;base64,eyJuYW1lIjoiSG9wb0wnUyBHaXRlYSIsInNob3J0X25hbWUiOiJIb3BvTCdTIEdpdGVhIiwic3RhcnRfdXJsIjoiaHR0cHM6Ly9naXQuaG9wb2wuY24vIiwiaWNvbnMiOlt7InNyYyI6Imh0dHBzOi8vZ2l0LmhvcG9sLmNuL2ltZy9sb2dvLnBuZyIsInR5cGUiOiJpbWFnZS9wbmciLCJzaXplcyI6IjUxMng1MTIifSx7InNyYyI6Imh0dHBzOi8vZ2l0LmhvcG9sLmNuL2ltZy9sb2dvLnN2ZyIsInR5cGUiOiJpbWFnZS9zdmcreG1sIiwic2l6ZXMiOiI1MTJ4NTEyIn1dfQ=="/>
	<meta name="theme-color" content="#6cc644">
	<meta name="default-theme" content="gitea" />
	<meta name="author" content="hopol" />
	<meta name="description" content="shuye72-Actions-JD" />
	<meta name="keywords" content="go,git,self-hosted,gitea">
	<meta name="referrer" content="no-referrer" />
	<meta name="_csrf" content="raoqWP_5BTL4mJfAOZzuiWLSXA46MTYyMzc0MTUyMjA4MTU2NjExMw" />
	
	
	

	<script>
		window.config = {
			AppVer: '1.15.0\u002bdev-65-g0bb8bd819',
			AppSubUrl: '',
			StaticUrlPrefix: '',
			UseServiceWorker:  true ,
			csrf: 'raoqWP_5BTL4mJfAOZzuiWLSXA46MTYyMzc0MTUyMjA4MTU2NjExMw',
			HighlightJS: false,
			SimpleMDE: false,
			Tribute: false,
			NotificationSettings: {
				MinTimeout:  10000 ,
				TimeoutStep:   10000 ,
				MaxTimeout:  60000 ,
				EventSourceUpdateTime:  10000 ,
			},
			EnableTimetracking: true,
			PageIsProjects: false,
			
		};
	</script>
	<link rel="icon" href="/img/logo.svg" type="image/svg+xml">
	<link rel="alternate icon" href="/img/favicon.png" type="image/png">

	<link rel="stylesheet" href="/css/index.css?v=5180b6b6f1f6fefd5d36c88a1226f01d">
	<noscript>
		<style>
			.dropdown:hover > .menu { display: block; }
			.ui.secondary.menu .dropdown.item > .menu { margin-top: 0; }
		</style>
	</noscript>
	<style class="list-search-style"></style>

	
		<meta property="og:title" content="shuye72-Actions-JD" />
		<meta property="og:url" content="https://git.hopol.cn/hopol/shuye72-Actions-JD" />
		
	
	<meta property="og:type" content="object" />
	
		<meta property="og:image" content="https://git.hopol.cn/user/avatar/hopol/-1" />
	

<meta property="og:site_name" content="HopoL&#39;S Gitea" />

<script charset="UTF-8" id="LA_COLLECT" src="//sdk.51.la/js-sdk-pro.min.js"></script>
<script>LA.init({id: "JH0VGs34G29IOHIZ",ck: "JH0VGs34G29IOHIZ"})</script>
</head>
<body>
	

	<div class="full height">
		<noscript>This website works better with JavaScript.</noscript>

		

		
			<div class="ui top secondary stackable main menu following bar light">
				<div class="ui container" id="navbar">
	<div class="item brand" style="justify-content: space-between;">
		<a href="/">
			<img class="ui mini image" with="30" height="30" src="/img/logo.svg">
		</a>
		<div class="ui basic icon button mobile-only" id="navbar-expand-toggle">
			<i class="sidebar icon"></i>
		</div>
	</div>

	
		<a class="item " href="/">Home</a>
		<a class="item " href="/explore/repos">Explore</a>
	

	

	


	
		<a class="item" target="_blank" rel="noopener noreferrer" href="https://docs.gitea.io">Help</a>
		<div class="right stackable menu">
			
			<a class="item" rel="nofollow" href="/user/login?redirect_to=%2fhopol%2fshuye72-Actions-JD%2fsrc%2fbranch%2fmain%2fjd_priceProtect.js">
				<svg viewBox="0 0 16 16" class="svg octicon-sign-in" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M2 2.75C2 1.784 2.784 1 3.75 1h2.5a.75.75 0 0 1 0 1.5h-2.5a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h2.5a.75.75 0 0 1 0 1.5h-2.5A1.75 1.75 0 0 1 2 13.25V2.75zm6.56 4.5 1.97-1.97a.75.75 0 1 0-1.06-1.06L6.22 7.47a.75.75 0 0 0 0 1.06l3.25 3.25a.75.75 0 1 0 1.06-1.06L8.56 8.75h5.69a.75.75 0 0 0 0-1.5H8.56z"/></svg> Sign In
			</a>
		</div>
	
</div>

			</div>
		


<div class="page-content repository file list ">
	<div class="header-wrapper">

	<div class="ui container">
		<div class="repo-header">
			<div class="repo-title-wrap df fc">
				<div class="repo-title">
					
					
						<div class="repo-icon mr-3">
	
		
			<svg viewBox="0 0 16 16" class="svg octicon-mirror" width="32" height="32" aria-hidden="true"><path fill-rule="evenodd" d="M8.75 1.75a.75.75 0 0 0-1.5 0v.5a.75.75 0 0 0 1.5 0v-.5zM8 4a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0v-.5A.75.75 0 0 1 8 4zm.75 3.75a.75.75 0 0 0-1.5 0v.5a.75.75 0 0 0 1.5 0v-.5zM8 10a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0v-.5A.75.75 0 0 1 8 10zm0 3a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0v-.5A.75.75 0 0 1 8 13zm7.547-9.939A.75.75 0 0 1 16 3.75v8.5a.75.75 0 0 1-1.265.545l-4.5-4.25a.75.75 0 0 1 0-1.09l4.5-4.25a.75.75 0 0 1 .812-.144zM11.842 8l2.658 2.51V5.49L11.842 8zM0 12.25a.75.75 0 0 0 1.265.545l4.5-4.25a.75.75 0 0 0 0-1.09l-4.5-4.25A.75.75 0 0 0 0 3.75v8.5zm1.5-6.76L4.158 8 1.5 10.51V5.49z"/></svg>
		
	
</div>

					
					<a href="/hopol">hopol</a>
					<div class="mx-2">/</div>
					<a href="/hopol/shuye72-Actions-JD">shuye72-Actions-JD</a>
					<div class="labels df ac fw">
						
							
								
							
						
						
					</div>
				</div>
				<div class="fork-flag">mirror of <a target="_blank" rel="noopener noreferrer" href="https://gitee.com/shuye72/MyActions">https://gitee.com/shuye72/MyActions</a></div>
				
				
			</div>
			
				<div class="repo-buttons">
					
					<form method="post" action="/hopol/shuye72-Actions-JD/action/watch?redirect_to=%2fhopol%2fshuye72-Actions-JD%2fsrc%2fbranch%2fmain%2fjd_priceProtect.js">
						<input type="hidden" name="_csrf" value="raoqWP_5BTL4mJfAOZzuiWLSXA46MTYyMzc0MTUyMjA4MTU2NjExMw">
						<div class="ui labeled button poping up" tabindex="0" data-content="Sign in to watch this repository." data-position="top center" data-variation="tiny">
							<button type="submit" class="ui compact small basic button" disabled>
								<svg viewBox="0 0 16 16" class="svg octicon-eye" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 0 1 0 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 0 1 0-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 0 0 0 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 0 0 0-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>Watch
							</button>
							<a class="ui basic label" href="/hopol/shuye72-Actions-JD/watchers">
								1
							</a>
						</div>
					</form>
					<form method="post" action="/hopol/shuye72-Actions-JD/action/star?redirect_to=%2fhopol%2fshuye72-Actions-JD%2fsrc%2fbranch%2fmain%2fjd_priceProtect.js">
						<input type="hidden" name="_csrf" value="raoqWP_5BTL4mJfAOZzuiWLSXA46MTYyMzc0MTUyMjA4MTU2NjExMw">
						<div class="ui labeled button poping up" tabindex="0" data-content="Sign in to star this repository." data-position="top center" data-variation="tiny">
							<button type="submit" class="ui compact small basic button" disabled>
								<svg viewBox="0 0 16 16" class="svg octicon-star" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694v.001z"/></svg>Star
							</button>
							<a class="ui basic label" href="/hopol/shuye72-Actions-JD/stars">
								0
							</a>
						</div>
					</form>
					
						<div class="ui labeled button poping up disabled" data-content="Sign in to fork this repository." data-position="top center" data-variation="tiny" tabindex="0">
							<a class="ui compact small basic button">
								<svg viewBox="0 0 16 16" class="svg octicon-repo-forked" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M5 3.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm0 2.122a2.25 2.25 0 1 0-1.5 0v.878A2.25 2.25 0 0 0 5.75 8.5h1.5v2.128a2.251 2.251 0 1 0 1.5 0V8.5h1.5a2.25 2.25 0 0 0 2.25-2.25v-.878a2.25 2.25 0 1 0-1.5 0v.878a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 5 6.25v-.878zm3.75 7.378a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm3-8.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5z"/></svg>Fork
							</a>
							<a class="ui basic label" href="/hopol/shuye72-Actions-JD/forks">
								0
							</a>
						</div>
					
				</div>
			
		</div>
	</div>

	<div class="ui tabs container">
		
			<div class="ui tabular stackable menu navbar">
				
				<a class="active item" href="/hopol/shuye72-Actions-JD">
					<svg viewBox="0 0 16 16" class="svg octicon-code" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4.72 3.22a.75.75 0 0 1 1.06 1.06L2.06 8l3.72 3.72a.75.75 0 1 1-1.06 1.06L.47 8.53a.75.75 0 0 1 0-1.06l4.25-4.25zm6.56 0a.75.75 0 1 0-1.06 1.06L13.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06l4.25-4.25a.75.75 0 0 0 0-1.06l-4.25-4.25z"/></svg> Code
				</a>
				

				
					<a class=" item" href="/hopol/shuye72-Actions-JD/issues">
						<svg viewBox="0 0 16 16" class="svg octicon-issue-opened" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm9 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-.25-6.25a.75.75 0 0 0-1.5 0v3.5a.75.75 0 0 0 1.5 0v-3.5z"/></svg> Issues
						
					</a>
				

				

				

				
					<a href="/hopol/shuye72-Actions-JD/projects" class=" item">
						<svg viewBox="0 0 16 16" class="svg octicon-project" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.75 0A1.75 1.75 0 0 0 0 1.75v12.5C0 15.216.784 16 1.75 16h12.5A1.75 1.75 0 0 0 16 14.25V1.75A1.75 1.75 0 0 0 14.25 0H1.75zM1.5 1.75a.25.25 0 0 1 .25-.25h12.5a.25.25 0 0 1 .25.25v12.5a.25.25 0 0 1-.25.25H1.75a.25.25 0 0 1-.25-.25V1.75zM11.75 3a.75.75 0 0 0-.75.75v7.5a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75zm-8.25.75a.75.75 0 0 1 1.5 0v5.5a.75.75 0 0 1-1.5 0v-5.5zM8 3a.75.75 0 0 0-.75.75v3.5a.75.75 0 0 0 1.5 0v-3.5A.75.75 0 0 0 8 3z"/></svg> Projects
						
					</a>
				

				
				<a class=" item" href="/hopol/shuye72-Actions-JD/releases">
					<svg viewBox="0 0 16 16" class="svg octicon-tag" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M2.5 7.775V2.75a.25.25 0 0 1 .25-.25h5.025a.25.25 0 0 1 .177.073l6.25 6.25a.25.25 0 0 1 0 .354l-5.025 5.025a.25.25 0 0 1-.354 0l-6.25-6.25a.25.25 0 0 1-.073-.177zm-1.5 0V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.75 1.75 0 0 1 1 7.775zM6 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/></svg> Releases
					
				</a>
				

				
					<a class=" item" href="/hopol/shuye72-Actions-JD/wiki" >
						<svg viewBox="0 0 16 16" class="svg octicon-book" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 1.75A.75.75 0 0 1 .75 1h4.253c1.227 0 2.317.59 3 1.501A3.744 3.744 0 0 1 11.006 1h4.245a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-4.507a2.25 2.25 0 0 0-1.591.659l-.622.621a.75.75 0 0 1-1.06 0l-.622-.621A2.25 2.25 0 0 0 5.258 13H.75a.75.75 0 0 1-.75-.75V1.75zm8.755 3a2.25 2.25 0 0 1 2.25-2.25H14.5v9h-3.757c-.71 0-1.4.201-1.992.572l.004-7.322zm-1.504 7.324.004-5.073-.002-2.253A2.25 2.25 0 0 0 5.003 2.5H1.5v9h3.757a3.75 3.75 0 0 1 1.994.574z"/></svg> Wiki
					</a>
				

				
					<a class=" item" href="/hopol/shuye72-Actions-JD/activity">
						<svg viewBox="0 0 16 16" class="svg octicon-pulse" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M6 2a.75.75 0 0 1 .696.471L10 10.731l1.304-3.26A.75.75 0 0 1 12 7h3.25a.75.75 0 0 1 0 1.5h-2.742l-1.812 4.528a.75.75 0 0 1-1.392 0L6 4.77 4.696 8.03A.75.75 0 0 1 4 8.5H.75a.75.75 0 0 1 0-1.5h2.742l1.812-4.529A.75.75 0 0 1 6 2z"/></svg> Activity
					</a>
				

				

				
			</div>
		
	</div>
	<div class="ui tabs divider"></div>
</div>

	<div class="ui container ">
		



		<div class="ui repo-description">
			<div id="repo-desc">
				
				<a class="link" href=""></a>
			</div>
			
		</div>
		<div class="mt-3" id="repo-topics">
		
		
		</div>
		
		<div class="hide" id="validate_prompt">
			<span id="count_prompt">You can not select more than 25 topics</span>
			<span id="format_prompt">Topics must start with a letter or number, can include dashes (&#39;-&#39;) and can be up to 35 characters long.</span>
		</div>
		
		<div class="ui segments repository-summary repository-summary-language-stats mt-3">
	<div class="ui segment sub-menu repository-menu">
		<div class="ui two horizontal center link list">
			
				<div class="item">
					<a class="ui" href="/hopol/shuye72-Actions-JD/commits/branch/main"><svg viewBox="0 0 16 16" class="svg octicon-history" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.643 3.143.427 1.927A.25.25 0 0 0 0 2.104V5.75c0 .138.112.25.25.25h3.646a.25.25 0 0 0 .177-.427L2.715 4.215a6.5 6.5 0 1 1-1.18 4.458.75.75 0 1 0-1.493.154 8.001 8.001 0 1 0 1.6-5.684zM7.75 4a.75.75 0 0 1 .75.75v2.992l2.028.812a.75.75 0 0 1-.557 1.392l-2.5-1A.75.75 0 0 1 7 8.25v-3.5A.75.75 0 0 1 7.75 4z"/></svg> <b>59</b> Commits</a>
				</div>
				<div class="item">
					<a class="ui" href="/hopol/shuye72-Actions-JD/branches"><svg viewBox="0 0 16 16" class="svg octicon-git-branch" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5zm-2.25.75a2.25 2.25 0 1 1 3 2.122V6A2.5 2.5 0 0 1 10 8.5H6a1 1 0 0 0-1 1v1.128a2.251 2.251 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.5 0v1.836A2.492 2.492 0 0 1 6 7h4a1 1 0 0 0 1-1v-.628A2.25 2.25 0 0 1 9.5 3.25zM4.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5zM3.5 3.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0z"/></svg> <b>1</b> Branch</a>
				</div>
				
					<div class="item">
						<a class="ui" href="/hopol/shuye72-Actions-JD/tags"><svg viewBox="0 0 16 16" class="svg octicon-tag" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M2.5 7.775V2.75a.25.25 0 0 1 .25-.25h5.025a.25.25 0 0 1 .177.073l6.25 6.25a.25.25 0 0 1 0 .354l-5.025 5.025a.25.25 0 0 1-.354 0l-6.25-6.25a.25.25 0 0 1-.073-.177zm-1.5 0V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.75 1.75 0 0 1 1 7.775zM6 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/></svg> <b>0</b> Tags</a>
					</div>
				
				<div class="item">
					<span class="ui"><svg viewBox="0 0 16 16" class="svg octicon-database" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M2.5 3.5c0-.133.058-.318.282-.55.227-.237.592-.484 1.1-.708C4.899 1.795 6.354 1.5 8 1.5c1.647 0 3.102.295 4.117.742.51.224.874.47 1.101.707.224.233.282.418.282.551 0 .133-.058.318-.282.55-.227.237-.592.484-1.1.708C11.101 5.205 9.646 5.5 8 5.5c-1.647 0-3.102-.295-4.117-.742-.51-.224-.874-.47-1.101-.707-.224-.233-.282-.418-.282-.551zM1 3.5c0-.626.292-1.165.7-1.59.406-.422.956-.767 1.579-1.041C4.525.32 6.195 0 8 0c1.805 0 3.475.32 4.722.869.622.274 1.172.62 1.578 1.04.408.426.7.965.7 1.591v9c0 .626-.292 1.165-.7 1.59-.406.422-.956.767-1.579 1.041C11.476 15.68 9.806 16 8 16c-1.805 0-3.475-.32-4.721-.869-.623-.274-1.173-.62-1.579-1.04-.408-.426-.7-.965-.7-1.591v-9zM2.5 8V5.724c.241.15.503.286.779.407C4.525 6.68 6.195 7 8 7c1.805 0 3.475-.32 4.722-.869.275-.121.537-.257.778-.407V8c0 .133-.058.318-.282.55-.227.237-.592.484-1.1.708C11.101 9.705 9.646 10 8 10c-1.647 0-3.102-.295-4.117-.742-.51-.224-.874-.47-1.101-.707C2.558 8.318 2.5 8.133 2.5 8zm0 2.225V12.5c0 .133.058.318.282.55.227.237.592.484 1.1.708 1.016.447 2.471.742 4.118.742 1.647 0 3.102-.295 4.117-.742.51-.224.874-.47 1.101-.707.224-.233.282-.418.282-.551v-2.275c-.241.15-.503.285-.778.406-1.247.549-2.917.869-4.722.869-1.805 0-3.475-.32-4.721-.869a6.236 6.236 0 0 1-.779-.406z"/></svg> <b>35 MiB</b></span>
				</div>
			
		</div>
	</div>
	
	<div class="ui segment sub-menu language-stats-details" style="display: none">
		<div class="ui horizontal center link list">
			
			<div class="item df ac jc">
				<i class="color-icon mr-3" style="background-color: #f1e05a"></i>
				<span class="bold mr-3">
					
						JavaScript
					
				</span>
				95.8%
			</div>
			
			<div class="item df ac jc">
				<i class="color-icon mr-3" style="background-color: #3572A5"></i>
				<span class="bold mr-3">
					
						Python
					
				</span>
				3.5%
			</div>
			
			<div class="item df ac jc">
				<i class="color-icon mr-3" style="background-color: #89e051"></i>
				<span class="bold mr-3">
					
						Shell
					
				</span>
				0.7%
			</div>
			
		</div>
	</div>
	<a class="ui segment language-stats">
		
		<div class="bar" style="width: 95.8%; background-color: #f1e05a">&nbsp;</div>
		
		<div class="bar" style="width: 3.5%; background-color: #3572A5">&nbsp;</div>
		
		<div class="bar" style="width: 0.7%; background-color: #89e051">&nbsp;</div>
		
	</a>
	
</div>

		<div class="ui stackable secondary menu mobile--margin-between-items mobile--no-negative-margins">
			<div class="fitted item choose reference mr-1">
	<div class="ui floating filter dropdown custom" data-can-create-branch="false" data-no-results="No results found.">
		<div class="ui basic small compact button" @click="menuVisible = !menuVisible" @keyup.enter="menuVisible = !menuVisible">
			<span class="text">
				<svg viewBox="0 0 16 16" class="svg octicon-git-branch" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5zm-2.25.75a2.25 2.25 0 1 1 3 2.122V6A2.5 2.5 0 0 1 10 8.5H6a1 1 0 0 0-1 1v1.128a2.251 2.251 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.5 0v1.836A2.492 2.492 0 0 1 6 7h4a1 1 0 0 0 1-1v-.628A2.25 2.25 0 0 1 9.5 3.25zM4.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5zM3.5 3.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0z"/></svg>
				Branch:
				<strong>main</strong>
			</span>
			<svg viewBox="0 0 16 16" class="dropdown icon svg octicon-triangle-down" width="14" height="14" aria-hidden="true"><path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427z"/></svg>
		</div>
		<div class="data" style="display: none" data-mode="branches">
			
				<div class="item branch selected" data-url="/hopol/shuye72-Actions-JD/src/branch/main/jd_priceProtect.js">main</div>
			
			
		</div>
		<div class="menu transition" :class="{visible: menuVisible}" v-if="menuVisible" v-cloak>
			<div class="ui icon search input">
				<i class="icon df ac jc m-0"><svg viewBox="0 0 16 16" class="svg octicon-filter" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M.75 3a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5H.75zM3 7.75A.75.75 0 0 1 3.75 7h8.5a.75.75 0 0 1 0 1.5h-8.5A.75.75 0 0 1 3 7.75zm3 4a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75z"/></svg></i>
				<input name="search" ref="searchField" v-model="searchTerm" @keydown="keydown($event)" placeholder="Filter branch or tag...">
			</div>
			<div class="header branch-tag-choice">
				<div class="ui grid">
					<div class="two column row">
						<a class="reference column" href="#" @click="createTag = false; mode = 'branches'; focusSearchField()">
							<span class="text" :class="{black: mode == 'branches'}">
								<svg viewBox="0 0 16 16" class="mr-2 svg octicon-git-branch" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5zm-2.25.75a2.25 2.25 0 1 1 3 2.122V6A2.5 2.5 0 0 1 10 8.5H6a1 1 0 0 0-1 1v1.128a2.251 2.251 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.5 0v1.836A2.492 2.492 0 0 1 6 7h4a1 1 0 0 0 1-1v-.628A2.25 2.25 0 0 1 9.5 3.25zM4.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5zM3.5 3.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0z"/></svg>Branches
							</span>
						</a>
						<a class="reference column" href="#" @click="createTag = true; mode = 'tags'; focusSearchField()">
							<span class="text" :class="{black: mode == 'tags'}">
								<svg viewBox="0 0 16 16" class="mr-2 svg octicon-tag" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M2.5 7.775V2.75a.25.25 0 0 1 .25-.25h5.025a.25.25 0 0 1 .177.073l6.25 6.25a.25.25 0 0 1 0 .354l-5.025 5.025a.25.25 0 0 1-.354 0l-6.25-6.25a.25.25 0 0 1-.073-.177zm-1.5 0V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.75 1.75 0 0 1 1 7.775zM6 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/></svg>Tags
							</span>
						</a>
					</div>
				</div>
			</div>
			<div class="scrolling menu" ref="scrollContainer">
				<div v-for="(item, index) in filteredItems" :key="item.name" class="item" :class="{selected: item.selected, active: active == index}" @click="selectItem(item)" :ref="'listItem' + index">${ item.name }</div>
				<div class="item" v-if="showCreateNewBranch" :class="{active: active == filteredItems.length}" :ref="'listItem' + filteredItems.length">
					<a href="#" @click="createNewBranch()">
						<div v-show="createTag">
							<i class="reference tags icon"></i>
							Create tag <strong>${ searchTerm }</strong>
						</div>
						<div v-show="!createTag">
							<svg viewBox="0 0 16 16" class="svg octicon-git-branch" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5zm-2.25.75a2.25 2.25 0 1 1 3 2.122V6A2.5 2.5 0 0 1 10 8.5H6a1 1 0 0 0-1 1v1.128a2.251 2.251 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.5 0v1.836A2.492 2.492 0 0 1 6 7h4a1 1 0 0 0 1-1v-.628A2.25 2.25 0 0 1 9.5 3.25zM4.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5zM3.5 3.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0z"/></svg>
							Create branch <strong>${ searchTerm }</strong>
						</div>
						<div class="text small">
							
								from &#39;main&#39;
							
						</div>
					</a>
					<form ref="newBranchForm" action="/hopol/shuye72-Actions-JD/branches/_new/branch/main" method="post">
						<input type="hidden" name="_csrf" value="raoqWP_5BTL4mJfAOZzuiWLSXA46MTYyMzc0MTUyMjA4MTU2NjExMw">
						<input type="hidden" name="new_branch_name" v-model="searchTerm">
						<input type="hidden" name="create_tag" v-model="createTag">
					</form>
				</div>
			</div>
			<div class="message" v-if="showNoResults">${ noResults }</div>
		</div>
	</div>
</div>

			
			
			
			
				<div class="fitted item"><span class="ui breadcrumb repo-path"><a class="section" href="/hopol/shuye72-Actions-JD/src/branch/main" title="shuye72-Actions-JD">shuye72-Actions-JD</a><span class="divider">/</span><span class="active section" title="jd_priceProtect.js">jd_priceProtect.js</span></span></div>
			
			<div class="right fitted item mr-0" id="file-buttons">
				<div class="ui tiny primary buttons">
					
					
				</div>

			</div>
			<div class="fitted item">
				
			</div>
			<div class="fitted item">
				
				
			</div>
		</div>
		
			<div class="tab-size-8 non-diff-file-content">
	<h4 class="file-header ui top attached header df ac sb">
		<div class="file-header-left df ac">
			
				<div class="file-info text grey normal mono">
					
					
						<div class="file-info-entry">
							557 lines
						</div>
					
					
						<div class="file-info-entry">
							24 KiB
						</div>
					
					
				</div>
			
		</div>
		
		<div class="file-header-right file-actions df ac">
			
			<div class="ui buttons mr-2">
				<a class="ui mini basic button" href="/hopol/shuye72-Actions-JD/raw/branch/main/jd_priceProtect.js">Raw</a>
				
					<a class="ui mini basic button" href="/hopol/shuye72-Actions-JD/src/commit/b20d70a3f2b3172befc21a62350fb7e722452025/jd_priceProtect.js">Permalink</a>
				
				
					<a class="ui mini basic button" href="/hopol/shuye72-Actions-JD/blame/branch/main/jd_priceProtect.js">Blame</a>
				
				<a class="ui mini basic button" href="/hopol/shuye72-Actions-JD/commits/branch/main/jd_priceProtect.js">History</a>
			</div>
			
		</div>
		
	</h4>
	<div class="ui attached table unstackable segment">
		<div class="file-view code-view">
			
				
				<table>
					<tbody>
						
						<tr>
							<td id="L1" class="lines-num">
								<span id="L1" data-line-number="1"></span>
							</td>
							<td rel="L1" class="lines-code chroma">
								<code class="code-inner"><span class="cm">/*</code>
							</td>
						</tr>
						
						<tr>
							<td id="L2" class="lines-num">
								<span id="L2" data-line-number="2"></span>
							</td>
							<td rel="L2" class="lines-code chroma">
								<code class="code-inner"></span><span class="cm">京东保价</code>
							</td>
						</tr>
						
						<tr>
							<td id="L3" class="lines-num">
								<span id="L3" data-line-number="3"></span>
							</td>
							<td rel="L3" class="lines-code chroma">
								<code class="code-inner"></span><span class="cm">京东 api 只能查询60天的订单</code>
							</td>
						</tr>
						
						<tr>
							<td id="L4" class="lines-num">
								<span id="L4" data-line-number="4"></span>
							</td>
							<td rel="L4" class="lines-code chroma">
								<code class="code-inner"></span><span class="cm">保价期限是以物流签收时间为准的，30天是最长保价期。</code>
							</td>
						</tr>
						
						<tr>
							<td id="L5" class="lines-num">
								<span id="L5" data-line-number="5"></span>
							</td>
							<td rel="L5" class="lines-code chroma">
								<code class="code-inner"></span><span class="cm">所以订单下单时间以及发货、收货时间，也可能占用很多天，60天内的订单进行保价是正常的。</code>
							</td>
						</tr>
						
						<tr>
							<td id="L6" class="lines-num">
								<span id="L6" data-line-number="6"></span>
							</td>
							<td rel="L6" class="lines-code chroma">
								<code class="code-inner"></span><span class="cm">没进行过保价的60天内的订单。查询一次，不符合保价的，不会再次申请保价。</code>
							</td>
						</tr>
						
						<tr>
							<td id="L7" class="lines-num">
								<span id="L7" data-line-number="7"></span>
							</td>
							<td rel="L7" class="lines-code chroma">
								<code class="code-inner"></span><span class="cm">支持云端cookie使用</code>
							</td>
						</tr>
						
						<tr>
							<td id="L8" class="lines-num">
								<span id="L8" data-line-number="8"></span>
							</td>
							<td rel="L8" class="lines-code chroma">
								<code class="code-inner"></span><span class="cm">修改自：https://raw.githubusercontent.com/ZCY01/daily_scripts/main/jd/jd_priceProtect.js</code>
							</td>
						</tr>
						
						<tr>
							<td id="L9" class="lines-num">
								<span id="L9" data-line-number="9"></span>
							</td>
							<td rel="L9" class="lines-code chroma">
								<code class="code-inner"></span><span class="cm">修改自：https://raw.githubusercontent.com/id77/QuantumultX/master/task/jdGuaranteedPrice.js</code>
							</td>
						</tr>
						
						<tr>
							<td id="L10" class="lines-num">
								<span id="L10" data-line-number="10"></span>
							</td>
							<td rel="L10" class="lines-code chroma">
								<code class="code-inner"></span><span class="cm"></code>
							</td>
						</tr>
						
						<tr>
							<td id="L11" class="lines-num">
								<span id="L11" data-line-number="11"></span>
							</td>
							<td rel="L11" class="lines-code chroma">
								<code class="code-inner"></span><span class="cm">京东保价页面脚本：https://static.360buyimg.com/siteppStatic/script/priceskus-phone.js</code>
							</td>
						</tr>
						
						<tr>
							<td id="L12" class="lines-num">
								<span id="L12" data-line-number="12"></span>
							</td>
							<td rel="L12" class="lines-code chroma">
								<code class="code-inner"></span><span class="cm">iOS同时支持使用 NobyDa 与 domplin 脚本的京东 cookie</code>
							</td>
						</tr>
						
						<tr>
							<td id="L13" class="lines-num">
								<span id="L13" data-line-number="13"></span>
							</td>
							<td rel="L13" class="lines-code chroma">
								<code class="code-inner"></span><span class="cm">活动时间：2021-2-14至2021-3-3</code>
							</td>
						</tr>
						
						<tr>
							<td id="L14" class="lines-num">
								<span id="L14" data-line-number="14"></span>
							</td>
							<td rel="L14" class="lines-code chroma">
								<code class="code-inner"></span><span class="cm">活动地址：https://prodev.m.jd.com/jdlite/active/31U4T6S4PbcK83HyLPioeCWrD63j/index.html</code>
							</td>
						</tr>
						
						<tr>
							<td id="L15" class="lines-num">
								<span id="L15" data-line-number="15"></span>
							</td>
							<td rel="L15" class="lines-code chroma">
								<code class="code-inner"></span><span class="cm">活动入口：京东保价</code>
							</td>
						</tr>
						
						<tr>
							<td id="L16" class="lines-num">
								<span id="L16" data-line-number="16"></span>
							</td>
							<td rel="L16" class="lines-code chroma">
								<code class="code-inner"></span><span class="cm">已支持IOS双京东账号,Node.js支持N个京东账号</code>
							</td>
						</tr>
						
						<tr>
							<td id="L17" class="lines-num">
								<span id="L17" data-line-number="17"></span>
							</td>
							<td rel="L17" class="lines-code chroma">
								<code class="code-inner"></span><span class="cm">脚本兼容: QuantumultX, Surge, Loon, JSBox, Node.js</code>
							</td>
						</tr>
						
						<tr>
							<td id="L18" class="lines-num">
								<span id="L18" data-line-number="18"></span>
							</td>
							<td rel="L18" class="lines-code chroma">
								<code class="code-inner"></span><span class="cm">============Quantumultx===============</code>
							</td>
						</tr>
						
						<tr>
							<td id="L19" class="lines-num">
								<span id="L19" data-line-number="19"></span>
							</td>
							<td rel="L19" class="lines-code chroma">
								<code class="code-inner"></span><span class="cm">[task_local]</code>
							</td>
						</tr>
						
						<tr>
							<td id="L20" class="lines-num">
								<span id="L20" data-line-number="20"></span>
							</td>
							<td rel="L20" class="lines-code chroma">
								<code class="code-inner"></span><span class="cm">#京东保价</code>
							</td>
						</tr>
						
						<tr>
							<td id="L21" class="lines-num">
								<span id="L21" data-line-number="21"></span>
							</td>
							<td rel="L21" class="lines-code chroma">
								<code class="code-inner"></span><span class="cm">0 2 * * * https://gitee.com/lxk0301/jd_scripts/raw/master/jd_price.js, tag=京东保价, img-url=https://raw.githubusercontent.com/Orz-3/task/master/jd.png, enabled=true</code>
							</td>
						</tr>
						
						<tr>
							<td id="L22" class="lines-num">
								<span id="L22" data-line-number="22"></span>
							</td>
							<td rel="L22" class="lines-code chroma">
								<code class="code-inner"></span><span class="cm"></code>
							</td>
						</tr>
						
						<tr>
							<td id="L23" class="lines-num">
								<span id="L23" data-line-number="23"></span>
							</td>
							<td rel="L23" class="lines-code chroma">
								<code class="code-inner"></span><span class="cm">================Loon==============</code>
							</td>
						</tr>
						
						<tr>
							<td id="L24" class="lines-num">
								<span id="L24" data-line-number="24"></span>
							</td>
							<td rel="L24" class="lines-code chroma">
								<code class="code-inner"></span><span class="cm">[Script]</code>
							</td>
						</tr>
						
						<tr>
							<td id="L25" class="lines-num">
								<span id="L25" data-line-number="25"></span>
							</td>
							<td rel="L25" class="lines-code chroma">
								<code class="code-inner"></span><span class="cm">cron &#34;0 2 * * *&#34; script-path=https://gitee.com/lxk0301/jd_scripts/raw/master/jd_price.js,tag=京东保价</code>
							</td>
						</tr>
						
						<tr>
							<td id="L26" class="lines-num">
								<span id="L26" data-line-number="26"></span>
							</td>
							<td rel="L26" class="lines-code chroma">
								<code class="code-inner"></span><span class="cm"></code>
							</td>
						</tr>
						
						<tr>
							<td id="L27" class="lines-num">
								<span id="L27" data-line-number="27"></span>
							</td>
							<td rel="L27" class="lines-code chroma">
								<code class="code-inner"></span><span class="cm">===============Surge=================</code>
							</td>
						</tr>
						
						<tr>
							<td id="L28" class="lines-num">
								<span id="L28" data-line-number="28"></span>
							</td>
							<td rel="L28" class="lines-code chroma">
								<code class="code-inner"></span><span class="cm">京东保价 = type=cron,cronexp=&#34;0 2 * * *&#34;,wake-system=1,timeout=3600,script-path=https://gitee.com/lxk0301/jd_scripts/raw/master/jd_price.js</code>
							</td>
						</tr>
						
						<tr>
							<td id="L29" class="lines-num">
								<span id="L29" data-line-number="29"></span>
							</td>
							<td rel="L29" class="lines-code chroma">
								<code class="code-inner"></span><span class="cm"></code>
							</td>
						</tr>
						
						<tr>
							<td id="L30" class="lines-num">
								<span id="L30" data-line-number="30"></span>
							</td>
							<td rel="L30" class="lines-code chroma">
								<code class="code-inner"></span><span class="cm">============小火箭=========</code>
							</td>
						</tr>
						
						<tr>
							<td id="L31" class="lines-num">
								<span id="L31" data-line-number="31"></span>
							</td>
							<td rel="L31" class="lines-code chroma">
								<code class="code-inner"></span><span class="cm">京东保价 = type=cron,script-path=https://gitee.com/lxk0301/jd_scripts/raw/master/jd_price.js, cronexpr=&#34;0 2 * * *&#34;, timeout=3600, enable=true</code>
							</td>
						</tr>
						
						<tr>
							<td id="L32" class="lines-num">
								<span id="L32" data-line-number="32"></span>
							</td>
							<td rel="L32" class="lines-code chroma">
								<code class="code-inner"></span><span class="cm"> */</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L33" class="lines-num">
								<span id="L33" data-line-number="33"></span>
							</td>
							<td rel="L33" class="lines-code chroma">
								<code class="code-inner">
</code>
							</td>
						</tr>
						
						<tr>
							<td id="L34" class="lines-num">
								<span id="L34" data-line-number="34"></span>
							</td>
							<td rel="L34" class="lines-code chroma">
								<code class="code-inner"><span class="kr">const</span> <span class="nx">$</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Env</span><span class="p">(</span><span class="s1">&#39;京东保价&#39;</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L35" class="lines-num">
								<span id="L35" data-line-number="35"></span>
							</td>
							<td rel="L35" class="lines-code chroma">
								<code class="code-inner">
</code>
							</td>
						</tr>
						
						<tr>
							<td id="L36" class="lines-num">
								<span id="L36" data-line-number="36"></span>
							</td>
							<td rel="L36" class="lines-code chroma">
								<code class="code-inner"><span class="kr">const</span> <span class="nx">selfDomain</span> <span class="o">=</span> <span class="s1">&#39;https://msitepp-fm.jd.com/&#39;</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L37" class="lines-num">
								<span id="L37" data-line-number="37"></span>
							</td>
							<td rel="L37" class="lines-code chroma">
								<code class="code-inner"><span class="kr">const</span> <span class="nx">unifiedGatewayName</span> <span class="o">=</span> <span class="s1">&#39;https://api.m.jd.com/&#39;</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L38" class="lines-num">
								<span id="L38" data-line-number="38"></span>
							</td>
							<td rel="L38" class="lines-code chroma">
								<code class="code-inner"><span class="kr">const</span> <span class="nx">jdCookieNode</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">isNode</span><span class="p">(</span><span class="p">)</span> <span class="o">?</span> <span class="nx">require</span><span class="p">(</span><span class="s1">&#39;./jdCookie.js&#39;</span><span class="p">)</span> <span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L39" class="lines-num">
								<span id="L39" data-line-number="39"></span>
							</td>
							<td rel="L39" class="lines-code chroma">
								<code class="code-inner"><span class="kd">let</span> <span class="nx">cookiesArr</span> <span class="o">=</span> <span class="p">[</span><span class="p">]</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L40" class="lines-num">
								<span id="L40" data-line-number="40"></span>
							</td>
							<td rel="L40" class="lines-code chroma">
								<code class="code-inner"><span class="k">if</span> <span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">isNode</span><span class="p">(</span><span class="p">)</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L41" class="lines-num">
								<span id="L41" data-line-number="41"></span>
							</td>
							<td rel="L41" class="lines-code chroma">
								<code class="code-inner">  <span class="nb">Object</span><span class="p">.</span><span class="nx">keys</span><span class="p">(</span><span class="nx">jdCookieNode</span><span class="p">)</span><span class="p">.</span><span class="nx">forEach</span><span class="p">(</span><span class="p">(</span><span class="nx">item</span><span class="p">)</span> <span class="p">=&gt;</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L42" class="lines-num">
								<span id="L42" data-line-number="42"></span>
							</td>
							<td rel="L42" class="lines-code chroma">
								<code class="code-inner">    <span class="nx">cookiesArr</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">jdCookieNode</span><span class="p">[</span><span class="nx">item</span><span class="p">]</span><span class="p">)</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L43" class="lines-num">
								<span id="L43" data-line-number="43"></span>
							</td>
							<td rel="L43" class="lines-code chroma">
								<code class="code-inner">  <span class="p">}</span><span class="p">)</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L44" class="lines-num">
								<span id="L44" data-line-number="44"></span>
							</td>
							<td rel="L44" class="lines-code chroma">
								<code class="code-inner">  <span class="k">if</span> <span class="p">(</span><span class="nx">process</span><span class="p">.</span><span class="nx">env</span><span class="p">.</span><span class="nx">JD_DEBUG</span> <span class="o">&amp;&amp;</span> <span class="nx">process</span><span class="p">.</span><span class="nx">env</span><span class="p">.</span><span class="nx">JD_DEBUG</span> <span class="o">===</span> <span class="s1">&#39;false&#39;</span><span class="p">)</span> <span class="nx">console</span><span class="p">.</span><span class="nx">log</span> <span class="o">=</span> <span class="p">(</span><span class="p">)</span> <span class="p">=&gt;</span> <span class="p">{</span><span class="p">}</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L45" class="lines-num">
								<span id="L45" data-line-number="45"></span>
							</td>
							<td rel="L45" class="lines-code chroma">
								<code class="code-inner"><span class="p">}</span> <span class="k">else</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L46" class="lines-num">
								<span id="L46" data-line-number="46"></span>
							</td>
							<td rel="L46" class="lines-code chroma">
								<code class="code-inner">  <span class="nx">cookiesArr</span> <span class="o">=</span> <span class="p">[</span><span class="nx">$</span><span class="p">.</span><span class="nx">getdata</span><span class="p">(</span><span class="s1">&#39;CookieJD&#39;</span><span class="p">)</span><span class="p">,</span> <span class="nx">$</span><span class="p">.</span><span class="nx">getdata</span><span class="p">(</span><span class="s1">&#39;CookieJD2&#39;</span><span class="p">)</span><span class="p">,</span> <span class="p">...</span><span class="nx">jsonParse</span><span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">getdata</span><span class="p">(</span><span class="s1">&#39;CookiesJD&#39;</span><span class="p">)</span> <span class="o">||</span> <span class="s2">&#34;[]&#34;</span><span class="p">)</span><span class="p">.</span><span class="nx">map</span><span class="p">(</span><span class="nx">item</span> <span class="p">=&gt;</span> <span class="nx">item</span><span class="p">.</span><span class="nx">cookie</span><span class="p">)</span><span class="p">]</span><span class="p">.</span><span class="nx">filter</span><span class="p">(</span><span class="nx">item</span> <span class="p">=&gt;</span> <span class="o">!</span><span class="o">!</span><span class="nx">item</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L47" class="lines-num">
								<span id="L47" data-line-number="47"></span>
							</td>
							<td rel="L47" class="lines-code chroma">
								<code class="code-inner"><span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L48" class="lines-num">
								<span id="L48" data-line-number="48"></span>
							</td>
							<td rel="L48" class="lines-code chroma">
								<code class="code-inner">
</code>
							</td>
						</tr>
						
						<tr>
							<td id="L49" class="lines-num">
								<span id="L49" data-line-number="49"></span>
							</td>
							<td rel="L49" class="lines-code chroma">
								<code class="code-inner"><span class="o">!</span><span class="p">(</span><span class="kr">async</span> <span class="p">(</span><span class="p">)</span> <span class="p">=&gt;</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L50" class="lines-num">
								<span id="L50" data-line-number="50"></span>
							</td>
							<td rel="L50" class="lines-code chroma">
								<code class="code-inner">  <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">cookiesArr</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L51" class="lines-num">
								<span id="L51" data-line-number="51"></span>
							</td>
							<td rel="L51" class="lines-code chroma">
								<code class="code-inner">    <span class="nx">$</span><span class="p">.</span><span class="nx">msg</span><span class="p">(</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L52" class="lines-num">
								<span id="L52" data-line-number="52"></span>
							</td>
							<td rel="L52" class="lines-code chroma">
								<code class="code-inner">      <span class="nx">$</span><span class="p">.</span><span class="nx">name</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L53" class="lines-num">
								<span id="L53" data-line-number="53"></span>
							</td>
							<td rel="L53" class="lines-code chroma">
								<code class="code-inner">      <span class="s1">&#39;【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取&#39;</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L54" class="lines-num">
								<span id="L54" data-line-number="54"></span>
							</td>
							<td rel="L54" class="lines-code chroma">
								<code class="code-inner">      <span class="s1">&#39;https://bean.m.jd.com/&#39;</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L55" class="lines-num">
								<span id="L55" data-line-number="55"></span>
							</td>
							<td rel="L55" class="lines-code chroma">
								<code class="code-inner">      <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L56" class="lines-num">
								<span id="L56" data-line-number="56"></span>
							</td>
							<td rel="L56" class="lines-code chroma">
								<code class="code-inner">        <span class="s1">&#39;open-url&#39;</span><span class="o">:</span> <span class="s1">&#39;https://bean.m.jd.com/&#39;</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L57" class="lines-num">
								<span id="L57" data-line-number="57"></span>
							</td>
							<td rel="L57" class="lines-code chroma">
								<code class="code-inner">      <span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L58" class="lines-num">
								<span id="L58" data-line-number="58"></span>
							</td>
							<td rel="L58" class="lines-code chroma">
								<code class="code-inner">    <span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L59" class="lines-num">
								<span id="L59" data-line-number="59"></span>
							</td>
							<td rel="L59" class="lines-code chroma">
								<code class="code-inner">    <span class="k">return</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L60" class="lines-num">
								<span id="L60" data-line-number="60"></span>
							</td>
							<td rel="L60" class="lines-code chroma">
								<code class="code-inner">  <span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L61" class="lines-num">
								<span id="L61" data-line-number="61"></span>
							</td>
							<td rel="L61" class="lines-code chroma">
								<code class="code-inner">  <span class="k">for</span> <span class="p">(</span><span class="kd">let</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">cookiesArr</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L62" class="lines-num">
								<span id="L62" data-line-number="62"></span>
							</td>
							<td rel="L62" class="lines-code chroma">
								<code class="code-inner">    <span class="k">if</span> <span class="p">(</span><span class="nx">cookiesArr</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L63" class="lines-num">
								<span id="L63" data-line-number="63"></span>
							</td>
							<td rel="L63" class="lines-code chroma">
								<code class="code-inner">      <span class="nx">$</span><span class="p">.</span><span class="nx">cookie</span> <span class="o">=</span> <span class="nx">cookiesArr</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L64" class="lines-num">
								<span id="L64" data-line-number="64"></span>
							</td>
							<td rel="L64" class="lines-code chroma">
								<code class="code-inner">      <span class="nx">$</span><span class="p">.</span><span class="nx">UserName</span> <span class="o">=</span> <span class="nb">decodeURIComponent</span><span class="p">(</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L65" class="lines-num">
								<span id="L65" data-line-number="65"></span>
							</td>
							<td rel="L65" class="lines-code chroma">
								<code class="code-inner">        <span class="nx">$</span><span class="p">.</span><span class="nx">cookie</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="sr">/pt_pin=(.+?);/</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">$</span><span class="p">.</span><span class="nx">cookie</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="sr">/pt_pin=(.+?);/</span><span class="p">)</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L66" class="lines-num">
								<span id="L66" data-line-number="66"></span>
							</td>
							<td rel="L66" class="lines-code chroma">
								<code class="code-inner">      <span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L67" class="lines-num">
								<span id="L67" data-line-number="67"></span>
							</td>
							<td rel="L67" class="lines-code chroma">
								<code class="code-inner">      <span class="nx">$</span><span class="p">.</span><span class="nx">index</span> <span class="o">=</span> <span class="nx">i</span> <span class="o">+</span> <span class="mi">1</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L68" class="lines-num">
								<span id="L68" data-line-number="68"></span>
							</td>
							<td rel="L68" class="lines-code chroma">
								<code class="code-inner">      <span class="nx">$</span><span class="p">.</span><span class="nx">isLogin</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L69" class="lines-num">
								<span id="L69" data-line-number="69"></span>
							</td>
							<td rel="L69" class="lines-code chroma">
								<code class="code-inner">      <span class="nx">$</span><span class="p">.</span><span class="nx">nickName</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L70" class="lines-num">
								<span id="L70" data-line-number="70"></span>
							</td>
							<td rel="L70" class="lines-code chroma">
								<code class="code-inner">      <span class="kr">await</span> <span class="nx">totalBean</span><span class="p">(</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L71" class="lines-num">
								<span id="L71" data-line-number="71"></span>
							</td>
							<td rel="L71" class="lines-code chroma">
								<code class="code-inner">      <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">$</span><span class="p">.</span><span class="nx">isLogin</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L72" class="lines-num">
								<span id="L72" data-line-number="72"></span>
							</td>
							<td rel="L72" class="lines-code chroma">
								<code class="code-inner">        <span class="nx">$</span><span class="p">.</span><span class="nx">msg</span><span class="p">(</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L73" class="lines-num">
								<span id="L73" data-line-number="73"></span>
							</td>
							<td rel="L73" class="lines-code chroma">
								<code class="code-inner">          <span class="nx">$</span><span class="p">.</span><span class="nx">name</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L74" class="lines-num">
								<span id="L74" data-line-number="74"></span>
							</td>
							<td rel="L74" class="lines-code chroma">
								<code class="code-inner">          <span class="sb">`</span><span class="sb">【提示】cookie已失效</span><span class="sb">`</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L75" class="lines-num">
								<span id="L75" data-line-number="75"></span>
							</td>
							<td rel="L75" class="lines-code chroma">
								<code class="code-inner">          <span class="sb">`</span><span class="sb">京东账号</span><span class="si">${</span><span class="nx">$</span><span class="p">.</span><span class="nx">index</span><span class="si">}</span><span class="sb"> </span><span class="si">${</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L76" class="lines-num">
								<span id="L76" data-line-number="76"></span>
							</td>
							<td rel="L76" class="lines-code chroma">
								<code class="code-inner">            <span class="nx">$</span><span class="p">.</span><span class="nx">nickName</span> <span class="o">||</span> <span class="nx">$</span><span class="p">.</span><span class="nx">UserName</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L77" class="lines-num">
								<span id="L77" data-line-number="77"></span>
							</td>
							<td rel="L77" class="lines-code chroma">
								<code class="code-inner">          <span class="si">}</span><span class="sb">\n</span><span class="sb">请重新登录获取</span><span class="sb">\n</span><span class="sb">https://bean.m.jd.com/</span><span class="sb">`</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L78" class="lines-num">
								<span id="L78" data-line-number="78"></span>
							</td>
							<td rel="L78" class="lines-code chroma">
								<code class="code-inner">          <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L79" class="lines-num">
								<span id="L79" data-line-number="79"></span>
							</td>
							<td rel="L79" class="lines-code chroma">
								<code class="code-inner">            <span class="s1">&#39;open-url&#39;</span><span class="o">:</span> <span class="s1">&#39;https://bean.m.jd.com/&#39;</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L80" class="lines-num">
								<span id="L80" data-line-number="80"></span>
							</td>
							<td rel="L80" class="lines-code chroma">
								<code class="code-inner">          <span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L81" class="lines-num">
								<span id="L81" data-line-number="81"></span>
							</td>
							<td rel="L81" class="lines-code chroma">
								<code class="code-inner">        <span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L82" class="lines-num">
								<span id="L82" data-line-number="82"></span>
							</td>
							<td rel="L82" class="lines-code chroma">
								<code class="code-inner">        <span class="k">continue</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L83" class="lines-num">
								<span id="L83" data-line-number="83"></span>
							</td>
							<td rel="L83" class="lines-code chroma">
								<code class="code-inner">      <span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L84" class="lines-num">
								<span id="L84" data-line-number="84"></span>
							</td>
							<td rel="L84" class="lines-code chroma">
								<code class="code-inner">      <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L85" class="lines-num">
								<span id="L85" data-line-number="85"></span>
							</td>
							<td rel="L85" class="lines-code chroma">
								<code class="code-inner">        <span class="sb">`</span><span class="sb">\n</span><span class="sb">***********开始【账号</span><span class="si">${</span><span class="nx">$</span><span class="p">.</span><span class="nx">index</span><span class="si">}</span><span class="sb">】</span><span class="si">${</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L86" class="lines-num">
								<span id="L86" data-line-number="86"></span>
							</td>
							<td rel="L86" class="lines-code chroma">
								<code class="code-inner">          <span class="nx">$</span><span class="p">.</span><span class="nx">nickName</span> <span class="o">||</span> <span class="nx">$</span><span class="p">.</span><span class="nx">UserName</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L87" class="lines-num">
								<span id="L87" data-line-number="87"></span>
							</td>
							<td rel="L87" class="lines-code chroma">
								<code class="code-inner">        <span class="si">}</span><span class="sb">********</span><span class="sb">\n</span><span class="sb">`</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L88" class="lines-num">
								<span id="L88" data-line-number="88"></span>
							</td>
							<td rel="L88" class="lines-code chroma">
								<code class="code-inner">      <span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L89" class="lines-num">
								<span id="L89" data-line-number="89"></span>
							</td>
							<td rel="L89" class="lines-code chroma">
								<code class="code-inner">      <span class="k">try</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L90" class="lines-num">
								<span id="L90" data-line-number="90"></span>
							</td>
							<td rel="L90" class="lines-code chroma">
								<code class="code-inner">        <span class="nx">$</span><span class="p">.</span><span class="nx">hasNext</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L91" class="lines-num">
								<span id="L91" data-line-number="91"></span>
							</td>
							<td rel="L91" class="lines-code chroma">
								<code class="code-inner">        <span class="nx">$</span><span class="p">.</span><span class="nx">refundtotalamount</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L92" class="lines-num">
								<span id="L92" data-line-number="92"></span>
							</td>
							<td rel="L92" class="lines-code chroma">
								<code class="code-inner">        <span class="nx">$</span><span class="p">.</span><span class="nx">orderList</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Array</span><span class="p">(</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L93" class="lines-num">
								<span id="L93" data-line-number="93"></span>
							</td>
							<td rel="L93" class="lines-code chroma">
								<code class="code-inner">        <span class="nx">$</span><span class="p">.</span><span class="nx">applyMap</span> <span class="o">=</span> <span class="p">{</span><span class="p">}</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L94" class="lines-num">
								<span id="L94" data-line-number="94"></span>
							</td>
							<td rel="L94" class="lines-code chroma">
								<code class="code-inner">        <span class="c1">// TODO</code>
							</td>
						</tr>
						
						<tr>
							<td id="L95" class="lines-num">
								<span id="L95" data-line-number="95"></span>
							</td>
							<td rel="L95" class="lines-code chroma">
								<code class="code-inner"></span><span class="c1"></span>        <span class="nx">$</span><span class="p">.</span><span class="nx">token</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L96" class="lines-num">
								<span id="L96" data-line-number="96"></span>
							</td>
							<td rel="L96" class="lines-code chroma">
								<code class="code-inner">        <span class="nx">$</span><span class="p">.</span><span class="nx">feSt</span> <span class="o">=</span> <span class="s1">&#39;f&#39;</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L97" class="lines-num">
								<span id="L97" data-line-number="97"></span>
							</td>
							<td rel="L97" class="lines-code chroma">
								<code class="code-inner">        <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="sb">`</span><span class="sb">💥 获得首页面，解析超参数</span><span class="sb">`</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L98" class="lines-num">
								<span id="L98" data-line-number="98"></span>
							</td>
							<td rel="L98" class="lines-code chroma">
								<code class="code-inner">        <span class="kr">await</span> <span class="nx">getHyperParams</span><span class="p">(</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L99" class="lines-num">
								<span id="L99" data-line-number="99"></span>
							</td>
							<td rel="L99" class="lines-code chroma">
								<code class="code-inner">        <span class="c1">// console.log($.HyperParam)</code>
							</td>
						</tr>
						
						<tr>
							<td id="L100" class="lines-num">
								<span id="L100" data-line-number="100"></span>
							</td>
							<td rel="L100" class="lines-code chroma">
								<code class="code-inner"></span><span class="c1"></span>        <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="sb">`</span><span class="sb">----------</span><span class="sb">`</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L101" class="lines-num">
								<span id="L101" data-line-number="101"></span>
							</td>
							<td rel="L101" class="lines-code chroma">
								<code class="code-inner">        <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="sb">`</span><span class="sb">🧾 获取所有价格保护列表，排除附件商品</span><span class="sb">`</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L102" class="lines-num">
								<span id="L102" data-line-number="102"></span>
							</td>
							<td rel="L102" class="lines-code chroma">
								<code class="code-inner">        <span class="k">for</span> <span class="p">(</span><span class="kd">let</span> <span class="nx">page</span> <span class="o">=</span> <span class="mi">1</span><span class="p">;</span> <span class="nx">$</span><span class="p">.</span><span class="nx">hasNext</span><span class="p">;</span> <span class="nx">page</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L103" class="lines-num">
								<span id="L103" data-line-number="103"></span>
							</td>
							<td rel="L103" class="lines-code chroma">
								<code class="code-inner">          <span class="kr">await</span> <span class="nx">getApplyData</span><span class="p">(</span><span class="nx">page</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L104" class="lines-num">
								<span id="L104" data-line-number="104"></span>
							</td>
							<td rel="L104" class="lines-code chroma">
								<code class="code-inner">        <span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L105" class="lines-num">
								<span id="L105" data-line-number="105"></span>
							</td>
							<td rel="L105" class="lines-code chroma">
								<code class="code-inner">        <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="sb">`</span><span class="sb">----------</span><span class="sb">`</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L106" class="lines-num">
								<span id="L106" data-line-number="106"></span>
							</td>
							<td rel="L106" class="lines-code chroma">
								<code class="code-inner">        <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="sb">`</span><span class="sb">🗑 删除不符合订单</span><span class="sb">`</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L107" class="lines-num">
								<span id="L107" data-line-number="107"></span>
							</td>
							<td rel="L107" class="lines-code chroma">
								<code class="code-inner">        <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="sb">`</span><span class="sb">----------</span><span class="sb">`</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L108" class="lines-num">
								<span id="L108" data-line-number="108"></span>
							</td>
							<td rel="L108" class="lines-code chroma">
								<code class="code-inner">        <span class="kd">let</span> <span class="nx">taskList</span> <span class="o">=</span> <span class="p">[</span><span class="p">]</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L109" class="lines-num">
								<span id="L109" data-line-number="109"></span>
							</td>
							<td rel="L109" class="lines-code chroma">
								<code class="code-inner">        <span class="k">for</span> <span class="p">(</span><span class="kd">let</span> <span class="nx">order</span> <span class="k">of</span> <span class="nx">$</span><span class="p">.</span><span class="nx">orderList</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L110" class="lines-num">
								<span id="L110" data-line-number="110"></span>
							</td>
							<td rel="L110" class="lines-code chroma">
								<code class="code-inner">          <span class="nx">taskList</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">historyResultQuery</span><span class="p">(</span><span class="nx">order</span><span class="p">)</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L111" class="lines-num">
								<span id="L111" data-line-number="111"></span>
							</td>
							<td rel="L111" class="lines-code chroma">
								<code class="code-inner">        <span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L112" class="lines-num">
								<span id="L112" data-line-number="112"></span>
							</td>
							<td rel="L112" class="lines-code chroma">
								<code class="code-inner">        <span class="kr">await</span> <span class="nb">Promise</span><span class="p">.</span><span class="nx">all</span><span class="p">(</span><span class="nx">taskList</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L113" class="lines-num">
								<span id="L113" data-line-number="113"></span>
							</td>
							<td rel="L113" class="lines-code chroma">
								<code class="code-inner">        <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="sb">`</span><span class="sb">----------</span><span class="sb">`</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L114" class="lines-num">
								<span id="L114" data-line-number="114"></span>
							</td>
							<td rel="L114" class="lines-code chroma">
								<code class="code-inner">        <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="sb">`</span><span class="sb">📊 </span><span class="si">${</span><span class="nx">$</span><span class="p">.</span><span class="nx">orderList</span><span class="p">.</span><span class="nx">length</span><span class="si">}</span><span class="sb">个商品即将申请价格保护！</span><span class="sb">`</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L115" class="lines-num">
								<span id="L115" data-line-number="115"></span>
							</td>
							<td rel="L115" class="lines-code chroma">
								<code class="code-inner">        <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="sb">`</span><span class="sb">----------</span><span class="sb">`</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L116" class="lines-num">
								<span id="L116" data-line-number="116"></span>
							</td>
							<td rel="L116" class="lines-code chroma">
								<code class="code-inner">        <span class="k">for</span> <span class="p">(</span><span class="kd">let</span> <span class="nx">order</span> <span class="k">of</span> <span class="nx">$</span><span class="p">.</span><span class="nx">orderList</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L117" class="lines-num">
								<span id="L117" data-line-number="117"></span>
							</td>
							<td rel="L117" class="lines-code chroma">
								<code class="code-inner">          <span class="kr">await</span> <span class="nx">skuApply</span><span class="p">(</span><span class="nx">order</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L118" class="lines-num">
								<span id="L118" data-line-number="118"></span>
							</td>
							<td rel="L118" class="lines-code chroma">
								<code class="code-inner">          <span class="kr">await</span> <span class="nx">$</span><span class="p">.</span><span class="nx">wait</span><span class="p">(</span><span class="mi">300</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L119" class="lines-num">
								<span id="L119" data-line-number="119"></span>
							</td>
							<td rel="L119" class="lines-code chroma">
								<code class="code-inner">        <span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L120" class="lines-num">
								<span id="L120" data-line-number="120"></span>
							</td>
							<td rel="L120" class="lines-code chroma">
								<code class="code-inner">        <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="sb">`</span><span class="sb">----------</span><span class="sb">`</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L121" class="lines-num">
								<span id="L121" data-line-number="121"></span>
							</td>
							<td rel="L121" class="lines-code chroma">
								<code class="code-inner">        <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="sb">`</span><span class="sb">⏳ 等待申请价格保护结果...</span><span class="sb">`</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L122" class="lines-num">
								<span id="L122" data-line-number="122"></span>
							</td>
							<td rel="L122" class="lines-code chroma">
								<code class="code-inner">        <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="sb">`</span><span class="sb">----------</span><span class="sb">`</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L123" class="lines-num">
								<span id="L123" data-line-number="123"></span>
							</td>
							<td rel="L123" class="lines-code chroma">
								<code class="code-inner">        <span class="k">for</span> <span class="p">(</span><span class="kd">let</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">1</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;=</span> <span class="mi">30</span> <span class="o">&amp;&amp;</span> <span class="nb">Object</span><span class="p">.</span><span class="nx">keys</span><span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">applyMap</span><span class="p">)</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L124" class="lines-num">
								<span id="L124" data-line-number="124"></span>
							</td>
							<td rel="L124" class="lines-code chroma">
								<code class="code-inner">          <span class="kr">await</span> <span class="nx">$</span><span class="p">.</span><span class="nx">wait</span><span class="p">(</span><span class="mi">1000</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L125" class="lines-num">
								<span id="L125" data-line-number="125"></span>
							</td>
							<td rel="L125" class="lines-code chroma">
								<code class="code-inner">          <span class="k">if</span> <span class="p">(</span><span class="nx">i</span> <span class="o">%</span> <span class="mi">5</span> <span class="o">==</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L126" class="lines-num">
								<span id="L126" data-line-number="126"></span>
							</td>
							<td rel="L126" class="lines-code chroma">
								<code class="code-inner">            <span class="kr">await</span> <span class="nx">getApplyResult</span><span class="p">(</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L127" class="lines-num">
								<span id="L127" data-line-number="127"></span>
							</td>
							<td rel="L127" class="lines-code chroma">
								<code class="code-inner">          <span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L128" class="lines-num">
								<span id="L128" data-line-number="128"></span>
							</td>
							<td rel="L128" class="lines-code chroma">
								<code class="code-inner">        <span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L129" class="lines-num">
								<span id="L129" data-line-number="129"></span>
							</td>
							<td rel="L129" class="lines-code chroma">
								<code class="code-inner">        <span class="nx">showMsg</span><span class="p">(</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L130" class="lines-num">
								<span id="L130" data-line-number="130"></span>
							</td>
							<td rel="L130" class="lines-code chroma">
								<code class="code-inner">      <span class="p">}</span> <span class="k">catch</span> <span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L131" class="lines-num">
								<span id="L131" data-line-number="131"></span>
							</td>
							<td rel="L131" class="lines-code chroma">
								<code class="code-inner">        <span class="nx">$</span><span class="p">.</span><span class="nx">logErr</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L132" class="lines-num">
								<span id="L132" data-line-number="132"></span>
							</td>
							<td rel="L132" class="lines-code chroma">
								<code class="code-inner">      <span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L133" class="lines-num">
								<span id="L133" data-line-number="133"></span>
							</td>
							<td rel="L133" class="lines-code chroma">
								<code class="code-inner">    <span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L134" class="lines-num">
								<span id="L134" data-line-number="134"></span>
							</td>
							<td rel="L134" class="lines-code chroma">
								<code class="code-inner">  <span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L135" class="lines-num">
								<span id="L135" data-line-number="135"></span>
							</td>
							<td rel="L135" class="lines-code chroma">
								<code class="code-inner"><span class="p">}</span><span class="p">)</span><span class="p">(</span><span class="p">)</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L136" class="lines-num">
								<span id="L136" data-line-number="136"></span>
							</td>
							<td rel="L136" class="lines-code chroma">
								<code class="code-inner">  <span class="p">.</span><span class="k">catch</span><span class="p">(</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">=&gt;</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L137" class="lines-num">
								<span id="L137" data-line-number="137"></span>
							</td>
							<td rel="L137" class="lines-code chroma">
								<code class="code-inner">    <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="sb">`</span><span class="sb">❗️ </span><span class="si">${</span><span class="nx">$</span><span class="p">.</span><span class="nx">name</span><span class="si">}</span><span class="sb"> 运行错误！</span><span class="sb">\n</span><span class="si">${</span><span class="nx">e</span><span class="si">}</span><span class="sb">`</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L138" class="lines-num">
								<span id="L138" data-line-number="138"></span>
							</td>
							<td rel="L138" class="lines-code chroma">
								<code class="code-inner">  <span class="p">}</span><span class="p">)</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L139" class="lines-num">
								<span id="L139" data-line-number="139"></span>
							</td>
							<td rel="L139" class="lines-code chroma">
								<code class="code-inner">  <span class="p">.</span><span class="k">finally</span><span class="p">(</span><span class="p">(</span><span class="p">)</span> <span class="p">=&gt;</span> <span class="nx">$</span><span class="p">.</span><span class="nx">done</span><span class="p">(</span><span class="p">)</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L140" class="lines-num">
								<span id="L140" data-line-number="140"></span>
							</td>
							<td rel="L140" class="lines-code chroma">
								<code class="code-inner">
</code>
							</td>
						</tr>
						
						<tr>
							<td id="L141" class="lines-num">
								<span id="L141" data-line-number="141"></span>
							</td>
							<td rel="L141" class="lines-code chroma">
								<code class="code-inner"><span class="kr">const</span> <span class="nx">getValueById</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">text</span><span class="p">,</span> <span class="nx">id</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L142" class="lines-num">
								<span id="L142" data-line-number="142"></span>
							</td>
							<td rel="L142" class="lines-code chroma">
								<code class="code-inner">  <span class="k">try</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L143" class="lines-num">
								<span id="L143" data-line-number="143"></span>
							</td>
							<td rel="L143" class="lines-code chroma">
								<code class="code-inner">    <span class="kr">const</span> <span class="nx">reg</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span><span class="sb">`</span><span class="sb">id=&#34;</span><span class="si">${</span><span class="nx">id</span><span class="si">}</span><span class="sb">&#34;.*value=&#34;(.*?)&#34;</span><span class="sb">`</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L144" class="lines-num">
								<span id="L144" data-line-number="144"></span>
							</td>
							<td rel="L144" class="lines-code chroma">
								<code class="code-inner">    <span class="kr">const</span> <span class="nx">res</span> <span class="o">=</span> <span class="nx">text</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="nx">reg</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L145" class="lines-num">
								<span id="L145" data-line-number="145"></span>
							</td>
							<td rel="L145" class="lines-code chroma">
								<code class="code-inner">    <span class="k">return</span> <span class="nx">res</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L146" class="lines-num">
								<span id="L146" data-line-number="146"></span>
							</td>
							<td rel="L146" class="lines-code chroma">
								<code class="code-inner">  <span class="p">}</span> <span class="k">catch</span> <span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L147" class="lines-num">
								<span id="L147" data-line-number="147"></span>
							</td>
							<td rel="L147" class="lines-code chroma">
								<code class="code-inner">    <span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="sb">`</span><span class="sb">getValueById:</span><span class="si">${</span><span class="nx">id</span><span class="si">}</span><span class="sb"> err</span><span class="sb">`</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L148" class="lines-num">
								<span id="L148" data-line-number="148"></span>
							</td>
							<td rel="L148" class="lines-code chroma">
								<code class="code-inner">  <span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L149" class="lines-num">
								<span id="L149" data-line-number="149"></span>
							</td>
							<td rel="L149" class="lines-code chroma">
								<code class="code-inner"><span class="p">}</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L150" class="lines-num">
								<span id="L150" data-line-number="150"></span>
							</td>
							<td rel="L150" class="lines-code chroma">
								<code class="code-inner">
</code>
							</td>
						</tr>
						
						<tr>
							<td id="L151" class="lines-num">
								<span id="L151" data-line-number="151"></span>
							</td>
							<td rel="L151" class="lines-code chroma">
								<code class="code-inner"><span class="kd">function</span> <span class="nx">getHyperParams</span><span class="p">(</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L152" class="lines-num">
								<span id="L152" data-line-number="152"></span>
							</td>
							<td rel="L152" class="lines-code chroma">
								<code class="code-inner">  <span class="k">return</span> <span class="k">new</span> <span class="nb">Promise</span><span class="p">(</span><span class="p">(</span><span class="nx">resolve</span><span class="p">,</span> <span class="nx">reject</span><span class="p">)</span> <span class="p">=&gt;</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L153" class="lines-num">
								<span id="L153" data-line-number="153"></span>
							</td>
							<td rel="L153" class="lines-code chroma">
								<code class="code-inner">    <span class="kr">const</span> <span class="nx">options</span> <span class="o">=</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L154" class="lines-num">
								<span id="L154" data-line-number="154"></span>
							</td>
							<td rel="L154" class="lines-code chroma">
								<code class="code-inner">      <span class="nx">url</span><span class="o">:</span> <span class="s1">&#39;https://msitepp-fm.jd.com/rest/priceprophone/priceProPhoneMenu&#39;</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L155" class="lines-num">
								<span id="L155" data-line-number="155"></span>
							</td>
							<td rel="L155" class="lines-code chroma">
								<code class="code-inner">      <span class="nx">headers</span><span class="o">:</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L156" class="lines-num">
								<span id="L156" data-line-number="156"></span>
							</td>
							<td rel="L156" class="lines-code chroma">
								<code class="code-inner">        <span class="nx">Host</span><span class="o">:</span> <span class="s1">&#39;msitepp-fm.jd.com&#39;</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L157" class="lines-num">
								<span id="L157" data-line-number="157"></span>
							</td>
							<td rel="L157" class="lines-code chroma">
								<code class="code-inner">        <span class="nx">Accept</span><span class="o">:</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L158" class="lines-num">
								<span id="L158" data-line-number="158"></span>
							</td>
							<td rel="L158" class="lines-code chroma">
								<code class="code-inner">          <span class="s1">&#39;text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8&#39;</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L159" class="lines-num">
								<span id="L159" data-line-number="159"></span>
							</td>
							<td rel="L159" class="lines-code chroma">
								<code class="code-inner">        <span class="nx">Connection</span><span class="o">:</span> <span class="s1">&#39;keep-alive&#39;</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L160" class="lines-num">
								<span id="L160" data-line-number="160"></span>
							</td>
							<td rel="L160" class="lines-code chroma">
								<code class="code-inner">        <span class="nx">Cookie</span><span class="o">:</span> <span class="nx">$</span><span class="p">.</span><span class="nx">cookie</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L161" class="lines-num">
								<span id="L161" data-line-number="161"></span>
							</td>
							<td rel="L161" class="lines-code chroma">
								<code class="code-inner">        <span class="s1">&#39;User-Agent&#39;</span><span class="o">:</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L162" class="lines-num">
								<span id="L162" data-line-number="162"></span>
							</td>
							<td rel="L162" class="lines-code chroma">
								<code class="code-inner">          <span class="s1">&#39;Mozilla/5.0 (iPhone; CPU iPhone OS 14_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1&#39;</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L163" class="lines-num">
								<span id="L163" data-line-number="163"></span>
							</td>
							<td rel="L163" class="lines-code chroma">
								<code class="code-inner">        <span class="s1">&#39;Accept-Language&#39;</span><span class="o">:</span> <span class="s1">&#39;zh-cn&#39;</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L164" class="lines-num">
								<span id="L164" data-line-number="164"></span>
							</td>
							<td rel="L164" class="lines-code chroma">
								<code class="code-inner">        <span class="nx">Referer</span><span class="o">:</span> <span class="s1">&#39;https://ihelp.jd.com/&#39;</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L165" class="lines-num">
								<span id="L165" data-line-number="165"></span>
							</td>
							<td rel="L165" class="lines-code chroma">
								<code class="code-inner">        <span class="s1">&#39;Accept-Encoding&#39;</span><span class="o">:</span> <span class="s1">&#39;gzip, deflate, br&#39;</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L166" class="lines-num">
								<span id="L166" data-line-number="166"></span>
							</td>
							<td rel="L166" class="lines-code chroma">
								<code class="code-inner">      <span class="p">}</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L167" class="lines-num">
								<span id="L167" data-line-number="167"></span>
							</td>
							<td rel="L167" class="lines-code chroma">
								<code class="code-inner">    <span class="p">}</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L168" class="lines-num">
								<span id="L168" data-line-number="168"></span>
							</td>
							<td rel="L168" class="lines-code chroma">
								<code class="code-inner">    <span class="nx">$</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span><span class="nx">options</span><span class="p">,</span> <span class="p">(</span><span class="nx">err</span><span class="p">,</span> <span class="nx">resp</span><span class="p">,</span> <span class="nx">data</span><span class="p">)</span> <span class="p">=&gt;</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L169" class="lines-num">
								<span id="L169" data-line-number="169"></span>
							</td>
							<td rel="L169" class="lines-code chroma">
								<code class="code-inner">      <span class="k">try</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L170" class="lines-num">
								<span id="L170" data-line-number="170"></span>
							</td>
							<td rel="L170" class="lines-code chroma">
								<code class="code-inner">        <span class="k">if</span> <span class="p">(</span><span class="nx">err</span><span class="p">)</span> <span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="nx">JSON</span><span class="p">.</span><span class="nx">stringify</span><span class="p">(</span><span class="nx">err</span><span class="p">)</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L171" class="lines-num">
								<span id="L171" data-line-number="171"></span>
							</td>
							<td rel="L171" class="lines-code chroma">
								<code class="code-inner">        <span class="nx">$</span><span class="p">.</span><span class="nx">HyperParam</span> <span class="o">=</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L172" class="lines-num">
								<span id="L172" data-line-number="172"></span>
							</td>
							<td rel="L172" class="lines-code chroma">
								<code class="code-inner">          <span class="nx">sid_hid</span><span class="o">:</span> <span class="nx">getValueById</span><span class="p">(</span><span class="nx">data</span><span class="p">,</span> <span class="s1">&#39;sid_hid&#39;</span><span class="p">)</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L173" class="lines-num">
								<span id="L173" data-line-number="173"></span>
							</td>
							<td rel="L173" class="lines-code chroma">
								<code class="code-inner">          <span class="nx">type_hid</span><span class="o">:</span> <span class="nx">getValueById</span><span class="p">(</span><span class="nx">data</span><span class="p">,</span> <span class="s1">&#39;type_hid&#39;</span><span class="p">)</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L174" class="lines-num">
								<span id="L174" data-line-number="174"></span>
							</td>
							<td rel="L174" class="lines-code chroma">
								<code class="code-inner">          <span class="nx">isLoadLastPropriceRecord</span><span class="o">:</span> <span class="nx">getValueById</span><span class="p">(</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L175" class="lines-num">
								<span id="L175" data-line-number="175"></span>
							</td>
							<td rel="L175" class="lines-code chroma">
								<code class="code-inner">            <span class="nx">data</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L176" class="lines-num">
								<span id="L176" data-line-number="176"></span>
							</td>
							<td rel="L176" class="lines-code chroma">
								<code class="code-inner">            <span class="s1">&#39;isLoadLastPropriceRecord&#39;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L177" class="lines-num">
								<span id="L177" data-line-number="177"></span>
							</td>
							<td rel="L177" class="lines-code chroma">
								<code class="code-inner">          <span class="p">)</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L178" class="lines-num">
								<span id="L178" data-line-number="178"></span>
							</td>
							<td rel="L178" class="lines-code chroma">
								<code class="code-inner">          <span class="nx">isLoadSkuPrice</span><span class="o">:</span> <span class="nx">getValueById</span><span class="p">(</span><span class="nx">data</span><span class="p">,</span> <span class="s1">&#39;isLoadSkuPrice&#39;</span><span class="p">)</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L179" class="lines-num">
								<span id="L179" data-line-number="179"></span>
							</td>
							<td rel="L179" class="lines-code chroma">
								<code class="code-inner">          <span class="nx">RefundType_Orderid_Repeater_hid</span><span class="o">:</span> <span class="nx">getValueById</span><span class="p">(</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L180" class="lines-num">
								<span id="L180" data-line-number="180"></span>
							</td>
							<td rel="L180" class="lines-code chroma">
								<code class="code-inner">            <span class="nx">data</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L181" class="lines-num">
								<span id="L181" data-line-number="181"></span>
							</td>
							<td rel="L181" class="lines-code chroma">
								<code class="code-inner">            <span class="s1">&#39;RefundType_Orderid_Repeater_hid&#39;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L182" class="lines-num">
								<span id="L182" data-line-number="182"></span>
							</td>
							<td rel="L182" class="lines-code chroma">
								<code class="code-inner">          <span class="p">)</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L183" class="lines-num">
								<span id="L183" data-line-number="183"></span>
							</td>
							<td rel="L183" class="lines-code chroma">
								<code class="code-inner">          <span class="nx">isAlertSuccessTip</span><span class="o">:</span> <span class="nx">getValueById</span><span class="p">(</span><span class="nx">data</span><span class="p">,</span> <span class="s1">&#39;isAlertSuccessTip&#39;</span><span class="p">)</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L184" class="lines-num">
								<span id="L184" data-line-number="184"></span>
							</td>
							<td rel="L184" class="lines-code chroma">
								<code class="code-inner">          <span class="nx">forcebot</span><span class="o">:</span> <span class="nx">getValueById</span><span class="p">(</span><span class="nx">data</span><span class="p">,</span> <span class="s1">&#39;forcebot&#39;</span><span class="p">)</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L185" class="lines-num">
								<span id="L185" data-line-number="185"></span>
							</td>
							<td rel="L185" class="lines-code chroma">
								<code class="code-inner">          <span class="nx">useColorApi</span><span class="o">:</span> <span class="nx">getValueById</span><span class="p">(</span><span class="nx">data</span><span class="p">,</span> <span class="s1">&#39;useColorApi&#39;</span><span class="p">)</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L186" class="lines-num">
								<span id="L186" data-line-number="186"></span>
							</td>
							<td rel="L186" class="lines-code chroma">
								<code class="code-inner">        <span class="p">}</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L187" class="lines-num">
								<span id="L187" data-line-number="187"></span>
							</td>
							<td rel="L187" class="lines-code chroma">
								<code class="code-inner">      <span class="p">}</span> <span class="k">catch</span> <span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L188" class="lines-num">
								<span id="L188" data-line-number="188"></span>
							</td>
							<td rel="L188" class="lines-code chroma">
								<code class="code-inner">        <span class="nx">reject</span><span class="p">(</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L189" class="lines-num">
								<span id="L189" data-line-number="189"></span>
							</td>
							<td rel="L189" class="lines-code chroma">
								<code class="code-inner">          <span class="sb">`</span><span class="sb">⚠️ </span><span class="si">${</span><span class="nx">arguments</span><span class="p">.</span><span class="nx">callee</span><span class="p">.</span><span class="nx">name</span><span class="p">.</span><span class="nx">toString</span><span class="p">(</span><span class="p">)</span><span class="si">}</span><span class="sb"> API返回结果解析出错</span><span class="sb">\n</span><span class="si">${</span><span class="nx">e</span><span class="si">}</span><span class="sb">\n</span><span class="si">${</span><span class="nx">JSON</span><span class="p">.</span><span class="nx">stringify</span><span class="p">(</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L190" class="lines-num">
								<span id="L190" data-line-number="190"></span>
							</td>
							<td rel="L190" class="lines-code chroma">
								<code class="code-inner">            <span class="nx">data</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L191" class="lines-num">
								<span id="L191" data-line-number="191"></span>
							</td>
							<td rel="L191" class="lines-code chroma">
								<code class="code-inner">          <span class="p">)</span><span class="si">}</span><span class="sb">`</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L192" class="lines-num">
								<span id="L192" data-line-number="192"></span>
							</td>
							<td rel="L192" class="lines-code chroma">
								<code class="code-inner">        <span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L193" class="lines-num">
								<span id="L193" data-line-number="193"></span>
							</td>
							<td rel="L193" class="lines-code chroma">
								<code class="code-inner">      <span class="p">}</span> <span class="k">finally</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L194" class="lines-num">
								<span id="L194" data-line-number="194"></span>
							</td>
							<td rel="L194" class="lines-code chroma">
								<code class="code-inner">        <span class="nx">resolve</span><span class="p">(</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L195" class="lines-num">
								<span id="L195" data-line-number="195"></span>
							</td>
							<td rel="L195" class="lines-code chroma">
								<code class="code-inner">      <span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L196" class="lines-num">
								<span id="L196" data-line-number="196"></span>
							</td>
							<td rel="L196" class="lines-code chroma">
								<code class="code-inner">    <span class="p">}</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L197" class="lines-num">
								<span id="L197" data-line-number="197"></span>
							</td>
							<td rel="L197" class="lines-code chroma">
								<code class="code-inner">  <span class="p">}</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L198" class="lines-num">
								<span id="L198" data-line-number="198"></span>
							</td>
							<td rel="L198" class="lines-code chroma">
								<code class="code-inner"><span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L199" class="lines-num">
								<span id="L199" data-line-number="199"></span>
							</td>
							<td rel="L199" class="lines-code chroma">
								<code class="code-inner">
</code>
							</td>
						</tr>
						
						<tr>
							<td id="L200" class="lines-num">
								<span id="L200" data-line-number="200"></span>
							</td>
							<td rel="L200" class="lines-code chroma">
								<code class="code-inner"><span class="kd">function</span> <span class="nx">getApplyData</span><span class="p">(</span><span class="nx">page</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L201" class="lines-num">
								<span id="L201" data-line-number="201"></span>
							</td>
							<td rel="L201" class="lines-code chroma">
								<code class="code-inner">  <span class="k">return</span> <span class="k">new</span> <span class="nb">Promise</span><span class="p">(</span><span class="p">(</span><span class="nx">resolve</span><span class="p">,</span> <span class="nx">reject</span><span class="p">)</span> <span class="p">=&gt;</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L202" class="lines-num">
								<span id="L202" data-line-number="202"></span>
							</td>
							<td rel="L202" class="lines-code chroma">
								<code class="code-inner">    <span class="nx">$</span><span class="p">.</span><span class="nx">hasNext</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L203" class="lines-num">
								<span id="L203" data-line-number="203"></span>
							</td>
							<td rel="L203" class="lines-code chroma">
								<code class="code-inner">    <span class="kr">const</span> <span class="p">{</span> <span class="nx">sid_hid</span><span class="p">,</span> <span class="nx">type_hid</span><span class="p">,</span> <span class="nx">forcebot</span> <span class="p">}</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">HyperParam</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L204" class="lines-num">
								<span id="L204" data-line-number="204"></span>
							</td>
							<td rel="L204" class="lines-code chroma">
								<code class="code-inner">    <span class="kr">const</span> <span class="nx">pageSize</span> <span class="o">=</span> <span class="mi">5</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L205" class="lines-num">
								<span id="L205" data-line-number="205"></span>
							</td>
							<td rel="L205" class="lines-code chroma">
								<code class="code-inner">
</code>
							</td>
						</tr>
						
						<tr>
							<td id="L206" class="lines-num">
								<span id="L206" data-line-number="206"></span>
							</td>
							<td rel="L206" class="lines-code chroma">
								<code class="code-inner">    <span class="kd">let</span> <span class="nx">paramObj</span> <span class="o">=</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L207" class="lines-num">
								<span id="L207" data-line-number="207"></span>
							</td>
							<td rel="L207" class="lines-code chroma">
								<code class="code-inner">      <span class="nx">page</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L208" class="lines-num">
								<span id="L208" data-line-number="208"></span>
							</td>
							<td rel="L208" class="lines-code chroma">
								<code class="code-inner">      <span class="nx">pageSize</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L209" class="lines-num">
								<span id="L209" data-line-number="209"></span>
							</td>
							<td rel="L209" class="lines-code chroma">
								<code class="code-inner">      <span class="nx">keyWords</span><span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L210" class="lines-num">
								<span id="L210" data-line-number="210"></span>
							</td>
							<td rel="L210" class="lines-code chroma">
								<code class="code-inner">      <span class="nx">sid</span><span class="o">:</span> <span class="nx">sid_hid</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L211" class="lines-num">
								<span id="L211" data-line-number="211"></span>
							</td>
							<td rel="L211" class="lines-code chroma">
								<code class="code-inner">      <span class="nx">type</span><span class="o">:</span> <span class="nx">type_hid</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L212" class="lines-num">
								<span id="L212" data-line-number="212"></span>
							</td>
							<td rel="L212" class="lines-code chroma">
								<code class="code-inner">      <span class="nx">forcebot</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L213" class="lines-num">
								<span id="L213" data-line-number="213"></span>
							</td>
							<td rel="L213" class="lines-code chroma">
								<code class="code-inner">      <span class="nx">token</span><span class="o">:</span> <span class="nx">$</span><span class="p">.</span><span class="nx">token</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L214" class="lines-num">
								<span id="L214" data-line-number="214"></span>
							</td>
							<td rel="L214" class="lines-code chroma">
								<code class="code-inner">      <span class="nx">feSt</span><span class="o">:</span> <span class="nx">$</span><span class="p">.</span><span class="nx">feSt</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L215" class="lines-num">
								<span id="L215" data-line-number="215"></span>
							</td>
							<td rel="L215" class="lines-code chroma">
								<code class="code-inner">    <span class="p">}</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L216" class="lines-num">
								<span id="L216" data-line-number="216"></span>
							</td>
							<td rel="L216" class="lines-code chroma">
								<code class="code-inner">
</code>
							</td>
						</tr>
						
						<tr>
							<td id="L217" class="lines-num">
								<span id="L217" data-line-number="217"></span>
							</td>
							<td rel="L217" class="lines-code chroma">
								<code class="code-inner">    <span class="nx">$</span><span class="p">.</span><span class="nx">post</span><span class="p">(</span><span class="nx">taskUrl</span><span class="p">(</span><span class="s1">&#39;siteppM_priceskusPull&#39;</span><span class="p">,</span> <span class="nx">paramObj</span><span class="p">)</span><span class="p">,</span> <span class="p">(</span><span class="nx">err</span><span class="p">,</span> <span class="nx">resp</span><span class="p">,</span> <span class="nx">data</span><span class="p">)</span> <span class="p">=&gt;</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L218" class="lines-num">
								<span id="L218" data-line-number="218"></span>
							</td>
							<td rel="L218" class="lines-code chroma">
								<code class="code-inner">      <span class="k">try</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L219" class="lines-num">
								<span id="L219" data-line-number="219"></span>
							</td>
							<td rel="L219" class="lines-code chroma">
								<code class="code-inner">        <span class="k">if</span> <span class="p">(</span><span class="nx">err</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L220" class="lines-num">
								<span id="L220" data-line-number="220"></span>
							</td>
							<td rel="L220" class="lines-code chroma">
								<code class="code-inner">          <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L221" class="lines-num">
								<span id="L221" data-line-number="221"></span>
							</td>
							<td rel="L221" class="lines-code chroma">
								<code class="code-inner">            <span class="sb">`</span><span class="sb">🚫 </span><span class="si">${</span><span class="nx">arguments</span><span class="p">.</span><span class="nx">callee</span><span class="p">.</span><span class="nx">name</span><span class="p">.</span><span class="nx">toString</span><span class="p">(</span><span class="p">)</span><span class="si">}</span><span class="sb"> API请求失败，请检查网路</span><span class="sb">\n</span><span class="si">${</span><span class="nx">JSON</span><span class="p">.</span><span class="nx">stringify</span><span class="p">(</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L222" class="lines-num">
								<span id="L222" data-line-number="222"></span>
							</td>
							<td rel="L222" class="lines-code chroma">
								<code class="code-inner">              <span class="nx">err</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L223" class="lines-num">
								<span id="L223" data-line-number="223"></span>
							</td>
							<td rel="L223" class="lines-code chroma">
								<code class="code-inner">            <span class="p">)</span><span class="si">}</span><span class="sb">`</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L224" class="lines-num">
								<span id="L224" data-line-number="224"></span>
							</td>
							<td rel="L224" class="lines-code chroma">
								<code class="code-inner">          <span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L225" class="lines-num">
								<span id="L225" data-line-number="225"></span>
							</td>
							<td rel="L225" class="lines-code chroma">
								<code class="code-inner">        <span class="p">}</span> <span class="k">else</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L226" class="lines-num">
								<span id="L226" data-line-number="226"></span>
							</td>
							<td rel="L226" class="lines-code chroma">
								<code class="code-inner">          <span class="kd">let</span> <span class="nx">pageErrorVal</span> <span class="o">=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L227" class="lines-num">
								<span id="L227" data-line-number="227"></span>
							</td>
							<td rel="L227" class="lines-code chroma">
								<code class="code-inner">            <span class="sr">/id=&#34;pageError_\d+&#34; name=&#34;pageError_\d+&#34; value=&#34;(.*?)&#34;/</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L228" class="lines-num">
								<span id="L228" data-line-number="228"></span>
							</td>
							<td rel="L228" class="lines-code chroma">
								<code class="code-inner">          <span class="p">)</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L229" class="lines-num">
								<span id="L229" data-line-number="229"></span>
							</td>
							<td rel="L229" class="lines-code chroma">
								<code class="code-inner">          <span class="k">if</span> <span class="p">(</span><span class="nx">pageErrorVal</span> <span class="o">==</span> <span class="s1">&#39;noexception&#39;</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L230" class="lines-num">
								<span id="L230" data-line-number="230"></span>
							</td>
							<td rel="L230" class="lines-code chroma">
								<code class="code-inner">            <span class="kd">let</span> <span class="nx">pageDatasSize</span> <span class="o">=</span> <span class="nb">eval</span><span class="p">(</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L231" class="lines-num">
								<span id="L231" data-line-number="231"></span>
							</td>
							<td rel="L231" class="lines-code chroma">
								<code class="code-inner">              <span class="nx">data</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L232" class="lines-num">
								<span id="L232" data-line-number="232"></span>
							</td>
							<td rel="L232" class="lines-code chroma">
								<code class="code-inner">                <span class="sr">/id=&#34;pageSize_\d+&#34; name=&#34;pageSize_\d+&#34; value=&#34;(.*?)&#34;/</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L233" class="lines-num">
								<span id="L233" data-line-number="233"></span>
							</td>
							<td rel="L233" class="lines-code chroma">
								<code class="code-inner">              <span class="p">)</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L234" class="lines-num">
								<span id="L234" data-line-number="234"></span>
							</td>
							<td rel="L234" class="lines-code chroma">
								<code class="code-inner">            <span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L235" class="lines-num">
								<span id="L235" data-line-number="235"></span>
							</td>
							<td rel="L235" class="lines-code chroma">
								<code class="code-inner">            <span class="nx">$</span><span class="p">.</span><span class="nx">hasNext</span> <span class="o">=</span> <span class="nx">pageDatasSize</span> <span class="o">&gt;=</span> <span class="nx">pageSize</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L236" class="lines-num">
								<span id="L236" data-line-number="236"></span>
							</td>
							<td rel="L236" class="lines-code chroma">
								<code class="code-inner">            <span class="kd">let</span> <span class="nx">orders</span> <span class="o">=</span> <span class="p">[</span><span class="p">...</span><span class="nx">data</span><span class="p">.</span><span class="nx">matchAll</span><span class="p">(</span><span class="sr">/skuApply\((.*?)\)/g</span><span class="p">)</span><span class="p">]</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L237" class="lines-num">
								<span id="L237" data-line-number="237"></span>
							</td>
							<td rel="L237" class="lines-code chroma">
								<code class="code-inner">            <span class="kd">let</span> <span class="nx">titles</span> <span class="o">=</span> <span class="p">[</span><span class="p">...</span><span class="nx">data</span><span class="p">.</span><span class="nx">matchAll</span><span class="p">(</span><span class="sr">/&lt;p class=&#34;name&#34;&gt;(.*?)&lt;\/p&gt;/g</span><span class="p">)</span><span class="p">]</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L238" class="lines-num">
								<span id="L238" data-line-number="238"></span>
							</td>
							<td rel="L238" class="lines-code chroma">
								<code class="code-inner">            <span class="k">for</span> <span class="p">(</span><span class="kd">let</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">orders</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L239" class="lines-num">
								<span id="L239" data-line-number="239"></span>
							</td>
							<td rel="L239" class="lines-code chroma">
								<code class="code-inner">              <span class="kd">let</span> <span class="nx">info</span> <span class="o">=</span> <span class="nx">orders</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s1">&#39;,&#39;</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L240" class="lines-num">
								<span id="L240" data-line-number="240"></span>
							</td>
							<td rel="L240" class="lines-code chroma">
								<code class="code-inner">              <span class="k">if</span> <span class="p">(</span><span class="nx">info</span><span class="p">.</span><span class="nx">length</span> <span class="o">!=</span> <span class="mi">4</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L241" class="lines-num">
								<span id="L241" data-line-number="241"></span>
							</td>
							<td rel="L241" class="lines-code chroma">
								<code class="code-inner">                <span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="sb">`</span><span class="sb">价格保护 </span><span class="si">${</span><span class="nx">order</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span><span class="si">}</span><span class="sb">.length != 4</span><span class="sb">`</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L242" class="lines-num">
								<span id="L242" data-line-number="242"></span>
							</td>
							<td rel="L242" class="lines-code chroma">
								<code class="code-inner">              <span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L243" class="lines-num">
								<span id="L243" data-line-number="243"></span>
							</td>
							<td rel="L243" class="lines-code chroma">
								<code class="code-inner">              <span class="kr">const</span> <span class="nx">item</span> <span class="o">=</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L244" class="lines-num">
								<span id="L244" data-line-number="244"></span>
							</td>
							<td rel="L244" class="lines-code chroma">
								<code class="code-inner">                <span class="nx">orderId</span><span class="o">:</span> <span class="nb">eval</span><span class="p">(</span><span class="nx">info</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span><span class="p">)</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L245" class="lines-num">
								<span id="L245" data-line-number="245"></span>
							</td>
							<td rel="L245" class="lines-code chroma">
								<code class="code-inner">                <span class="nx">skuId</span><span class="o">:</span> <span class="nb">eval</span><span class="p">(</span><span class="nx">info</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span><span class="p">)</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L246" class="lines-num">
								<span id="L246" data-line-number="246"></span>
							</td>
							<td rel="L246" class="lines-code chroma">
								<code class="code-inner">                <span class="nx">sequence</span><span class="o">:</span> <span class="nb">eval</span><span class="p">(</span><span class="nx">info</span><span class="p">[</span><span class="mi">2</span><span class="p">]</span><span class="p">)</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L247" class="lines-num">
								<span id="L247" data-line-number="247"></span>
							</td>
							<td rel="L247" class="lines-code chroma">
								<code class="code-inner">                <span class="nx">orderCategory</span><span class="o">:</span> <span class="nb">eval</span><span class="p">(</span><span class="nx">info</span><span class="p">[</span><span class="mi">3</span><span class="p">]</span><span class="p">)</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L248" class="lines-num">
								<span id="L248" data-line-number="248"></span>
							</td>
							<td rel="L248" class="lines-code chroma">
								<code class="code-inner">                <span class="nx">title</span><span class="o">:</span> <span class="sb">`</span><span class="sb">🛒</span><span class="si">${</span><span class="nx">titles</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span><span class="p">.</span><span class="nx">substr</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="mi">15</span><span class="p">)</span><span class="si">}</span><span class="sb">🛒</span><span class="sb">`</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L249" class="lines-num">
								<span id="L249" data-line-number="249"></span>
							</td>
							<td rel="L249" class="lines-code chroma">
								<code class="code-inner">              <span class="p">}</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L250" class="lines-num">
								<span id="L250" data-line-number="250"></span>
							</td>
							<td rel="L250" class="lines-code chroma">
								<code class="code-inner">              <span class="kd">let</span> <span class="nx">id</span> <span class="o">=</span> <span class="sb">`</span><span class="sb">skuprice_</span><span class="si">${</span><span class="nx">item</span><span class="p">.</span><span class="nx">orderId</span><span class="si">}</span><span class="sb">_</span><span class="si">${</span><span class="nx">item</span><span class="p">.</span><span class="nx">skuId</span><span class="si">}</span><span class="sb">_</span><span class="si">${</span><span class="nx">item</span><span class="p">.</span><span class="nx">sequence</span><span class="si">}</span><span class="sb">`</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L251" class="lines-num">
								<span id="L251" data-line-number="251"></span>
							</td>
							<td rel="L251" class="lines-code chroma">
								<code class="code-inner">              <span class="kd">let</span> <span class="nx">reg</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span><span class="sb">`</span><span class="si">${</span><span class="nx">id</span><span class="si">}</span><span class="sb">.*?isfujian=&#34;(.*?)&#34;</span><span class="sb">`</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L252" class="lines-num">
								<span id="L252" data-line-number="252"></span>
							</td>
							<td rel="L252" class="lines-code chroma">
								<code class="code-inner">              <span class="nx">isfujian</span> <span class="o">=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="nx">reg</span><span class="p">)</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L253" class="lines-num">
								<span id="L253" data-line-number="253"></span>
							</td>
							<td rel="L253" class="lines-code chroma">
								<code class="code-inner">              <span class="k">if</span> <span class="p">(</span><span class="nx">isfujian</span> <span class="o">==</span> <span class="s1">&#39;false&#39;</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L254" class="lines-num">
								<span id="L254" data-line-number="254"></span>
							</td>
							<td rel="L254" class="lines-code chroma">
								<code class="code-inner">                <span class="kd">let</span> <span class="nx">skuRefundTypeDiv_orderId</span> <span class="o">=</span> <span class="sb">`</span><span class="sb">skuRefundTypeDiv_</span><span class="si">${</span><span class="nx">item</span><span class="p">.</span><span class="nx">orderId</span><span class="si">}</span><span class="sb">`</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L255" class="lines-num">
								<span id="L255" data-line-number="255"></span>
							</td>
							<td rel="L255" class="lines-code chroma">
								<code class="code-inner">                <span class="nx">item</span><span class="p">[</span><span class="s1">&#39;refundtype&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="nx">getValueById</span><span class="p">(</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L256" class="lines-num">
								<span id="L256" data-line-number="256"></span>
							</td>
							<td rel="L256" class="lines-code chroma">
								<code class="code-inner">                  <span class="nx">data</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L257" class="lines-num">
								<span id="L257" data-line-number="257"></span>
							</td>
							<td rel="L257" class="lines-code chroma">
								<code class="code-inner">                  <span class="nx">skuRefundTypeDiv_orderId</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L258" class="lines-num">
								<span id="L258" data-line-number="258"></span>
							</td>
							<td rel="L258" class="lines-code chroma">
								<code class="code-inner">                <span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L259" class="lines-num">
								<span id="L259" data-line-number="259"></span>
							</td>
							<td rel="L259" class="lines-code chroma">
								<code class="code-inner">                <span class="c1">// 设置原路返还</code>
							</td>
						</tr>
						
						<tr>
							<td id="L260" class="lines-num">
								<span id="L260" data-line-number="260"></span>
							</td>
							<td rel="L260" class="lines-code chroma">
								<code class="code-inner"></span><span class="c1"></span>                <span class="k">if</span> <span class="p">(</span><span class="nx">item</span><span class="p">.</span><span class="nx">refundtype</span> <span class="o">===</span> <span class="s1">&#39;2&#39;</span><span class="p">)</span> <span class="nx">item</span><span class="p">.</span><span class="nx">refundtype</span> <span class="o">=</span> <span class="s1">&#39;1&#39;</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L261" class="lines-num">
								<span id="L261" data-line-number="261"></span>
							</td>
							<td rel="L261" class="lines-code chroma">
								<code class="code-inner">                <span class="nx">$</span><span class="p">.</span><span class="nx">orderList</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">item</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L262" class="lines-num">
								<span id="L262" data-line-number="262"></span>
							</td>
							<td rel="L262" class="lines-code chroma">
								<code class="code-inner">              <span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L263" class="lines-num">
								<span id="L263" data-line-number="263"></span>
							</td>
							<td rel="L263" class="lines-code chroma">
								<code class="code-inner">              <span class="c1">//else...尊敬的顾客您好，您选择的商品本身为赠品，是不支持价保的呦，请您理解。</code>
							</td>
						</tr>
						
						<tr>
							<td id="L264" class="lines-num">
								<span id="L264" data-line-number="264"></span>
							</td>
							<td rel="L264" class="lines-code chroma">
								<code class="code-inner"></span><span class="c1"></span>            <span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L265" class="lines-num">
								<span id="L265" data-line-number="265"></span>
							</td>
							<td rel="L265" class="lines-code chroma">
								<code class="code-inner">          <span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L266" class="lines-num">
								<span id="L266" data-line-number="266"></span>
							</td>
							<td rel="L266" class="lines-code chroma">
								<code class="code-inner">        <span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L267" class="lines-num">
								<span id="L267" data-line-number="267"></span>
							</td>
							<td rel="L267" class="lines-code chroma">
								<code class="code-inner">      <span class="p">}</span> <span class="k">catch</span> <span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L268" class="lines-num">
								<span id="L268" data-line-number="268"></span>
							</td>
							<td rel="L268" class="lines-code chroma">
								<code class="code-inner">        <span class="nx">reject</span><span class="p">(</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L269" class="lines-num">
								<span id="L269" data-line-number="269"></span>
							</td>
							<td rel="L269" class="lines-code chroma">
								<code class="code-inner">          <span class="sb">`</span><span class="sb">⚠️ </span><span class="si">${</span><span class="nx">arguments</span><span class="p">.</span><span class="nx">callee</span><span class="p">.</span><span class="nx">name</span><span class="p">.</span><span class="nx">toString</span><span class="p">(</span><span class="p">)</span><span class="si">}</span><span class="sb"> API返回结果解析出错</span><span class="sb">\n</span><span class="si">${</span><span class="nx">e</span><span class="si">}</span><span class="sb">\n</span><span class="si">${</span><span class="nx">JSON</span><span class="p">.</span><span class="nx">stringify</span><span class="p">(</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L270" class="lines-num">
								<span id="L270" data-line-number="270"></span>
							</td>
							<td rel="L270" class="lines-code chroma">
								<code class="code-inner">            <span class="nx">data</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L271" class="lines-num">
								<span id="L271" data-line-number="271"></span>
							</td>
							<td rel="L271" class="lines-code chroma">
								<code class="code-inner">          <span class="p">)</span><span class="si">}</span><span class="sb">`</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L272" class="lines-num">
								<span id="L272" data-line-number="272"></span>
							</td>
							<td rel="L272" class="lines-code chroma">
								<code class="code-inner">        <span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L273" class="lines-num">
								<span id="L273" data-line-number="273"></span>
							</td>
							<td rel="L273" class="lines-code chroma">
								<code class="code-inner">      <span class="p">}</span> <span class="k">finally</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L274" class="lines-num">
								<span id="L274" data-line-number="274"></span>
							</td>
							<td rel="L274" class="lines-code chroma">
								<code class="code-inner">        <span class="nx">resolve</span><span class="p">(</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L275" class="lines-num">
								<span id="L275" data-line-number="275"></span>
							</td>
							<td rel="L275" class="lines-code chroma">
								<code class="code-inner">      <span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L276" class="lines-num">
								<span id="L276" data-line-number="276"></span>
							</td>
							<td rel="L276" class="lines-code chroma">
								<code class="code-inner">    <span class="p">}</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L277" class="lines-num">
								<span id="L277" data-line-number="277"></span>
							</td>
							<td rel="L277" class="lines-code chroma">
								<code class="code-inner">  <span class="p">}</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L278" class="lines-num">
								<span id="L278" data-line-number="278"></span>
							</td>
							<td rel="L278" class="lines-code chroma">
								<code class="code-inner"><span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L279" class="lines-num">
								<span id="L279" data-line-number="279"></span>
							</td>
							<td rel="L279" class="lines-code chroma">
								<code class="code-inner">
</code>
							</td>
						</tr>
						
						<tr>
							<td id="L280" class="lines-num">
								<span id="L280" data-line-number="280"></span>
							</td>
							<td rel="L280" class="lines-code chroma">
								<code class="code-inner"><span class="c1">//  申请按钮</code>
							</td>
						</tr>
						
						<tr>
							<td id="L281" class="lines-num">
								<span id="L281" data-line-number="281"></span>
							</td>
							<td rel="L281" class="lines-code chroma">
								<code class="code-inner"></span><span class="c1"></span><span class="kd">function</span> <span class="nx">skuApply</span><span class="p">(</span><span class="nx">order</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L282" class="lines-num">
								<span id="L282" data-line-number="282"></span>
							</td>
							<td rel="L282" class="lines-code chroma">
								<code class="code-inner">  <span class="k">return</span> <span class="k">new</span> <span class="nb">Promise</span><span class="p">(</span><span class="p">(</span><span class="nx">resolve</span><span class="p">,</span> <span class="nx">reject</span><span class="p">)</span> <span class="p">=&gt;</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L283" class="lines-num">
								<span id="L283" data-line-number="283"></span>
							</td>
							<td rel="L283" class="lines-code chroma">
								<code class="code-inner">    <span class="kr">const</span> <span class="p">{</span> <span class="nx">orderId</span><span class="p">,</span> <span class="nx">orderCategory</span><span class="p">,</span> <span class="nx">skuId</span><span class="p">,</span> <span class="nx">refundtype</span> <span class="p">}</span> <span class="o">=</span> <span class="nx">order</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L284" class="lines-num">
								<span id="L284" data-line-number="284"></span>
							</td>
							<td rel="L284" class="lines-code chroma">
								<code class="code-inner">    <span class="kr">const</span> <span class="p">{</span> <span class="nx">sid_hid</span><span class="p">,</span> <span class="nx">type_hid</span><span class="p">,</span> <span class="nx">forcebot</span> <span class="p">}</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">HyperParam</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L285" class="lines-num">
								<span id="L285" data-line-number="285"></span>
							</td>
							<td rel="L285" class="lines-code chroma">
								<code class="code-inner">
</code>
							</td>
						</tr>
						
						<tr>
							<td id="L286" class="lines-num">
								<span id="L286" data-line-number="286"></span>
							</td>
							<td rel="L286" class="lines-code chroma">
								<code class="code-inner">    <span class="kd">let</span> <span class="nx">paramObj</span> <span class="o">=</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L287" class="lines-num">
								<span id="L287" data-line-number="287"></span>
							</td>
							<td rel="L287" class="lines-code chroma">
								<code class="code-inner">      <span class="nx">orderId</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L288" class="lines-num">
								<span id="L288" data-line-number="288"></span>
							</td>
							<td rel="L288" class="lines-code chroma">
								<code class="code-inner">      <span class="nx">orderCategory</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L289" class="lines-num">
								<span id="L289" data-line-number="289"></span>
							</td>
							<td rel="L289" class="lines-code chroma">
								<code class="code-inner">      <span class="nx">skuId</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L290" class="lines-num">
								<span id="L290" data-line-number="290"></span>
							</td>
							<td rel="L290" class="lines-code chroma">
								<code class="code-inner">      <span class="nx">sid</span><span class="o">:</span> <span class="nx">sid_hid</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L291" class="lines-num">
								<span id="L291" data-line-number="291"></span>
							</td>
							<td rel="L291" class="lines-code chroma">
								<code class="code-inner">      <span class="nx">type</span><span class="o">:</span> <span class="nx">type_hid</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L292" class="lines-num">
								<span id="L292" data-line-number="292"></span>
							</td>
							<td rel="L292" class="lines-code chroma">
								<code class="code-inner">      <span class="nx">refundtype</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L293" class="lines-num">
								<span id="L293" data-line-number="293"></span>
							</td>
							<td rel="L293" class="lines-code chroma">
								<code class="code-inner">      <span class="nx">forcebot</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L294" class="lines-num">
								<span id="L294" data-line-number="294"></span>
							</td>
							<td rel="L294" class="lines-code chroma">
								<code class="code-inner">      <span class="nx">token</span><span class="o">:</span> <span class="nx">$</span><span class="p">.</span><span class="nx">token</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L295" class="lines-num">
								<span id="L295" data-line-number="295"></span>
							</td>
							<td rel="L295" class="lines-code chroma">
								<code class="code-inner">      <span class="nx">feSt</span><span class="o">:</span> <span class="nx">$</span><span class="p">.</span><span class="nx">feSt</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L296" class="lines-num">
								<span id="L296" data-line-number="296"></span>
							</td>
							<td rel="L296" class="lines-code chroma">
								<code class="code-inner">    <span class="p">}</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L297" class="lines-num">
								<span id="L297" data-line-number="297"></span>
							</td>
							<td rel="L297" class="lines-code chroma">
								<code class="code-inner">
</code>
							</td>
						</tr>
						
						<tr>
							<td id="L298" class="lines-num">
								<span id="L298" data-line-number="298"></span>
							</td>
							<td rel="L298" class="lines-code chroma">
								<code class="code-inner">    <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="sb">`</span><span class="sb">🈸 </span><span class="si">${</span><span class="nx">order</span><span class="p">.</span><span class="nx">title</span><span class="si">}</span><span class="sb">`</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L299" class="lines-num">
								<span id="L299" data-line-number="299"></span>
							</td>
							<td rel="L299" class="lines-code chroma">
								<code class="code-inner">    <span class="nx">$</span><span class="p">.</span><span class="nx">post</span><span class="p">(</span><span class="nx">taskUrl</span><span class="p">(</span><span class="s1">&#39;siteppM_proApply&#39;</span><span class="p">,</span> <span class="nx">paramObj</span><span class="p">)</span><span class="p">,</span> <span class="p">(</span><span class="nx">err</span><span class="p">,</span> <span class="nx">resp</span><span class="p">,</span> <span class="nx">data</span><span class="p">)</span> <span class="p">=&gt;</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L300" class="lines-num">
								<span id="L300" data-line-number="300"></span>
							</td>
							<td rel="L300" class="lines-code chroma">
								<code class="code-inner">      <span class="k">try</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L301" class="lines-num">
								<span id="L301" data-line-number="301"></span>
							</td>
							<td rel="L301" class="lines-code chroma">
								<code class="code-inner">        <span class="k">if</span> <span class="p">(</span><span class="nx">err</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L302" class="lines-num">
								<span id="L302" data-line-number="302"></span>
							</td>
							<td rel="L302" class="lines-code chroma">
								<code class="code-inner">          <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L303" class="lines-num">
								<span id="L303" data-line-number="303"></span>
							</td>
							<td rel="L303" class="lines-code chroma">
								<code class="code-inner">            <span class="sb">`</span><span class="sb">🚫 </span><span class="si">${</span><span class="nx">arguments</span><span class="p">.</span><span class="nx">callee</span><span class="p">.</span><span class="nx">name</span><span class="p">.</span><span class="nx">toString</span><span class="p">(</span><span class="p">)</span><span class="si">}</span><span class="sb"> API请求失败，请检查网路</span><span class="sb">\n</span><span class="si">${</span><span class="nx">JSON</span><span class="p">.</span><span class="nx">stringify</span><span class="p">(</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L304" class="lines-num">
								<span id="L304" data-line-number="304"></span>
							</td>
							<td rel="L304" class="lines-code chroma">
								<code class="code-inner">              <span class="nx">err</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L305" class="lines-num">
								<span id="L305" data-line-number="305"></span>
							</td>
							<td rel="L305" class="lines-code chroma">
								<code class="code-inner">            <span class="p">)</span><span class="si">}</span><span class="sb">`</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L306" class="lines-num">
								<span id="L306" data-line-number="306"></span>
							</td>
							<td rel="L306" class="lines-code chroma">
								<code class="code-inner">          <span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L307" class="lines-num">
								<span id="L307" data-line-number="307"></span>
							</td>
							<td rel="L307" class="lines-code chroma">
								<code class="code-inner">        <span class="p">}</span> <span class="k">else</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L308" class="lines-num">
								<span id="L308" data-line-number="308"></span>
							</td>
							<td rel="L308" class="lines-code chroma">
								<code class="code-inner">          <span class="nx">data</span> <span class="o">=</span> <span class="nx">JSON</span><span class="p">.</span><span class="nx">parse</span><span class="p">(</span><span class="nx">data</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L309" class="lines-num">
								<span id="L309" data-line-number="309"></span>
							</td>
							<td rel="L309" class="lines-code chroma">
								<code class="code-inner">          <span class="k">if</span> <span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">flag</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L310" class="lines-num">
								<span id="L310" data-line-number="310"></span>
							</td>
							<td rel="L310" class="lines-code chroma">
								<code class="code-inner">            <span class="k">if</span> <span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">proSkuApplyId</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L311" class="lines-num">
								<span id="L311" data-line-number="311"></span>
							</td>
							<td rel="L311" class="lines-code chroma">
								<code class="code-inner">              <span class="nx">$</span><span class="p">.</span><span class="nx">applyMap</span><span class="p">[</span><span class="nx">data</span><span class="p">.</span><span class="nx">proSkuApplyId</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span><span class="p">]</span> <span class="o">=</span> <span class="nx">order</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L312" class="lines-num">
								<span id="L312" data-line-number="312"></span>
							</td>
							<td rel="L312" class="lines-code chroma">
								<code class="code-inner">            <span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L313" class="lines-num">
								<span id="L313" data-line-number="313"></span>
							</td>
							<td rel="L313" class="lines-code chroma">
								<code class="code-inner">          <span class="p">}</span> <span class="k">else</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L314" class="lines-num">
								<span id="L314" data-line-number="314"></span>
							</td>
							<td rel="L314" class="lines-code chroma">
								<code class="code-inner">            <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="sb">`</span><span class="sb">🚫 </span><span class="si">${</span><span class="nx">order</span><span class="p">.</span><span class="nx">title</span><span class="si">}</span><span class="sb"> 申请失败：</span><span class="si">${</span><span class="nx">data</span><span class="p">.</span><span class="nx">errorMessage</span><span class="si">}</span><span class="sb">`</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L315" class="lines-num">
								<span id="L315" data-line-number="315"></span>
							</td>
							<td rel="L315" class="lines-code chroma">
								<code class="code-inner">          <span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L316" class="lines-num">
								<span id="L316" data-line-number="316"></span>
							</td>
							<td rel="L316" class="lines-code chroma">
								<code class="code-inner">        <span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L317" class="lines-num">
								<span id="L317" data-line-number="317"></span>
							</td>
							<td rel="L317" class="lines-code chroma">
								<code class="code-inner">      <span class="p">}</span> <span class="k">catch</span> <span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L318" class="lines-num">
								<span id="L318" data-line-number="318"></span>
							</td>
							<td rel="L318" class="lines-code chroma">
								<code class="code-inner">        <span class="nx">reject</span><span class="p">(</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L319" class="lines-num">
								<span id="L319" data-line-number="319"></span>
							</td>
							<td rel="L319" class="lines-code chroma">
								<code class="code-inner">          <span class="sb">`</span><span class="sb">⚠️ </span><span class="si">${</span><span class="nx">arguments</span><span class="p">.</span><span class="nx">callee</span><span class="p">.</span><span class="nx">name</span><span class="p">.</span><span class="nx">toString</span><span class="p">(</span><span class="p">)</span><span class="si">}</span><span class="sb"> API返回结果解析出错</span><span class="sb">\n</span><span class="si">${</span><span class="nx">e</span><span class="si">}</span><span class="sb">\n</span><span class="si">${</span><span class="nx">JSON</span><span class="p">.</span><span class="nx">stringify</span><span class="p">(</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L320" class="lines-num">
								<span id="L320" data-line-number="320"></span>
							</td>
							<td rel="L320" class="lines-code chroma">
								<code class="code-inner">            <span class="nx">data</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L321" class="lines-num">
								<span id="L321" data-line-number="321"></span>
							</td>
							<td rel="L321" class="lines-code chroma">
								<code class="code-inner">          <span class="p">)</span><span class="si">}</span><span class="sb">`</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L322" class="lines-num">
								<span id="L322" data-line-number="322"></span>
							</td>
							<td rel="L322" class="lines-code chroma">
								<code class="code-inner">        <span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L323" class="lines-num">
								<span id="L323" data-line-number="323"></span>
							</td>
							<td rel="L323" class="lines-code chroma">
								<code class="code-inner">      <span class="p">}</span> <span class="k">finally</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L324" class="lines-num">
								<span id="L324" data-line-number="324"></span>
							</td>
							<td rel="L324" class="lines-code chroma">
								<code class="code-inner">        <span class="nx">resolve</span><span class="p">(</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L325" class="lines-num">
								<span id="L325" data-line-number="325"></span>
							</td>
							<td rel="L325" class="lines-code chroma">
								<code class="code-inner">      <span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L326" class="lines-num">
								<span id="L326" data-line-number="326"></span>
							</td>
							<td rel="L326" class="lines-code chroma">
								<code class="code-inner">    <span class="p">}</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L327" class="lines-num">
								<span id="L327" data-line-number="327"></span>
							</td>
							<td rel="L327" class="lines-code chroma">
								<code class="code-inner">  <span class="p">}</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L328" class="lines-num">
								<span id="L328" data-line-number="328"></span>
							</td>
							<td rel="L328" class="lines-code chroma">
								<code class="code-inner"><span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L329" class="lines-num">
								<span id="L329" data-line-number="329"></span>
							</td>
							<td rel="L329" class="lines-code chroma">
								<code class="code-inner">
</code>
							</td>
						</tr>
						
						<tr>
							<td id="L330" class="lines-num">
								<span id="L330" data-line-number="330"></span>
							</td>
							<td rel="L330" class="lines-code chroma">
								<code class="code-inner"><span class="c1">// 历史结果查询</code>
							</td>
						</tr>
						
						<tr>
							<td id="L331" class="lines-num">
								<span id="L331" data-line-number="331"></span>
							</td>
							<td rel="L331" class="lines-code chroma">
								<code class="code-inner"></span><span class="c1"></span><span class="kd">function</span> <span class="nx">historyResultQuery</span><span class="p">(</span><span class="nx">order</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L332" class="lines-num">
								<span id="L332" data-line-number="332"></span>
							</td>
							<td rel="L332" class="lines-code chroma">
								<code class="code-inner">  <span class="k">return</span> <span class="k">new</span> <span class="nb">Promise</span><span class="p">(</span><span class="p">(</span><span class="nx">resolve</span><span class="p">,</span> <span class="nx">reject</span><span class="p">)</span> <span class="p">=&gt;</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L333" class="lines-num">
								<span id="L333" data-line-number="333"></span>
							</td>
							<td rel="L333" class="lines-code chroma">
								<code class="code-inner">    <span class="kr">const</span> <span class="p">{</span> <span class="nx">orderId</span><span class="p">,</span> <span class="nx">sequence</span><span class="p">,</span> <span class="nx">skuId</span> <span class="p">}</span> <span class="o">=</span> <span class="nx">order</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L334" class="lines-num">
								<span id="L334" data-line-number="334"></span>
							</td>
							<td rel="L334" class="lines-code chroma">
								<code class="code-inner">    <span class="kr">const</span> <span class="p">{</span> <span class="nx">sid_hid</span><span class="p">,</span> <span class="nx">type_hid</span><span class="p">,</span> <span class="nx">forcebot</span> <span class="p">}</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">HyperParam</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L335" class="lines-num">
								<span id="L335" data-line-number="335"></span>
							</td>
							<td rel="L335" class="lines-code chroma">
								<code class="code-inner">
</code>
							</td>
						</tr>
						
						<tr>
							<td id="L336" class="lines-num">
								<span id="L336" data-line-number="336"></span>
							</td>
							<td rel="L336" class="lines-code chroma">
								<code class="code-inner">    <span class="kd">let</span> <span class="nx">paramObj</span> <span class="o">=</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L337" class="lines-num">
								<span id="L337" data-line-number="337"></span>
							</td>
							<td rel="L337" class="lines-code chroma">
								<code class="code-inner">      <span class="nx">orderId</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L338" class="lines-num">
								<span id="L338" data-line-number="338"></span>
							</td>
							<td rel="L338" class="lines-code chroma">
								<code class="code-inner">      <span class="nx">skuId</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L339" class="lines-num">
								<span id="L339" data-line-number="339"></span>
							</td>
							<td rel="L339" class="lines-code chroma">
								<code class="code-inner">      <span class="nx">sequence</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L340" class="lines-num">
								<span id="L340" data-line-number="340"></span>
							</td>
							<td rel="L340" class="lines-code chroma">
								<code class="code-inner">      <span class="nx">sid</span><span class="o">:</span> <span class="nx">sid_hid</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L341" class="lines-num">
								<span id="L341" data-line-number="341"></span>
							</td>
							<td rel="L341" class="lines-code chroma">
								<code class="code-inner">      <span class="nx">type</span><span class="o">:</span> <span class="nx">type_hid</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L342" class="lines-num">
								<span id="L342" data-line-number="342"></span>
							</td>
							<td rel="L342" class="lines-code chroma">
								<code class="code-inner">      <span class="nx">pin</span><span class="o">:</span> <span class="kc">undefined</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L343" class="lines-num">
								<span id="L343" data-line-number="343"></span>
							</td>
							<td rel="L343" class="lines-code chroma">
								<code class="code-inner">      <span class="nx">forcebot</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L344" class="lines-num">
								<span id="L344" data-line-number="344"></span>
							</td>
							<td rel="L344" class="lines-code chroma">
								<code class="code-inner">    <span class="p">}</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L345" class="lines-num">
								<span id="L345" data-line-number="345"></span>
							</td>
							<td rel="L345" class="lines-code chroma">
								<code class="code-inner">
</code>
							</td>
						</tr>
						
						<tr>
							<td id="L346" class="lines-num">
								<span id="L346" data-line-number="346"></span>
							</td>
							<td rel="L346" class="lines-code chroma">
								<code class="code-inner">    <span class="kr">const</span> <span class="nx">reg</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L347" class="lines-num">
								<span id="L347" data-line-number="347"></span>
							</td>
							<td rel="L347" class="lines-code chroma">
								<code class="code-inner">      <span class="s1">&#39;overTime|[^库]不支持价保|无法申请价保|请用原订单申请&#39;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L348" class="lines-num">
								<span id="L348" data-line-number="348"></span>
							</td>
							<td rel="L348" class="lines-code chroma">
								<code class="code-inner">    <span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L349" class="lines-num">
								<span id="L349" data-line-number="349"></span>
							</td>
							<td rel="L349" class="lines-code chroma">
								<code class="code-inner">    <span class="kd">let</span> <span class="nx">deleted</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L350" class="lines-num">
								<span id="L350" data-line-number="350"></span>
							</td>
							<td rel="L350" class="lines-code chroma">
								<code class="code-inner">    <span class="nx">$</span><span class="p">.</span><span class="nx">post</span><span class="p">(</span><span class="nx">taskUrl</span><span class="p">(</span><span class="s1">&#39;siteppM_skuProResultPin&#39;</span><span class="p">,</span> <span class="nx">paramObj</span><span class="p">)</span><span class="p">,</span> <span class="p">(</span><span class="nx">err</span><span class="p">,</span> <span class="nx">resp</span><span class="p">,</span> <span class="nx">data</span><span class="p">)</span> <span class="p">=&gt;</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L351" class="lines-num">
								<span id="L351" data-line-number="351"></span>
							</td>
							<td rel="L351" class="lines-code chroma">
								<code class="code-inner">      <span class="k">try</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L352" class="lines-num">
								<span id="L352" data-line-number="352"></span>
							</td>
							<td rel="L352" class="lines-code chroma">
								<code class="code-inner">        <span class="k">if</span> <span class="p">(</span><span class="nx">err</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L353" class="lines-num">
								<span id="L353" data-line-number="353"></span>
							</td>
							<td rel="L353" class="lines-code chroma">
								<code class="code-inner">          <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L354" class="lines-num">
								<span id="L354" data-line-number="354"></span>
							</td>
							<td rel="L354" class="lines-code chroma">
								<code class="code-inner">            <span class="sb">`</span><span class="sb">🚫 </span><span class="si">${</span><span class="nx">arguments</span><span class="p">.</span><span class="nx">callee</span><span class="p">.</span><span class="nx">name</span><span class="p">.</span><span class="nx">toString</span><span class="p">(</span><span class="p">)</span><span class="si">}</span><span class="sb"> API请求失败，请检查网路</span><span class="sb">\n</span><span class="si">${</span><span class="nx">JSON</span><span class="p">.</span><span class="nx">stringify</span><span class="p">(</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L355" class="lines-num">
								<span id="L355" data-line-number="355"></span>
							</td>
							<td rel="L355" class="lines-code chroma">
								<code class="code-inner">              <span class="nx">err</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L356" class="lines-num">
								<span id="L356" data-line-number="356"></span>
							</td>
							<td rel="L356" class="lines-code chroma">
								<code class="code-inner">            <span class="p">)</span><span class="si">}</span><span class="sb">`</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L357" class="lines-num">
								<span id="L357" data-line-number="357"></span>
							</td>
							<td rel="L357" class="lines-code chroma">
								<code class="code-inner">          <span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L358" class="lines-num">
								<span id="L358" data-line-number="358"></span>
							</td>
							<td rel="L358" class="lines-code chroma">
								<code class="code-inner">        <span class="p">}</span> <span class="k">else</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L359" class="lines-num">
								<span id="L359" data-line-number="359"></span>
							</td>
							<td rel="L359" class="lines-code chroma">
								<code class="code-inner">          <span class="nx">deleted</span> <span class="o">=</span> <span class="nx">reg</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">data</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L360" class="lines-num">
								<span id="L360" data-line-number="360"></span>
							</td>
							<td rel="L360" class="lines-code chroma">
								<code class="code-inner">        <span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L361" class="lines-num">
								<span id="L361" data-line-number="361"></span>
							</td>
							<td rel="L361" class="lines-code chroma">
								<code class="code-inner">      <span class="p">}</span> <span class="k">catch</span> <span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L362" class="lines-num">
								<span id="L362" data-line-number="362"></span>
							</td>
							<td rel="L362" class="lines-code chroma">
								<code class="code-inner">        <span class="nx">reject</span><span class="p">(</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L363" class="lines-num">
								<span id="L363" data-line-number="363"></span>
							</td>
							<td rel="L363" class="lines-code chroma">
								<code class="code-inner">          <span class="sb">`</span><span class="sb">⚠️ </span><span class="si">${</span><span class="nx">arguments</span><span class="p">.</span><span class="nx">callee</span><span class="p">.</span><span class="nx">name</span><span class="p">.</span><span class="nx">toString</span><span class="p">(</span><span class="p">)</span><span class="si">}</span><span class="sb"> API返回结果解析出错</span><span class="sb">\n</span><span class="si">${</span><span class="nx">e</span><span class="si">}</span><span class="sb">\n</span><span class="si">${</span><span class="nx">JSON</span><span class="p">.</span><span class="nx">stringify</span><span class="p">(</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L364" class="lines-num">
								<span id="L364" data-line-number="364"></span>
							</td>
							<td rel="L364" class="lines-code chroma">
								<code class="code-inner">            <span class="nx">data</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L365" class="lines-num">
								<span id="L365" data-line-number="365"></span>
							</td>
							<td rel="L365" class="lines-code chroma">
								<code class="code-inner">          <span class="p">)</span><span class="si">}</span><span class="sb">`</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L366" class="lines-num">
								<span id="L366" data-line-number="366"></span>
							</td>
							<td rel="L366" class="lines-code chroma">
								<code class="code-inner">        <span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L367" class="lines-num">
								<span id="L367" data-line-number="367"></span>
							</td>
							<td rel="L367" class="lines-code chroma">
								<code class="code-inner">      <span class="p">}</span> <span class="k">finally</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L368" class="lines-num">
								<span id="L368" data-line-number="368"></span>
							</td>
							<td rel="L368" class="lines-code chroma">
								<code class="code-inner">        <span class="k">if</span> <span class="p">(</span><span class="nx">deleted</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L369" class="lines-num">
								<span id="L369" data-line-number="369"></span>
							</td>
							<td rel="L369" class="lines-code chroma">
								<code class="code-inner">          <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="sb">`</span><span class="sb">🚫 删除商品：</span><span class="si">${</span><span class="nx">order</span><span class="p">.</span><span class="nx">title</span><span class="si">}</span><span class="sb">`</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L370" class="lines-num">
								<span id="L370" data-line-number="370"></span>
							</td>
							<td rel="L370" class="lines-code chroma">
								<code class="code-inner">          <span class="nx">$</span><span class="p">.</span><span class="nx">orderList</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">orderList</span><span class="p">.</span><span class="nx">filter</span><span class="p">(</span><span class="p">(</span><span class="nx">item</span><span class="p">)</span> <span class="p">=&gt;</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L371" class="lines-num">
								<span id="L371" data-line-number="371"></span>
							</td>
							<td rel="L371" class="lines-code chroma">
								<code class="code-inner">            <span class="k">return</span> <span class="nx">item</span><span class="p">.</span><span class="nx">orderId</span> <span class="o">!=</span> <span class="nx">order</span><span class="p">.</span><span class="nx">orderId</span> <span class="o">||</span> <span class="nx">item</span><span class="p">.</span><span class="nx">skuId</span> <span class="o">!=</span> <span class="nx">order</span><span class="p">.</span><span class="nx">skuId</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L372" class="lines-num">
								<span id="L372" data-line-number="372"></span>
							</td>
							<td rel="L372" class="lines-code chroma">
								<code class="code-inner">          <span class="p">}</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L373" class="lines-num">
								<span id="L373" data-line-number="373"></span>
							</td>
							<td rel="L373" class="lines-code chroma">
								<code class="code-inner">        <span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L374" class="lines-num">
								<span id="L374" data-line-number="374"></span>
							</td>
							<td rel="L374" class="lines-code chroma">
								<code class="code-inner">        <span class="nx">resolve</span><span class="p">(</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L375" class="lines-num">
								<span id="L375" data-line-number="375"></span>
							</td>
							<td rel="L375" class="lines-code chroma">
								<code class="code-inner">      <span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L376" class="lines-num">
								<span id="L376" data-line-number="376"></span>
							</td>
							<td rel="L376" class="lines-code chroma">
								<code class="code-inner">    <span class="p">}</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L377" class="lines-num">
								<span id="L377" data-line-number="377"></span>
							</td>
							<td rel="L377" class="lines-code chroma">
								<code class="code-inner">  <span class="p">}</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L378" class="lines-num">
								<span id="L378" data-line-number="378"></span>
							</td>
							<td rel="L378" class="lines-code chroma">
								<code class="code-inner"><span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L379" class="lines-num">
								<span id="L379" data-line-number="379"></span>
							</td>
							<td rel="L379" class="lines-code chroma">
								<code class="code-inner">
</code>
							</td>
						</tr>
						
						<tr>
							<td id="L380" class="lines-num">
								<span id="L380" data-line-number="380"></span>
							</td>
							<td rel="L380" class="lines-code chroma">
								<code class="code-inner"><span class="kd">function</span> <span class="nx">getApplyResult</span><span class="p">(</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L381" class="lines-num">
								<span id="L381" data-line-number="381"></span>
							</td>
							<td rel="L381" class="lines-code chroma">
								<code class="code-inner">  <span class="kd">function</span> <span class="nx">handleApplyResult</span><span class="p">(</span><span class="nx">ajaxResultObj</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L382" class="lines-num">
								<span id="L382" data-line-number="382"></span>
							</td>
							<td rel="L382" class="lines-code chroma">
								<code class="code-inner">    <span class="k">if</span> <span class="p">(</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L383" class="lines-num">
								<span id="L383" data-line-number="383"></span>
							</td>
							<td rel="L383" class="lines-code chroma">
								<code class="code-inner">      <span class="nx">ajaxResultObj</span><span class="p">.</span><span class="nx">hasResult</span> <span class="o">!=</span> <span class="s1">&#39;undefined&#39;</span> <span class="o">&amp;&amp;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L384" class="lines-num">
								<span id="L384" data-line-number="384"></span>
							</td>
							<td rel="L384" class="lines-code chroma">
								<code class="code-inner">      <span class="nx">ajaxResultObj</span><span class="p">.</span><span class="nx">hasResult</span> <span class="o">==</span> <span class="kc">true</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L385" class="lines-num">
								<span id="L385" data-line-number="385"></span>
							</td>
							<td rel="L385" class="lines-code chroma">
								<code class="code-inner">    <span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L386" class="lines-num">
								<span id="L386" data-line-number="386"></span>
							</td>
							<td rel="L386" class="lines-code chroma">
								<code class="code-inner">      <span class="c1">//有结果了</code>
							</td>
						</tr>
						
						<tr>
							<td id="L387" class="lines-num">
								<span id="L387" data-line-number="387"></span>
							</td>
							<td rel="L387" class="lines-code chroma">
								<code class="code-inner"></span><span class="c1"></span>      <span class="kd">let</span> <span class="nx">proSkuApplyId</span> <span class="o">=</span> <span class="nx">ajaxResultObj</span><span class="p">.</span><span class="nx">applyResultVo</span><span class="p">.</span><span class="nx">proSkuApplyId</span><span class="p">;</span> <span class="c1">//申请id</code>
							</td>
						</tr>
						
						<tr>
							<td id="L388" class="lines-num">
								<span id="L388" data-line-number="388"></span>
							</td>
							<td rel="L388" class="lines-code chroma">
								<code class="code-inner"></span><span class="c1"></span>      <span class="kd">let</span> <span class="nx">order</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">applyMap</span><span class="p">[</span><span class="nx">proSkuApplyId</span><span class="p">]</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L389" class="lines-num">
								<span id="L389" data-line-number="389"></span>
							</td>
							<td rel="L389" class="lines-code chroma">
								<code class="code-inner">      <span class="k">delete</span> <span class="nx">$</span><span class="p">.</span><span class="nx">applyMap</span><span class="p">[</span><span class="nx">proSkuApplyId</span><span class="p">]</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L390" class="lines-num">
								<span id="L390" data-line-number="390"></span>
							</td>
							<td rel="L390" class="lines-code chroma">
								<code class="code-inner">      <span class="k">if</span> <span class="p">(</span><span class="nx">ajaxResultObj</span><span class="p">.</span><span class="nx">applyResultVo</span><span class="p">.</span><span class="nx">proApplyStatus</span> <span class="o">==</span> <span class="s1">&#39;ApplySuccess&#39;</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L391" class="lines-num">
								<span id="L391" data-line-number="391"></span>
							</td>
							<td rel="L391" class="lines-code chroma">
								<code class="code-inner">        <span class="c1">//价保成功</code>
							</td>
						</tr>
						
						<tr>
							<td id="L392" class="lines-num">
								<span id="L392" data-line-number="392"></span>
							</td>
							<td rel="L392" class="lines-code chroma">
								<code class="code-inner"></span><span class="c1"></span>        <span class="nx">$</span><span class="p">.</span><span class="nx">refundtotalamount</span> <span class="o">+=</span> <span class="nx">ajaxResultObj</span><span class="p">.</span><span class="nx">applyResultVo</span><span class="p">.</span><span class="nx">refundtotalamount</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L393" class="lines-num">
								<span id="L393" data-line-number="393"></span>
							</td>
							<td rel="L393" class="lines-code chroma">
								<code class="code-inner">        <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L394" class="lines-num">
								<span id="L394" data-line-number="394"></span>
							</td>
							<td rel="L394" class="lines-code chroma">
								<code class="code-inner">          <span class="sb">`</span><span class="sb">📋 </span><span class="si">${</span><span class="nx">order</span><span class="p">.</span><span class="nx">title</span><span class="si">}</span><span class="sb"> </span><span class="sb">\n</span><span class="sb">🟢 申请成功：￥</span><span class="si">${</span><span class="nx">$</span><span class="p">.</span><span class="nx">refundtotalamount</span><span class="si">}</span><span class="sb">`</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L395" class="lines-num">
								<span id="L395" data-line-number="395"></span>
							</td>
							<td rel="L395" class="lines-code chroma">
								<code class="code-inner">        <span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L396" class="lines-num">
								<span id="L396" data-line-number="396"></span>
							</td>
							<td rel="L396" class="lines-code chroma">
								<code class="code-inner">        <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="sb">`</span><span class="sb">-----</span><span class="sb">`</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L397" class="lines-num">
								<span id="L397" data-line-number="397"></span>
							</td>
							<td rel="L397" class="lines-code chroma">
								<code class="code-inner">      <span class="p">}</span> <span class="k">else</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L398" class="lines-num">
								<span id="L398" data-line-number="398"></span>
							</td>
							<td rel="L398" class="lines-code chroma">
								<code class="code-inner">        <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L399" class="lines-num">
								<span id="L399" data-line-number="399"></span>
							</td>
							<td rel="L399" class="lines-code chroma">
								<code class="code-inner">          <span class="sb">`</span><span class="sb">📋 </span><span class="si">${</span><span class="nx">order</span><span class="p">.</span><span class="nx">title</span><span class="si">}</span><span class="sb"> </span><span class="sb">\n</span><span class="sb">🔴 申请失败：</span><span class="si">${</span><span class="nx">ajaxResultObj</span><span class="p">.</span><span class="nx">applyResultVo</span><span class="p">.</span><span class="nx">failTypeStr</span><span class="si">}</span><span class="sb"> </span><span class="sb">\n</span><span class="sb">🔴 失败类型:</span><span class="si">${</span><span class="nx">ajaxResultObj</span><span class="p">.</span><span class="nx">applyResultVo</span><span class="p">.</span><span class="nx">failType</span><span class="si">}</span><span class="sb">`</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L400" class="lines-num">
								<span id="L400" data-line-number="400"></span>
							</td>
							<td rel="L400" class="lines-code chroma">
								<code class="code-inner">        <span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L401" class="lines-num">
								<span id="L401" data-line-number="401"></span>
							</td>
							<td rel="L401" class="lines-code chroma">
								<code class="code-inner">        <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="sb">`</span><span class="sb">-----</span><span class="sb">`</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L402" class="lines-num">
								<span id="L402" data-line-number="402"></span>
							</td>
							<td rel="L402" class="lines-code chroma">
								<code class="code-inner">      <span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L403" class="lines-num">
								<span id="L403" data-line-number="403"></span>
							</td>
							<td rel="L403" class="lines-code chroma">
								<code class="code-inner">    <span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L404" class="lines-num">
								<span id="L404" data-line-number="404"></span>
							</td>
							<td rel="L404" class="lines-code chroma">
								<code class="code-inner">  <span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L405" class="lines-num">
								<span id="L405" data-line-number="405"></span>
							</td>
							<td rel="L405" class="lines-code chroma">
								<code class="code-inner">  <span class="k">return</span> <span class="k">new</span> <span class="nb">Promise</span><span class="p">(</span><span class="p">(</span><span class="nx">resolve</span><span class="p">,</span> <span class="nx">reject</span><span class="p">)</span> <span class="p">=&gt;</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L406" class="lines-num">
								<span id="L406" data-line-number="406"></span>
							</td>
							<td rel="L406" class="lines-code chroma">
								<code class="code-inner">    <span class="kd">let</span> <span class="nx">proSkuApplyIds</span> <span class="o">=</span> <span class="nb">Object</span><span class="p">.</span><span class="nx">keys</span><span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">applyMap</span><span class="p">)</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s1">&#39;,&#39;</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L407" class="lines-num">
								<span id="L407" data-line-number="407"></span>
							</td>
							<td rel="L407" class="lines-code chroma">
								<code class="code-inner">    <span class="kr">const</span> <span class="p">{</span> <span class="nx">pin</span><span class="p">,</span> <span class="nx">type_hid</span> <span class="p">}</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">HyperParam</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L408" class="lines-num">
								<span id="L408" data-line-number="408"></span>
							</td>
							<td rel="L408" class="lines-code chroma">
								<code class="code-inner">
</code>
							</td>
						</tr>
						
						<tr>
							<td id="L409" class="lines-num">
								<span id="L409" data-line-number="409"></span>
							</td>
							<td rel="L409" class="lines-code chroma">
								<code class="code-inner">    <span class="kd">let</span> <span class="nx">paramObj</span> <span class="o">=</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L410" class="lines-num">
								<span id="L410" data-line-number="410"></span>
							</td>
							<td rel="L410" class="lines-code chroma">
								<code class="code-inner">      <span class="nx">proSkuApplyIds</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L411" class="lines-num">
								<span id="L411" data-line-number="411"></span>
							</td>
							<td rel="L411" class="lines-code chroma">
								<code class="code-inner">      <span class="nx">pin</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L412" class="lines-num">
								<span id="L412" data-line-number="412"></span>
							</td>
							<td rel="L412" class="lines-code chroma">
								<code class="code-inner">      <span class="nx">type</span><span class="o">:</span> <span class="nx">type_hid</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L413" class="lines-num">
								<span id="L413" data-line-number="413"></span>
							</td>
							<td rel="L413" class="lines-code chroma">
								<code class="code-inner">    <span class="p">}</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L414" class="lines-num">
								<span id="L414" data-line-number="414"></span>
							</td>
							<td rel="L414" class="lines-code chroma">
								<code class="code-inner">
</code>
							</td>
						</tr>
						
						<tr>
							<td id="L415" class="lines-num">
								<span id="L415" data-line-number="415"></span>
							</td>
							<td rel="L415" class="lines-code chroma">
								<code class="code-inner">    <span class="nx">$</span><span class="p">.</span><span class="nx">post</span><span class="p">(</span><span class="nx">taskUrl</span><span class="p">(</span><span class="s1">&#39;siteppM_moreApplyResult&#39;</span><span class="p">,</span> <span class="nx">paramObj</span><span class="p">)</span><span class="p">,</span> <span class="p">(</span><span class="nx">err</span><span class="p">,</span> <span class="nx">resp</span><span class="p">,</span> <span class="nx">data</span><span class="p">)</span> <span class="p">=&gt;</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L416" class="lines-num">
								<span id="L416" data-line-number="416"></span>
							</td>
							<td rel="L416" class="lines-code chroma">
								<code class="code-inner">      <span class="k">try</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L417" class="lines-num">
								<span id="L417" data-line-number="417"></span>
							</td>
							<td rel="L417" class="lines-code chroma">
								<code class="code-inner">        <span class="k">if</span> <span class="p">(</span><span class="nx">err</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L418" class="lines-num">
								<span id="L418" data-line-number="418"></span>
							</td>
							<td rel="L418" class="lines-code chroma">
								<code class="code-inner">          <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L419" class="lines-num">
								<span id="L419" data-line-number="419"></span>
							</td>
							<td rel="L419" class="lines-code chroma">
								<code class="code-inner">            <span class="sb">`</span><span class="sb">🚫 </span><span class="si">${</span><span class="nx">arguments</span><span class="p">.</span><span class="nx">callee</span><span class="p">.</span><span class="nx">name</span><span class="p">.</span><span class="nx">toString</span><span class="p">(</span><span class="p">)</span><span class="si">}</span><span class="sb"> API请求失败，请检查网路</span><span class="sb">\n</span><span class="si">${</span><span class="nx">JSON</span><span class="p">.</span><span class="nx">stringify</span><span class="p">(</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L420" class="lines-num">
								<span id="L420" data-line-number="420"></span>
							</td>
							<td rel="L420" class="lines-code chroma">
								<code class="code-inner">              <span class="nx">err</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L421" class="lines-num">
								<span id="L421" data-line-number="421"></span>
							</td>
							<td rel="L421" class="lines-code chroma">
								<code class="code-inner">            <span class="p">)</span><span class="si">}</span><span class="sb">`</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L422" class="lines-num">
								<span id="L422" data-line-number="422"></span>
							</td>
							<td rel="L422" class="lines-code chroma">
								<code class="code-inner">          <span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L423" class="lines-num">
								<span id="L423" data-line-number="423"></span>
							</td>
							<td rel="L423" class="lines-code chroma">
								<code class="code-inner">        <span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">data</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L424" class="lines-num">
								<span id="L424" data-line-number="424"></span>
							</td>
							<td rel="L424" class="lines-code chroma">
								<code class="code-inner">          <span class="nx">data</span> <span class="o">=</span> <span class="nx">JSON</span><span class="p">.</span><span class="nx">parse</span><span class="p">(</span><span class="nx">data</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L425" class="lines-num">
								<span id="L425" data-line-number="425"></span>
							</td>
							<td rel="L425" class="lines-code chroma">
								<code class="code-inner">          <span class="kd">let</span> <span class="nx">resultArray</span> <span class="o">=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">applyResults</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L426" class="lines-num">
								<span id="L426" data-line-number="426"></span>
							</td>
							<td rel="L426" class="lines-code chroma">
								<code class="code-inner">          <span class="k">for</span> <span class="p">(</span><span class="kd">let</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">resultArray</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L427" class="lines-num">
								<span id="L427" data-line-number="427"></span>
							</td>
							<td rel="L427" class="lines-code chroma">
								<code class="code-inner">            <span class="kd">let</span> <span class="nx">ajaxResultObj</span> <span class="o">=</span> <span class="nx">resultArray</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L428" class="lines-num">
								<span id="L428" data-line-number="428"></span>
							</td>
							<td rel="L428" class="lines-code chroma">
								<code class="code-inner">            <span class="nx">handleApplyResult</span><span class="p">(</span><span class="nx">ajaxResultObj</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L429" class="lines-num">
								<span id="L429" data-line-number="429"></span>
							</td>
							<td rel="L429" class="lines-code chroma">
								<code class="code-inner">          <span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L430" class="lines-num">
								<span id="L430" data-line-number="430"></span>
							</td>
							<td rel="L430" class="lines-code chroma">
								<code class="code-inner">        <span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L431" class="lines-num">
								<span id="L431" data-line-number="431"></span>
							</td>
							<td rel="L431" class="lines-code chroma">
								<code class="code-inner">      <span class="p">}</span> <span class="k">catch</span> <span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L432" class="lines-num">
								<span id="L432" data-line-number="432"></span>
							</td>
							<td rel="L432" class="lines-code chroma">
								<code class="code-inner">        <span class="nx">reject</span><span class="p">(</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L433" class="lines-num">
								<span id="L433" data-line-number="433"></span>
							</td>
							<td rel="L433" class="lines-code chroma">
								<code class="code-inner">          <span class="sb">`</span><span class="sb">⚠️ </span><span class="si">${</span><span class="nx">arguments</span><span class="p">.</span><span class="nx">callee</span><span class="p">.</span><span class="nx">name</span><span class="p">.</span><span class="nx">toString</span><span class="p">(</span><span class="p">)</span><span class="si">}</span><span class="sb"> API返回结果解析出错</span><span class="sb">\n</span><span class="si">${</span><span class="nx">e</span><span class="si">}</span><span class="sb">\n</span><span class="si">${</span><span class="nx">JSON</span><span class="p">.</span><span class="nx">stringify</span><span class="p">(</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L434" class="lines-num">
								<span id="L434" data-line-number="434"></span>
							</td>
							<td rel="L434" class="lines-code chroma">
								<code class="code-inner">            <span class="nx">data</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L435" class="lines-num">
								<span id="L435" data-line-number="435"></span>
							</td>
							<td rel="L435" class="lines-code chroma">
								<code class="code-inner">          <span class="p">)</span><span class="si">}</span><span class="sb">`</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L436" class="lines-num">
								<span id="L436" data-line-number="436"></span>
							</td>
							<td rel="L436" class="lines-code chroma">
								<code class="code-inner">        <span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L437" class="lines-num">
								<span id="L437" data-line-number="437"></span>
							</td>
							<td rel="L437" class="lines-code chroma">
								<code class="code-inner">      <span class="p">}</span> <span class="k">finally</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L438" class="lines-num">
								<span id="L438" data-line-number="438"></span>
							</td>
							<td rel="L438" class="lines-code chroma">
								<code class="code-inner">        <span class="nx">resolve</span><span class="p">(</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L439" class="lines-num">
								<span id="L439" data-line-number="439"></span>
							</td>
							<td rel="L439" class="lines-code chroma">
								<code class="code-inner">      <span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L440" class="lines-num">
								<span id="L440" data-line-number="440"></span>
							</td>
							<td rel="L440" class="lines-code chroma">
								<code class="code-inner">    <span class="p">}</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L441" class="lines-num">
								<span id="L441" data-line-number="441"></span>
							</td>
							<td rel="L441" class="lines-code chroma">
								<code class="code-inner">  <span class="p">}</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L442" class="lines-num">
								<span id="L442" data-line-number="442"></span>
							</td>
							<td rel="L442" class="lines-code chroma">
								<code class="code-inner"><span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L443" class="lines-num">
								<span id="L443" data-line-number="443"></span>
							</td>
							<td rel="L443" class="lines-code chroma">
								<code class="code-inner">
</code>
							</td>
						</tr>
						
						<tr>
							<td id="L444" class="lines-num">
								<span id="L444" data-line-number="444"></span>
							</td>
							<td rel="L444" class="lines-code chroma">
								<code class="code-inner"><span class="kd">function</span> <span class="nx">taskUrl</span><span class="p">(</span><span class="nx">functionid</span><span class="p">,</span> <span class="nx">body</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L445" class="lines-num">
								<span id="L445" data-line-number="445"></span>
							</td>
							<td rel="L445" class="lines-code chroma">
								<code class="code-inner">  <span class="kd">let</span> <span class="nx">urlStr</span> <span class="o">=</span> <span class="nx">selfDomain</span> <span class="o">+</span> <span class="s1">&#39;rest/priceprophone/priceskusPull&#39;</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L446" class="lines-num">
								<span id="L446" data-line-number="446"></span>
							</td>
							<td rel="L446" class="lines-code chroma">
								<code class="code-inner">  <span class="kr">const</span> <span class="p">{</span> <span class="nx">useColorApi</span><span class="p">,</span> <span class="nx">forcebot</span> <span class="p">}</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">HyperParam</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L447" class="lines-num">
								<span id="L447" data-line-number="447"></span>
							</td>
							<td rel="L447" class="lines-code chroma">
								<code class="code-inner">
</code>
							</td>
						</tr>
						
						<tr>
							<td id="L448" class="lines-num">
								<span id="L448" data-line-number="448"></span>
							</td>
							<td rel="L448" class="lines-code chroma">
								<code class="code-inner">  <span class="k">if</span> <span class="p">(</span><span class="nx">useColorApi</span> <span class="o">==</span> <span class="s1">&#39;true&#39;</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L449" class="lines-num">
								<span id="L449" data-line-number="449"></span>
							</td>
							<td rel="L449" class="lines-code chroma">
								<code class="code-inner">    <span class="nx">urlStr</span> <span class="o">=</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L450" class="lines-num">
								<span id="L450" data-line-number="450"></span>
							</td>
							<td rel="L450" class="lines-code chroma">
								<code class="code-inner">      <span class="nx">unifiedGatewayName</span> <span class="o">+</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L451" class="lines-num">
								<span id="L451" data-line-number="451"></span>
							</td>
							<td rel="L451" class="lines-code chroma">
								<code class="code-inner">      <span class="s1">&#39;api?appid=siteppM&amp;functionId=&#39;</span> <span class="o">+</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L452" class="lines-num">
								<span id="L452" data-line-number="452"></span>
							</td>
							<td rel="L452" class="lines-code chroma">
								<code class="code-inner">      <span class="nx">functionid</span> <span class="o">+</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L453" class="lines-num">
								<span id="L453" data-line-number="453"></span>
							</td>
							<td rel="L453" class="lines-code chroma">
								<code class="code-inner">      <span class="s1">&#39;&amp;forcebot=&#39;</span> <span class="o">+</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L454" class="lines-num">
								<span id="L454" data-line-number="454"></span>
							</td>
							<td rel="L454" class="lines-code chroma">
								<code class="code-inner">      <span class="nx">forcebot</span> <span class="o">+</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L455" class="lines-num">
								<span id="L455" data-line-number="455"></span>
							</td>
							<td rel="L455" class="lines-code chroma">
								<code class="code-inner">      <span class="s1">&#39;&amp;t=&#39;</span> <span class="o">+</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L456" class="lines-num">
								<span id="L456" data-line-number="456"></span>
							</td>
							<td rel="L456" class="lines-code chroma">
								<code class="code-inner">      <span class="k">new</span> <span class="nb">Date</span><span class="p">(</span><span class="p">)</span><span class="p">.</span><span class="nx">getTime</span><span class="p">(</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L457" class="lines-num">
								<span id="L457" data-line-number="457"></span>
							</td>
							<td rel="L457" class="lines-code chroma">
								<code class="code-inner">  <span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L458" class="lines-num">
								<span id="L458" data-line-number="458"></span>
							</td>
							<td rel="L458" class="lines-code chroma">
								<code class="code-inner">  <span class="k">return</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L459" class="lines-num">
								<span id="L459" data-line-number="459"></span>
							</td>
							<td rel="L459" class="lines-code chroma">
								<code class="code-inner">    <span class="nx">url</span><span class="o">:</span> <span class="nx">urlStr</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L460" class="lines-num">
								<span id="L460" data-line-number="460"></span>
							</td>
							<td rel="L460" class="lines-code chroma">
								<code class="code-inner">    <span class="nx">headers</span><span class="o">:</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L461" class="lines-num">
								<span id="L461" data-line-number="461"></span>
							</td>
							<td rel="L461" class="lines-code chroma">
								<code class="code-inner">      <span class="nx">Host</span><span class="o">:</span> <span class="nx">useColorApi</span> <span class="o">==</span> <span class="s1">&#39;true&#39;</span> <span class="o">?</span> <span class="s1">&#39;api.m.jd.com&#39;</span> <span class="o">:</span> <span class="s1">&#39;msitepp-fm.jd.com&#39;</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L462" class="lines-num">
								<span id="L462" data-line-number="462"></span>
							</td>
							<td rel="L462" class="lines-code chroma">
								<code class="code-inner">      <span class="nx">Accept</span><span class="o">:</span> <span class="s1">&#39;*/*&#39;</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L463" class="lines-num">
								<span id="L463" data-line-number="463"></span>
							</td>
							<td rel="L463" class="lines-code chroma">
								<code class="code-inner">      <span class="s1">&#39;Accept-Language&#39;</span><span class="o">:</span> <span class="s1">&#39;zh-cn&#39;</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L464" class="lines-num">
								<span id="L464" data-line-number="464"></span>
							</td>
							<td rel="L464" class="lines-code chroma">
								<code class="code-inner">      <span class="s1">&#39;Accept-Encoding&#39;</span><span class="o">:</span> <span class="s1">&#39;gzip, deflate, br&#39;</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L465" class="lines-num">
								<span id="L465" data-line-number="465"></span>
							</td>
							<td rel="L465" class="lines-code chroma">
								<code class="code-inner">      <span class="s1">&#39;Content-Type&#39;</span><span class="o">:</span> <span class="s1">&#39;application/x-www-form-urlencoded&#39;</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L466" class="lines-num">
								<span id="L466" data-line-number="466"></span>
							</td>
							<td rel="L466" class="lines-code chroma">
								<code class="code-inner">      <span class="nx">Origin</span><span class="o">:</span> <span class="s1">&#39;https://msitepp-fm.jd.com&#39;</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L467" class="lines-num">
								<span id="L467" data-line-number="467"></span>
							</td>
							<td rel="L467" class="lines-code chroma">
								<code class="code-inner">      <span class="nx">Connection</span><span class="o">:</span> <span class="s1">&#39;keep-alive&#39;</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L468" class="lines-num">
								<span id="L468" data-line-number="468"></span>
							</td>
							<td rel="L468" class="lines-code chroma">
								<code class="code-inner">      <span class="nx">Referer</span><span class="o">:</span> <span class="s1">&#39;https://msitepp-fm.jd.com/rest/priceprophone/priceProPhoneMenu&#39;</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L469" class="lines-num">
								<span id="L469" data-line-number="469"></span>
							</td>
							<td rel="L469" class="lines-code chroma">
								<code class="code-inner">      <span class="s1">&#39;User-Agent&#39;</span><span class="o">:</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L470" class="lines-num">
								<span id="L470" data-line-number="470"></span>
							</td>
							<td rel="L470" class="lines-code chroma">
								<code class="code-inner">        <span class="s1">&#39;Mozilla/5.0 (iPhone; CPU iPhone OS 14_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1&#39;</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L471" class="lines-num">
								<span id="L471" data-line-number="471"></span>
							</td>
							<td rel="L471" class="lines-code chroma">
								<code class="code-inner">      <span class="nx">Cookie</span><span class="o">:</span> <span class="nx">$</span><span class="p">.</span><span class="nx">cookie</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L472" class="lines-num">
								<span id="L472" data-line-number="472"></span>
							</td>
							<td rel="L472" class="lines-code chroma">
								<code class="code-inner">    <span class="p">}</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L473" class="lines-num">
								<span id="L473" data-line-number="473"></span>
							</td>
							<td rel="L473" class="lines-code chroma">
								<code class="code-inner">    <span class="nx">body</span><span class="o">:</span> <span class="nx">body</span> <span class="o">?</span> <span class="sb">`</span><span class="sb">body=</span><span class="si">${</span><span class="nx">JSON</span><span class="p">.</span><span class="nx">stringify</span><span class="p">(</span><span class="nx">body</span><span class="p">)</span><span class="si">}</span><span class="sb">`</span> <span class="o">:</span> <span class="kc">undefined</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L474" class="lines-num">
								<span id="L474" data-line-number="474"></span>
							</td>
							<td rel="L474" class="lines-code chroma">
								<code class="code-inner">  <span class="p">}</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L475" class="lines-num">
								<span id="L475" data-line-number="475"></span>
							</td>
							<td rel="L475" class="lines-code chroma">
								<code class="code-inner"><span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L476" class="lines-num">
								<span id="L476" data-line-number="476"></span>
							</td>
							<td rel="L476" class="lines-code chroma">
								<code class="code-inner">
</code>
							</td>
						</tr>
						
						<tr>
							<td id="L477" class="lines-num">
								<span id="L477" data-line-number="477"></span>
							</td>
							<td rel="L477" class="lines-code chroma">
								<code class="code-inner"><span class="kd">function</span> <span class="nx">showMsg</span><span class="p">(</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L478" class="lines-num">
								<span id="L478" data-line-number="478"></span>
							</td>
							<td rel="L478" class="lines-code chroma">
								<code class="code-inner">  <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="sb">`</span><span class="sb">🧮 本次价格保护金额：</span><span class="si">${</span><span class="nx">$</span><span class="p">.</span><span class="nx">refundtotalamount</span><span class="si">}</span><span class="sb">💰</span><span class="sb">`</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L479" class="lines-num">
								<span id="L479" data-line-number="479"></span>
							</td>
							<td rel="L479" class="lines-code chroma">
								<code class="code-inner">  <span class="k">if</span> <span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">refundtotalamount</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L480" class="lines-num">
								<span id="L480" data-line-number="480"></span>
							</td>
							<td rel="L480" class="lines-code chroma">
								<code class="code-inner">    <span class="nx">$</span><span class="p">.</span><span class="nx">msg</span><span class="p">(</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L481" class="lines-num">
								<span id="L481" data-line-number="481"></span>
							</td>
							<td rel="L481" class="lines-code chroma">
								<code class="code-inner">      <span class="nx">$</span><span class="p">.</span><span class="nx">name</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L482" class="lines-num">
								<span id="L482" data-line-number="482"></span>
							</td>
							<td rel="L482" class="lines-code chroma">
								<code class="code-inner">      <span class="sb">`</span><span class="sb">`</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L483" class="lines-num">
								<span id="L483" data-line-number="483"></span>
							</td>
							<td rel="L483" class="lines-code chroma">
								<code class="code-inner">      <span class="sb">`</span><span class="sb">京东账号</span><span class="si">${</span><span class="nx">$</span><span class="p">.</span><span class="nx">index</span><span class="si">}</span><span class="sb"> </span><span class="si">${</span><span class="nx">$</span><span class="p">.</span><span class="nx">nickName</span> <span class="o">||</span> <span class="nx">$</span><span class="p">.</span><span class="nx">UserName</span><span class="si">}</span><span class="sb">\n</span><span class="sb">🎉 本次价格保护金额：</span><span class="si">${</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L484" class="lines-num">
								<span id="L484" data-line-number="484"></span>
							</td>
							<td rel="L484" class="lines-code chroma">
								<code class="code-inner">        <span class="nx">$</span><span class="p">.</span><span class="nx">refundtotalamount</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L485" class="lines-num">
								<span id="L485" data-line-number="485"></span>
							</td>
							<td rel="L485" class="lines-code chroma">
								<code class="code-inner">      <span class="si">}</span><span class="sb">💰</span><span class="sb">`</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L486" class="lines-num">
								<span id="L486" data-line-number="486"></span>
							</td>
							<td rel="L486" class="lines-code chroma">
								<code class="code-inner">      <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L487" class="lines-num">
								<span id="L487" data-line-number="487"></span>
							</td>
							<td rel="L487" class="lines-code chroma">
								<code class="code-inner">        <span class="s1">&#39;open-url&#39;</span><span class="o">:</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L488" class="lines-num">
								<span id="L488" data-line-number="488"></span>
							</td>
							<td rel="L488" class="lines-code chroma">
								<code class="code-inner">          <span class="s1">&#39;https://msitepp-fm.jd.com/rest/priceprophone/priceProPhoneMenu&#39;</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L489" class="lines-num">
								<span id="L489" data-line-number="489"></span>
							</td>
							<td rel="L489" class="lines-code chroma">
								<code class="code-inner">      <span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L490" class="lines-num">
								<span id="L490" data-line-number="490"></span>
							</td>
							<td rel="L490" class="lines-code chroma">
								<code class="code-inner">    <span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L491" class="lines-num">
								<span id="L491" data-line-number="491"></span>
							</td>
							<td rel="L491" class="lines-code chroma">
								<code class="code-inner">  <span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L492" class="lines-num">
								<span id="L492" data-line-number="492"></span>
							</td>
							<td rel="L492" class="lines-code chroma">
								<code class="code-inner"><span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L493" class="lines-num">
								<span id="L493" data-line-number="493"></span>
							</td>
							<td rel="L493" class="lines-code chroma">
								<code class="code-inner">
</code>
							</td>
						</tr>
						
						<tr>
							<td id="L494" class="lines-num">
								<span id="L494" data-line-number="494"></span>
							</td>
							<td rel="L494" class="lines-code chroma">
								<code class="code-inner"><span class="kd">function</span> <span class="nx">totalBean</span><span class="p">(</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L495" class="lines-num">
								<span id="L495" data-line-number="495"></span>
							</td>
							<td rel="L495" class="lines-code chroma">
								<code class="code-inner">  <span class="k">return</span> <span class="k">new</span> <span class="nb">Promise</span><span class="p">(</span><span class="p">(</span><span class="nx">resolve</span><span class="p">)</span> <span class="p">=&gt;</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L496" class="lines-num">
								<span id="L496" data-line-number="496"></span>
							</td>
							<td rel="L496" class="lines-code chroma">
								<code class="code-inner">    <span class="kr">const</span> <span class="nx">options</span> <span class="o">=</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L497" class="lines-num">
								<span id="L497" data-line-number="497"></span>
							</td>
							<td rel="L497" class="lines-code chroma">
								<code class="code-inner">      <span class="nx">url</span><span class="o">:</span> <span class="sb">`</span><span class="sb">https://wq.jd.com/user/info/QueryJDUserInfo?sceneval=2</span><span class="sb">`</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L498" class="lines-num">
								<span id="L498" data-line-number="498"></span>
							</td>
							<td rel="L498" class="lines-code chroma">
								<code class="code-inner">      <span class="nx">headers</span><span class="o">:</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L499" class="lines-num">
								<span id="L499" data-line-number="499"></span>
							</td>
							<td rel="L499" class="lines-code chroma">
								<code class="code-inner">        <span class="nx">Accept</span><span class="o">:</span> <span class="s1">&#39;application/json,text/plain, */*&#39;</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L500" class="lines-num">
								<span id="L500" data-line-number="500"></span>
							</td>
							<td rel="L500" class="lines-code chroma">
								<code class="code-inner">        <span class="s1">&#39;Content-Type&#39;</span><span class="o">:</span> <span class="s1">&#39;application/x-www-form-urlencoded&#39;</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L501" class="lines-num">
								<span id="L501" data-line-number="501"></span>
							</td>
							<td rel="L501" class="lines-code chroma">
								<code class="code-inner">        <span class="s1">&#39;Accept-Encoding&#39;</span><span class="o">:</span> <span class="s1">&#39;gzip, deflate, br&#39;</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L502" class="lines-num">
								<span id="L502" data-line-number="502"></span>
							</td>
							<td rel="L502" class="lines-code chroma">
								<code class="code-inner">        <span class="s1">&#39;Accept-Language&#39;</span><span class="o">:</span> <span class="s1">&#39;zh-cn&#39;</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L503" class="lines-num">
								<span id="L503" data-line-number="503"></span>
							</td>
							<td rel="L503" class="lines-code chroma">
								<code class="code-inner">        <span class="nx">Connection</span><span class="o">:</span> <span class="s1">&#39;keep-alive&#39;</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L504" class="lines-num">
								<span id="L504" data-line-number="504"></span>
							</td>
							<td rel="L504" class="lines-code chroma">
								<code class="code-inner">        <span class="nx">Cookie</span><span class="o">:</span> <span class="nx">$</span><span class="p">.</span><span class="nx">cookie</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L505" class="lines-num">
								<span id="L505" data-line-number="505"></span>
							</td>
							<td rel="L505" class="lines-code chroma">
								<code class="code-inner">        <span class="nx">Referer</span><span class="o">:</span> <span class="s1">&#39;https://wqs.jd.com/my/jingdou/my.shtml?sceneval=2&#39;</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L506" class="lines-num">
								<span id="L506" data-line-number="506"></span>
							</td>
							<td rel="L506" class="lines-code chroma">
								<code class="code-inner">        <span class="s1">&#39;User-Agent&#39;</span><span class="o">:</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L507" class="lines-num">
								<span id="L507" data-line-number="507"></span>
							</td>
							<td rel="L507" class="lines-code chroma">
								<code class="code-inner">          <span class="s1">&#39;Mozilla/5.0 (iPhone; CPU iPhone OS 14_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1&#39;</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L508" class="lines-num">
								<span id="L508" data-line-number="508"></span>
							</td>
							<td rel="L508" class="lines-code chroma">
								<code class="code-inner">      <span class="p">}</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L509" class="lines-num">
								<span id="L509" data-line-number="509"></span>
							</td>
							<td rel="L509" class="lines-code chroma">
								<code class="code-inner">    <span class="p">}</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L510" class="lines-num">
								<span id="L510" data-line-number="510"></span>
							</td>
							<td rel="L510" class="lines-code chroma">
								<code class="code-inner">    <span class="nx">$</span><span class="p">.</span><span class="nx">post</span><span class="p">(</span><span class="nx">options</span><span class="p">,</span> <span class="p">(</span><span class="nx">err</span><span class="p">,</span> <span class="nx">resp</span><span class="p">,</span> <span class="nx">data</span><span class="p">)</span> <span class="p">=&gt;</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L511" class="lines-num">
								<span id="L511" data-line-number="511"></span>
							</td>
							<td rel="L511" class="lines-code chroma">
								<code class="code-inner">      <span class="k">try</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L512" class="lines-num">
								<span id="L512" data-line-number="512"></span>
							</td>
							<td rel="L512" class="lines-code chroma">
								<code class="code-inner">        <span class="k">if</span> <span class="p">(</span><span class="nx">err</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L513" class="lines-num">
								<span id="L513" data-line-number="513"></span>
							</td>
							<td rel="L513" class="lines-code chroma">
								<code class="code-inner">          <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="sb">`</span><span class="si">${</span><span class="nx">JSON</span><span class="p">.</span><span class="nx">stringify</span><span class="p">(</span><span class="nx">err</span><span class="p">)</span><span class="si">}</span><span class="sb">`</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L514" class="lines-num">
								<span id="L514" data-line-number="514"></span>
							</td>
							<td rel="L514" class="lines-code chroma">
								<code class="code-inner">          <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="sb">`</span><span class="si">${</span><span class="nx">$</span><span class="p">.</span><span class="nx">name</span><span class="si">}</span><span class="sb"> API请求失败，请检查网路重试</span><span class="sb">`</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L515" class="lines-num">
								<span id="L515" data-line-number="515"></span>
							</td>
							<td rel="L515" class="lines-code chroma">
								<code class="code-inner">        <span class="p">}</span> <span class="k">else</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L516" class="lines-num">
								<span id="L516" data-line-number="516"></span>
							</td>
							<td rel="L516" class="lines-code chroma">
								<code class="code-inner">          <span class="k">if</span> <span class="p">(</span><span class="nx">data</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L517" class="lines-num">
								<span id="L517" data-line-number="517"></span>
							</td>
							<td rel="L517" class="lines-code chroma">
								<code class="code-inner">            <span class="nx">data</span> <span class="o">=</span> <span class="nx">JSON</span><span class="p">.</span><span class="nx">parse</span><span class="p">(</span><span class="nx">data</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L518" class="lines-num">
								<span id="L518" data-line-number="518"></span>
							</td>
							<td rel="L518" class="lines-code chroma">
								<code class="code-inner">            <span class="k">if</span> <span class="p">(</span><span class="nx">data</span><span class="p">[</span><span class="s1">&#39;retcode&#39;</span><span class="p">]</span> <span class="o">===</span> <span class="mi">13</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L519" class="lines-num">
								<span id="L519" data-line-number="519"></span>
							</td>
							<td rel="L519" class="lines-code chroma">
								<code class="code-inner">              <span class="k">return</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L520" class="lines-num">
								<span id="L520" data-line-number="520"></span>
							</td>
							<td rel="L520" class="lines-code chroma">
								<code class="code-inner">            <span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L521" class="lines-num">
								<span id="L521" data-line-number="521"></span>
							</td>
							<td rel="L521" class="lines-code chroma">
								<code class="code-inner">            <span class="nx">$</span><span class="p">.</span><span class="nx">isLogin</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L522" class="lines-num">
								<span id="L522" data-line-number="522"></span>
							</td>
							<td rel="L522" class="lines-code chroma">
								<code class="code-inner">            <span class="k">if</span> <span class="p">(</span><span class="nx">data</span><span class="p">[</span><span class="s1">&#39;retcode&#39;</span><span class="p">]</span> <span class="o">===</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L523" class="lines-num">
								<span id="L523" data-line-number="523"></span>
							</td>
							<td rel="L523" class="lines-code chroma">
								<code class="code-inner">              <span class="nx">$</span><span class="p">.</span><span class="nx">nickName</span> <span class="o">=</span> <span class="nx">data</span><span class="p">[</span><span class="s1">&#39;base&#39;</span><span class="p">]</span><span class="p">.</span><span class="nx">nickname</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L524" class="lines-num">
								<span id="L524" data-line-number="524"></span>
							</td>
							<td rel="L524" class="lines-code chroma">
								<code class="code-inner">            <span class="p">}</span> <span class="k">else</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L525" class="lines-num">
								<span id="L525" data-line-number="525"></span>
							</td>
							<td rel="L525" class="lines-code chroma">
								<code class="code-inner">              <span class="nx">$</span><span class="p">.</span><span class="nx">nickName</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">UserName</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L526" class="lines-num">
								<span id="L526" data-line-number="526"></span>
							</td>
							<td rel="L526" class="lines-code chroma">
								<code class="code-inner">            <span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L527" class="lines-num">
								<span id="L527" data-line-number="527"></span>
							</td>
							<td rel="L527" class="lines-code chroma">
								<code class="code-inner">          <span class="p">}</span> <span class="k">else</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L528" class="lines-num">
								<span id="L528" data-line-number="528"></span>
							</td>
							<td rel="L528" class="lines-code chroma">
								<code class="code-inner">            <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="sb">`</span><span class="sb">京东服务器返回空数据</span><span class="sb">`</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L529" class="lines-num">
								<span id="L529" data-line-number="529"></span>
							</td>
							<td rel="L529" class="lines-code chroma">
								<code class="code-inner">          <span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L530" class="lines-num">
								<span id="L530" data-line-number="530"></span>
							</td>
							<td rel="L530" class="lines-code chroma">
								<code class="code-inner">        <span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L531" class="lines-num">
								<span id="L531" data-line-number="531"></span>
							</td>
							<td rel="L531" class="lines-code chroma">
								<code class="code-inner">      <span class="p">}</span> <span class="k">catch</span> <span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L532" class="lines-num">
								<span id="L532" data-line-number="532"></span>
							</td>
							<td rel="L532" class="lines-code chroma">
								<code class="code-inner">        <span class="nx">$</span><span class="p">.</span><span class="nx">logErr</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span> <span class="nx">resp</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L533" class="lines-num">
								<span id="L533" data-line-number="533"></span>
							</td>
							<td rel="L533" class="lines-code chroma">
								<code class="code-inner">      <span class="p">}</span> <span class="k">finally</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L534" class="lines-num">
								<span id="L534" data-line-number="534"></span>
							</td>
							<td rel="L534" class="lines-code chroma">
								<code class="code-inner">        <span class="nx">resolve</span><span class="p">(</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L535" class="lines-num">
								<span id="L535" data-line-number="535"></span>
							</td>
							<td rel="L535" class="lines-code chroma">
								<code class="code-inner">      <span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L536" class="lines-num">
								<span id="L536" data-line-number="536"></span>
							</td>
							<td rel="L536" class="lines-code chroma">
								<code class="code-inner">    <span class="p">}</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L537" class="lines-num">
								<span id="L537" data-line-number="537"></span>
							</td>
							<td rel="L537" class="lines-code chroma">
								<code class="code-inner">  <span class="p">}</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L538" class="lines-num">
								<span id="L538" data-line-number="538"></span>
							</td>
							<td rel="L538" class="lines-code chroma">
								<code class="code-inner"><span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L539" class="lines-num">
								<span id="L539" data-line-number="539"></span>
							</td>
							<td rel="L539" class="lines-code chroma">
								<code class="code-inner">
</code>
							</td>
						</tr>
						
						<tr>
							<td id="L540" class="lines-num">
								<span id="L540" data-line-number="540"></span>
							</td>
							<td rel="L540" class="lines-code chroma">
								<code class="code-inner"><span class="kd">function</span> <span class="nx">jsonParse</span><span class="p">(</span><span class="nx">str</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L541" class="lines-num">
								<span id="L541" data-line-number="541"></span>
							</td>
							<td rel="L541" class="lines-code chroma">
								<code class="code-inner">  <span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">str</span> <span class="o">==</span> <span class="s1">&#39;string&#39;</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L542" class="lines-num">
								<span id="L542" data-line-number="542"></span>
							</td>
							<td rel="L542" class="lines-code chroma">
								<code class="code-inner">    <span class="k">try</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L543" class="lines-num">
								<span id="L543" data-line-number="543"></span>
							</td>
							<td rel="L543" class="lines-code chroma">
								<code class="code-inner">      <span class="k">return</span> <span class="nx">JSON</span><span class="p">.</span><span class="nx">parse</span><span class="p">(</span><span class="nx">str</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L544" class="lines-num">
								<span id="L544" data-line-number="544"></span>
							</td>
							<td rel="L544" class="lines-code chroma">
								<code class="code-inner">    <span class="p">}</span> <span class="k">catch</span> <span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L545" class="lines-num">
								<span id="L545" data-line-number="545"></span>
							</td>
							<td rel="L545" class="lines-code chroma">
								<code class="code-inner">      <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L546" class="lines-num">
								<span id="L546" data-line-number="546"></span>
							</td>
							<td rel="L546" class="lines-code chroma">
								<code class="code-inner">      <span class="nx">$</span><span class="p">.</span><span class="nx">msg</span><span class="p">(</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L547" class="lines-num">
								<span id="L547" data-line-number="547"></span>
							</td>
							<td rel="L547" class="lines-code chroma">
								<code class="code-inner">        <span class="nx">$</span><span class="p">.</span><span class="nx">name</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L548" class="lines-num">
								<span id="L548" data-line-number="548"></span>
							</td>
							<td rel="L548" class="lines-code chroma">
								<code class="code-inner">        <span class="s1">&#39;&#39;</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L549" class="lines-num">
								<span id="L549" data-line-number="549"></span>
							</td>
							<td rel="L549" class="lines-code chroma">
								<code class="code-inner">        <span class="s1">&#39;请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie&#39;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L550" class="lines-num">
								<span id="L550" data-line-number="550"></span>
							</td>
							<td rel="L550" class="lines-code chroma">
								<code class="code-inner">      <span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L551" class="lines-num">
								<span id="L551" data-line-number="551"></span>
							</td>
							<td rel="L551" class="lines-code chroma">
								<code class="code-inner">      <span class="k">return</span> <span class="p">[</span><span class="p">]</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L552" class="lines-num">
								<span id="L552" data-line-number="552"></span>
							</td>
							<td rel="L552" class="lines-code chroma">
								<code class="code-inner">    <span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L553" class="lines-num">
								<span id="L553" data-line-number="553"></span>
							</td>
							<td rel="L553" class="lines-code chroma">
								<code class="code-inner">  <span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L554" class="lines-num">
								<span id="L554" data-line-number="554"></span>
							</td>
							<td rel="L554" class="lines-code chroma">
								<code class="code-inner"><span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L555" class="lines-num">
								<span id="L555" data-line-number="555"></span>
							</td>
							<td rel="L555" class="lines-code chroma">
								<code class="code-inner"><span class="c1">// https://github.com/chavyleung/scripts/blob/master/Env.js</code>
							</td>
						</tr>
						
						<tr>
							<td id="L556" class="lines-num">
								<span id="L556" data-line-number="556"></span>
							</td>
							<td rel="L556" class="lines-code chroma">
								<code class="code-inner"></span><span class="c1"></span><span class="c1">// prettier-ignore</code>
							</td>
						</tr>
						
						<tr>
							<td id="L557" class="lines-num">
								<span id="L557" data-line-number="557"></span>
							</td>
							<td rel="L557" class="lines-code chroma">
								<code class="code-inner"></span><span class="c1"></span><span class="kd">function</span> <span class="nx">Env</span><span class="p">(</span><span class="nx">t</span><span class="p">,</span><span class="nx">e</span><span class="p">)</span><span class="p">{</span><span class="kr">class</span> <span class="nx">s</span><span class="p">{</span><span class="nx">constructor</span><span class="p">(</span><span class="nx">t</span><span class="p">)</span><span class="p">{</span><span class="k">this</span><span class="p">.</span><span class="nx">env</span><span class="o">=</span><span class="nx">t</span><span class="p">}</span><span class="nx">send</span><span class="p">(</span><span class="nx">t</span><span class="p">,</span><span class="nx">e</span><span class="o">=</span><span class="s2">&#34;GET&#34;</span><span class="p">)</span><span class="p">{</span><span class="nx">t</span><span class="o">=</span><span class="s2">&#34;string&#34;</span><span class="o">==</span><span class="k">typeof</span> <span class="nx">t</span><span class="o">?</span><span class="p">{</span><span class="nx">url</span><span class="o">:</span><span class="nx">t</span><span class="p">}</span><span class="o">:</span><span class="nx">t</span><span class="p">;</span><span class="kd">let</span> <span class="nx">s</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">get</span><span class="p">;</span><span class="k">return</span><span class="s2">&#34;POST&#34;</span><span class="o">===</span><span class="nx">e</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">s</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">post</span><span class="p">)</span><span class="p">,</span><span class="k">new</span> <span class="nb">Promise</span><span class="p">(</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span><span class="nx">i</span><span class="p">)</span><span class="p">=&gt;</span><span class="p">{</span><span class="nx">s</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="k">this</span><span class="p">,</span><span class="nx">t</span><span class="p">,</span><span class="p">(</span><span class="nx">t</span><span class="p">,</span><span class="nx">s</span><span class="p">,</span><span class="nx">r</span><span class="p">)</span><span class="p">=&gt;</span><span class="p">{</span><span class="nx">t</span><span class="o">?</span><span class="nx">i</span><span class="p">(</span><span class="nx">t</span><span class="p">)</span><span class="o">:</span><span class="nx">e</span><span class="p">(</span><span class="nx">s</span><span class="p">)</span><span class="p">}</span><span class="p">)</span><span class="p">}</span><span class="p">)</span><span class="p">}</span><span class="nx">get</span><span class="p">(</span><span class="nx">t</span><span class="p">)</span><span class="p">{</span><span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">send</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">env</span><span class="p">,</span><span class="nx">t</span><span class="p">)</span><span class="p">}</span><span class="nx">post</span><span class="p">(</span><span class="nx">t</span><span class="p">)</span><span class="p">{</span><span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">send</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">env</span><span class="p">,</span><span class="nx">t</span><span class="p">,</span><span class="s2">&#34;POST&#34;</span><span class="p">)</span><span class="p">}</span><span class="p">}</span><span class="k">return</span> <span class="k">new</span> <span class="kr">class</span><span class="p">{</span><span class="nx">constructor</span><span class="p">(</span><span class="nx">t</span><span class="p">,</span><span class="nx">e</span><span class="p">)</span><span class="p">{</span><span class="k">this</span><span class="p">.</span><span class="nx">name</span><span class="o">=</span><span class="nx">t</span><span class="p">,</span><span class="k">this</span><span class="p">.</span><span class="nx">http</span><span class="o">=</span><span class="k">new</span> <span class="nx">s</span><span class="p">(</span><span class="k">this</span><span class="p">)</span><span class="p">,</span><span class="k">this</span><span class="p">.</span><span class="nx">data</span><span class="o">=</span><span class="kc">null</span><span class="p">,</span><span class="k">this</span><span class="p">.</span><span class="nx">dataFile</span><span class="o">=</span><span class="s2">&#34;box.dat&#34;</span><span class="p">,</span><span class="k">this</span><span class="p">.</span><span class="nx">logs</span><span class="o">=</span><span class="p">[</span><span class="p">]</span><span class="p">,</span><span class="k">this</span><span class="p">.</span><span class="nx">isMute</span><span class="o">=</span><span class="o">!</span><span class="mi">1</span><span class="p">,</span><span class="k">this</span><span class="p">.</span><span class="nx">isNeedRewrite</span><span class="o">=</span><span class="o">!</span><span class="mi">1</span><span class="p">,</span><span class="k">this</span><span class="p">.</span><span class="nx">logSeparator</span><span class="o">=</span><span class="s2">&#34;\n&#34;</span><span class="p">,</span><span class="k">this</span><span class="p">.</span><span class="nx">startTime</span><span class="o">=</span><span class="p">(</span><span class="k">new</span> <span class="nb">Date</span><span class="p">)</span><span class="p">.</span><span class="nx">getTime</span><span class="p">(</span><span class="p">)</span><span class="p">,</span><span class="nb">Object</span><span class="p">.</span><span class="nx">assign</span><span class="p">(</span><span class="k">this</span><span class="p">,</span><span class="nx">e</span><span class="p">)</span><span class="p">,</span><span class="k">this</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&#34;&#34;</span><span class="p">,</span><span class="sb">`</span><span class="sb">🔔</span><span class="si">${</span><span class="k">this</span><span class="p">.</span><span class="nx">name</span><span class="si">}</span><span class="sb">, 开始!</span><span class="sb">`</span><span class="p">)</span><span class="p">}</span><span class="nx">isNode</span><span class="p">(</span><span class="p">)</span><span class="p">{</span><span class="k">return</span><span class="s2">&#34;undefined&#34;</span><span class="o">!=</span><span class="k">typeof</span> <span class="nx">module</span><span class="o">&amp;&amp;</span><span class="o">!</span><span class="o">!</span><span class="nx">module</span><span class="p">.</span><span class="nx">exports</span><span class="p">}</span><span class="nx">isQuanX</span><span class="p">(</span><span class="p">)</span><span class="p">{</span><span class="k">return</span><span class="s2">&#34;undefined&#34;</span><span class="o">!=</span><span class="k">typeof</span> <span class="nx">$task</span><span class="p">}</span><span class="nx">isSurge</span><span class="p">(</span><span class="p">)</span><span class="p">{</span><span class="k">return</span><span class="s2">&#34;undefined&#34;</span><span class="o">!=</span><span class="k">typeof</span> <span class="nx">$httpClient</span><span class="o">&amp;&amp;</span><span class="s2">&#34;undefined&#34;</span><span class="o">==</span><span class="k">typeof</span> <span class="nx">$loon</span><span class="p">}</span><span class="nx">isLoon</span><span class="p">(</span><span class="p">)</span><span class="p">{</span><span class="k">return</span><span class="s2">&#34;undefined&#34;</span><span class="o">!=</span><span class="k">typeof</span> <span class="nx">$loon</span><span class="p">}</span><span class="nx">toObj</span><span class="p">(</span><span class="nx">t</span><span class="p">,</span><span class="nx">e</span><span class="o">=</span><span class="kc">null</span><span class="p">)</span><span class="p">{</span><span class="k">try</span><span class="p">{</span><span class="k">return</span> <span class="nx">JSON</span><span class="p">.</span><span class="nx">parse</span><span class="p">(</span><span class="nx">t</span><span class="p">)</span><span class="p">}</span><span class="k">catch</span><span class="p">{</span><span class="k">return</span> <span class="nx">e</span><span class="p">}</span><span class="p">}</span><span class="nx">toStr</span><span class="p">(</span><span class="nx">t</span><span class="p">,</span><span class="nx">e</span><span class="o">=</span><span class="kc">null</span><span class="p">)</span><span class="p">{</span><span class="k">try</span><span class="p">{</span><span class="k">return</span> <span class="nx">JSON</span><span class="p">.</span><span class="nx">stringify</span><span class="p">(</span><span class="nx">t</span><span class="p">)</span><span class="p">}</span><span class="k">catch</span><span class="p">{</span><span class="k">return</span> <span class="nx">e</span><span class="p">}</span><span class="p">}</span><span class="nx">getjson</span><span class="p">(</span><span class="nx">t</span><span class="p">,</span><span class="nx">e</span><span class="p">)</span><span class="p">{</span><span class="kd">let</span> <span class="nx">s</span><span class="o">=</span><span class="nx">e</span><span class="p">;</span><span class="kr">const</span> <span class="nx">i</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">getdata</span><span class="p">(</span><span class="nx">t</span><span class="p">)</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="nx">i</span><span class="p">)</span><span class="k">try</span><span class="p">{</span><span class="nx">s</span><span class="o">=</span><span class="nx">JSON</span><span class="p">.</span><span class="nx">parse</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">getdata</span><span class="p">(</span><span class="nx">t</span><span class="p">)</span><span class="p">)</span><span class="p">}</span><span class="k">catch</span><span class="p">{</span><span class="p">}</span><span class="k">return</span> <span class="nx">s</span><span class="p">}</span><span class="nx">setjson</span><span class="p">(</span><span class="nx">t</span><span class="p">,</span><span class="nx">e</span><span class="p">)</span><span class="p">{</span><span class="k">try</span><span class="p">{</span><span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">setdata</span><span class="p">(</span><span class="nx">JSON</span><span class="p">.</span><span class="nx">stringify</span><span class="p">(</span><span class="nx">t</span><span class="p">)</span><span class="p">,</span><span class="nx">e</span><span class="p">)</span><span class="p">}</span><span class="k">catch</span><span class="p">{</span><span class="k">return</span><span class="o">!</span><span class="mi">1</span><span class="p">}</span><span class="p">}</span><span class="nx">getScript</span><span class="p">(</span><span class="nx">t</span><span class="p">)</span><span class="p">{</span><span class="k">return</span> <span class="k">new</span> <span class="nb">Promise</span><span class="p">(</span><span class="nx">e</span><span class="p">=&gt;</span><span class="p">{</span><span class="k">this</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span><span class="p">{</span><span class="nx">url</span><span class="o">:</span><span class="nx">t</span><span class="p">}</span><span class="p">,</span><span class="p">(</span><span class="nx">t</span><span class="p">,</span><span class="nx">s</span><span class="p">,</span><span class="nx">i</span><span class="p">)</span><span class="p">=&gt;</span><span class="nx">e</span><span class="p">(</span><span class="nx">i</span><span class="p">)</span><span class="p">)</span><span class="p">}</span><span class="p">)</span><span class="p">}</span><span class="nx">runScript</span><span class="p">(</span><span class="nx">t</span><span class="p">,</span><span class="nx">e</span><span class="p">)</span><span class="p">{</span><span class="k">return</span> <span class="k">new</span> <span class="nb">Promise</span><span class="p">(</span><span class="nx">s</span><span class="p">=&gt;</span><span class="p">{</span><span class="kd">let</span> <span class="nx">i</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">getdata</span><span class="p">(</span><span class="s2">&#34;@chavy_boxjs_userCfgs.httpapi&#34;</span><span class="p">)</span><span class="p">;</span><span class="nx">i</span><span class="o">=</span><span class="nx">i</span><span class="o">?</span><span class="nx">i</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\n/g</span><span class="p">,</span><span class="s2">&#34;&#34;</span><span class="p">)</span><span class="p">.</span><span class="nx">trim</span><span class="p">(</span><span class="p">)</span><span class="o">:</span><span class="nx">i</span><span class="p">;</span><span class="kd">let</span> <span class="nx">r</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">getdata</span><span class="p">(</span><span class="s2">&#34;@chavy_boxjs_userCfgs.httpapi_timeout&#34;</span><span class="p">)</span><span class="p">;</span><span class="nx">r</span><span class="o">=</span><span class="nx">r</span><span class="o">?</span><span class="mi">1</span><span class="o">*</span><span class="nx">r</span><span class="o">:</span><span class="mi">20</span><span class="p">,</span><span class="nx">r</span><span class="o">=</span><span class="nx">e</span><span class="o">&amp;&amp;</span><span class="nx">e</span><span class="p">.</span><span class="nx">timeout</span><span class="o">?</span><span class="nx">e</span><span class="p">.</span><span class="nx">timeout</span><span class="o">:</span><span class="nx">r</span><span class="p">;</span><span class="kr">const</span><span class="p">[</span><span class="nx">o</span><span class="p">,</span><span class="nx">h</span><span class="p">]</span><span class="o">=</span><span class="nx">i</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s2">&#34;@&#34;</span><span class="p">)</span><span class="p">,</span><span class="nx">n</span><span class="o">=</span><span class="p">{</span><span class="nx">url</span><span class="o">:</span><span class="sb">`</span><span class="sb">http://</span><span class="si">${</span><span class="nx">h</span><span class="si">}</span><span class="sb">/v1/scripting/evaluate</span><span class="sb">`</span><span class="p">,</span><span class="nx">body</span><span class="o">:</span><span class="p">{</span><span class="nx">script_text</span><span class="o">:</span><span class="nx">t</span><span class="p">,</span><span class="nx">mock_type</span><span class="o">:</span><span class="s2">&#34;cron&#34;</span><span class="p">,</span><span class="nx">timeout</span><span class="o">:</span><span class="nx">r</span><span class="p">}</span><span class="p">,</span><span class="nx">headers</span><span class="o">:</span><span class="p">{</span><span class="s2">&#34;X-Key&#34;</span><span class="o">:</span><span class="nx">o</span><span class="p">,</span><span class="nx">Accept</span><span class="o">:</span><span class="s2">&#34;*/*&#34;</span><span class="p">}</span><span class="p">}</span><span class="p">;</span><span class="k">this</span><span class="p">.</span><span class="nx">post</span><span class="p">(</span><span class="nx">n</span><span class="p">,</span><span class="p">(</span><span class="nx">t</span><span class="p">,</span><span class="nx">e</span><span class="p">,</span><span class="nx">i</span><span class="p">)</span><span class="p">=&gt;</span><span class="nx">s</span><span class="p">(</span><span class="nx">i</span><span class="p">)</span><span class="p">)</span><span class="p">}</span><span class="p">)</span><span class="p">.</span><span class="k">catch</span><span class="p">(</span><span class="nx">t</span><span class="p">=&gt;</span><span class="k">this</span><span class="p">.</span><span class="nx">logErr</span><span class="p">(</span><span class="nx">t</span><span class="p">)</span><span class="p">)</span><span class="p">}</span><span class="nx">loaddata</span><span class="p">(</span><span class="p">)</span><span class="p">{</span><span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">isNode</span><span class="p">(</span><span class="p">)</span><span class="p">)</span><span class="k">return</span><span class="p">{</span><span class="p">}</span><span class="p">;</span><span class="p">{</span><span class="k">this</span><span class="p">.</span><span class="nx">fs</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">fs</span><span class="o">?</span><span class="k">this</span><span class="p">.</span><span class="nx">fs</span><span class="o">:</span><span class="nx">require</span><span class="p">(</span><span class="s2">&#34;fs&#34;</span><span class="p">)</span><span class="p">,</span><span class="k">this</span><span class="p">.</span><span class="nx">path</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">path</span><span class="o">?</span><span class="k">this</span><span class="p">.</span><span class="nx">path</span><span class="o">:</span><span class="nx">require</span><span class="p">(</span><span class="s2">&#34;path&#34;</span><span class="p">)</span><span class="p">;</span><span class="kr">const</span> <span class="nx">t</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">path</span><span class="p">.</span><span class="nx">resolve</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">dataFile</span><span class="p">)</span><span class="p">,</span><span class="nx">e</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">path</span><span class="p">.</span><span class="nx">resolve</span><span class="p">(</span><span class="nx">process</span><span class="p">.</span><span class="nx">cwd</span><span class="p">(</span><span class="p">)</span><span class="p">,</span><span class="k">this</span><span class="p">.</span><span class="nx">dataFile</span><span class="p">)</span><span class="p">,</span><span class="nx">s</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">fs</span><span class="p">.</span><span class="nx">existsSync</span><span class="p">(</span><span class="nx">t</span><span class="p">)</span><span class="p">,</span><span class="nx">i</span><span class="o">=</span><span class="o">!</span><span class="nx">s</span><span class="o">&amp;&amp;</span><span class="k">this</span><span class="p">.</span><span class="nx">fs</span><span class="p">.</span><span class="nx">existsSync</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">s</span><span class="o">&amp;&amp;</span><span class="o">!</span><span class="nx">i</span><span class="p">)</span><span class="k">return</span><span class="p">{</span><span class="p">}</span><span class="p">;</span><span class="p">{</span><span class="kr">const</span> <span class="nx">i</span><span class="o">=</span><span class="nx">s</span><span class="o">?</span><span class="nx">t</span><span class="o">:</span><span class="nx">e</span><span class="p">;</span><span class="k">try</span><span class="p">{</span><span class="k">return</span> <span class="nx">JSON</span><span class="p">.</span><span class="nx">parse</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">fs</span><span class="p">.</span><span class="nx">readFileSync</span><span class="p">(</span><span class="nx">i</span><span class="p">)</span><span class="p">)</span><span class="p">}</span><span class="k">catch</span><span class="p">(</span><span class="nx">t</span><span class="p">)</span><span class="p">{</span><span class="k">return</span><span class="p">{</span><span class="p">}</span><span class="p">}</span><span class="p">}</span><span class="p">}</span><span class="p">}</span><span class="nx">writedata</span><span class="p">(</span><span class="p">)</span><span class="p">{</span><span class="k">if</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">isNode</span><span class="p">(</span><span class="p">)</span><span class="p">)</span><span class="p">{</span><span class="k">this</span><span class="p">.</span><span class="nx">fs</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">fs</span><span class="o">?</span><span class="k">this</span><span class="p">.</span><span class="nx">fs</span><span class="o">:</span><span class="nx">require</span><span class="p">(</span><span class="s2">&#34;fs&#34;</span><span class="p">)</span><span class="p">,</span><span class="k">this</span><span class="p">.</span><span class="nx">path</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">path</span><span class="o">?</span><span class="k">this</span><span class="p">.</span><span class="nx">path</span><span class="o">:</span><span class="nx">require</span><span class="p">(</span><span class="s2">&#34;path&#34;</span><span class="p">)</span><span class="p">;</span><span class="kr">const</span> <span class="nx">t</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">path</span><span class="p">.</span><span class="nx">resolve</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">dataFile</span><span class="p">)</span><span class="p">,</span><span class="nx">e</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">path</span><span class="p">.</span><span class="nx">resolve</span><span class="p">(</span><span class="nx">process</span><span class="p">.</span><span class="nx">cwd</span><span class="p">(</span><span class="p">)</span><span class="p">,</span><span class="k">this</span><span class="p">.</span><span class="nx">dataFile</span><span class="p">)</span><span class="p">,</span><span class="nx">s</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">fs</span><span class="p">.</span><span class="nx">existsSync</span><span class="p">(</span><span class="nx">t</span><span class="p">)</span><span class="p">,</span><span class="nx">i</span><span class="o">=</span><span class="o">!</span><span class="nx">s</span><span class="o">&amp;&amp;</span><span class="k">this</span><span class="p">.</span><span class="nx">fs</span><span class="p">.</span><span class="nx">existsSync</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span><span class="p">,</span><span class="nx">r</span><span class="o">=</span><span class="nx">JSON</span><span class="p">.</span><span class="nx">stringify</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">data</span><span class="p">)</span><span class="p">;</span><span class="nx">s</span><span class="o">?</span><span class="k">this</span><span class="p">.</span><span class="nx">fs</span><span class="p">.</span><span class="nx">writeFileSync</span><span class="p">(</span><span class="nx">t</span><span class="p">,</span><span class="nx">r</span><span class="p">)</span><span class="o">:</span><span class="nx">i</span><span class="o">?</span><span class="k">this</span><span class="p">.</span><span class="nx">fs</span><span class="p">.</span><span class="nx">writeFileSync</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span><span class="nx">r</span><span class="p">)</span><span class="o">:</span><span class="k">this</span><span class="p">.</span><span class="nx">fs</span><span class="p">.</span><span class="nx">writeFileSync</span><span class="p">(</span><span class="nx">t</span><span class="p">,</span><span class="nx">r</span><span class="p">)</span><span class="p">}</span><span class="p">}</span><span class="nx">lodash_get</span><span class="p">(</span><span class="nx">t</span><span class="p">,</span><span class="nx">e</span><span class="p">,</span><span class="nx">s</span><span class="p">)</span><span class="p">{</span><span class="kr">const</span> <span class="nx">i</span><span class="o">=</span><span class="nx">e</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\[(\d+)\]/g</span><span class="p">,</span><span class="s2">&#34;.$1&#34;</span><span class="p">)</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s2">&#34;.&#34;</span><span class="p">)</span><span class="p">;</span><span class="kd">let</span> <span class="nx">r</span><span class="o">=</span><span class="nx">t</span><span class="p">;</span><span class="k">for</span><span class="p">(</span><span class="kr">const</span> <span class="nx">t</span> <span class="k">of</span> <span class="nx">i</span><span class="p">)</span><span class="k">if</span><span class="p">(</span><span class="nx">r</span><span class="o">=</span><span class="nb">Object</span><span class="p">(</span><span class="nx">r</span><span class="p">)</span><span class="p">[</span><span class="nx">t</span><span class="p">]</span><span class="p">,</span><span class="k">void</span> <span class="mi">0</span><span class="o">===</span><span class="nx">r</span><span class="p">)</span><span class="k">return</span> <span class="nx">s</span><span class="p">;</span><span class="k">return</span> <span class="nx">r</span><span class="p">}</span><span class="nx">lodash_set</span><span class="p">(</span><span class="nx">t</span><span class="p">,</span><span class="nx">e</span><span class="p">,</span><span class="nx">s</span><span class="p">)</span><span class="p">{</span><span class="k">return</span> <span class="nb">Object</span><span class="p">(</span><span class="nx">t</span><span class="p">)</span><span class="o">!==</span><span class="nx">t</span><span class="o">?</span><span class="nx">t</span><span class="o">:</span><span class="p">(</span><span class="nb">Array</span><span class="p">.</span><span class="nx">isArray</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span><span class="o">||</span><span class="p">(</span><span class="nx">e</span><span class="o">=</span><span class="nx">e</span><span class="p">.</span><span class="nx">toString</span><span class="p">(</span><span class="p">)</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="sr">/[^.[\]]+/g</span><span class="p">)</span><span class="o">||</span><span class="p">[</span><span class="p">]</span><span class="p">)</span><span class="p">,</span><span class="nx">e</span><span class="p">.</span><span class="nx">slice</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span><span class="o">-</span><span class="mi">1</span><span class="p">)</span><span class="p">.</span><span class="nx">reduce</span><span class="p">(</span><span class="p">(</span><span class="nx">t</span><span class="p">,</span><span class="nx">s</span><span class="p">,</span><span class="nx">i</span><span class="p">)</span><span class="p">=&gt;</span><span class="nb">Object</span><span class="p">(</span><span class="nx">t</span><span class="p">[</span><span class="nx">s</span><span class="p">]</span><span class="p">)</span><span class="o">===</span><span class="nx">t</span><span class="p">[</span><span class="nx">s</span><span class="p">]</span><span class="o">?</span><span class="nx">t</span><span class="p">[</span><span class="nx">s</span><span class="p">]</span><span class="o">:</span><span class="nx">t</span><span class="p">[</span><span class="nx">s</span><span class="p">]</span><span class="o">=</span><span class="nb">Math</span><span class="p">.</span><span class="nx">abs</span><span class="p">(</span><span class="nx">e</span><span class="p">[</span><span class="nx">i</span><span class="o">+</span><span class="mi">1</span><span class="p">]</span><span class="p">)</span><span class="o">&gt;&gt;</span><span class="mi">0</span><span class="o">==</span><span class="o">+</span><span class="nx">e</span><span class="p">[</span><span class="nx">i</span><span class="o">+</span><span class="mi">1</span><span class="p">]</span><span class="o">?</span><span class="p">[</span><span class="p">]</span><span class="o">:</span><span class="p">{</span><span class="p">}</span><span class="p">,</span><span class="nx">t</span><span class="p">)</span><span class="p">[</span><span class="nx">e</span><span class="p">[</span><span class="nx">e</span><span class="p">.</span><span class="nx">length</span><span class="o">-</span><span class="mi">1</span><span class="p">]</span><span class="p">]</span><span class="o">=</span><span class="nx">s</span><span class="p">,</span><span class="nx">t</span><span class="p">)</span><span class="p">}</span><span class="nx">getdata</span><span class="p">(</span><span class="nx">t</span><span class="p">)</span><span class="p">{</span><span class="kd">let</span> <span class="nx">e</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">getval</span><span class="p">(</span><span class="nx">t</span><span class="p">)</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="sr">/^@/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">t</span><span class="p">)</span><span class="p">)</span><span class="p">{</span><span class="kr">const</span><span class="p">[</span><span class="p">,</span><span class="nx">s</span><span class="p">,</span><span class="nx">i</span><span class="p">]</span><span class="o">=</span><span class="sr">/^@(.*?)\.(.*?)$/</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">t</span><span class="p">)</span><span class="p">,</span><span class="nx">r</span><span class="o">=</span><span class="nx">s</span><span class="o">?</span><span class="k">this</span><span class="p">.</span><span class="nx">getval</span><span class="p">(</span><span class="nx">s</span><span class="p">)</span><span class="o">:</span><span class="s2">&#34;&#34;</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="nx">r</span><span class="p">)</span><span class="k">try</span><span class="p">{</span><span class="kr">const</span> <span class="nx">t</span><span class="o">=</span><span class="nx">JSON</span><span class="p">.</span><span class="nx">parse</span><span class="p">(</span><span class="nx">r</span><span class="p">)</span><span class="p">;</span><span class="nx">e</span><span class="o">=</span><span class="nx">t</span><span class="o">?</span><span class="k">this</span><span class="p">.</span><span class="nx">lodash_get</span><span class="p">(</span><span class="nx">t</span><span class="p">,</span><span class="nx">i</span><span class="p">,</span><span class="s2">&#34;&#34;</span><span class="p">)</span><span class="o">:</span><span class="nx">e</span><span class="p">}</span><span class="k">catch</span><span class="p">(</span><span class="nx">t</span><span class="p">)</span><span class="p">{</span><span class="nx">e</span><span class="o">=</span><span class="s2">&#34;&#34;</span><span class="p">}</span><span class="p">}</span><span class="k">return</span> <span class="nx">e</span><span class="p">}</span><span class="nx">setdata</span><span class="p">(</span><span class="nx">t</span><span class="p">,</span><span class="nx">e</span><span class="p">)</span><span class="p">{</span><span class="kd">let</span> <span class="nx">s</span><span class="o">=</span><span class="o">!</span><span class="mi">1</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="sr">/^@/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span><span class="p">)</span><span class="p">{</span><span class="kr">const</span><span class="p">[</span><span class="p">,</span><span class="nx">i</span><span class="p">,</span><span class="nx">r</span><span class="p">]</span><span class="o">=</span><span class="sr">/^@(.*?)\.(.*?)$/</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span><span class="p">,</span><span class="nx">o</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">getval</span><span class="p">(</span><span class="nx">i</span><span class="p">)</span><span class="p">,</span><span class="nx">h</span><span class="o">=</span><span class="nx">i</span><span class="o">?</span><span class="s2">&#34;null&#34;</span><span class="o">===</span><span class="nx">o</span><span class="o">?</span><span class="kc">null</span><span class="o">:</span><span class="nx">o</span><span class="o">||</span><span class="s2">&#34;{}&#34;</span><span class="o">:</span><span class="s2">&#34;{}&#34;</span><span class="p">;</span><span class="k">try</span><span class="p">{</span><span class="kr">const</span> <span class="nx">e</span><span class="o">=</span><span class="nx">JSON</span><span class="p">.</span><span class="nx">parse</span><span class="p">(</span><span class="nx">h</span><span class="p">)</span><span class="p">;</span><span class="k">this</span><span class="p">.</span><span class="nx">lodash_set</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span><span class="nx">r</span><span class="p">,</span><span class="nx">t</span><span class="p">)</span><span class="p">,</span><span class="nx">s</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">setval</span><span class="p">(</span><span class="nx">JSON</span><span class="p">.</span><span class="nx">stringify</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span><span class="p">,</span><span class="nx">i</span><span class="p">)</span><span class="p">}</span><span class="k">catch</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span><span class="p">{</span><span class="kr">const</span> <span class="nx">o</span><span class="o">=</span><span class="p">{</span><span class="p">}</span><span class="p">;</span><span class="k">this</span><span class="p">.</span><span class="nx">lodash_set</span><span class="p">(</span><span class="nx">o</span><span class="p">,</span><span class="nx">r</span><span class="p">,</span><span class="nx">t</span><span class="p">)</span><span class="p">,</span><span class="nx">s</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">setval</span><span class="p">(</span><span class="nx">JSON</span><span class="p">.</span><span class="nx">stringify</span><span class="p">(</span><span class="nx">o</span><span class="p">)</span><span class="p">,</span><span class="nx">i</span><span class="p">)</span><span class="p">}</span><span class="p">}</span><span class="k">else</span> <span class="nx">s</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">setval</span><span class="p">(</span><span class="nx">t</span><span class="p">,</span><span class="nx">e</span><span class="p">)</span><span class="p">;</span><span class="k">return</span> <span class="nx">s</span><span class="p">}</span><span class="nx">getval</span><span class="p">(</span><span class="nx">t</span><span class="p">)</span><span class="p">{</span><span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">isSurge</span><span class="p">(</span><span class="p">)</span><span class="o">||</span><span class="k">this</span><span class="p">.</span><span class="nx">isLoon</span><span class="p">(</span><span class="p">)</span><span class="o">?</span><span class="nx">$persistentStore</span><span class="p">.</span><span class="nx">read</span><span class="p">(</span><span class="nx">t</span><span class="p">)</span><span class="o">:</span><span class="k">this</span><span class="p">.</span><span class="nx">isQuanX</span><span class="p">(</span><span class="p">)</span><span class="o">?</span><span class="nx">$prefs</span><span class="p">.</span><span class="nx">valueForKey</span><span class="p">(</span><span class="nx">t</span><span class="p">)</span><span class="o">:</span><span class="k">this</span><span class="p">.</span><span class="nx">isNode</span><span class="p">(</span><span class="p">)</span><span class="o">?</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">data</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">loaddata</span><span class="p">(</span><span class="p">)</span><span class="p">,</span><span class="k">this</span><span class="p">.</span><span class="nx">data</span><span class="p">[</span><span class="nx">t</span><span class="p">]</span><span class="p">)</span><span class="o">:</span><span class="k">this</span><span class="p">.</span><span class="nx">data</span><span class="o">&amp;&amp;</span><span class="k">this</span><span class="p">.</span><span class="nx">data</span><span class="p">[</span><span class="nx">t</span><span class="p">]</span><span class="o">||</span><span class="kc">null</span><span class="p">}</span><span class="nx">setval</span><span class="p">(</span><span class="nx">t</span><span class="p">,</span><span class="nx">e</span><span class="p">)</span><span class="p">{</span><span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">isSurge</span><span class="p">(</span><span class="p">)</span><span class="o">||</span><span class="k">this</span><span class="p">.</span><span class="nx">isLoon</span><span class="p">(</span><span class="p">)</span><span class="o">?</span><span class="nx">$persistentStore</span><span class="p">.</span><span class="nx">write</span><span class="p">(</span><span class="nx">t</span><span class="p">,</span><span class="nx">e</span><span class="p">)</span><span class="o">:</span><span class="k">this</span><span class="p">.</span><span class="nx">isQuanX</span><span class="p">(</span><span class="p">)</span><span class="o">?</span><span class="nx">$prefs</span><span class="p">.</span><span class="nx">setValueForKey</span><span class="p">(</span><span class="nx">t</span><span class="p">,</span><span class="nx">e</span><span class="p">)</span><span class="o">:</span><span class="k">this</span><span class="p">.</span><span class="nx">isNode</span><span class="p">(</span><span class="p">)</span><span class="o">?</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">data</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">loaddata</span><span class="p">(</span><span class="p">)</span><span class="p">,</span><span class="k">this</span><span class="p">.</span><span class="nx">data</span><span class="p">[</span><span class="nx">e</span><span class="p">]</span><span class="o">=</span><span class="nx">t</span><span class="p">,</span><span class="k">this</span><span class="p">.</span><span class="nx">writedata</span><span class="p">(</span><span class="p">)</span><span class="p">,</span><span class="o">!</span><span class="mi">0</span><span class="p">)</span><span class="o">:</span><span class="k">this</span><span class="p">.</span><span class="nx">data</span><span class="o">&amp;&amp;</span><span class="k">this</span><span class="p">.</span><span class="nx">data</span><span class="p">[</span><span class="nx">e</span><span class="p">]</span><span class="o">||</span><span class="kc">null</span><span class="p">}</span><span class="nx">initGotEnv</span><span class="p">(</span><span class="nx">t</span><span class="p">)</span><span class="p">{</span><span class="k">this</span><span class="p">.</span><span class="nx">got</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">got</span><span class="o">?</span><span class="k">this</span><span class="p">.</span><span class="nx">got</span><span class="o">:</span><span class="nx">require</span><span class="p">(</span><span class="s2">&#34;got&#34;</span><span class="p">)</span><span class="p">,</span><span class="k">this</span><span class="p">.</span><span class="nx">cktough</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">cktough</span><span class="o">?</span><span class="k">this</span><span class="p">.</span><span class="nx">cktough</span><span class="o">:</span><span class="nx">require</span><span class="p">(</span><span class="s2">&#34;tough-cookie&#34;</span><span class="p">)</span><span class="p">,</span><span class="k">this</span><span class="p">.</span><span class="nx">ckjar</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">ckjar</span><span class="o">?</span><span class="k">this</span><span class="p">.</span><span class="nx">ckjar</span><span class="o">:</span><span class="k">new</span> <span class="k">this</span><span class="p">.</span><span class="nx">cktough</span><span class="p">.</span><span class="nx">CookieJar</span><span class="p">,</span><span class="nx">t</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">t</span><span class="p">.</span><span class="nx">headers</span><span class="o">=</span><span class="nx">t</span><span class="p">.</span><span class="nx">headers</span><span class="o">?</span><span class="nx">t</span><span class="p">.</span><span class="nx">headers</span><span class="o">:</span><span class="p">{</span><span class="p">}</span><span class="p">,</span><span class="k">void</span> <span class="mi">0</span><span class="o">===</span><span class="nx">t</span><span class="p">.</span><span class="nx">headers</span><span class="p">.</span><span class="nx">Cookie</span><span class="o">&amp;&amp;</span><span class="k">void</span> <span class="mi">0</span><span class="o">===</span><span class="nx">t</span><span class="p">.</span><span class="nx">cookieJar</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">t</span><span class="p">.</span><span class="nx">cookieJar</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">ckjar</span><span class="p">)</span><span class="p">)</span><span class="p">}</span><span class="nx">get</span><span class="p">(</span><span class="nx">t</span><span class="p">,</span><span class="nx">e</span><span class="o">=</span><span class="p">(</span><span class="p">(</span><span class="p">)</span><span class="p">=&gt;</span><span class="p">{</span><span class="p">}</span><span class="p">)</span><span class="p">)</span><span class="p">{</span><span class="nx">t</span><span class="p">.</span><span class="nx">headers</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="k">delete</span> <span class="nx">t</span><span class="p">.</span><span class="nx">headers</span><span class="p">[</span><span class="s2">&#34;Content-Type&#34;</span><span class="p">]</span><span class="p">,</span><span class="k">delete</span> <span class="nx">t</span><span class="p">.</span><span class="nx">headers</span><span class="p">[</span><span class="s2">&#34;Content-Length&#34;</span><span class="p">]</span><span class="p">)</span><span class="p">,</span><span class="k">this</span><span class="p">.</span><span class="nx">isSurge</span><span class="p">(</span><span class="p">)</span><span class="o">||</span><span class="k">this</span><span class="p">.</span><span class="nx">isLoon</span><span class="p">(</span><span class="p">)</span><span class="o">?</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">isSurge</span><span class="p">(</span><span class="p">)</span><span class="o">&amp;&amp;</span><span class="k">this</span><span class="p">.</span><span class="nx">isNeedRewrite</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">t</span><span class="p">.</span><span class="nx">headers</span><span class="o">=</span><span class="nx">t</span><span class="p">.</span><span class="nx">headers</span><span class="o">||</span><span class="p">{</span><span class="p">}</span><span class="p">,</span><span class="nb">Object</span><span class="p">.</span><span class="nx">assign</span><span class="p">(</span><span class="nx">t</span><span class="p">.</span><span class="nx">headers</span><span class="p">,</span><span class="p">{</span><span class="s2">&#34;X-Surge-Skip-Scripting&#34;</span><span class="o">:</span><span class="o">!</span><span class="mi">1</span><span class="p">}</span><span class="p">)</span><span class="p">)</span><span class="p">,</span><span class="nx">$httpClient</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span><span class="nx">t</span><span class="p">,</span><span class="p">(</span><span class="nx">t</span><span class="p">,</span><span class="nx">s</span><span class="p">,</span><span class="nx">i</span><span class="p">)</span><span class="p">=&gt;</span><span class="p">{</span><span class="o">!</span><span class="nx">t</span><span class="o">&amp;&amp;</span><span class="nx">s</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">s</span><span class="p">.</span><span class="nx">body</span><span class="o">=</span><span class="nx">i</span><span class="p">,</span><span class="nx">s</span><span class="p">.</span><span class="nx">statusCode</span><span class="o">=</span><span class="nx">s</span><span class="p">.</span><span class="nx">status</span><span class="p">)</span><span class="p">,</span><span class="nx">e</span><span class="p">(</span><span class="nx">t</span><span class="p">,</span><span class="nx">s</span><span class="p">,</span><span class="nx">i</span><span class="p">)</span><span class="p">}</span><span class="p">)</span><span class="p">)</span><span class="o">:</span><span class="k">this</span><span class="p">.</span><span class="nx">isQuanX</span><span class="p">(</span><span class="p">)</span><span class="o">?</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">isNeedRewrite</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">t</span><span class="p">.</span><span class="nx">opts</span><span class="o">=</span><span class="nx">t</span><span class="p">.</span><span class="nx">opts</span><span class="o">||</span><span class="p">{</span><span class="p">}</span><span class="p">,</span><span class="nb">Object</span><span class="p">.</span><span class="nx">assign</span><span class="p">(</span><span class="nx">t</span><span class="p">.</span><span class="nx">opts</span><span class="p">,</span><span class="p">{</span><span class="nx">hints</span><span class="o">:</span><span class="o">!</span><span class="mi">1</span><span class="p">}</span><span class="p">)</span><span class="p">)</span><span class="p">,</span><span class="nx">$task</span><span class="p">.</span><span class="nx">fetch</span><span class="p">(</span><span class="nx">t</span><span class="p">)</span><span class="p">.</span><span class="nx">then</span><span class="p">(</span><span class="nx">t</span><span class="p">=&gt;</span><span class="p">{</span><span class="kr">const</span><span class="p">{</span><span class="nx">statusCode</span><span class="o">:</span><span class="nx">s</span><span class="p">,</span><span class="nx">statusCode</span><span class="o">:</span><span class="nx">i</span><span class="p">,</span><span class="nx">headers</span><span class="o">:</span><span class="nx">r</span><span class="p">,</span><span class="nx">body</span><span class="o">:</span><span class="nx">o</span><span class="p">}</span><span class="o">=</span><span class="nx">t</span><span class="p">;</span><span class="nx">e</span><span class="p">(</span><span class="kc">null</span><span class="p">,</span><span class="p">{</span><span class="nx">status</span><span class="o">:</span><span class="nx">s</span><span class="p">,</span><span class="nx">statusCode</span><span class="o">:</span><span class="nx">i</span><span class="p">,</span><span class="nx">headers</span><span class="o">:</span><span class="nx">r</span><span class="p">,</span><span class="nx">body</span><span class="o">:</span><span class="nx">o</span><span class="p">}</span><span class="p">,</span><span class="nx">o</span><span class="p">)</span><span class="p">}</span><span class="p">,</span><span class="nx">t</span><span class="p">=&gt;</span><span class="nx">e</span><span class="p">(</span><span class="nx">t</span><span class="p">)</span><span class="p">)</span><span class="p">)</span><span class="o">:</span><span class="k">this</span><span class="p">.</span><span class="nx">isNode</span><span class="p">(</span><span class="p">)</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">initGotEnv</span><span class="p">(</span><span class="nx">t</span><span class="p">)</span><span class="p">,</span><span class="k">this</span><span class="p">.</span><span class="nx">got</span><span class="p">(</span><span class="nx">t</span><span class="p">)</span><span class="p">.</span><span class="nx">on</span><span class="p">(</span><span class="s2">&#34;redirect&#34;</span><span class="p">,</span><span class="p">(</span><span class="nx">t</span><span class="p">,</span><span class="nx">e</span><span class="p">)</span><span class="p">=&gt;</span><span class="p">{</span><span class="k">try</span><span class="p">{</span><span class="k">if</span><span class="p">(</span><span class="nx">t</span><span class="p">.</span><span class="nx">headers</span><span class="p">[</span><span class="s2">&#34;set-cookie&#34;</span><span class="p">]</span><span class="p">)</span><span class="p">{</span><span class="kr">const</span> <span class="nx">s</span><span class="o">=</span><span class="nx">t</span><span class="p">.</span><span class="nx">headers</span><span class="p">[</span><span class="s2">&#34;set-cookie&#34;</span><span class="p">]</span><span class="p">.</span><span class="nx">map</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">cktough</span><span class="p">.</span><span class="nx">Cookie</span><span class="p">.</span><span class="nx">parse</span><span class="p">)</span><span class="p">.</span><span class="nx">toString</span><span class="p">(</span><span class="p">)</span><span class="p">;</span><span class="nx">s</span><span class="o">&amp;&amp;</span><span class="k">this</span><span class="p">.</span><span class="nx">ckjar</span><span class="p">.</span><span class="nx">setCookieSync</span><span class="p">(</span><span class="nx">s</span><span class="p">,</span><span class="kc">null</span><span class="p">)</span><span class="p">,</span><span class="nx">e</span><span class="p">.</span><span class="nx">cookieJar</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">ckjar</span><span class="p">}</span><span class="p">}</span><span class="k">catch</span><span class="p">(</span><span class="nx">t</span><span class="p">)</span><span class="p">{</span><span class="k">this</span><span class="p">.</span><span class="nx">logErr</span><span class="p">(</span><span class="nx">t</span><span class="p">)</span><span class="p">}</span><span class="p">}</span><span class="p">)</span><span class="p">.</span><span class="nx">then</span><span class="p">(</span><span class="nx">t</span><span class="p">=&gt;</span><span class="p">{</span><span class="kr">const</span><span class="p">{</span><span class="nx">statusCode</span><span class="o">:</span><span class="nx">s</span><span class="p">,</span><span class="nx">statusCode</span><span class="o">:</span><span class="nx">i</span><span class="p">,</span><span class="nx">headers</span><span class="o">:</span><span class="nx">r</span><span class="p">,</span><span class="nx">body</span><span class="o">:</span><span class="nx">o</span><span class="p">}</span><span class="o">=</span><span class="nx">t</span><span class="p">;</span><span class="nx">e</span><span class="p">(</span><span class="kc">null</span><span class="p">,</span><span class="p">{</span><span class="nx">status</span><span class="o">:</span><span class="nx">s</span><span class="p">,</span><span class="nx">statusCode</span><span class="o">:</span><span class="nx">i</span><span class="p">,</span><span class="nx">headers</span><span class="o">:</span><span class="nx">r</span><span class="p">,</span><span class="nx">body</span><span class="o">:</span><span class="nx">o</span><span class="p">}</span><span class="p">,</span><span class="nx">o</span><span class="p">)</span><span class="p">}</span><span class="p">,</span><span class="nx">t</span><span class="p">=&gt;</span><span class="p">{</span><span class="kr">const</span><span class="p">{</span><span class="nx">message</span><span class="o">:</span><span class="nx">s</span><span class="p">,</span><span class="nx">response</span><span class="o">:</span><span class="nx">i</span><span class="p">}</span><span class="o">=</span><span class="nx">t</span><span class="p">;</span><span class="nx">e</span><span class="p">(</span><span class="nx">s</span><span class="p">,</span><span class="nx">i</span><span class="p">,</span><span class="nx">i</span><span class="o">&amp;&amp;</span><span class="nx">i</span><span class="p">.</span><span class="nx">body</span><span class="p">)</span><span class="p">}</span><span class="p">)</span><span class="p">)</span><span class="p">}</span><span class="nx">post</span><span class="p">(</span><span class="nx">t</span><span class="p">,</span><span class="nx">e</span><span class="o">=</span><span class="p">(</span><span class="p">(</span><span class="p">)</span><span class="p">=&gt;</span><span class="p">{</span><span class="p">}</span><span class="p">)</span><span class="p">)</span><span class="p">{</span><span class="k">if</span><span class="p">(</span><span class="nx">t</span><span class="p">.</span><span class="nx">body</span><span class="o">&amp;&amp;</span><span class="nx">t</span><span class="p">.</span><span class="nx">headers</span><span class="o">&amp;&amp;</span><span class="o">!</span><span class="nx">t</span><span class="p">.</span><span class="nx">headers</span><span class="p">[</span><span class="s2">&#34;Content-Type&#34;</span><span class="p">]</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">t</span><span class="p">.</span><span class="nx">headers</span><span class="p">[</span><span class="s2">&#34;Content-Type&#34;</span><span class="p">]</span><span class="o">=</span><span class="s2">&#34;application/x-www-form-urlencoded&#34;</span><span class="p">)</span><span class="p">,</span><span class="nx">t</span><span class="p">.</span><span class="nx">headers</span><span class="o">&amp;&amp;</span><span class="k">delete</span> <span class="nx">t</span><span class="p">.</span><span class="nx">headers</span><span class="p">[</span><span class="s2">&#34;Content-Length&#34;</span><span class="p">]</span><span class="p">,</span><span class="k">this</span><span class="p">.</span><span class="nx">isSurge</span><span class="p">(</span><span class="p">)</span><span class="o">||</span><span class="k">this</span><span class="p">.</span><span class="nx">isLoon</span><span class="p">(</span><span class="p">)</span><span class="p">)</span><span class="k">this</span><span class="p">.</span><span class="nx">isSurge</span><span class="p">(</span><span class="p">)</span><span class="o">&amp;&amp;</span><span class="k">this</span><span class="p">.</span><span class="nx">isNeedRewrite</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">t</span><span class="p">.</span><span class="nx">headers</span><span class="o">=</span><span class="nx">t</span><span class="p">.</span><span class="nx">headers</span><span class="o">||</span><span class="p">{</span><span class="p">}</span><span class="p">,</span><span class="nb">Object</span><span class="p">.</span><span class="nx">assign</span><span class="p">(</span><span class="nx">t</span><span class="p">.</span><span class="nx">headers</span><span class="p">,</span><span class="p">{</span><span class="s2">&#34;X-Surge-Skip-Scripting&#34;</span><span class="o">:</span><span class="o">!</span><span class="mi">1</span><span class="p">}</span><span class="p">)</span><span class="p">)</span><span class="p">,</span><span class="nx">$httpClient</span><span class="p">.</span><span class="nx">post</span><span class="p">(</span><span class="nx">t</span><span class="p">,</span><span class="p">(</span><span class="nx">t</span><span class="p">,</span><span class="nx">s</span><span class="p">,</span><span class="nx">i</span><span class="p">)</span><span class="p">=&gt;</span><span class="p">{</span><span class="o">!</span><span class="nx">t</span><span class="o">&amp;&amp;</span><span class="nx">s</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">s</span><span class="p">.</span><span class="nx">body</span><span class="o">=</span><span class="nx">i</span><span class="p">,</span><span class="nx">s</span><span class="p">.</span><span class="nx">statusCode</span><span class="o">=</span><span class="nx">s</span><span class="p">.</span><span class="nx">status</span><span class="p">)</span><span class="p">,</span><span class="nx">e</span><span class="p">(</span><span class="nx">t</span><span class="p">,</span><span class="nx">s</span><span class="p">,</span><span class="nx">i</span><span class="p">)</span><span class="p">}</span><span class="p">)</span><span class="p">;</span><span class="k">else</span> <span class="k">if</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">isQuanX</span><span class="p">(</span><span class="p">)</span><span class="p">)</span><span class="nx">t</span><span class="p">.</span><span class="nx">method</span><span class="o">=</span><span class="s2">&#34;POST&#34;</span><span class="p">,</span><span class="k">this</span><span class="p">.</span><span class="nx">isNeedRewrite</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">t</span><span class="p">.</span><span class="nx">opts</span><span class="o">=</span><span class="nx">t</span><span class="p">.</span><span class="nx">opts</span><span class="o">||</span><span class="p">{</span><span class="p">}</span><span class="p">,</span><span class="nb">Object</span><span class="p">.</span><span class="nx">assign</span><span class="p">(</span><span class="nx">t</span><span class="p">.</span><span class="nx">opts</span><span class="p">,</span><span class="p">{</span><span class="nx">hints</span><span class="o">:</span><span class="o">!</span><span class="mi">1</span><span class="p">}</span><span class="p">)</span><span class="p">)</span><span class="p">,</span><span class="nx">$task</span><span class="p">.</span><span class="nx">fetch</span><span class="p">(</span><span class="nx">t</span><span class="p">)</span><span class="p">.</span><span class="nx">then</span><span class="p">(</span><span class="nx">t</span><span class="p">=&gt;</span><span class="p">{</span><span class="kr">const</span><span class="p">{</span><span class="nx">statusCode</span><span class="o">:</span><span class="nx">s</span><span class="p">,</span><span class="nx">statusCode</span><span class="o">:</span><span class="nx">i</span><span class="p">,</span><span class="nx">headers</span><span class="o">:</span><span class="nx">r</span><span class="p">,</span><span class="nx">body</span><span class="o">:</span><span class="nx">o</span><span class="p">}</span><span class="o">=</span><span class="nx">t</span><span class="p">;</span><span class="nx">e</span><span class="p">(</span><span class="kc">null</span><span class="p">,</span><span class="p">{</span><span class="nx">status</span><span class="o">:</span><span class="nx">s</span><span class="p">,</span><span class="nx">statusCode</span><span class="o">:</span><span class="nx">i</span><span class="p">,</span><span class="nx">headers</span><span class="o">:</span><span class="nx">r</span><span class="p">,</span><span class="nx">body</span><span class="o">:</span><span class="nx">o</span><span class="p">}</span><span class="p">,</span><span class="nx">o</span><span class="p">)</span><span class="p">}</span><span class="p">,</span><span class="nx">t</span><span class="p">=&gt;</span><span class="nx">e</span><span class="p">(</span><span class="nx">t</span><span class="p">)</span><span class="p">)</span><span class="p">;</span><span class="k">else</span> <span class="k">if</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">isNode</span><span class="p">(</span><span class="p">)</span><span class="p">)</span><span class="p">{</span><span class="k">this</span><span class="p">.</span><span class="nx">initGotEnv</span><span class="p">(</span><span class="nx">t</span><span class="p">)</span><span class="p">;</span><span class="kr">const</span><span class="p">{</span><span class="nx">url</span><span class="o">:</span><span class="nx">s</span><span class="p">,</span><span class="p">...</span><span class="nx">i</span><span class="p">}</span><span class="o">=</span><span class="nx">t</span><span class="p">;</span><span class="k">this</span><span class="p">.</span><span class="nx">got</span><span class="p">.</span><span class="nx">post</span><span class="p">(</span><span class="nx">s</span><span class="p">,</span><span class="nx">i</span><span class="p">)</span><span class="p">.</span><span class="nx">then</span><span class="p">(</span><span class="nx">t</span><span class="p">=&gt;</span><span class="p">{</span><span class="kr">const</span><span class="p">{</span><span class="nx">statusCode</span><span class="o">:</span><span class="nx">s</span><span class="p">,</span><span class="nx">statusCode</span><span class="o">:</span><span class="nx">i</span><span class="p">,</span><span class="nx">headers</span><span class="o">:</span><span class="nx">r</span><span class="p">,</span><span class="nx">body</span><span class="o">:</span><span class="nx">o</span><span class="p">}</span><span class="o">=</span><span class="nx">t</span><span class="p">;</span><span class="nx">e</span><span class="p">(</span><span class="kc">null</span><span class="p">,</span><span class="p">{</span><span class="nx">status</span><span class="o">:</span><span class="nx">s</span><span class="p">,</span><span class="nx">statusCode</span><span class="o">:</span><span class="nx">i</span><span class="p">,</span><span class="nx">headers</span><span class="o">:</span><span class="nx">r</span><span class="p">,</span><span class="nx">body</span><span class="o">:</span><span class="nx">o</span><span class="p">}</span><span class="p">,</span><span class="nx">o</span><span class="p">)</span><span class="p">}</span><span class="p">,</span><span class="nx">t</span><span class="p">=&gt;</span><span class="p">{</span><span class="kr">const</span><span class="p">{</span><span class="nx">message</span><span class="o">:</span><span class="nx">s</span><span class="p">,</span><span class="nx">response</span><span class="o">:</span><span class="nx">i</span><span class="p">}</span><span class="o">=</span><span class="nx">t</span><span class="p">;</span><span class="nx">e</span><span class="p">(</span><span class="nx">s</span><span class="p">,</span><span class="nx">i</span><span class="p">,</span><span class="nx">i</span><span class="o">&amp;&amp;</span><span class="nx">i</span><span class="p">.</span><span class="nx">body</span><span class="p">)</span><span class="p">}</span><span class="p">)</span><span class="p">}</span><span class="p">}</span><span class="nx">time</span><span class="p">(</span><span class="nx">t</span><span class="p">,</span><span class="nx">e</span><span class="o">=</span><span class="kc">null</span><span class="p">)</span><span class="p">{</span><span class="kr">const</span> <span class="nx">s</span><span class="o">=</span><span class="nx">e</span><span class="o">?</span><span class="k">new</span> <span class="nb">Date</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span><span class="o">:</span><span class="k">new</span> <span class="nb">Date</span><span class="p">;</span><span class="kd">let</span> <span class="nx">i</span><span class="o">=</span><span class="p">{</span><span class="s2">&#34;M+&#34;</span><span class="o">:</span><span class="nx">s</span><span class="p">.</span><span class="nx">getMonth</span><span class="p">(</span><span class="p">)</span><span class="o">+</span><span class="mi">1</span><span class="p">,</span><span class="s2">&#34;d+&#34;</span><span class="o">:</span><span class="nx">s</span><span class="p">.</span><span class="nx">getDate</span><span class="p">(</span><span class="p">)</span><span class="p">,</span><span class="s2">&#34;H+&#34;</span><span class="o">:</span><span class="nx">s</span><span class="p">.</span><span class="nx">getHours</span><span class="p">(</span><span class="p">)</span><span class="p">,</span><span class="s2">&#34;m+&#34;</span><span class="o">:</span><span class="nx">s</span><span class="p">.</span><span class="nx">getMinutes</span><span class="p">(</span><span class="p">)</span><span class="p">,</span><span class="s2">&#34;s+&#34;</span><span class="o">:</span><span class="nx">s</span><span class="p">.</span><span class="nx">getSeconds</span><span class="p">(</span><span class="p">)</span><span class="p">,</span><span class="s2">&#34;q+&#34;</span><span class="o">:</span><span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">(</span><span class="p">(</span><span class="nx">s</span><span class="p">.</span><span class="nx">getMonth</span><span class="p">(</span><span class="p">)</span><span class="o">+</span><span class="mi">3</span><span class="p">)</span><span class="o">/</span><span class="mi">3</span><span class="p">)</span><span class="p">,</span><span class="nx">S</span><span class="o">:</span><span class="nx">s</span><span class="p">.</span><span class="nx">getMilliseconds</span><span class="p">(</span><span class="p">)</span><span class="p">}</span><span class="p">;</span><span class="sr">/(y+)/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">t</span><span class="p">)</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">t</span><span class="o">=</span><span class="nx">t</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nb">RegExp</span><span class="p">.</span><span class="nx">$1</span><span class="p">,</span><span class="p">(</span><span class="nx">s</span><span class="p">.</span><span class="nx">getFullYear</span><span class="p">(</span><span class="p">)</span><span class="o">+</span><span class="s2">&#34;&#34;</span><span class="p">)</span><span class="p">.</span><span class="nx">substr</span><span class="p">(</span><span class="mi">4</span><span class="o">-</span><span class="nb">RegExp</span><span class="p">.</span><span class="nx">$1</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span><span class="p">)</span><span class="p">)</span><span class="p">;</span><span class="k">for</span><span class="p">(</span><span class="kd">let</span> <span class="nx">e</span> <span class="k">in</span> <span class="nx">i</span><span class="p">)</span><span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span><span class="s2">&#34;(&#34;</span><span class="o">+</span><span class="nx">e</span><span class="o">+</span><span class="s2">&#34;)&#34;</span><span class="p">)</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">t</span><span class="p">)</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">t</span><span class="o">=</span><span class="nx">t</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nb">RegExp</span><span class="p">.</span><span class="nx">$1</span><span class="p">,</span><span class="mi">1</span><span class="o">==</span><span class="nb">RegExp</span><span class="p">.</span><span class="nx">$1</span><span class="p">.</span><span class="nx">length</span><span class="o">?</span><span class="nx">i</span><span class="p">[</span><span class="nx">e</span><span class="p">]</span><span class="o">:</span><span class="p">(</span><span class="s2">&#34;00&#34;</span><span class="o">+</span><span class="nx">i</span><span class="p">[</span><span class="nx">e</span><span class="p">]</span><span class="p">)</span><span class="p">.</span><span class="nx">substr</span><span class="p">(</span><span class="p">(</span><span class="s2">&#34;&#34;</span><span class="o">+</span><span class="nx">i</span><span class="p">[</span><span class="nx">e</span><span class="p">]</span><span class="p">)</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span><span class="p">)</span><span class="p">)</span><span class="p">;</span><span class="k">return</span> <span class="nx">t</span><span class="p">}</span><span class="nx">msg</span><span class="p">(</span><span class="nx">e</span><span class="o">=</span><span class="nx">t</span><span class="p">,</span><span class="nx">s</span><span class="o">=</span><span class="s2">&#34;&#34;</span><span class="p">,</span><span class="nx">i</span><span class="o">=</span><span class="s2">&#34;&#34;</span><span class="p">,</span><span class="nx">r</span><span class="p">)</span><span class="p">{</span><span class="kr">const</span> <span class="nx">o</span><span class="o">=</span><span class="nx">t</span><span class="p">=&gt;</span><span class="p">{</span><span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">t</span><span class="p">)</span><span class="k">return</span> <span class="nx">t</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="s2">&#34;string&#34;</span><span class="o">==</span><span class="k">typeof</span> <span class="nx">t</span><span class="p">)</span><span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">isLoon</span><span class="p">(</span><span class="p">)</span><span class="o">?</span><span class="nx">t</span><span class="o">:</span><span class="k">this</span><span class="p">.</span><span class="nx">isQuanX</span><span class="p">(</span><span class="p">)</span><span class="o">?</span><span class="p">{</span><span class="s2">&#34;open-url&#34;</span><span class="o">:</span><span class="nx">t</span><span class="p">}</span><span class="o">:</span><span class="k">this</span><span class="p">.</span><span class="nx">isSurge</span><span class="p">(</span><span class="p">)</span><span class="o">?</span><span class="p">{</span><span class="nx">url</span><span class="o">:</span><span class="nx">t</span><span class="p">}</span><span class="o">:</span><span class="k">void</span> <span class="mi">0</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="s2">&#34;object&#34;</span><span class="o">==</span><span class="k">typeof</span> <span class="nx">t</span><span class="p">)</span><span class="p">{</span><span class="k">if</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">isLoon</span><span class="p">(</span><span class="p">)</span><span class="p">)</span><span class="p">{</span><span class="kd">let</span> <span class="nx">e</span><span class="o">=</span><span class="nx">t</span><span class="p">.</span><span class="nx">openUrl</span><span class="o">||</span><span class="nx">t</span><span class="p">.</span><span class="nx">url</span><span class="o">||</span><span class="nx">t</span><span class="p">[</span><span class="s2">&#34;open-url&#34;</span><span class="p">]</span><span class="p">,</span><span class="nx">s</span><span class="o">=</span><span class="nx">t</span><span class="p">.</span><span class="nx">mediaUrl</span><span class="o">||</span><span class="nx">t</span><span class="p">[</span><span class="s2">&#34;media-url&#34;</span><span class="p">]</span><span class="p">;</span><span class="k">return</span><span class="p">{</span><span class="nx">openUrl</span><span class="o">:</span><span class="nx">e</span><span class="p">,</span><span class="nx">mediaUrl</span><span class="o">:</span><span class="nx">s</span><span class="p">}</span><span class="p">}</span><span class="k">if</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">isQuanX</span><span class="p">(</span><span class="p">)</span><span class="p">)</span><span class="p">{</span><span class="kd">let</span> <span class="nx">e</span><span class="o">=</span><span class="nx">t</span><span class="p">[</span><span class="s2">&#34;open-url&#34;</span><span class="p">]</span><span class="o">||</span><span class="nx">t</span><span class="p">.</span><span class="nx">url</span><span class="o">||</span><span class="nx">t</span><span class="p">.</span><span class="nx">openUrl</span><span class="p">,</span><span class="nx">s</span><span class="o">=</span><span class="nx">t</span><span class="p">[</span><span class="s2">&#34;media-url&#34;</span><span class="p">]</span><span class="o">||</span><span class="nx">t</span><span class="p">.</span><span class="nx">mediaUrl</span><span class="p">;</span><span class="k">return</span><span class="p">{</span><span class="s2">&#34;open-url&#34;</span><span class="o">:</span><span class="nx">e</span><span class="p">,</span><span class="s2">&#34;media-url&#34;</span><span class="o">:</span><span class="nx">s</span><span class="p">}</span><span class="p">}</span><span class="k">if</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">isSurge</span><span class="p">(</span><span class="p">)</span><span class="p">)</span><span class="p">{</span><span class="kd">let</span> <span class="nx">e</span><span class="o">=</span><span class="nx">t</span><span class="p">.</span><span class="nx">url</span><span class="o">||</span><span class="nx">t</span><span class="p">.</span><span class="nx">openUrl</span><span class="o">||</span><span class="nx">t</span><span class="p">[</span><span class="s2">&#34;open-url&#34;</span><span class="p">]</span><span class="p">;</span><span class="k">return</span><span class="p">{</span><span class="nx">url</span><span class="o">:</span><span class="nx">e</span><span class="p">}</span><span class="p">}</span><span class="p">}</span><span class="p">}</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">isMute</span><span class="o">||</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">isSurge</span><span class="p">(</span><span class="p">)</span><span class="o">||</span><span class="k">this</span><span class="p">.</span><span class="nx">isLoon</span><span class="p">(</span><span class="p">)</span><span class="o">?</span><span class="nx">$notification</span><span class="p">.</span><span class="nx">post</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span><span class="nx">s</span><span class="p">,</span><span class="nx">i</span><span class="p">,</span><span class="nx">o</span><span class="p">(</span><span class="nx">r</span><span class="p">)</span><span class="p">)</span><span class="o">:</span><span class="k">this</span><span class="p">.</span><span class="nx">isQuanX</span><span class="p">(</span><span class="p">)</span><span class="o">&amp;&amp;</span><span class="nx">$notify</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span><span class="nx">s</span><span class="p">,</span><span class="nx">i</span><span class="p">,</span><span class="nx">o</span><span class="p">(</span><span class="nx">r</span><span class="p">)</span><span class="p">)</span><span class="p">)</span><span class="p">,</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">isMuteLog</span><span class="p">)</span><span class="p">{</span><span class="kd">let</span> <span class="nx">t</span><span class="o">=</span><span class="p">[</span><span class="s2">&#34;&#34;</span><span class="p">,</span><span class="s2">&#34;==============📣系统通知📣==============&#34;</span><span class="p">]</span><span class="p">;</span><span class="nx">t</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span><span class="p">,</span><span class="nx">s</span><span class="o">&amp;&amp;</span><span class="nx">t</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">s</span><span class="p">)</span><span class="p">,</span><span class="nx">i</span><span class="o">&amp;&amp;</span><span class="nx">t</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">i</span><span class="p">)</span><span class="p">,</span><span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">t</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s2">&#34;\n&#34;</span><span class="p">)</span><span class="p">)</span><span class="p">,</span><span class="k">this</span><span class="p">.</span><span class="nx">logs</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">logs</span><span class="p">.</span><span class="nx">concat</span><span class="p">(</span><span class="nx">t</span><span class="p">)</span><span class="p">}</span><span class="p">}</span><span class="nx">log</span><span class="p">(</span><span class="p">...</span><span class="nx">t</span><span class="p">)</span><span class="p">{</span><span class="nx">t</span><span class="p">.</span><span class="nx">length</span><span class="o">&gt;</span><span class="mi">0</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">logs</span><span class="o">=</span><span class="p">[</span><span class="p">...</span><span class="k">this</span><span class="p">.</span><span class="nx">logs</span><span class="p">,</span><span class="p">...</span><span class="nx">t</span><span class="p">]</span><span class="p">)</span><span class="p">,</span><span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">t</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">logSeparator</span><span class="p">)</span><span class="p">)</span><span class="p">}</span><span class="nx">logErr</span><span class="p">(</span><span class="nx">t</span><span class="p">,</span><span class="nx">e</span><span class="p">)</span><span class="p">{</span><span class="kr">const</span> <span class="nx">s</span><span class="o">=</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">isSurge</span><span class="p">(</span><span class="p">)</span><span class="o">&amp;&amp;</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">isQuanX</span><span class="p">(</span><span class="p">)</span><span class="o">&amp;&amp;</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">isLoon</span><span class="p">(</span><span class="p">)</span><span class="p">;</span><span class="nx">s</span><span class="o">?</span><span class="k">this</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&#34;&#34;</span><span class="p">,</span><span class="sb">`</span><span class="sb">❗️</span><span class="si">${</span><span class="k">this</span><span class="p">.</span><span class="nx">name</span><span class="si">}</span><span class="sb">, 错误!</span><span class="sb">`</span><span class="p">,</span><span class="nx">t</span><span class="p">.</span><span class="nx">stack</span><span class="p">)</span><span class="o">:</span><span class="k">this</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&#34;&#34;</span><span class="p">,</span><span class="sb">`</span><span class="sb">❗️</span><span class="si">${</span><span class="k">this</span><span class="p">.</span><span class="nx">name</span><span class="si">}</span><span class="sb">, 错误!</span><span class="sb">`</span><span class="p">,</span><span class="nx">t</span><span class="p">)</span><span class="p">}</span><span class="nx">wait</span><span class="p">(</span><span class="nx">t</span><span class="p">)</span><span class="p">{</span><span class="k">return</span> <span class="k">new</span> <span class="nb">Promise</span><span class="p">(</span><span class="nx">e</span><span class="p">=&gt;</span><span class="nx">setTimeout</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span><span class="nx">t</span><span class="p">)</span><span class="p">)</span><span class="p">}</span><span class="nx">done</span><span class="p">(</span><span class="nx">t</span><span class="o">=</span><span class="p">{</span><span class="p">}</span><span class="p">)</span><span class="p">{</span><span class="kr">const</span> <span class="nx">e</span><span class="o">=</span><span class="p">(</span><span class="k">new</span> <span class="nb">Date</span><span class="p">)</span><span class="p">.</span><span class="nx">getTime</span><span class="p">(</span><span class="p">)</span><span class="p">,</span><span class="nx">s</span><span class="o">=</span><span class="p">(</span><span class="nx">e</span><span class="o">-</span><span class="k">this</span><span class="p">.</span><span class="nx">startTime</span><span class="p">)</span><span class="o">/</span><span class="mi">1</span><span class="nx">e3</span><span class="p">;</span><span class="k">this</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&#34;&#34;</span><span class="p">,</span><span class="sb">`</span><span class="sb">🔔</span><span class="si">${</span><span class="k">this</span><span class="p">.</span><span class="nx">name</span><span class="si">}</span><span class="sb">, 结束! 🕛 </span><span class="si">${</span><span class="nx">s</span><span class="si">}</span><span class="sb"> 秒</span><span class="sb">`</span><span class="p">)</span><span class="p">,</span><span class="k">this</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="p">)</span><span class="p">,</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">isSurge</span><span class="p">(</span><span class="p">)</span><span class="o">||</span><span class="k">this</span><span class="p">.</span><span class="nx">isQuanX</span><span class="p">(</span><span class="p">)</span><span class="o">||</span><span class="k">this</span><span class="p">.</span><span class="nx">isLoon</span><span class="p">(</span><span class="p">)</span><span class="p">)</span><span class="o">&amp;&amp;</span><span class="nx">$done</span><span class="p">(</span><span class="nx">t</span><span class="p">)</span><span class="p">}</span><span class="p">}</span><span class="p">(</span><span class="nx">t</span><span class="p">,</span><span class="nx">e</span><span class="p">)</span><span class="p">}</span>
</code>
							</td>
						</tr>
						
					</tbody>
				</table>
				<div class="code-view-menu-list ui fluid popup transition hidden">
					<div class="ui column relaxed equal height">
						<div class="column">
							<div class="ui link list">
								<a class="item ref-in-new-issue" href="/hopol/shuye72-Actions-JD/issues/new?body=https%3a%2f%2fgit.hopol.cn%2fhopol%2fshuye72-Actions-JD/src/commit/b20d70a3f2b3172befc21a62350fb7e722452025/jd_priceProtect.js">Reference in new issue</a>
							</div>
						</div>
					</div>
				</div>
				
			
		</div>
	</div>
</div>

<script>
function submitDeleteForm() {
    var message = prompt("delete_confirm_message\n\ndelete_commit_summary", "Delete ''");
    if (message != null) {
        $("#delete-message").val(message);
        $("#delete-file-form").submit()
    }
}
</script>

		
	</div>
</div>


	

	</div>

	

	<footer>
	<div class="ui container">
		<div class="ui left">
			Powered by Gitea Version: 1.15.0&#43;dev-65-g0bb8bd819 Page: <strong>144ms</strong> Template: <strong>11ms</strong>
		</div>
		<div class="ui right links">
			
			<div class="ui language bottom floating slide up dropdown link item">
				<svg viewBox="0 0 16 16" class="svg octicon-globe" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.543 7.25h2.733c.144-2.074.866-3.756 1.58-4.948.12-.197.237-.381.353-.552a6.506 6.506 0 0 0-4.666 5.5zm2.733 1.5H1.543a6.506 6.506 0 0 0 4.666 5.5 11.13 11.13 0 0 1-.352-.552c-.715-1.192-1.437-2.874-1.581-4.948zm1.504 0h4.44a9.637 9.637 0 0 1-1.363 4.177c-.306.51-.612.919-.857 1.215a9.978 9.978 0 0 1-.857-1.215A9.637 9.637 0 0 1 5.78 8.75zm4.44-1.5H5.78a9.637 9.637 0 0 1 1.363-4.177c.306-.51.612-.919.857-1.215.245.296.55.705.857 1.215A9.638 9.638 0 0 1 10.22 7.25zm1.504 1.5c-.144 2.074-.866 3.756-1.58 4.948-.12.197-.237.381-.353.552a6.506 6.506 0 0 0 4.666-5.5h-2.733zm2.733-1.5h-2.733c-.144-2.074-.866-3.756-1.58-4.948a11.738 11.738 0 0 0-.353-.552 6.506 6.506 0 0 1 4.666 5.5zM8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0z"/></svg>
				<div class="text">English</div>
				<div class="menu language-menu">
					
						<a lang="en-US" data-url="/?lang=en-US" class="item active selected">English</a>
					
						<a lang="zh-CN" data-url="/?lang=zh-CN" class="item ">简体中文</a>
					
						<a lang="zh-HK" data-url="/?lang=zh-HK" class="item ">繁體中文（香港）</a>
					
						<a lang="zh-TW" data-url="/?lang=zh-TW" class="item ">繁體中文（台灣）</a>
					
						<a lang="de-DE" data-url="/?lang=de-DE" class="item ">Deutsch</a>
					
						<a lang="fr-FR" data-url="/?lang=fr-FR" class="item ">français</a>
					
						<a lang="nl-NL" data-url="/?lang=nl-NL" class="item ">Nederlands</a>
					
						<a lang="lv-LV" data-url="/?lang=lv-LV" class="item ">latviešu</a>
					
						<a lang="ru-RU" data-url="/?lang=ru-RU" class="item ">русский</a>
					
						<a lang="uk-UA" data-url="/?lang=uk-UA" class="item ">Українська</a>
					
						<a lang="ja-JP" data-url="/?lang=ja-JP" class="item ">日本語</a>
					
						<a lang="es-ES" data-url="/?lang=es-ES" class="item ">español</a>
					
						<a lang="pt-BR" data-url="/?lang=pt-BR" class="item ">português do Brasil</a>
					
						<a lang="pt-PT" data-url="/?lang=pt-PT" class="item ">Português de Portugal</a>
					
						<a lang="pl-PL" data-url="/?lang=pl-PL" class="item ">polski</a>
					
						<a lang="bg-BG" data-url="/?lang=bg-BG" class="item ">български</a>
					
						<a lang="it-IT" data-url="/?lang=it-IT" class="item ">italiano</a>
					
						<a lang="fi-FI" data-url="/?lang=fi-FI" class="item ">suomi</a>
					
						<a lang="tr-TR" data-url="/?lang=tr-TR" class="item ">Türkçe</a>
					
						<a lang="cs-CZ" data-url="/?lang=cs-CZ" class="item ">čeština</a>
					
						<a lang="sr-SP" data-url="/?lang=sr-SP" class="item ">српски</a>
					
						<a lang="sv-SE" data-url="/?lang=sv-SE" class="item ">svenska</a>
					
						<a lang="ko-KR" data-url="/?lang=ko-KR" class="item ">한국어</a>
					
				</div>
			</div>
			<a href="/js/licenses.txt">Licenses</a>
			<a href="/api/swagger">API</a>
			<a target="_blank" rel="noopener noreferrer" href="https://gitea.io">Website</a>
			
			<span class="version">Go1.16.3</span>
		</div>
	</div>
</footer>






	<script src="/js/index.js?v=5180b6b6f1f6fefd5d36c88a1226f01d"></script>

</body>
</html>

