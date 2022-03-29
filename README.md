# ProtonMtests
Tests for folders and labels settings for ProtonMail Web client on Cypress

This repo contains the tests written in Cypress.

The tests are written to be directly compared from the ProtoMail webclient app

Each test covers the same functionality found in the settings page for Folder and Labels  utilizing the Cypress framework



The steps below will take you all the way through Cypress. It is assumed you have nothing installed except for node + git.

Before each tests case the following will be executed:

<img width="630" alt="Screenshot 2022-03-29 at 10 24 23" src="https://user-images.githubusercontent.com/102558006/160567552-e45ee21b-9cb1-4d1e-a6ec-9b45c91f072e.png">

With this the user will go to the specified URL on the cypress.json file as BaseUrl and execute a login with email and password specified on the script


User logged in and creates a folder and user creates a label. It is expectd with this that the folder as named was created along with the label.

<img width="719" alt="Screenshot 2022-03-29 at 10 26 04" src="https://user-images.githubusercontent.com/102558006/160567813-6099987a-9c90-478e-aab4-84ae3d4a3a7b.png">

On these scripts the user is expected to execute the beforEach, and create a folder without folder colors and without inhereting a parent

<img width="864" alt="Screenshot 2022-03-29 at 10 29 14" src="https://user-images.githubusercontent.com/102558006/160568411-cee60f3b-b2d7-4059-b8c7-fe9ff6e317ce.png">

It is expected that the folder is created without a parenting folder attached.

<img width="724" alt="Screenshot 2022-03-29 at 10 32 03" src="https://user-images.githubusercontent.com/102558006/160568973-58dd8d9f-759a-43f3-8f91-49447ceafa26.png">

Folder and label edits are done with these scripts while pressing the edit button and editing the name and saving the folder/label edited. It is expected that the name changed as detailed on the script.

On this script the delete feature for folders and labels is tested. It is expected that the record selected that contains the name on the script will be deleted.

<img width="956" alt="Screenshot 2022-03-29 at 10 34 55" src="https://user-images.githubusercontent.com/102558006/160569473-c2092436-40fd-40c9-98ec-f1be9ea335e3.png">


1. Install Cypress
Follow these instructions to install Cypress.

2. Fork this repo

## clone this repo to a local directory
git clone https://github.com/erodm09/ProtonMtests.git

## cd into the cloned repo
cd ProtonMtests

## install the node_modules
npm install


3. Add the project to Cypress
Follow these instructions to add the project to Cypress.
  
 
