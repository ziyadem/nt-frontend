git --version

git config --global user.name "{{name}}"
git config --global user.email "{{email}}"

git init

git status

git add {{filename}}

git add .

git commit -m "{{message}}"

git remote add origin {{URL}}

git push origin master
