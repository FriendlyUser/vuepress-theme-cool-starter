// .vuepress/config.js
// missing markdownItAds boostnote admonitions
const fs = require('fs')
const path = require('path')
const util = require('util')

module.exports = {
  base: 'https://friendlyuser.github.io/vuepress-theme-cool-starter/',
  theme: 'cool',
  //dest: 'dist',
  head: [
    ['link', { rel: 'icon', href: '/faviconCustom.ico' }],
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css' }],
	['link', {href: 'https://fonts.googleapis.com/icon?family=Material+Icons', rel :'stylesheet'}]
  ],
  plugins: [ 
    '@vuepress/last-updated',
    '@vuepress/back-to-top',
    '@vuepress/pwa'
   ],
  themeConfig: {
    logo: './myAvatar.png',
    sidebar: true,
    sidebarDepth: 2,
    displayAllHeaders: true, // Default: false
    nav:  genNavBarList(),
    // consider making this sidebar generation completely automatic, but would I prefer to make some control over titling and selected folders that are displayed.   
    // The first and the last string need to match in the sidebar.
    sidebar: { 
      '/TaskList/': genSideBarConfigFolder('Task List','/TaskList/'),
      '/ReadingList/': genSideBarConfigFolder('Reading List','/ReadingList/'),
      '/Test/': genSideBarConfigFolder('Epic Test','/Test/')
    },
    sidebarDepth: 2,
    lastUpdated: 'Last Updated', // string | boolean
    // Assumes GitHub. Can also be a full GitLab url.
    repo: 'FriendlyUser/vuepress-theme-cool-starter',
    // Customising the header label
    // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
    repoLabel: 'Contribute!',
    // Optional options for generating "Edit this page" link
    // if your docs are in a different repo from your main project:
    //docsRepo: 'FriendlyUser/markdown-notes-template',
    // if your docs are not at the root of the repo:
    //docsDir: 'docs',
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: 'gh-pages',
    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: 'Help us improve this page!'

  },
  title: 'Vuepress Theme Cool Starter',
  description: 'Example project to get started with the vuepress-theme-cool',
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': '../img'
      }
    }
  },
  plugins: {
    '@vuepress/pwa': { serviceWorker: true,
      updatePopup: {
        message: "New content is available.",
        buttonText: "Refresh"
      }
    }
  },
  markdown: {
    extendMarkdown: md => {
      md.set({ html: true })
      md.use(require('markdown-it-katex'))
      md.use(require('markdown-it-plantuml'))
      md.use(require('markdown-it-admonition'))
      md.use(require('markdown-it-task-lists'))
    }
  }
}


// Helper functions
function fromDir(startPath,filter,callback){
  
    //console.log('Starting from dir '+startPath+'/');
    if (!fs.existsSync(startPath)){
        console.log("no dir ",startPath);
        return;
    }

    var files=fs.readdirSync(startPath);
    for(var i=0;i<files.length;i++){
        var filename=path.join(startPath,files[i]);
        var stat = fs.lstatSync(filename);
        if (stat.isDirectory()){
            fromDir(filename,filter,callback); //recurse
        }
        else if (filter.test(filename)) callback(filename);
    };
};

function getDirectories(path) {
  return fs.readdirSync(path).filter(function (file) {
    if (file != '.vuepress') {
        return fs.statSync(path+'/'+file).isDirectory();
    }
  });
}

function getFilesInDir(directoryName) {
    var files = []
    // sidebar settings
    const relPath = path.join('docs', directoryName)
    fromDir(relPath,/\.md$/,function(filename){
        console.log('-- found: ',filename);
        files.push(filename)
    });
    return files
}

// Base file names with removed file extensions
function getFilesInDirBase(directoryName) {
    var files = []
    // sidebar settings
    const relPath = path.join('docs', directoryName)
    fromDir(relPath,/\.md$/,function(filename){
        let baseName = path.basename(filename)
        // this it will fail on files without extension, see https://stackoverflow.com/questions/4250364/how-to-trim-a-file-extension-from-a-string-in-javascript
        baseName = baseName.split('.').slice(0, -1).join('.')
        
        // Add README as '', and everything else as standard
        if (baseName.toUpperCase() == 'README') {
            files.push('')
        }
        else {
            files.push(baseName)
        }
    });

    return files
}

// pass in the folder relative to the folder docs
function genSideBarConfigFolder (titleName,directoryName) {
    const rawFilePaths = getFilesInDirBase(directoryName)
    return [
        {
            title: titleName,
            collapsable: true,
            children: rawFilePaths
        }
    ]
}

// doesn't work, fix later, can't figure out how to generate { text: link:} recursively? Or maybe have another function that returns text: link 
 function genNavBarList() {
    const dirNames = getDirectories('docs')
    // navbar settings
    let navBarNames = [];
    
    navBarNames.push(genNavBarItem('Home','/'))
    console.log(navBarNames)
    var numOfDirs = dirNames.length;
    for (var i = 0; i < numOfDirs; i++) {
        // not last entry
        let stringValue = dirNames[i].toString()
        let linkValue = '/'+stringValue+'/'
        console.log(stringValue)
        
        // @todo change loop to iterate for nested directories
        if (true) {
            navBarNames.push(genNavBarItem(stringValue,linkValue))
        }
        // last entry 
        else {
            //navBarNames = navBarNames + "{ text : \'" + stringValue + "\', " + "link: " + "\'/" + stringValue + "/\'}, \n";
        }
    }
    fs.writeFile("docs/.vuepress/configNavbarDirAuto.txt", util.inspect(navBarNames, {depth: null}), function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("navbar list directory file is saved.");
}); 
    return  navBarNames
    
}

function genNavBarItem(textValue, linkValue) {
    return {
        text: textValue,
        link: linkValue
    }
}