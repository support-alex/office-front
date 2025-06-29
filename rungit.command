

eval "$(ssh-agent -s)"

ssh-add ~/.ssh/bitbucket_key


sudo chmod -R 777 /Users/belliecee/Documents/00_Bisinnoco/Bisinnoco/office-front


echo "Enter the message for git commit : "

read  cm

sudo git add .

sudo git commit -m "$cm"

sudo git push

