

sudo docker build . -f Dockerfile -t office:17

sudo docker service update  --image office:17 office

# sudo docker service create --name office -d -p 8077:80 office:1

# sudo docker run --name alex_admin_19   --restart always  -d -p 8089:80 alex-admin:19


