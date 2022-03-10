# Installing MongoDB 4.4 for Ubuntu 20.04 (Focal)

Run the following commands

```
sudo apt-get update -y
wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -
echo "deb http://repo.mongodb.org/apt/ubuntu focal/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.list
sudo apt-get update -y
sudo apt-get install -y mongodb-org
sudo systemctl start mongod
sudo systemctl enable mongod
sudo systemctl status mongod
mongod --version
```

![2022-02-19 23_01_38-Get Started - Visual Studio Code](https://user-images.githubusercontent.com/55657279/154808668-3200fdd4-de7a-4183-95ef-2ad59ae69ee4.png)

[Done!]
