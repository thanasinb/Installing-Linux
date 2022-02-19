# Creating a NodeJS project with Mosquitto 
## Create a project directory

Open Ubuntu directory by clicking `Open Folder`

![2022-02-17 23_09_53-Window](https://user-images.githubusercontent.com/55657279/154522356-2fe907a0-dc80-4363-a922-bde5b2f6724b.png)

Click `OK`

![2022-02-17 23_12_31-Window](https://user-images.githubusercontent.com/55657279/154522836-c644d1e9-c9e2-4ff6-bc23-62a85d7404e9.png)

Enter password

![2022-02-17 23_20_11-Window](https://user-images.githubusercontent.com/55657279/154524483-68ab2d52-9eb5-46d2-b666-c060bc3846a9.png)

Create a new project directory `mqtt_01` and install Mosquitto driver using the following commands
```
mkdir mqtt_01
cd mqtt_01
npm install mqtt --save
```

![2022-02-19 12_35_58-mqtt js - demo  SSH_ 192 168 1 115  - Visual Studio Code](https://user-images.githubusercontent.com/55657279/154787912-8c1cc5ea-ab49-4992-bbc0-b48b1fc36510.png)

Try a simple `Hello script`
```
console.log('Hello World');
```

Run the above script by running the following command
```
node mqtt.js
```

The result should look like this

![2022-02-19 12_44_05-mqtt js - demo  SSH_ 192 168 1 115  - Visual Studio Code](https://user-images.githubusercontent.com/55657279/154788242-2858d123-7831-4e92-bd4e-21004fcf7f67.png)

[Next >>](1.md)
