# DWeb

> npm install -g dweb

A distributed data community.
DWeb is a nonprofit-backed community & open protocol for building apps of the future.

Use dWeb command line to share files with version control, back up data to servers, browse remote files on demand, and automate long-term data preservation.

[<img src="https://datproject.github.io/design/downloads/dweb-data-logo.png" align="right" width="140">][DWeb Project]

Have questions? Join our chat via IRC or Gitter:

[![#dweb IRC channel on freenode][irc-badge]][irc-channel]
[![datproject/discussions][gitter-badge]][gitter-chat]

### Table of Contents

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Using DWeb](#usage)
- [Troubleshooting](#troubleshooting)
- [Javascript API](#js-api)
- [For Developers](#for-developers)

## Installation

DWeb can be used as a command line tool or a javascript library:

* Install the `$ dweb` CLI to use in the command line.
* [require('dweb')][dwebs-core] - dwebs-core, a library for downloading and sharing dweb archives in javascript apps.

### Installing the `$ dweb` command line tool

The recommended way to install the DWeb command line tool is with `npm`:

```
npm install -g dweb
```

Make sure you have `node` and `npm` installed first. If not, see the prerequisites section below. We recommend `npm` because it makes it easy to install new versions of `dweb` when they get released.

Once `npm install` finishes, you should be able to run the `$ dweb` command. If not, see the [installation troubleshooting](#troubleshooting) for tips.

#### Installing without npm

If you are unable to use `npm` to install dweb, you can also download a single file binary distribution version of `dweb` using the one line install command below. The binary includes a copy of node and dweb packaged inside a single file, so you just have to download one file in order to start sharing data, with no other dependencies needed on your system:

```
wget -qO- https://raw.githubusercontent.com/distributedweb/dweb-climaster/download.sh | bash
```

#### NPM Prerequisites

* **Node**: You'll need to [install Node JS][install-node] before installing DWeb. DWeb needs `node` version 4 or above and `npm` installed. You can run `node -v` to check your version.
* **npm**: `npm` is installed with node. You can run `npm -v` to make sure it is installed.

Once you have `npm` ready, install `dweb` from npm with the `--global, -g` option, `npm install -g dweb`.

## Getting started

#### What is DWeb?

Share, backup, and publish your filesystem. You can turn any folder on your computer into a dweb. DWeb scans your folder, allowing you to:

* Track your files with automatic version history.
* Share files with others over a secure peer to peer network.
* Automate live backups to external HDs or remote servers.
* Publish and share files with built in HTTP server.

DWeb allows you to focus on the fun work without worrying about moving files around. **Secure**, **distributed**, **fast**.

* Documentation: [docs.dwebx.org](https://docs.dwebx.org)
* [DatBase](https://registry.dwebx.net)
* [DWeb white paper]

##### Other Applications

Rather not use the command line? Check out these options:

* [DWeb Desktop] - A desktop app to manage multiple dats on your desktop machine.
* [Beaker Browser] - An experimental p2p browser with built-in support for the DWeb protocol.

## dweb command line

Share, download, and backup files with the command line! Automatically sync changes to datasets. Never worry about manually transferring files again.

Mac/Linux      | Windows      | Version
-------------- | ------------ | ------------
[![Travis][travis-badge]][travis-build] | [![Build status][appveyor-badge]][appveyor-build] | [![NPM version][npm-badge]][npm-package]

Have questions or need some guidance?
You can [chat with us](http://chat.dwebx.org) in IRC on [#dweb][irc-channel] or [Gitter][gitter-chat]!

### JS Library

Add DWeb to your `package.json`, `npm install dweb --save`. DWeb exports the [dwebs-core] API via `require('dweb')`. Use it in your javascript applications! DWeb Desktop and DWeb command line both use dwebs-core to share and download dwebs.

Full API documentation is available in the [dwebs-core] repository on Github.

We have DWeb installed, let's use it!

DWeb's unique design works wherever you store your data. You can create a new dweb from any folder on your computer.

A dweb is some files from your computer and a `.dweb` folder. Each dweb has a unique `dweb://` link. With your dweb link, other users can download your files and live sync any updates.

### Sharing Data

You can start sharing your files with a single command. Unlike `git`, you do not have to initialize a repository first, `dweb share` will do that for you:

```
dweb share <dir>
```

Use `dweb share` to create a dweb and sync your files from your computer to other users. DWeb scans your files inside `<dir>`, creating metadata in `<dir>/.dweb`. DWeb stores the public link, version history, and file information inside the dweb folder.

![share-gif]

### Downloading Data

```
dweb clone dweb://<link> <download-dir>
```

Use `dweb clone` to download files from a remote computer sharing files with DWeb. This will download the files from `dweb://<link>` to your `<download-dir>`. The download exits after it completes but you can continue to update the files later after the clone is done. Use `dweb pull` to update new files or `dWeb archive synced` to live sync changes.

![clone-gif]

Try out `dweb clone` with the link above to read more about the protocol!

### Other Cool Commands

A few other highlights. Run `dweb help` to see the full usage guide.

* `dweb create` - Create an empty dWeb archive and `dweb.json` file.
* `dweb doctor` - DWeb network doctor! The doctor tries to connect to a public peer. The doctor also creates a key to test direct connections.
* `dweb log ~/data/dweb-folder/` or `dweb log dweb://<key>` - view the history and metadata information for a dweb.

### Quick Demos

To get started using DWeb, you can try downloading a dweb and then sharing a dweb of your own.

#### Download Demo

We made a demo folder just for this exercise. Inside the demo folder is a `dweb.json` file and a gif. We shared these files via DWeb and now you can download them with our dweb key!

Similar to git, you can download somebody's dweb by running `dweb clone <link>`. You can also specify the directory:

```
❯ dweb clone dweb://778f8d955175c92e4ced5e4f5563f69bfec0c86cc6f670352c457943666fe639 ~/Downloads/dweb-demo
dweb v13.5.0
Created new dWeb archive in /Users/joe/Downloads/dweb-demo/.dweb
Cloning: 2 files (1.4 MB)

2 connections | Download 614 KB/s Upload 0 B/s

dWeb archive synced complete.
Version 4
```

This will download our demo files to the `~/Downloads/dweb-demo` folder. These files are being shared by a server over DWeb (to ensure high availability) but you may connect to any number of users also hosting the content.

You can also also view the files online: [registry.dwebx.net/778f8d955175c92e4ced5e4f5563f69bfec0c86cc6f670352c457943666fe639](https://registry.dwebx.net/778f8d955175c92e4ced5e4f5563f69bfec0c86cc6f670352c457943666fe639/). registry.dwebx.net can download files over DWeb and display them on HTTP as long as someone is hosting it. The website temporarily caches data for any visited links (do not view your dweb on registry.dwebx.net if you do not want us to cache your data).

#### Sharing Demo

DWeb can share files from your computer to anywhere. If you have a friend going through this demo with you, try sharing to them! If not we'll see what we can do.

Find a folder on your computer to share. Inside the folder can be anything, DWeb can handle all sorts of files (DWeb works with really big folders too!).

First, you can create a new dweb inside that folder. Using the `dweb create` command also walks us through making a `dweb.json` file:

```
❯ dweb create
Welcome to dweb program!
You can turn any folder on your computer into a dWeb archive.
A dWeb archive is a folder with some magic.
```

This will create a new (empty) dweb. DWeb will print a link, share this link to give others access to view your files.

Once we have our dweb, run `dweb share` to scan your files and sync them to the network. Share the link with your friend to instantly start downloading files.

You can also try viewing your files online. Go to [registry.dwebx.net](https://registry.dwebx.net) and enter your link to preview on the top left. *(Some users, including me when writing this, may have trouble connecting to registry.dwebx.net initially. Don't be alarmed! It is something we are working on. Thanks.)*

#### Bonus HTTP Demo

DWeb makes it really easy to share live files on a HTTP server. This is a cool demo because we can also see how version history works! Serve dweb files on HTTP with the `--http` option. For example, `dWeb archive synced --http`, serves your files to a HTTP website with live reloading and version history! This even works for dats you're downloading (add the `--sparse` option to only download files you select via HTTP). The default HTTP port is 8080.

*Hint: Use `localhost:8080/?version=10` to view a specific version.*

Get started using DWeb today with the `share` and `clone` commands or read below for more details.

## Usage

The first time you run a command, a `.dweb` folder is created to store the dWeb metadata.
Once a dweb is created, you can run all the commands inside that folder, similar to git.

DWeb keeps secret keys in the `~/.dweb/secret_keys` folder. These are required to write to any dats you create.

#### Creating a dweb & dweb.json

```
dweb create [<dir>]
```

The create command prompts you to make a `dweb.json` file and creates a new dweb. Import the files with sync or share.

Optionally bypass Title and Description prompt:

```sh
dweb create --title "MY BITS" --description "are ready to synchronize! 😎"
```

Optionally bypass `dweb.json` creation:

```sh
dweb create --yes
dweb create -y
```

### Sharing

The quickest way to get started sharing files is to `share`:

```
❯ dweb share
dweb://3e830227b4b2be197679ff1b573cc85e689f202c0884eb8bdb0e1fcecbd93119
Sharing dweb: 24 files (383 MB)

0 connections | Download 0 B/s Upload 0 B/s

Importing 528 files to Archive (165 MB/s)
[=-----------------------------------------] 3%
ADD: data/expn_cd.csv (403 MB / 920 MB)
```

#### Syncing to Network

```
dWeb archive synced [<dir>] [--no-import] [--no-watch]
```

Start sharing your dweb archive over the network.
Sync will import new or updated files since you last ran `create` or `sync`.
Sync watches files for changes and imports updated files.

* Use `--no-import` to not import any new or updated files.
* Use `--no-watch` to not watch directory for changes. `--import` must be true for `--watch` to work.

#### Ignoring Files

By default, DWeb will ignore any files in a `.datignore` file, similar to git. Each file should be separated by a newline. DWeb also ignores all hidden folders and files.

DWeb uses [dweb-ignore] to decide if a file should be ignored. Supports pattern wildcards (`/*.png`) and directory-wildcards (`/**/cache`).

#### Selecting Files

By default, DWeb will download all files. If you want to only download a subset, you can create a `.dwebdownload` file which downloads only the files and folders specified. Each should be separated by a newline.


### Downloading

Start downloading by running the `clone` command. This creates a folder, downloads the content and metadata, and a `.dweb` folder inside. Once you started the download, you can resume using `clone` or the other download commands.

```
dweb clone <link> [<dir>] [--temp]
```

Clone a remote dweb archive to a local folder.
This will create a folder with the key name if no folder is specified.

#### Downloading via `dweb.json` key

You can use a `dweb.json` file to clone also. This is useful when combining DWeb and git, for example. To clone a dweb you can specify the path to a folder containing a `dweb.json`:

```
git clone git@github.com:joehand/dweb-clone-sparse-test.git
dweb clone ./dweb-clone-sparse-test
```

This will download the dweb specified in the `dweb.json` file.

#### Updating Downloaded Archives

Once a dweb is clone, you can run either `dweb pull` or `dWeb archive synced` in the folder to update the archive.

```
dweb pull [<dir>]
```

Update a cloned dweb archive with the latest files and exit.

```
dWeb archive synced [<dir>]
```

Download latest files and keep connection open to continue updating as remote source is updated.

### Shortcut commands

* `dweb <link> <dir>` will run `dweb clone` for new dats or resume the existing dWeb archive in `<dir>`
* `dweb <dir>` is the same as running `dWeb archive synced <dir>`

### DWeb Registry and Authentication

As part of our [Knight Foundation grant], we are building a registry for dweb archives.
We will be running a dweb registry at registry.dwebx.net, but anyone will be able to create their own.
Once registered, you will be able to publish dweb archives from our registry.
Anyone can clone archives published to a registry without registration:

```
dweb clone registry.dwebx.net/jhand/cli-demo
```

#### Auth (experimental)

You can also use the `dweb` command line to register and publish to dweb registries. DWeb plans to support any registry. Currently, `registry.dwebx.net` is the only one available and the default.

To register and login you can use the following commands:

```
dweb register [<registry>]
dweb login
dweb whoami
```

Once you are logged in to a registry, you can publish a dWeb archive archive:

```
cd my-data
dweb create
dweb publish --name my-dataset
```

All registry requests take the `<registry>` option if you'd like to publish to a different registry than registry.dwebx.net.
You can deploy your own compatible [registry server] if you'd rather use your own service.

### Key Management & Moving dats

`dweb keys` provides a few commands to help you move or backup your dwebs.

Writing to a dweb requires the secret key, stored in the `~/.dweb` folder. You can export and import these keys between dwebs. First, clone your dweb to the new location:

* (original) `dweb share`
* (duplicate) `dweb clone <link>`

Then transfer the secret key:

* (original) `dweb keys export` - copy the secret key printed out.
* (duplicate) `dweb keys import` - this will prompt you for the secret key, paste it in here.

## Troubleshooting

We've provided some troubleshooting tips based on issues users have seen.
Please [open an issue][new-issue] or ask us in our [chat room][gitter-chat] if you need help troubleshooting and it is not covered here.

If you have trouble sharing/downloading in a directory with a `.dweb` folder, try deleting it and running the command again.

#### Check Your dWeb Version

Knowing the version is really helpful if you run into any bugs, and will help us troubleshoot your issue.

Check your DWeb version:

```
dweb -v
```

You should see the DWeb semantic version printed, e.g. `13.1.2`.

### Installation Issues

#### Node & npm

To use the DWeb command line tool you will need to have [node and npm installed][install-node-npm].
Make sure those are installed correctly before installing DWeb.
You can check the version of each:

```
node -v
npm -v
```

#### Global Install

The `-g` option installs DWeb globally, allowing you to run it as a command.
Make sure you installed with that option.

* If you receive an `EACCES` error, read [this guide][fixing-npm-permissions] on fixing npm permissions.
* If you receive an `EACCES` error, you may also install DWeb with sudo: `sudo npm install -g dweb`.
* Have other installation issues? Let us know, you can [open an issue][new-issue] or ask us in our [chat room][gitter-chat].

### Debugging Output

If you are having trouble with a specific command, run with the debug environment variable set to `dweb` (and optionally also `dwebs-core`).
This will help us debug any issues:

```
DEBUG=dweb,dwebs-core dweb clone dweb://<link> dir
```

### Networking Issues

Networking capabilities vary widely with each computer, network, and configuration.
Whenever you run DWeb there are several steps to share or download files with peers:

1. Discovering Peers
2. Connecting to Peers
3. Sending & Receiving Data

With successful use, DWeb will show `Connected to 1 peer` after connection.
If you never see a peer connected, your network may be restricting discovery or connection.
Please try using the `dweb --doctor` command (see below) between the two computers not connecting. This will help troubleshoot the networks.

* DWeb may [have issues][dweb#503] connecting if you are using iptables.

#### DWeb Doctor

We've included a tool to identify network issues with DWeb, the DWeb doctor.
The DWeb doctor will run two tests:

1. Attempt to connect to a public server running a DWeb peer.
2. Attempt a direct connection between two peers. You will need to run the command on both the computers you are trying to share data between.

Start the doctor by running:

```
dweb doctor
```

For direct connection tests, the doctor will print out a command to run on the other computer, `dweb doctor <64-character-string>`.
The doctor will run through the key steps in the process of sharing data between computers to help identify the issue.

---

## JS API

You can use dWeb in your javascript application:

```js
var DWeb = require('dweb')

DWeb('/data', function (err, dweb) {
  // use dweb
})
```

**[Read more][dwebs-core] about the JS usage provided via `dwebs-core`.**

## For Developers

Please see [guidelines on contributing] before submitting an issue or PR.

This command line library uses [dwebs-core] to create and manage the archives and networking.
If you'd like to build your own DWeb application that is compatible with this command line tool, we suggest using dwebs-core.

### Installing from source

Clone this repository and in a terminal inside of the folder you cloned run this command:

```
npm link
```

This should add a `dweb` command line command to your PATH.
Now you can run the `dweb` command to try it out.

The contribution guide also has more tips on our [development workflow].

* `npm run test` to run tests
* `npm run auth-server` to run a local auth server for testing

## License

BSD-3-Clause

[DWeb Project]: https://dwebx.org
[Code for Science & Society]: https://codeforscience.org
[DWeb white paper]: https://github.com/datproject/docs/blob/master/papers/dweb-paper.pdf
[DWeb Desktop]: https://docs.dwebx.org/install#desktop-application
[Beaker Browser]: https://dbrowser.com
[registry server]: https://github.com/datproject/datbase
[share-gif]: https://raw.githubusercontent.com/datproject/docs/master/assets/cli-share.gif
[clone-gif]: https://raw.githubusercontent.com/datproject/docs/master/assets/cli-clone.gif
[Knight Foundation grant]: https://blog.dwebx.org/2016/02/01/announcing-publicbits-org/
[dwebs-core]: https://github.com/datproject/dwebs-core
[dweb-ignore]: https://github.com/joehand/dweb-ignore
[new-issue]: https://github.com/distributedweb/dweb-cliissues/new
[dweb#503]: https://github.com/distributedweb/dweb-cliissues/503
[install-node]: https://nodejs.org/en/download/
[install-node-npm]: https://docs.npmjs.com/getting-started/installing-node
[fixing-npm-permissions]: https://docs.npmjs.com/getting-started/fixing-npm-permissions
[guidelines on contributing]: https://github.com/distributedweb/dweb-cliblob/master/CONTRIBUTING.md
[development workflow]: https://github.com/distributedweb/dweb-cliblob/master/CONTRIBUTING.md#development-workflow
[travis-badge]: https://travis-ci.org/datproject/dweb.svg?branch=master
[travis-build]: https://travis-ci.org/datproject/dweb
[appveyor-badge]: https://ci.appveyor.com/api/projects/status/github/datproject/dweb?branch=master&svg=true
[appveyor-build]: https://ci.appveyor.com/project/joehand/dweb/branch/master
[npm-badge]: https://img.shields.io/npm/v/dweb.svg
[npm-package]: https://npmjs.org/package/dweb
[irc-badge]: https://img.shields.io/badge/irc%20channel-%23dat%20on%20freenode-blue.svg
[irc-channel]: https://webchat.freenode.net/?channels=dweb
[gitter-badge]: https://badges.gitter.im/Join%20Chat.svg
[gitter-chat]: https://gitter.im/datproject/discussions
