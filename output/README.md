## Output:

Home page
![home](https://github.com/Antons-SIH/Antons-Client-React/assets/81025790/e8046220-f94e-4e73-b9d0-76000b55d9a8) <br/>
Display of documents we can upload to verify
![1](https://github.com/Antons-SIH/Antons-Client-React/assets/81025790/93e93b53-d0a8-4f70-8fd2-c06b6a9f7636) <br/>
Upload adhar or pan with instruction about image features
![2](https://github.com/Antons-SIH/Antons-Client-React/assets/81025790/7219f6f3-b133-4597-a1af-7e5108705a1f) <br/>
After verifying check status of document uploaded
![3](https://github.com/Antons-SIH/Antons-Client-React/assets/81025790/ddb64ce7-bd79-49f1-b6a8-222ac264ca75) <br/>

## Setup
```
git clone https://github.com/Antons-SIH/Antons-Client-React.git
```
```
cd Antons-Client-React
```
```
npm i
npm start
```


## Points to remember while testing the app

1. Allow **permissions** for camera and mic
2. In case any **user is not verified** it is probably due to ml model training time, **REFRESH** the window to solve this. 
3. Make sure the **URL** is starting with https
4. While doing **face verification** make sure no one else is present in the background. 
5. While testing for **OTP** service, allow permissions for **notifications**, and **REFRESH** the page for changes to take effect. 
6. Wait for the request to send by admin user, and check for **notifications in mail box** 
