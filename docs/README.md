# How to write docs

## Finding the file

Browse through the above files inside either

- [doc](https://github.com/gomegaminds/docs/tree/main/docs/docs) folder
- [hub](https://github.com/gomegaminds/docs/tree/main/docs/hub) folder

They correspond to Documentation and Teacher Hub.


## Editing a file

Once you find the article you want to edit, click the Edit button:

![image](https://user-images.githubusercontent.com/28685654/195853765-e49ab195-45b7-47ca-9d2f-4cd1793b911e.png)

In the Edit window, you can make the changes that you need.

For a complete list of formatting tools for markdown, check out [this page](https://www.markdownguide.org/cheat-sheet/)

![image](https://user-images.githubusercontent.com/28685654/195853908-959fcbba-2722-4357-8e54-b81a6e7ee137.png)


## Saving a change

Once you are done changing the document, you can commit the changes directly to the documentation, or propose changes.

Proposing changes is the ideal way to do it, because Vercel (our deployment platform) will test that the changes can be committed without error, Github will make sure there are not conflicting versions (for example when two people are working on one document), and getting a review from another person generally leads to better content. If there is something that needs to be hotfixed asap, or something like a smaller change, you can committ directly to the main branch.


![image](https://user-images.githubusercontent.com/28685654/195864338-d7ff0386-6bc9-41c2-8155-cb47f7cf4dfd.png)


## Merge a proposal

You or someone made a proposal ("pull request") instead of committing changes directly into the live website.

A "pull request" is a complicated word for "please can I make my changes part of the live website". "Merge a pull request" is a fancy word for "make these changes part of the live website"

Underneath you can see an image of a pull request page on Github. 

The file I am trying to change has been tested and approved by Vercel (and also set up a new page where I can preview the changes). 

However this pull request has conflicts, likely because I made it a while ago and there are new changes to the file I am trying to edit. So I need to fix those conflicts before being able to click "Merge pull request". Usually this is rare.

If someone assigns you as a reviewer, please try to check and merge as soon as possible. Stale pull requests are potentially painful. :)

![image](https://user-images.githubusercontent.com/28685654/195865312-65ca9600-bbe8-4927-b2a7-3f9bba9586f8.png)

