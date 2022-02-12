# Installing Mosquitto

Run the following commands

```
 sudo apt-get install mosquitto -y
 sudo apt-get install mosquitto-clients -y
```

In order to check Mosquitto is running
```
sudo systemctl status mosquitto
```

Simple test by publishing "hello world" via "test" topic, terminal 1 should see the message
```
mosquitto_sub -h localhost -t test //terminal 1
mosquitto_pub -h localhost -t test -m "hello world" //terminal 2
```

![2022-02-12 20_08_11-Get Started - Visual Studio Code](https://user-images.githubusercontent.com/55657279/153712701-7aae30a6-35a5-4630-9a31-5228658cdbdf.png)


[Done]
